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
            this._hideElem(this._burgerBtn);
            this._burgerBtn.removeEventListener('click', this._openMenu);
            this._hideElem(this._logo);
            this._showElem(this._nav);
            this._showElem(this._closeBtn);
            this._closeBtn.addEventListener('click', this._hideMenu);
        };

        this._hideMenu = () => {
            this._hideElem(this._closeBtn);
            this._closeBtn.removeEventListener('click', this._hideMenu);
            this._hideElem(this._nav);
            this._showElem(this._logo);
            this._showElem(this._burgerBtn);
            this._burgerBtn.addEventListener('click', this._openMenu);
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
        this._hideElem(this._nav);
        this._showElem(this._burgerBtn);
        this._burgerBtn.addEventListener('click', this._openMenu);
    }

    _setDesktopView() {
        this._hideElem(this._closeBtn);
        this._showElem(this._logo);
        this._showElem(this._nav);
        this._restoreBurgerInitialState();
    }

    _showElem(elem) {
        elem.classList.remove(this._hidingClass);
    }

    _hideElem(elem) {
        elem.classList.add(this._hidingClass);
    }

    _restoreBurgerInitialState() {
        this._burgerBtn.removeEventListener('click', this._openMenu);
        this._burgerBtn.classList.remove(this._hidingClass);
    }
}