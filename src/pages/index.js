import { Header } from "../js/components/Header.js";
import { Team } from "../js/components/Team.js";


const team = new Team();
const header = new Header();

header.init();
team.render();