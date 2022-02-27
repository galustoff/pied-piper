import { SectionCreator } from "../SectionCreator/SectionCreator.js";

export class FooterCreator extends SectionCreator {
    constructor(html) {
        super(html);
        this._container = document.body;
    }
}
