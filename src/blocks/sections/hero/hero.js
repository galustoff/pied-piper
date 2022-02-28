import "./hero.sass";
import html from "./hero.html";
import { getElementFrom } from "../../../utils/utils.js";

document.querySelector(".main").append(getElementFrom(html));
