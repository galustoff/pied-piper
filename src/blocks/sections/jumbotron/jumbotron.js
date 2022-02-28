import "./jumbotron.sass";
import html from "./jumbotron.html";
import { getElementFrom } from "../../../utils/utils.js";

document.querySelector('.main').append(getElementFrom(html));