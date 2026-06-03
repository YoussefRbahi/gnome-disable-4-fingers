# Disable 4-Finger Swipes on GNOME

On modern GNOME Wayland sessions, the Mutter compositor hardcodes both 3-finger and 4-finger swipes to workspace switching. This prevents external gesture mappers (like [Fusuma](https://github.com/iberianpig/fusuma) or libinput-gestures) from utilizing 4-finger gestures.

This lightweight extension hooks into `global.stage` to intercept and drop 4-finger swipe events *before* GNOME processes them. 

### What it does:
* **4-Finger Swipes:** Ignored by GNOME, freeing them up completely for custom bindings in Fusuma.
* **3-Finger Swipes:** Passed through normally (retaining native GNOME workspace switching).

### Installation
1. Download the release `.zip` or install directly from [GNOME Shell Extensions](https://extensions.gnome.org/extension/10059/disable-4-finger-gestures/).
2. Enable the extension via the GNOME Extensions app.
