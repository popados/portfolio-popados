export function createLandingPageView() {
    const container = document.createElement("div");
    container.className = "landing-page-view";

    const sections = [
        {
            className: "landing-panel hero-panel",
            eyebrow: "Portfolio Snapshot",
            title: "Build custom landing pages that work in real use.",
            body: "Designing and shipping responsive front-end work.",
            structB:"This practical structure uses vanilla JavaScript components to create maintainable and reusable UI elements.",
            styleB: "Clean styling and custom palette to pick your own theme.",
            flowB: "Clear and straightforward user flows drawing attention to the right elements.",
            final: "This portfolio is a work in progress, but you can get in touch to talk through a project or collaboration.",

            actions: [
                { label: "View Current Work", href: "#services-projects" },
                { label: "Contact Me", href: "#contact-me" },
            ],
            metrics: [
                { value: "5", label: "core panels" },
                { value: "3", label: "responsive breakpoints" },
                { value: "1", label: "focused landing flow" },
            ],
        },
        {
            className: "landing-panel about-panel",
            id: "about-panel",
            eyebrow: "About",
            title: "Frontend work grounded in structure, readability, and visual balance.",
            body: "My approach centers on maintainable UI, straightforward component design, and interfaces that stay useful across desktop and mobile sizes.",
            highlights: [
                "Vanilla JavaScript components with clean rendering flow.",
                "CSS organized around palette-driven styling and reusable layout patterns.",
                "Responsive behavior planned early instead of patched in later.",
            ],
        },
        {
            className: "landing-panel experience-panel",
            eyebrow: "Past Experience",
            title: "Recent experience shaped by shipping usable interfaces and iterating quickly.",
            timeline: [
                {
                    period: "2025 - Present",
                    role: "Portfolio Development",
                    detail: "Building personal projects that refine SPA structure, content hierarchy, and responsive presentation.",
                },
                {
                    period: "2024 - 2025",
                    role: "UI Practice and Experimentation",
                    detail: "Developed small front-end exercises focused on layout systems, component reuse, and browser-friendly CSS.",
                },
                {
                    period: "Ongoing",
                    role: "Continuous Learning",
                    detail: "Improving implementation quality through practical iteration, code cleanup, and design consistency.",
                },
            ],
        },
        {
            className: "landing-panel services-panel",
            id: "services-projects",
            eyebrow: "Services and Current Projects",
            title: "Work that balances presentation, maintainability, and straightforward user flows.",
            cards: [
                {
                    heading: "Responsive Frontend Layouts",
                    text: "Landing pages and content views designed to adapt cleanly from wide screens down to compact mobile widths.",
                },
                {
                    heading: "Component-Based UI",
                    text: "Small, reusable JavaScript views that keep rendering logic obvious and easy to extend.",
                },
                {
                    heading: "Current Focus",
                    text: "Expanding this portfolio with stronger case-study sections, clearer calls to action, and tighter visual rhythm.",
                },
            ],
        },
        {
            className: "landing-panel contact-panel",
            id: "contact-me",
            eyebrow: "Contact Me",
            title: "Start a conversation about a project, collaboration, or frontend idea.",
            body: "If you want to talk through a landing page, a portfolio build, or UI cleanup work, reach out and I will follow up.",
            contacts: [
                { label: "Email", value: "hello@portfolio.dev" },
                { label: "Availability", value: "Open for new projects" },
                { label: "Response", value: "Usually within 1 to 2 days" },
            ],
        },
    ];

    sections.forEach((sectionData) => {
        container.appendChild(createPanel(sectionData));
    });

    return container;
}

