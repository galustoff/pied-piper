import { headerConfig as config } from "../constants.js";
import HeaderHidingElement from "./HeaderHidingElement.js";
import HeaderButton from "./HeaderButton.js";

export default class HeaderController {
    constructor(header) {
        this._dde = document.documentElement;

        this._header = header;
        this._headerImg = header.querySelector(config.imgSel);
        this._nav = new HeaderHidingElement(this._header, config.navSel);
        this._logo = new HeaderHidingElement(this._header, config.logoSel);
        this._burgerBtn = new HeaderButton(
            this._header,
            config.burgerBtnSel,
            this._openMenu
        );
        this._closeBtn = new HeaderButton(
            this._header,
            config.closeBtnSel,
            this._closeMenu
        );
    }

    init() {
        if (document.documentElement.clientWidth < 810) {
            this._setMobileView();
            window.addEventListener("resize", this._switchToDesktop);
        } else {
            this._setDesktopView();
            window.addEventListener("resize", this._switchToMobile);
        }
    }

    _switchToMobile = () => {
        if (this._dde.clientWidth < 810) {
            this._setMobileView();
            window.removeEventListener("resize", this._switchToMobile);
            window.addEventListener("resize", this._switchToDesktop);
        }
    };

    _switchToDesktop = () => {
        if (this._dde.clientWidth >= 810) {
            this._setDesktopView();
            window.removeEventListener("resize", this._switchToDesktop);
            window.addEventListener("resize", this._switchToMobile);
        }
    };

    _setMobileView = () => {
        this._setMobileSizes();
        this._nav.hide();
        this._closeBtn.hide();
        this._burgerBtn.show();
    };

    _setDesktopView = () => {
        this._setDesktopSizes();
        this._closeBtn.hide();
        this._burgerBtn.hide();
        this._logo.show();
        this._nav.show();
    };

    _setMobileSizes = () => {
        this._headerImg.width = 138;
        this._headerImg.height = 33;
    };

    _setDesktopSizes = () => {
        this._headerImg.width = 184;
        this._headerImg.height = 45;
    };

    _openMenu = () => {
        this._logo.hide();
        this._nav.show();
        this._burgerBtn.hide();
        this._closeBtn.show();
    };

    _closeMenu = () => {
        this._nav.hide();
        this._logo.show();
        this._closeBtn.hide();
        this._burgerBtn.show();
    };
}
