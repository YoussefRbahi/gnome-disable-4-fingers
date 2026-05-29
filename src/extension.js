import Clutter from 'gi://Clutter';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class DisableFourFingerExtension extends Extension {
    enable() {
        this._eventId = global.stage.connect('captured-event', (actor, event) => {
            if (event.type() === Clutter.EventType.TOUCHPAD_SWIPE) {
                if (event.get_touchpad_gesture_finger_count() === 4) {
                    return Clutter.EVENT_STOP; 
                }
            }
            return Clutter.EVENT_PROPAGATE; 
        });
    }

    disable() {
        if (this._eventId) {
            global.stage.disconnect(this._eventId);
            this._eventId = null;
        }
    }
}
