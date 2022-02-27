import { HeaderCreator } from "../../components/HeaderCreator/HeaderCreator.js";
import headerHTML from "./header.html";
import "./header.sass";

const header = new HeaderCreator(headerHTML);

export default header;
