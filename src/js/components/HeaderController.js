import { setOffsetBell, toggleClassName } from "../utils/utils.js";

export class HeaderController {
    constructor() {
        this._wrapper = document.querySelector('.header-block__header-wrapper');
        this._smoothClass = 'header-block__header-wrapper_smooth-slide',
        this._callBack = toggleClassName(this._wrapper, this._smoothClass),
        this._offsetBell = setOffsetBell(84, this._callBack);
    }

    start() {
        if (window.scrollY > 84)
            this._wrapper.classList.add(this._smoothClass);
        
        window.addEventListener('scroll', this._offsetBell);
    }
}