import { hidingClass } from "../constants.js";

export class HidingElement {
    constructor(selector) {
        this._element = document.querySelector(selector);
        this._hidingClass = hidingClass;
    }

    show() {
        this._element.classList.remove(this._hidingClass);
    }

    hide() {
        this._element.classList.add(this._hidingClass);
    }
}
