const checkLoadPage = setInterval(() => {
    const pathname = window.location.pathname;

    replaceLink(pathname)
}, 300);

function replaceLink(pathname) {
    const flathubInstallButton = document.querySelector("[download]")
    if (pathname.includes("/details/")) flathubInstallButton.href = "appstream://" + pathname.split("/")[3];

    const appsGnomeInstallButton =  document.querySelector("a.text-button")
    if (pathname.includes("/app/")) appsGnomeInstallButton.href = "appstream://" + pathname.split("/")[3];
};

