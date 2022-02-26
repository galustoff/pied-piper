import headerLayout from "./header.html";

export class Header {
    constructor() {
        this._body = document.body;
        this._layout = headerLayout;
        this._headerElement = this._getHeaderElement();
    }

    _getHeaderElement() {
        const template = document.createElement("template");

        template.innerHTML = this._layout;

        return template.content.cloneNode(true);
    }

    render() {
        this._body.append(this._headerElement);
    }
}