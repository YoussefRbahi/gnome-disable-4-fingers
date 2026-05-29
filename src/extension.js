import Clutter from 'gi://Clutter';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class DisableFourFingerGesturesExtension extends Extension {
    enable() {
        this._eventId = global.stage.connectObject('captured-event', (actor, event) => {
            if (event.type() === Clutter.EventType.TOUCHPAD_SWIPE) {
                if (event.get_touchpad_gesture_finger_count() === 4) {
                    return Clutter.EVENT_STOP; 
                }
            }
            return Clutter.EVENT_PROPAGATE; 
        }, this);
    }

    disable() {
        global.stage.disconnectObject(this);
    }
}
