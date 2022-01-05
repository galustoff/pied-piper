import { headerConfig } from "../utils/constants.js";

export class Header {
    constructor() {
        this._header = document.querySelector(headerConfig.headerSel);
        this._nav = this._header.querySelector(`.${headerConfig.navClass}`);
        this._delimiters = Array.from(this._header.querySelectorAll(`.${headerConfig.delimiterClass}`));
        this._logo = this._header.querySelector(`.${headerConfig.logoClass}`);
        this._burgerBtn = this._header.querySelector(`.${headerConfig.burgerBtnClass}`);
        this._closeBtn = this._header.querySelector(`.${headerConfig.closeBtnClass}`);
    }

    init() {
        this._setHandlers();
    }

    _setHandlers() {
        this._burgerBtn.addEventListener("click", () => {
            this._showMenu();
        });

        this._closeBtn.addEventListener("click", () => {
            this._hideMenu();
        });
    }

    _showMenu() {
        this._hideBurger();
        this._hideLogo();
        this._showLinks();
        this._showCloseBtn();
    }

    _hideMenu() {
        this._hideCloseBtn();
        this._hideLinks();
        this._showLogo();
        this._showBurger();
    }

    _showBurger() {
        this._burgerBtn.classList.remove(headerConfig.hidingClass);
    }

    _hideBurger() {
        this._burgerBtn.classList.add(headerConfig.hidingClass);
    }    

    _showLinks() {
        this._delimiters.forEach((e) =>
            e.classList.add(headerConfig.hidingClass)
        );
    }

    _hideLinks() {
        this._delimiters.forEach((e) =>
            e.classList.remove(headerConfig.hidingClass)
        );
    }

    _showLogo() {
        this._logo.classList.remove(headerConfig.hidingClass);
    }

    _hideLogo() {
        this._logo.classList.add(headerConfig.hidingClass);
    }

    _showCloseBtn() {
        this._closeBtn.classList.remove(headerConfig.hidingClass);
    }

    _hideCloseBtn() {
        this._closeBtn.classList.add(headerConfig.hidingClass);
    }
}
