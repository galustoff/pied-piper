import "./header.sass";
import { getElementFrom } from "../../utils/utils.js";
import html from "./header.html";

const header = getElementFrom(html);

if (document.documentElement.clientWidth < 810) {
    header.querySelector(config.navSel).classList.add(config.hidingClass);
}

document.body.prepend(header);