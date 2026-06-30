/**
 * Greenie Vietnam - Site Configuration
 */

(function () {
  const siteDomain = "greenievietnam.biz.vn";
  const baseURL = "https://" + siteDomain;
  const wwwBaseURL = "https://www." + siteDomain;
  const siteEmail = "sales@" + siteDomain;
  const siteName = "Greenie Vietnam";
  const ogImagePath = "/img/hero-macro-tea.png"; 

  function applyDomain() {
    const currentDomain = baseURL;
    const pagePath = window.location.pathname;
    const fullPageURL = currentDomain + pagePath;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = fullPageURL;
    }

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