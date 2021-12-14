import { headerConfig } from "../utils/constants.js";
import { getOffsetHandler, toggleClassName } from "../utils/utils.js";

export class HeaderController {
    constructor() {
        this._wrapper = document.querySelector(headerConfig.wrapperSelector);
        this._smoothClass = headerConfig.smoothClass;
        this._callBack = toggleClassName(this._wrapper, this._smoothClass);
        this._offsetHandler = getOffsetHandler(headerConfig.headerHeight, this._callBack);
    }

    start() {
        if (window.scrollY > headerConfig.headerHeight)
            this._wrapper.classList.add(this._smoothClass);
        
        window.addEventListener('scroll', this._offsetHandler);
    }
}