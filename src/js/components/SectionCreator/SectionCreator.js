import { getElementFrom } from "../../utils/utils.js";

export class SectionCreator {
    constructor(html) {
        this._body = document.body;
        this._element = getElementFrom(html);
    }

    append() {
        this._body.append(this._element);
    }
}
