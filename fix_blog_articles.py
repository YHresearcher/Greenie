import os

base = r'blog'
files = [
    'vietnamese-qualified-cashews/index.html',
    'vietnamese-ancient-tea/index.html',
    'vietnamese-artisanal-cane-sugar/index.html'
]

for fname in files:
    path = os.path.join(base, fname)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    original = content
    
    # 1. Remove Samples nav link from desktop nav
    content = content.replace(
        '<a href="/#samples" class="nav-link">Samples</a> <a href="/#inquiry" class="nav-link">Inquiry</a>',
        '<a href="/#inquiry" class="nav-link">Inquiry</a>'
    )
    
    # 2. Remove Samples from mobile nav
    content = content.replace(
        '<a href="/#samples" class="mobile-link">Samples</a> <a href="/#inquiry" class="mobile-link">Inquiry</a>',
        '<a href="/#inquiry" class="mobile-link">Inquiry</a>'
    )
    
    # 3. Remove Request Samples button from article CTA box
    content = content.replace(
        ' <a href="/#samples" class="btn-secondary">Request Samples</a>',
        ''
    )
    
    # 4. Remove Request Samples from footer
    content = content.replace(
        '<a href="/#inquiry">Send Inquiry</a> <a href="/#samples">Request Samples</a>',
        '<a href="/#inquiry">Send Inquiry</a>'
    )
    
    if content != original:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(content)
        print(f'Fixed: {path}')
    else:
        print(f'No changes: {path}')