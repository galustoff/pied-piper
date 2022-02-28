import "./header.sass";
import { getElementFrom } from "../../utils/utils.js";
import html from "./header.html";

const header = getElementFrom(html);

if (document.documentElement.clientWidth < 810) {
    header.querySelector('.header__nav').classList.add('header__hidden-element');
}

document.body.prepend(header);