function createPanel(sectionData) {
    const section = document.createElement("section");
    section.className = sectionData.className;

    if (sectionData.id) {
        section.id = sectionData.id;
    }

    const eyebrow = document.createElement("p");
    eyebrow.className = "panel-eyebrow";
    eyebrow.textContent = sectionData.eyebrow;
    section.appendChild(eyebrow);

    const title = document.createElement("h2");
    title.className = "panel-title";
    title.textContent = sectionData.title;
    section.appendChild(title);

    if (sectionData.body) {
        const body = document.createElement("p");
        body.className = "panel-body";
        body.textContent = sectionData.body;
        section.appendChild(body);
    }

    if (sectionData.structB) {
        const structB = document.createElement("p");
        structB.className = "panel-body";
        structB.textContent = sectionData.structB;
        section.appendChild(structB);
    }

    if(sectionData.styleB) {
        const styleB = document.createElement("p");
        styleB.className = "panel-body";
        styleB.textContent = sectionData.styleB;
        section.appendChild(styleB);
    }

    if (sectionData.flowB) {
        const flowB = document.createElement("p");
        flowB.className = "panel-body";
        flowB.textContent = sectionData.flowB;
        section.appendChild(flowB);
    }

    if (sectionData.final) {
        const final = document.createElement("p");
        final.className = "panel-body";
        final.textContent = sectionData.final;
        section.appendChild(final);
    }

    if (sectionData.actions) {
        const actionRow = document.createElement("div");
        actionRow.className = "panel-actions";

        sectionData.actions.forEach((action) => {
            const link = document.createElement("a");
            link.className = "panel-action-link";
            link.href = action.href;
            link.textContent = action.label;
            actionRow.appendChild(link);
        });

        section.appendChild(actionRow);
    }

    if (sectionData.metrics) {
        const metricsGrid = document.createElement("div");
        metricsGrid.className = "hero-metrics";

        sectionData.metrics.forEach((metric) => {
            const metricCard = document.createElement("div");
            metricCard.className = "metric-card";

            const value = document.createElement("strong");
            value.textContent = metric.value;
            metricCard.appendChild(value);

            const label = document.createElement("span");
            label.textContent = metric.label;
            metricCard.appendChild(label);

            metricsGrid.appendChild(metricCard);
        });

        section.appendChild(metricsGrid);
    }

    if (sectionData.highlights) {
        const list = document.createElement("ul");
        list.className = "panel-list";

        sectionData.highlights.forEach((highlight) => {
            const item = document.createElement("li");
            item.textContent = highlight;
            list.appendChild(item);
        });

        section.appendChild(list);
    }

    if (sectionData.timeline) {
        const timeline = document.createElement("div");
        timeline.className = "experience-timeline";

        sectionData.timeline.forEach((entry) => {
            const article = document.createElement("article");
            article.className = "timeline-entry";

            const period = document.createElement("span");
            period.className = "timeline-period";
            period.textContent = entry.period;
            article.appendChild(period);

            const role = document.createElement("h3");
            role.className = "timeline-role";
            role.textContent = entry.role;
            article.appendChild(role);

            const detail = document.createElement("p");
            detail.className = "timeline-detail";
            detail.textContent = entry.detail;
            article.appendChild(detail);

            timeline.appendChild(article);
        });

        section.appendChild(timeline);
    }

    if (sectionData.cards) {
        const cardsGrid = document.createElement("div");
        cardsGrid.className = "services-grid";

        sectionData.cards.forEach((card) => {
            const article = document.createElement("article");
            article.className = "service-card";

            const heading = document.createElement("h3");
            heading.className = "service-card-title";
            heading.textContent = card.heading;
            article.appendChild(heading);

            const text = document.createElement("p");
            text.className = "service-card-text";
            text.textContent = card.text;
            article.appendChild(text);

            cardsGrid.appendChild(article);
        });

        section.appendChild(cardsGrid);
    }

    if (sectionData.contacts) {
        const contactGrid = document.createElement("div");
        contactGrid.className = "contact-grid";

        sectionData.contacts.forEach((contact) => {
            const card = document.createElement("div");
            card.className = "contact-card";

            const label = document.createElement("span");
            label.className = "contact-label";
            label.textContent = contact.label;
            card.appendChild(label);

            const value = document.createElement("strong");
            value.className = "contact-value";
            value.textContent = contact.value;
            card.appendChild(value);

            contactGrid.appendChild(card);
        });

        section.appendChild(contactGrid);
    }

    return section;
}