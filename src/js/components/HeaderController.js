import { headerConfig } from "../utils/constants.js";
import { setOffsetBell, toggleClassName } from "../utils/utils.js";

export class HeaderController {
    constructor() {
        this._wrapper = document.querySelector(headerConfig.wrapperSelector);
        this._checkPoint = headerConfig.checkpoint;
        this._dynamicClass = headerConfig.dynamicClass;
        this._callBack = toggleClassName(this._wrapper, this._dynamicClass);
    }

    start() {
        if (window.scrollY > this._checkPoint) {
            this._wrapper.classList.add(this._dynamicClass);
        }

        window.addEventListener('scroll', setOffsetBell(this._checkPoint, this._callBack));
    }
}