/**
 * Greenie Vietnam - Site Configuration
 * ========================================
 * MỌI URL TUYỆT ĐỐI (canonical, Open Graph, Twitter card, Schema.org)
 * ĐỀU ĐƯỢC SINH RA TỪ FILE NÀY.
 * 
 * KHI ĐỔI DOMAIN: CHỈ CẦN SỬA DÒNG siteDomain BÊN DƯỚI.
 * ========================================
 */

(function () {
  // ============================================================
  // ★ CHỈ CẦN SỬA DÒNG NÀY KHI ĐỔI DOMAIN ★
  // ============================================================
  const siteDomain = "greenievietnam.live";

  // ============================================================
  // CÁC BIẾN DẪN XUẤT (KHÔNG CẦN SỬA)
  // ============================================================
  const baseURL = "https://" + siteDomain;
  const wwwBaseURL = "https://www." + siteDomain;
  const siteEmail = "sales@" + siteDomain;
  const siteName = "Greenie Vietnam";
  const ogImagePath = "/og-cover.jpg"; // relative path

  // ============================================================
  // Ghi đè meta tags, canonical, hreflang VỚI domain hiện tại
  // ============================================================
  function applyDomain() {
    const currentDomain = baseURL; // hoặc wwwBaseURL tùy bạn chọn
    const pagePath = window.location.pathname;
    const fullPageURL = currentDomain + pagePath;

    // ----- canonical -----
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = fullPageURL;
    }

    // ----- hreflang -----
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(function (link) {
      var hreflang = link.getAttribute("hreflang");
      if (hreflang === "zh") {
        link.href = currentDomain + "/?lang=zh";
      } else if (hreflang === "hi") {
        link.href = currentDomain + "/?lang=hi";
      } else if (hreflang === "en" || hreflang === "x-default") {
        link.href = currentDomain + "/";
      }
    });

    // ----- Open Graph -----
    var ogURL = document.querySelector('meta[property="og:url"]');
    if (ogURL) {
      ogURL.content = fullPageURL;
    }
    var ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.content = currentDomain + ogImagePath;
    }

    // ----- Twitter Card -----
    var twImage = document.querySelector('meta[name="twitter:image"], meta[property="twitter:image"]');
    if (twImage) {
      twImage.content = currentDomain + ogImagePath;
    }
    var twURL = document.querySelector('meta[name="twitter:url"], meta[property="twitter:url"]');
    if (twURL) {
      twURL.content = fullPageURL;
    }

    // ----- Schema.org (JSON-LD) -----
    var schemas = document.querySelectorAll('script[type="application/ld+json"]');
    schemas.forEach(function (script) {
      try {
        var data = JSON.parse(script.textContent);
        var changed = false;
        // Hàm đệ quy thay domain
        function replaceDomain(obj) {
          if (typeof obj === "string") {
            return obj
              .replace(/https?:\/\/www\.greenievietnam\.live/g, currentDomain)
              .replace(/https?:\/\/greenievietnam\.live/g, currentDomain);
          }
          if (Array.isArray(obj)) {
            return obj.map(replaceDomain);
          }
          if (obj && typeof obj === "object") {
            var newObj = {};
            for (var k in obj) {
              newObj[k] = replaceDomain(obj[k]);
            }
            return newObj;
          }
          return obj;
        }
        var newData = replaceDomain(data);
        script.textContent = JSON.stringify(newData);
      } catch (e) {
        // bỏ qua nếu JSON không hợp lệ
      }
    });

    // ----- Email trong mailto: -----
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
      var href = a.getAttribute("href");
      if (href && href.includes("@greenievietnam")) {
        a.href = "mailto:" + siteEmail;
        if (a.textContent.trim().includes("@greenievietnam")) {
          a.textContent = siteEmail;
        }
      }
    });
  }

  // Chạy ngay khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyDomain);
  } else {
    applyDomain();
  }

  // ============================================================
  // Export ra global để các script khác dùng nếu cần
  // ============================================================
  window.GreenieConfig = {
    domain: siteDomain,
    baseURL: baseURL,
    wwwBaseURL: wwwBaseURL,
    email: siteEmail,
    siteName: siteName,
    ogImagePath: ogImagePath,
    currentPageURL: function () {
      return baseURL + window.location.pathname;
    },
  };
})();