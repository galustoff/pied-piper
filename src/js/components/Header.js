import { headerConfig } from "../utils/constants.js";

export class Header {
    constructor() {
        this._dde = document.documentElement;

        this._header = document.querySelector(headerConfig.headerSel);
        this._nav = this._header.querySelector(headerConfig.navSel);
        this._logo = this._header.querySelector(headerConfig.logoSel);
        this._burgerBtn = this._header.querySelector(headerConfig.burgerBtnSel);
        this._closeBtn = this._header.querySelector(headerConfig.closeBtnSel);

        this._hidingClass = headerConfig.hidingClass;

        this._switchToMobile = () => {
            if (this._dde.clientWidth < 810) {
                this._setMobileView();
                window.removeEventListener('resize', this._switchToMobile);
                window.addEventListener('resize', this._switchToDesktop);
            }
        };

        this._switchToDesktop = () => {
            if (this._dde.clientWidth > 810) {
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
        this._hideNav();
        this._showBurger();
    }

    _setDesktopView() {
        this._hideCloseBtn();
        this._showLogo();
        this._showNav();
        this._restoreBurgerInitialState();
    }

    _showBurger() {
        this._burgerBtn.classList.remove(this._hidingClass);
        this._burgerBtn.addEventListener('click', this._openMenu);
    }

    _hideBurger() {
        this._burgerBtn.classList.add(this._hidingClass);
        this._burgerBtn.removeEventListener('click', this._openMenu);
    }    

    _restoreBurgerInitialState() {
        this._burgerBtn.removeEventListener('click', this._openMenu);
        this._burgerBtn.classList.remove(this._hidingClass);
    }

    _showNav() {
        this._nav.classList.remove(this._hidingClass);
    }

    _hideNav() {
        this._nav.classList.add(this._hidingClass);
    }

    _showLogo() {
        this._logo.classList.remove(this._hidingClass);
    }

    _hideLogo() {
        this._logo.classList.add(this._hidingClass);
    }

    _showCloseBtn() {
        this._closeBtn.classList.remove(this._hidingClass);
        this._closeBtn.addEventListener('click', this._hideMenu);
    }

    _hideCloseBtn() {
        this._closeBtn.classList.add(this._hidingClass);
        this._closeBtn.removeEventListener('click', this._hideMenu);
    }
}
