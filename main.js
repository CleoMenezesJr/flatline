const checkExist = setInterval(() => {
  let title = document.querySelector("title");

  if (title != null) {
    function callback(mutations) {
      const url = new URL(window.location);
      const pathname = url.pathname;

      if (url.hostname === "beta.flathub.org")
        replaceFlathubBetaButton(pathname);
      else if (url.hostname === "flathub.org") replaceFlathubLink(pathname);
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

function replaceFlathubLink(pathname) {
  const flathubInstallButton = document.querySelector("[download]");
  if (pathname.includes("/details/"))
    flathubInstallButton.href = "appstream:" + pathname.split("/")[3];
}

function replaceFlathubBetaButton(pathname) {
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

  let newButton = oldButton.cloneNode(true);
  const occurrences = (pathname.match(/\//g) || []).length;
  const app =
    occurrences == 3 ? pathname.split("/")[3] : pathname.split("/")[2];

  if (newButton.id != "customInstallButton") {
    newButton.id = "customInstallButton";
    newButton.onclick = () => (window.location = "appstream:" + app);

    oldButton.parentNode.replaceChild(newButton, oldButton);
  }
}

function replaceAppCenterLink(pathname) {
  document.querySelectorAll("a").forEach((el) => {
    if (el.innerText == "Download as Flatpak") {
      el.href = "appstream:" + pathname;
    }
  });
}
