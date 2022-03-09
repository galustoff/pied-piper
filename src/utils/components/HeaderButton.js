import { HiddenElement } from "./HiddenElement.js";

export class HeaderButton extends HiddenElement {
    constructor(selector, eventName) {
        super(selector);
        this._eventName = eventName;
        this._navList = document.querySelector(".header__nav");
    }

    show() {
        super.show();
        this._element.addEventListener("mousedown", this._handleClick);
    }

    hide() {
        let event = new Event(eventName, { bubbles: true });

        this._element.removeEventListener("mousedown", this._handleClick);
        super.hide();
        this._element.dispatchEvent(event);
    }

    _handleClick() {
        this._navList.classList.toggle(this._hiddenClass);
        this.hide();
    }
}
