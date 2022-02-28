import "./problem.sass";
import html from "./problem.html";
import { getElementFrom } from "../../../utils/utils.js";

document.querySelector(".main").append(getElementFrom(html));
