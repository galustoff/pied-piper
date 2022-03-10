import HidingElement from "./HidingElement.js";

export default class HeaderButton extends HidingElement {
    constructor(container, selector, action) {
        super(container, selector);
        this._action = action;
    }

    show() {
        super.show();
        this._element.addEventListener("mousedown", this._action);
    }

    hide() {
        super.hide();
        this._element.removeEventListener("mousedown", this._action);
    }
}
