import HeaderHidingElement from "./HeaderHidingElement.js";

export default class HeaderNav extends HeaderHidingElement {
    constructor(container, selector, callback) {
        super(container, selector);
        this._cb = callback;
    }

    show() {
        super.show();
        this._element.addEventListener("click", this._cb);
    }

    hide() {
        super.hide();
        this._element.removeEventListener("click", this._cb);
    }
}
