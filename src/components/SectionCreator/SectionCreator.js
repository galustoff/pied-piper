import { getElementFrom } from "../../utils/utils.js";

export class SectionCreator {
    constructor(html) {
        this._container = document.body.querySelector('.main');
        this._element = getElementFrom(html);
    }

    render() {
        this._container.append(this._element);
    }
}
