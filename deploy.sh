#!/bin/bash
set -e

echo "=== 1. Extracting application code ==="
mkdir -p ~/greenie
tar -xzf ~/greenie.tar.gz -C ~/greenie
rm -f ~/greenie.tar.gz

echo "=== 2. Installing Node.js, Nginx & Certbot ==="
sudo apt-get update
sudo apt-get install -y curl gnupg git build-essential certbot python3-certbot-nginx
# Install NodeSource Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx

echo "=== 3. Installing PM2 and dependencies ==="
sudo npm install -g pm2
cd ~/greenie
npm install

echo "=== 4. Setting up PM2 and running the app ==="
# Check if config.json exists, if not the server will create it automatically
pm2 delete greenie-app || true
pm2 start server.js --name "greenie-app"
pm2 save

echo "=== 4.5. Checking Ghost Blog (Self-hosted) ==="
if curl -s http://localhost:2368 > /dev/null; then
    echo "Ghost is already running on port 2368!"
else
    echo "WARNING: Ghost is NOT running on port 2368."
    echo "To run Ghost using Docker, execute these commands on the server:"
    echo "  sudo apt-get install -y docker.io"
    echo "  docker run -d --name greenie-ghost \\"
    echo "    -e url=https://greenievietnam.biz.vn/blog \\"
    echo "    -p 2368:2368 \\"
    echo "    -v ~/ghost-content:/var/lib/ghost/content \\"
    echo "    --restart always \\"
    echo "    ghost:alpine"
fi

echo "=== 5. Configuring Nginx reverse proxy ==="
sudo tee /etc/nginx/sites-available/default > /dev/null <<'EOF'
server {
    listen 80;
    server_name greenievietnam.biz.vn www.greenievietnam.biz.vn 140.245.60.235;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        client_max_body_size 20M;
    }

    location /blog {
        proxy_pass http://localhost:2368;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        client_max_body_size 50M;
    }
}
EOF

echo "=== 6. Restarting Nginx ==="
sudo systemctl restart nginx

echo "=== 7. Configuring firewall rules (iptables & ufw) ==="
# Open port 80 and 443 on Ubuntu (Oracle VM standard firewall rules)
if sudo iptables -L INPUT --line-numbers | grep -q "reject-with icmp-host-prohibited"; then
    # Insert rules before the reject rule
    REJECT_LINE=$(sudo iptables -L INPUT --line-numbers | grep "reject-with icmp-host-prohibited" | head -n 1 | awk '{print $1}')
    if [ ! -z "$REJECT_LINE" ]; then
        sudo iptables -I INPUT $REJECT_LINE -p tcp --dport 80 -j ACCEPT
        sudo iptables -I INPUT $REJECT_LINE -p tcp --dport 443 -j ACCEPT
    else
        sudo iptables -I INPUT 6 -p tcp --dport 80 -j ACCEPT
        sudo iptables -I INPUT 6 -p tcp --dport 443 -j ACCEPT
    fi
else
    sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
fi

sudo netfilter-persistent save || true

# If UFW is installed, allow HTTP/HTTPS traffic
if command -v ufw >/dev/null; then
    sudo ufw allow 80/tcp || true
    sudo ufw allow 443/tcp || true
fi

echo "=== 8. Provisioning SSL via Certbot (HTTPS) ==="
# Automate Let's Encrypt SSL certificate generation and Nginx config update
sudo certbot --nginx -d greenievietnam.biz.vn -d www.greenievietnam.biz.vn --non-interactive --agree-tos -m hello@greenievietnam.biz.vn || true

echo "=== Deployment Completed Successfully ==="
echo "Access the website securely at: https://greenievietnam.biz.vn/"
