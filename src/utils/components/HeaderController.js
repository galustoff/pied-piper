import { headerConfig as config } from "../constants.js";
import HidingElement from "./HidingElement.js";
import HeaderButton from "./HeaderButton.js";

export default class HeaderController {
    constructor(header) {
        this._dde = document.documentElement;

        this._header = header;

        this._cont = this._header.querySelector(config.contSel);
        this._contMobileClass = config.contMobileClass;

        this._nav = new HidingElement(this._header, config.navSel);
        this._logo = new HidingElement(this._header, config.logoSel);
        this._burgerBtn = new HeaderButton(this._header, config.burgerBtnSel, function () {
            console.log("Quack!");
        });
        this._closeBtn = new HeaderButton(this._header, config.closeBtnSel, function () {
            console.log("Quack!");
        });

        this._switchToMobile = () => {
            if (this._dde.clientWidth < 810) {
                this._setMobileView();
                window.removeEventListener("resize", this._switchToMobile);
                window.addEventListener("resize", this._switchToDesktop);
            }
        };

        this._switchToDesktop = () => {
            if (this._dde.clientWidth > 810) {
                this._setDesktopView();
                window.removeEventListener("resize", this._switchToDesktop);
                window.addEventListener("resize", this._switchToMobile);
            }
        };
    }

    init() {
        if (document.documentElement.clientWidth < 810) {
            this._setMobileView();
            window.addEventListener("resize", this._switchToDesktop);
        } else {
            window.addEventListener("resize", this._switchToMobile);
        }
    }

    _setMobileView() {
        this._cont.classList.add(this._contMobileClass);
        this._nav.hide();
        this._closeBtn.hide();
        this._burgerBtn.show();
    }

    _setDesktopView() {
        this._closeBtn.hide();
        this._burgerBtn.hide();
        this._logo.show();
        this._nav.show();
        this._cont.classList.remove(this._contMobileClass);
    }
}
