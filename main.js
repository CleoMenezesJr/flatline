const checkExist = setInterval(() => {
  let title = document.querySelector("title");

  if (title != null) {
    function callback(mutations) {
      const url = new URL(window.location);
      const pathname = url.pathname;

      if (url.hostname === "beta.flathub.org")
        replaceFlathubBetaButton(pathname);
      else if (url.hostname === "flathub.org")
        replaceFlathubLink(pathname);
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
  let oldButton = document.querySelectorAll("button")[1];
  let newButton = oldButton.cloneNode(true);
  const occurrences = (pathname.match(/\//g) || []).length;
  const app =
    occurrences == 4 ? pathname.split("/")[4] : pathname.split("/")[3];

  if (newButton.id != "installButton") {
    newButton.id = "installButton";
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
