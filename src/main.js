

import { createTerminalPortfolioView } from "./components/terminalPortfolioView.js";

const app = document.getElementById("app");

function renderApp() {
    app.innerHTML = "";
    app.appendChild(createTerminalPortfolioView());
}

renderApp();



