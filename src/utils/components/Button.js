import { HiddenElement } from "./HiddenElement.js";

export class Button extends HiddenElement {
    constructor(selector, event, action) {
        super(selector);
        this._event = event;
        this._action = action;
    }

    show() {
        super.show();
        this._element.addEventListener(this._event, this._action);
    }

    hide() {
        this._element.removeEventListener(this._event, this._action);
        super.hide();
    }
}
