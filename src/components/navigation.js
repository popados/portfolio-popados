

export function createNavigation(onNavigate, activePage = "landing") {
    const nav = document.createElement("nav");
    nav.className = "app-navigation";

    const pages = [
        { id: "landing", label: "Landing Page" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
    ];

    pages.forEach((page) => {
        const button = document.createElement("button");
        button.textContent = page.label;
        if (page.id === activePage) {
            button.classList.add("is-active");
            button.setAttribute("aria-current", "page");
        }
        button.onclick = () => onNavigate(page.id);
        nav.appendChild(button);
    });

    return nav;
}


