/**
 * Greenie Vietnam - Site Configuration
 */

(function () {
  const siteDomain = "greenievietnam.biz.vn";
  const baseURL = "https://" + siteDomain;
  const wwwBaseURL = "https://www." + siteDomain;
  const siteEmail = "hello@" + siteDomain;
  const siteName = "Greenie Vietnam";
  const ogImagePath = "/img/hero-macro-tea.webp"; 

  function applyDomain() {
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyDomain);
  } else {
    applyDomain();
  }

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