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
        window.addEventListener('scroll', setOffsetBell(this._checkPoint, this._callBack));
    }
}