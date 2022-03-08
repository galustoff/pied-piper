import { hiddenClass } from "../constants.js";

export class HiddenElement {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }

    show() {
        this._element.classList.remove(hiddenClass);
    }

    hide() {
        this._element.classList.add(hiddenClass);
    }
}
