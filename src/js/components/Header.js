import { headerConfig } from "../utils/constants.js";

export class Header {
    constructor() {
        this._header = document.querySelector(headerConfig.headerSel);
        this._headerList = this._header.querySelector(headerConfig.listSel);
        this._headerListItems = Array.from(this._header.querySelectorAll(headerConfig.listItemSel));
        this._headerDelimiters = Array.from(this._header.querySelectorAll(headerConfig.delimiterSel));
        this._mobileMod = headerConfig.mobileMod;
        this._headerBurgerBtn = this._header.querySelector(headerConfig.burgerBtnSel);
    }

    init() {
        console.log('all systems work normal....');
    }
}