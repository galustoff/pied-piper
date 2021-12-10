import { Team } from "../js/components/Team.js";
import { HeaderController } from "../js/components/HeaderController.js";

const headerController = new HeaderController();
const team = new Team();

headerController.start();
team.render();