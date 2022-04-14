# <sub><img src="other/promotion/icon/flatline-128.png" width=64px height=64px></sub> Flatline

#### Open apps directly in GNOME Software by clicking Install from Flathub and apps.gnome.

[<img src="other/promotion/badges/firefox.png" alt="for Firefox">](https://addons.mozilla.org/firefox/addon/flatline-flatpak/)

<img src="other/promotion/screenshots/example.gif" width="640px">

### Load the extension in Firefox

1. Clone the repository
2. Open Firefox browser and navigate to `about:debugging`
3. Click "Load Temporary Add-on" and from the file browser, choose `manifest.json`

### Support
- [x] Flathub
- [x] Apps GNOME
- [ ] AppCenter

## The Why

To facilitate the installation process of Flatpak applications through the websites flathub.org and app.gnome.org, I created this simple extension that, through appstream, opens GNOME Software directly in the app's details panel.

## Requirements

- It is necessary to have [Flatpak](https://github.com/flatpak/flatpak) installed
- [Flathub repositories are required](https://www.flatpak.org/setup/)
- You must have [GNOME Software](https://apps.gnome.org/app/org.gnome.Software/) installed

## Limitations

Flatline basically uses appstream to tell GNOME Software which app to show, but I still haven't found a way or know if it's possible to tell GS which repository to focus on.
If you use distributions that focus heavily on using Flatpaks like Fedora Silverblue, you won't notice this.
Choose Flathub repository on the upper left side.



## Special thanks

I want to thank [Lains](https://github.com/lainsce) for taking the trouble to create such a cool icon, thanks also to Nahuel for bringing the idea to the table.


Use GNOME Web aka Epiphany? [Also check this extension](https://github.com/GNOME-Web-Extensions/Flatline) (WIP)
