import "./header.sass";
import { getElementFrom } from "../../utils/utils.js";
import html from "./header.html";
import { headerConfig as config } from "./headerConfig.js";
import HeaderController from "./HeaderController.js";

const header = getElementFrom(html);

if (document.documentElement.clientWidth < 810) {
    header.querySelector(config.navSel).classList.add(config.hidingClass);
}

document.body.prepend(header);

const headerController = new HeaderController();

headerController.init();