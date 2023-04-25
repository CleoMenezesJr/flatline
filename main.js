const checkExist = setInterval(() => {
  let title = document.querySelector("title");

  if (title != null) {
    function callback(mutations) {
      const url = new URL(window.location);
      const pathname = url.pathname;

      if (url.hostname === "flathub.org") replaceFlathubButton(pathname);
      else if (url.hostname === "apps.gnome.org")
        replaceAppsGnomeLink(pathname);
      else if (url.hostname === "appcenter.elementary.io")
        replaceAppCenterLink(pathname);
    }
    let observer = new MutationObserver(callback);
    let config = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    };

    observer.observe(title, config);
    clearInterval(checkExist);
    callback();
  }
}, 500);

function replaceAppsGnomeLink(pathname) {
  const appsGnomeInstallButton = document.querySelector("a.text-button");
  const occurrences = (pathname.match(/\//g) || []).length;
  const app =
    occurrences == 4 ? pathname.split("/")[3] : pathname.split("/")[2];
  if (pathname.includes("/app/"))
    appsGnomeInstallButton.href = "appstream:" + app;
}

function replaceFlathubButton(pathname) {
  const languageButtonsLabel = {
    id: "Pasang",
    "pt-BR": "Instalar",
    ca: "Instal·lar",
    cs: "Nainstalovat",
    de: "Installieren",
    // "et" needs website translation
    es: "Instalar",
    eo: "Instali",
    fr: "Installer",
    hr: "Instaliraj",
    it: "Installa",
    lt: "Įdiegti",
    hu: "Telepítés",
    nl: "Installeren",
    // "nb-NO" needs website translation
    pl: "Zainstaluj",
    pt: "Instalar",
    fi: "Asenna",
    vi: "Cài đặt",
    tr: "Kur",
    // "el" needs website translation
    be: "Усталяваць",
    bg: "Инсталиране",
    ru: "Установить",
    uk: "Установити",
    ar: "ثبِّت",
    fa: "نصب",
    // "hi" needs website translation
    bn: "ইনস্টল করুন",
    ta: "நிறுவவும்",
    si: "ස්ථාපනය",
    ja: "インストール",
    "zh-Hans": "安装",
    "zh-Hant": "安裝",
  };
  let currentLanguage;

  for (let key in languageButtonsLabel) {
    if (pathname.includes(`/${key}/`)) {
      currentLanguage = key;
    }
  }

  let oldButton = document
    .evaluate(
      `//*[text()="${languageButtonsLabel[currentLanguage] || "Install"}"]`,
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
    )
    .snapshotItem(0);

  if (oldButton) {
    let newButton = oldButton.cloneNode(true);

    if (newButton.id != "customInstallButton") {
      newButton.id = "customInstallButton";
      newButton.removeAttribute("href");
      newButton.href =
        "appstream:" +
        oldButton.href.split("/").pop().replace(".flatpakref", "");
      oldButton.parentNode.replaceChild(newButton, oldButton);
    }
  }
}

function replaceAppCenterLink(pathname) {
  document.querySelectorAll("a").forEach((el) => {
    if (el.innerText == "Download as Flatpak") {
      el.href = "appstream:" + pathname;
    }
  });
}
