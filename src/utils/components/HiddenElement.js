import { hiddenClass } from "../constants.js";

export class HiddenElement {
    constructor(selector) {
        this._element = document.querySelector(selector);
        this._hiddenClass = hiddenClass;
    }

    show() {
        this._element.classList.remove(this._hiddenClass);
    }

    hide() {
        this._element.classList.add(this._hiddenClass);
    }
}
