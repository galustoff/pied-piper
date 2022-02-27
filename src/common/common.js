import "./styles/reset.sass";
import "./styles/fonts.sass";
import "./styles/page.sass";
import "./styles/container.sass";
import "./styles/main.sass";

document.body.classList.add("page");

const main = document.createElement("main");

main.classList.add("main");

document.body.append(main);
