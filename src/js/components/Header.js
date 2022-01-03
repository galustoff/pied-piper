import { headerConfig } from "../utils/constants.js";

export class Header {
    constructor() {
        this._header = document.querySelector(headerConfig.headerSel);
        this._headerNav = this._header.querySelector(`.${headerConfig.navClass}`);
        this._headerList = this._header.querySelector(`.${headerConfig.listClass}`);
        this._headerDelimiters = Array.from(this._header.querySelectorAll(`.${headerConfig.delimiterClass}`));
    }

    init() {
        this._setHandlers();
    }

    _setHandlers() {
        document
            .querySelector(`.${headerConfig.burgerBtnClass}`)
            .addEventListener('click', () => {
                this._showMenu();
            });
    }

    _showMenu() {
        this._hideBurger();
        this._hideLogo();
        this._showLinks();
        this._showCloseBtn();
    }

    _hideBurger() {
        document
            .querySelector(`.${headerConfig.burgerBtnClass}`)
            .classList.add(headerConfig.burgerBtnClass + headerConfig.clickedMod);
    }

    _showLinks() {
        this._headerDelimiters
            .forEach(e => e.classList.add(headerConfig.delimiterClass + headerConfig.mobileMod));

        this._headerList.classList.add(headerConfig.listClass + headerConfig.mobileMod);

        this._headerNav.classList.add(headerConfig.navClass + headerConfig.mobileMod);
    }

    _hideLogo() {
        document
            .querySelector(`.${headerConfig.logoClass}`)
            .classList.add(headerConfig.logoClass + headerConfig.mobileMod);
    }

    _showCloseBtn() {
        document
            .querySelector(`.${headerConfig.closeBtnClass}`).
            classList.add(headerConfig.closeBtnClass + headerConfig.mobileMod);
    }

    _setHandleBtnClick(btnClass) {
        return function() {
            this.classList.add(btnClass.concat(headerConfig.clickedMod));
        }
    }
}