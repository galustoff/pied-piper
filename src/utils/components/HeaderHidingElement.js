import { headerConfig } from "../constants.js";

export default class HeaderHidingElement {
    constructor(container, selector) {
        this._element = container.querySelector(selector);
        this._hidingClass = headerConfig.hidingClass;
    }

    show() {
        this._element.classList.remove(this._hidingClass);
    }

    hide() {
        this._element.classList.add(this._hidingClass);
    }
}
