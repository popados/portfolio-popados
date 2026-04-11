


import { createNavigation } from "./components/navigation.js";
import { createContactView } from "./components/contactView.js";
import { createAboutView } from "./components/aboutView.js";
import { createLandingPageView } from "./components/landingPageView.js";

const app = document.getElementById("app");

let currentPage = "landing";

function renderApp(data = {}) {
    app.innerHTML = "";

    const nav = createNavigation((page) => {
        currentPage = page;
        renderApp(data);
    }, currentPage);

    app.appendChild(nav);

    switch (currentPage) {
        case "landing":
            const landingPageView = createLandingPageView();
            app.appendChild(landingPageView);
            break;
        case "contact":
            const contactView = createContactView();
            app.appendChild(contactView);
            break;
        case "about":
            const aboutView = createAboutView();
            app.appendChild(aboutView);
            break;
        default:
            const fallbackLandingView = createLandingPageView();
            app.appendChild(fallbackLandingView);
    }

}

(async function init() {
    renderApp();
})();



