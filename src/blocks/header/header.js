import "./header.sass";
import { getElementFrom } from "../../utils/utils.js";
import html from "./header.html";
import HeaderController from "../../utils/components/HeaderController.js";

const header = getElementFrom(html);

const headerController = new HeaderController(header);

headerController.init();

document.body.prepend(header);