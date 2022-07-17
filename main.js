const checkExist = setInterval(() => {
    let title = document.querySelector("title");

    if (title != null) {
      function callback(mutations) {
          const pathname = window.location.pathname;
          if (
            window.location.href.includes("beta") &&
            window.location.href.includes("details")
          )
            replaceButton(pathname);
          replaceLink(pathname);
      }
      let observer = new MutationObserver(callback);
      let config = {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      };

      observer.observe(title, config);
        clearInterval(checkExist);
    };
}, 500);

window.onload = (() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });
})();


function replaceLink(pathname) {
  // Flathub
  const flathubInstallButton = document.querySelector("[download]");
  if (pathname.includes("/details/"))
    flathubInstallButton.href = "appstream:" + pathname.split("/")[3];

  // Apps GNOME
  const appsGnomeInstallButton = document.querySelector("a.text-button");
  const occurrences = (pathname.match(/\//g) || []).length;
  const app =
    occurrences == 4 ? pathname.split("/")[3] : pathname.split("/")[2];
  if (pathname.includes("/app/"))
    appsGnomeInstallButton.href = "appstream:" + app;
}

function replaceButton(pathname) {
  // Flathub beta
  let oldButton = document.querySelectorAll("button")[0];
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


