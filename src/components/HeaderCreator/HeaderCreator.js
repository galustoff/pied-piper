import { SectionCreator } from "../SectionCreator/SectionCreator.js";

export class HeaderCreator extends SectionCreator {
    constructor(html) {
        super(html);
        this._container = document.body;
    }

    render() {
        this._container.prepend(this._element);
    }
}
