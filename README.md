# <sub><img src="icons/flatline-128.png" height=50px></sub> Flatline
##### Select apps directly from your favorite software center by clicking Install from Flathub, apps.gnome and AppCenter.

## Installation
[<img src="other/promotion/badges/firefox.png" alt="for Firefox">](https://addons.mozilla.org/firefox/addon/flatline-flatpak/)
[<img src="other/promotion/badges/chrome.png" alt="for Chrome" height=60px>](https://chrome.google.com/webstore/detail/flatline/cpbniogoilfagmcoipghkgnpmdglfmjm/) <br>

##### Epiphany (GNOME Web)

- Enable Web Extensions (This feature is experimental)
> flatpak run --command=gsettings org.gnome.Epiphany set org.gnome.Epiphany.web:/org/gnome/epiphany/web/ enable-webextensions true
- Open Preferences > Extensions
- Click on add new extension and choose the latest release .zip file that you previously downloaded
<br>

## The Why

Flatline was created to facilitate the installation process of Flatpak applications from the websites flathub.org, app.gnome.org and appcenter.elementary.io.

## Support
- [x] [Flathub](https://flathub.org/)
- [x] [Flathub Beta](https://beta.flathub.org/)
- [x] [Apps GNOME](https://apps.gnome.org/)
- [x] [AppCenter](https://appcenter.elementary.io/)


## Requirements

- [Flatpak](https://github.com/flatpak/flatpak) installed.
- [Flathub](https://www.flatpak.org/setup/) and/or other Flatpak repository.
- [GNOME Software](https://apps.gnome.org/app/org.gnome.Software/) or any software center with Flatpak support.

## Donations
[<img src="other/promotion/badges/donate_paypal.svg" height=29px alt="Paypal donation">](https://www.paypal.com/donate/?hosted_button_id=7KDCH44AMMCS2)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P2DSC5F)

## Known Limitations

Flatline basically uses AppStream to tell GNOME Software (or any software center with Flatpak support) which app to show, however there is no way to specify which repository to show.
When opening it will be necessary to manually choose the repository.
If you use distributions that focus heavily on using Flatpaks like Fedora Silverblue, you won't notice this.

## Development

1. Clone the repository
2. Open Firefox browser and navigate to `about:debugging`
3. Click "Load Temporary Add-on" and from the file browser, choose `manifest.json`



## Special thanks

I want to thank [Lains](https://github.com/lainsce) for taking the trouble to create such a cool icon, thanks also to [Nahuel](https://github.com/nahuelwexd) for bringing the idea to the table.
