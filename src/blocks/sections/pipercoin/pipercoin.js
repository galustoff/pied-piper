import "./pipercoin.sass";
import html from "./pipercoin.html";
import { getElementFrom } from "../../../utils/utils.js";

document.querySelector(".main").append(getElementFrom(html));
