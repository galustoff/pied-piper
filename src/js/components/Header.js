import { headerConfig } from "../utils/constants.js";

export class Header {
    constructor() {
        this._header = document.querySelector(headerConfig.headerSel);
        this._headerNav = this._header.querySelector(`.${headerConfig.navClass}`);
        this._headerList = this._header.querySelector(`.${headerConfig.listClass}`);
        this._headerListItems = Array.from(this._header.querySelectorAll(`.${headerConfig.listItemClass}`));
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
        this._showLinks();
        this._hideLogo();
        this._showCloseBtn();
    }

    _hideBurger() {
        document
        .querySelector(`.${headerConfig.burgerBtnClass}`)
        .classList.add(headerConfig.burgerBtnClass + headerConfig.clickedMod);
    }

    _showLinks() {
        console.log('show links');

        this._headerDelimiters
            .forEach(e => e.classList.add(headerConfig.delimiterClass + headerConfig.mobileMod));
        
        this._headerListItems
            .forEach(e => e.classList.add(headerConfig.listItemClass + headerConfig.mobileMod));

        this._headerList.classList.add(headerConfig.listClass + headerConfig.mobileMod);

        this._headerNav.classList.add(headerConfig.navClass + headerConfig.mobileMod);
    }

    _hideLogo() {
        console.log('hide logo');
    }

    _showCloseBtn() {
        console.log('show clsbtn');
    }

    _setHandleBtnClick(btnClass) {
        return function() {
            this.classList.add(btnClass.concat(headerConfig.clickedMod));
        }
    }
}