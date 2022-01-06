import { headerConfig } from "../utils/constants.js";

export class Header {
    constructor() {
        this._header = document.querySelector(headerConfig.headerSel);
        this._nav = this._header.querySelector(`.${headerConfig.navClass}`);
        this._logo = this._header.querySelector(`.${headerConfig.logoClass}`);
        this._burgerBtn = this._header.querySelector(`.${headerConfig.burgerBtnClass}`);
        this._closeBtn = this._header.querySelector(`.${headerConfig.closeBtnClass}`);

        this._switchToMobile = () => {
            const dde = document.documentElement;

            if (dde.clientWidth < 810) {
                this._setMobileView();
                window.removeEventListener('resize', this._switchToMobile);
                window.addEventListener('resize', this._switchToDesktop);
            }
        };

        this._switchToDesktop = () => {
            const dde = document.documentElement;

            if (dde.clientWidth > 810) {
                this._setDesktopView();
                window.removeEventListener('resize', this._switchToDesktop);
                window.addEventListener('resize', this._switchToMobile);
            }
        };

        this._openMenu = () => {
            this._hideBurger();
            this._hideLogo();
            this._showNav();
            this._showCloseBtn();
        };

        this._hideMenu = () => {
            this._hideCloseBtn();
            this._hideNav();
            this._showLogo();
            this._showBurger();
        };
    }

    init() {
        if (document.documentElement.clientWidth < 810) {
            this._setMobileView();
            window.addEventListener('resize', this._switchToDesktop);
        } else {
            window.addEventListener('resize', this._switchToMobile);
        }
    }

    _setMobileView() {
        this._nav.classList.add(headerConfig.hidingClass);
        this._burgerBtn.addEventListener('click', this._openMenu);
    }

    _setDesktopView() {
        this._nav.classList.remove(headerConfig.hidingClass);
        this._burgerBtn.removeEventListener('click', this._openMenu);
    }

    _showBurger() {
        this._burgerBtn.classList.remove(headerConfig.hidingClass);
    }

    _hideBurger() {
        this._burgerBtn.classList.add(headerConfig.hidingClass);
        this._burgerBtn.removeEventListener('click', this._openMenu);
    }    

    _showNav() {
        this._nav.classList.remove(headerConfig.hidingClass);
    }

    _hideNav() {
        this._nav.classList.add(headerConfig.hidingClass);
    }

    _showLogo() {
        this._logo.classList.remove(headerConfig.hidingClass);
    }

    _hideLogo() {
        this._logo.classList.add(headerConfig.hidingClass);
    }

    _showCloseBtn() {
        this._closeBtn.classList.remove(headerConfig.hidingClass);
        this._closeBtn.addEventListener('click', this._hideMenu);
    }

    _hideCloseBtn() {
        this._closeBtn.classList.add(headerConfig.hidingClass);
        this._closeBtn.removeEventListener('click', this._hideMenu);
    }
}
