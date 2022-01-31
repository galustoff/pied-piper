import '../sass/index.sass';

import { Header } from "./components/Header.js";
import { Team } from "./components/Team.js";


const team = new Team();
const header = new Header();

header.init();
team.render();