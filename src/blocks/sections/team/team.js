import "./team.sass";
import sectionHTML from "./team-section.html";
import cardHTML from "./team-card.html";
import { persons } from "./persons.js";
import { getElementFrom } from "../../../utils/utils.js";

const section = getElementFrom(sectionHTML);
const sectionList = section.querySelector(".team__cards");

persons.forEach((person) => {
    const card = getElementFrom(cardHTML);
    const photo = card.querySelector(".team__photo");

    photo.src = person.photo;
    photo.alt = `${person.name} photo`;
    card.querySelector(".team__name").textContent = person.name;
    card.querySelector(".team__position").textContent = person.position;

    sectionList.append(card);
});

document.querySelector(".main").append(section);
