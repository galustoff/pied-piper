import { persons } from "../utils/constants.js";

export class Team {
    constructor() {
        this._teamCards = document.querySelector('.team__cards');
        this._cardTemplate = document.querySelector('#team__card');
    }

    render() {
        this._teamCards.innerHTML = "";

        persons.forEach(item => {
            this._teamCards.append(this._createCard(item));
        })
    }

    _createCard(item) {
        const card = this._cardTemplate.content.cloneNode(true);
        const photo = card.querySelector('.team__photo');

        photo.src = item.photo;
        photo.alt = item.name + " photo";
        card.querySelector('.team__name').textContent = item.name;
        card.querySelector('.team__position').textContent = item.position;

        return card;
    }
}