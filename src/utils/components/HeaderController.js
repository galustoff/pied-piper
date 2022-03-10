import { headerConfig as config } from "../constants.js";
import HidingElement from "./HidingElement.js";
import HeaderButton from "./HeaderButton.js";

export default class HeaderController {
    constructor(header) {
        this._dde = document.documentElement;

        this._header = header;
        this._cont = this._header.querySelector(config.contSel);

        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this._nav = new HidingElement(config.navSel);
        this._logo = new HidingElement(config.logoSel);
        this._burgerBtn = new HeaderButton(config.burgerBtnSel);
        this._closeBtn = new HeaderButton(config.closeBtnSel);

        /*
        this._nav = this._header.querySelector(config.navSel);
        this._logo = this._header.querySelector(config.logoSel);
        this._burgerBtn = this._header.querySelector(config.burgerBtnSel);
        this._closeBtn = this._header.querySelector(config.closeBtnSel);
        */

        this._hidingClass = config.hidingClass;
        this._contMobileClass = config.contMobileClass;

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
            this._burgerBtn.removeEventListener('pointerdown', this._openMenu);
            this._cont.classList.add(this._contMobileClass);
            this._hideElem(this._logo);
            this._showElem(this._nav);
            this._showElem(this._closeBtn);
            this._closeBtn.addEventListener('pointerdown', this._hideMenu);
        };

        this._hideMenu = () => {
            this._hideElem(this._closeBtn);
            this._closeBtn.removeEventListener('pointerdown', this._hideMenu);
            this._hideElem(this._nav);
            this._cont.classList.remove(this._contMobileClass);
            this._showElem(this._logo);
            this._showElem(this._burgerBtn);
            this._burgerBtn.addEventListener('pointerdown', this._openMenu);
        };
    }

    init() {
        if (document.documentElement.clientWidth < 810) {
            window.addEventListener('resize', this._switchToDesktop);
            this._setMobileView();
        } else {
            window.addEventListener('resize', this._switchToMobile);
        }
    }

    _setMobileView() {
        this._hideElem(this._nav);
        this._showElem(this._burgerBtn);
        this._burgerBtn.addEventListener('pointerdown', this._openMenu);
    }

    _setDesktopView() {
        this._hideElem(this._closeBtn);
        this._showElem(this._logo);
        this._showElem(this._nav);
        this._cont.classList.remove(this._contMobileClass);
        this._restoreBurgerInitialState();
    }

    _showElem(elem) {
        elem.classList.remove(this._hidingClass);
    }

    _hideElem(elem) {
        elem.classList.add(this._hidingClass);
    }

    _restoreBurgerInitialState() {
        this._burgerBtn.removeEventListener('pointerdown', this._openMenu);
        this._burgerBtn.classList.remove(this._hidingClass);
    }
}