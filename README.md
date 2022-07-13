# <sub><img src="other/promotion/icon/flatline-128.png" height=50px></sub> Flatline
##### Select apps directly from your favorite software center by clicking Install from Flathub or apps.gnome.

## Installation
#### Firefox Based Browsers
[<img src="other/promotion/badges/firefox.png" alt="for Firefox">](https://addons.mozilla.org/firefox/addon/flatline-flatpak/) <br>

#### Chromium Based Browsers
1. Download [this file](https://github.com/CleoMenezesJr/flatline/archive/refs/heads/main.zip).
2. Extract the zip file
3. Open your browser's extension manager
4. Activate developer mode
5. Load the extension with the option "Load unpacked"


## The Why

Flatline was created to facilitate the installation process of Flatpak applications from the websites flathub.org and app.gnome.org.

## Support
- [x] Flathub
- [x] Flathub
- [x] Apps GNOME
- [ ] AppCenter


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

I want to thank [Lains](https://github.com/lainsce) for taking the trouble to create such a cool icon, thanks also to Nahuel for bringing the idea to the table.


Use GNOME Web aka Epiphany? [It just works!](https://wiki.gnome.org/Cleo%20Menezes%20Jr./WebExtensions)
