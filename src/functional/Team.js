import { teamConfig, persons } from "../utils/constants.js";

export class Team {
    constructor() {
        this._teamCards = document.querySelector(teamConfig.cardsContainerSel);
        this._cardTemplate = document.querySelector(teamConfig.cardTemplateSel);
    }

    render() {
        this._teamCards.innerHTML = "";

        persons.forEach(item => {
            this._teamCards.append(this._createCard(item));
        })
    }

    _createCard(item) {
        const card = this._cardTemplate.content.cloneNode(true);

        const photo = card.querySelector(teamConfig.cardPhotoSel);
        photo.src = item.photo;
        photo.alt = item.name + " photo";
        
        card.querySelector(teamConfig.cardNameSel).textContent = item.name;
        card.querySelector(teamConfig.cardPositionSel).textContent = item.position;

        return card;
    }
}