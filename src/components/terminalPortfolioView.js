const COMMAND_CONTENT = {
    about: {
        title: "About",
        lines: [
            "> Nikhil Khandwala or Popados, a front-end web developer specializing in responsive websites, modern user interfaces, and API-driven applications.",
            "> I create detail-oriented portfolio websites, dashboards, and responsive landing pages with a strong foundation in usability, performance, and modern design. ",
            "> Focusing on building clean, professional web experiences that not only look great but also provide intuitive navigation to establish a polished and effective online presence for your brand, skills, or services.",
            "> Tech stack includes HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB."
        ],
    },
    skills: {
        title: "Skills",
        lines: [
            "Languages: JavaScript, HTML, CSS",
            "Tooling: Git, Vite, npm",
            "Focus: component-based UI, responsive layouts, maintainable styling",
        ],
    },
    projects: {
        title: "Projects",
        lines: [
            "1) Terminal Portfolio - command-driven site",
            "2) The Cat Window - article-first layouts built for visual storytelling",
            "3) UI Refactor Work - modernized and simplified existing interfaces",
        ],
    },
    resume: {
        title: "Resume",
        lines: [
            "Resume is available on request.",
            "Email: popad.dev@example.com",
        ],
    },
    contact: {
        title: "Contact",
        lines: [
            "Email: popad.dev@example.com",
            "Location: Open to remote collaboration",
            "Response time: 24-48 hours",
        ],
    },
    "social media": {
        title: "Social Media",
        lines: [
            "GitHub: https://github.com/popados/",
            "LinkedIn: https://www.linkedin.com/in/nikhil-khandwala/",
            "Facebook: https://www.facebook.com/nik.khandwala",
        ],
    },
};

const HELP_LINES = [
    "Available commands:",
    "about - who am I",
    "projects - what I've built",
    "skills - how good am I",
    "social media - where to find me",
    "contact - how to reach me",
    "resume - my CV details",
    "help - list commands",
    "clear - clear the terminal",
];

const TERMINAL_PORTFOLIO_IMAGE_SRC = new URL("../../img/terminal-portfolio.png", import.meta.url).href;
const CAT_WINDOW_IMAGE_SRC = new URL("../../img/cat-window.png", import.meta.url).href;

const SOCIAL_LINKS = [
    {
        iconClass: "bi bi-facebook",
        label: "Facebook",
        url: "https://www.facebook.com/nik.khandwala/",
    },
    {
        iconClass: "bi bi-github",
        label: "GitHub",
        url: "https://github.com/popados/",
    },
    {
        iconClass: "bi bi-linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-khandwala/",
    },
];

const PROJECT_CARDS = [
    {
        title: "Terminal Portfolio",
        description:
            "A command-driven portfolio interface that mimics a real terminal and lets visitors explore profile info through typed commands.",
        features: [
            "Interactive command parser with aliases",
            "Keyboard command history via up/down arrows",
            "Context-aware help and styled terminal output",
            "Dynamic project and skill browsers with prev/next navigation",
        ],
        stack: ["JavaScript", "HTML", "CSS", "Vite"],
        screenshot: TERMINAL_PORTFOLIO_IMAGE_SRC,
        screenshotAlt: "Terminal Portfolio Screenshot",
        githubUrl: "https://github.com/popados/portfolio-popados",
        demoUrl: "https://popados.org",
    },
    {
        title: "The Cat Window",
        description:
            "A cat-focused blog and image gallery experience with a brutalist UI/UX direction, modular section cards, and article-first layouts built for visual storytelling.",
        features: [
            "Interactive gallery with lightbox viewing for cat image collections",
            "Brutalist UI/UX system built with reusable section cards",
            "Blog and article templates with room for affiliate links",
            "Image-forward content flow optimized for blog browsing",
        ],
        stack: ["JavaScript", "HTML", "CSS", "Vite", "Node.js"],
        screenshot: CAT_WINDOW_IMAGE_SRC,
        screenshotAlt: "Cat blog project screenshot",
        githubUrl: "https://github.com/popados/cat-window",
        demoUrl: "https://thecatwindow.com",
    },
    {
        title: "UI Refactor Work",
        description:
            "Modernized existing UI systems by improving visual hierarchy, component consistency, and maintainability.",
        features: [
            "Reusable component pattern cleanup",
            "Improved accessibility and readable color contrast",
            "Reduced styling complexity and duplication",
        ],
        stack: ["JavaScript", "CSS", "Design Systems"],
        screenshot: TERMINAL_PORTFOLIO_IMAGE_SRC,
        screenshotAlt: "UI refactor project screenshot",
        githubUrl: "https://github.com/popados/ui-refactor-work",
        demoUrl: "https://popados.org/ui-refactor-work",
    },
];

const SKILL_ITEMS = [
    { name: "JavaScript", level: 92 },
    { name: "HTML", level: 96 },
    { name: "CSS", level: 94 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 84 },
    { name: "Express", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "Vite", level: 90 },
    { name: "Git", level: 86 },
];

const SKILL_CATEGORIES = [
    {
        title: "Frontend",
        description: "Core client-side tools I use to build responsive interfaces and polished user experiences.",
        items: [
            { name: "JavaScript", level: 92 },
            { name: "HTML", level: 96 },
            { name: "CSS", level: 94 },
            { name: "React", level: 88 },
        ],
    },
    {
        title: "Backend",
        description: "Server-side technologies I use for APIs, routing, and data handling.",
        items: [
            { name: "Node.js", level: 84 },
            { name: "Express", level: 82 },
            { name: "MongoDB", level: 78 },
        ],
    },
    {
        title: "Workflow",
        description: "Development tools and workflows I rely on to ship and maintain projects efficiently.",
        items: [
            { name: "Vite", level: 90 },
            { name: "Git", level: 86 },
            { name: "npm", level: 88 },
        ],
    },
];

function normalizeCommand(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function createTerminalPortfolioView() {
    const container = document.createElement("section");
    container.className = "terminal-portfolio";
    const bannerImageSrc = TERMINAL_PORTFOLIO_IMAGE_SRC;

    const banner = document.createElement("div");
    banner.className = "terminal-banner";

    const bannerImage = document.createElement("img");
    bannerImage.className = "terminal-banner-image";
    bannerImage.src = bannerImageSrc;
    bannerImage.alt = "Terminal portfolio style reference";

    const bannerOverlay = document.createElement("div");
    bannerOverlay.className = "terminal-banner-overlay";

    const bannerTitle = document.createElement("pre");
    bannerTitle.className = "terminal-banner-ascii";
    const bannerContentWidth = 71;
    const bannerBorder = `+${"-".repeat(bannerContentWidth)}+`;
    const bannerRow = (text = "") => `|${text.padEnd(bannerContentWidth, " ")}|`;

    bannerTitle.textContent = [
        bannerRow("            ____   ___   ____     _    ____    ___    ____"),
        bannerRow("           |  _ \\ / _ \\ |  _ \\   / \\  |  _ \\  / _ \\  / ___|"),
        bannerRow("           | |_) | | | || |_) | / _ \\ | | | || | | | \\___ \\"),
        bannerRow("           |  __/| |_| ||  __/ / ___ \\| |_| || |_| |  ___)|"),
        bannerRow("           |_|    \\___/ |_|   /_/   \\_\\____/  \\___/  |____/"),
        bannerRow(),
        bannerRow("     >>> |Popados| <<< "),
        bannerBorder,
    ].join("\n");

    const bannerSubtitle = document.createElement("p");
    bannerSubtitle.textContent = "Portfolio Terminal | 2026";

    bannerOverlay.appendChild(bannerTitle);
    bannerOverlay.appendChild(bannerSubtitle);
    banner.appendChild(bannerImage);
    banner.appendChild(bannerOverlay);

    const terminal = document.createElement("div");
    terminal.className = "terminal-shell";

    const terminalHeader = document.createElement("div");
    terminalHeader.className = "terminal-header";

    const dots = document.createElement("div");
    dots.className = "terminal-dots";
    dots.innerHTML = "<span></span><span></span><span></span>";

    const terminalTitle = document.createElement("p");
    terminalTitle.className = "terminal-title";
    terminalTitle.textContent = "visitor@portfolio:~";

    terminalHeader.appendChild(dots);
    terminalHeader.appendChild(terminalTitle);

    const output = document.createElement("div");
    output.className = "terminal-output";
    output.setAttribute("aria-live", "polite");

    const inputForm = document.createElement("form");
    inputForm.className = "terminal-input-form";

    const prompt = document.createElement("span");
    prompt.className = "terminal-prompt";
    prompt.textContent = "visitor@portfolio:~$";

    const input = document.createElement("input");
    input.className = "terminal-input";
    input.type = "text";
    input.name = "command";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Type a command...";

    inputForm.appendChild(prompt);
    inputForm.appendChild(input);

    terminal.appendChild(terminalHeader);
    terminal.appendChild(output);
    terminal.appendChild(inputForm);

    const projectBrowser = document.createElement("section");
    projectBrowser.className = "terminal-project-browser";
    projectBrowser.hidden = true;

    const projectBrowserHeader = document.createElement("div");
    projectBrowserHeader.className = "terminal-project-browser-header";

    const projectBrowserTitle = document.createElement("p");
    projectBrowserTitle.className = "terminal-title";
    projectBrowserTitle.textContent = "Project Browser";

    const projectBrowserCount = document.createElement("p");
    projectBrowserCount.className = "terminal-project-browser-count";

    const projectBrowserControls = document.createElement("div");
    projectBrowserControls.className = "terminal-project-browser-controls";

    const prevProjectButton = document.createElement("button");
    prevProjectButton.type = "button";
    prevProjectButton.className = "terminal-project-nav-button";
    prevProjectButton.textContent = "Prev";

    const nextProjectButton = document.createElement("button");
    nextProjectButton.type = "button";
    nextProjectButton.className = "terminal-project-nav-button";
    nextProjectButton.textContent = "Next";

    projectBrowserControls.appendChild(prevProjectButton);
    projectBrowserControls.appendChild(nextProjectButton);
    projectBrowserHeader.appendChild(projectBrowserTitle);
    projectBrowserHeader.appendChild(projectBrowserCount);
    projectBrowserHeader.appendChild(projectBrowserControls);

    const projectCard = document.createElement("article");
    projectCard.className = "terminal-project-card";

    const projectCardTitle = document.createElement("h3");
    projectCardTitle.className = "terminal-block-title";

    const projectCardDescription = document.createElement("p");
    projectCardDescription.className = "terminal-project-card-description";

    const projectCardFeaturesLabel = document.createElement("p");
    projectCardFeaturesLabel.className = "terminal-project-card-subtitle";
    projectCardFeaturesLabel.textContent = "Features";

    const projectCardFeatures = document.createElement("ul");
    projectCardFeatures.className = "terminal-project-card-features";

    const projectCardStackLabel = document.createElement("p");
    projectCardStackLabel.className = "terminal-project-card-subtitle";
    projectCardStackLabel.textContent = "Stack";

    const projectCardStack = document.createElement("div");
    projectCardStack.className = "terminal-project-card-stack";

    const projectCardLinksLabel = document.createElement("p");
    projectCardLinksLabel.className = "terminal-project-card-subtitle";
    projectCardLinksLabel.textContent = "Links";

    const projectCardImage = document.createElement("img");
    projectCardImage.className = "terminal-project-card-image";

    const projectCardLinks = document.createElement("div");
    projectCardLinks.className = "terminal-project-card-links";

    const projectCardGithubLink = document.createElement("a");
    projectCardGithubLink.className = "terminal-project-card-link";
    projectCardGithubLink.target = "_blank";
    projectCardGithubLink.rel = "noopener noreferrer";
    projectCardGithubLink.textContent = "GitHub";

    const projectCardDemoLink = document.createElement("a");
    projectCardDemoLink.className = "terminal-project-card-link";
    projectCardDemoLink.target = "_blank";
    projectCardDemoLink.rel = "noopener noreferrer";
    projectCardDemoLink.textContent = "Live Demo";

    projectCardLinks.appendChild(projectCardGithubLink);
    projectCardLinks.appendChild(projectCardDemoLink);

    projectCard.appendChild(projectCardTitle);
    projectCard.appendChild(projectCardDescription);
    projectCard.appendChild(projectCardFeaturesLabel);
    projectCard.appendChild(projectCardFeatures);
    projectCard.appendChild(projectCardStackLabel);
    projectCard.appendChild(projectCardStack);
    projectCard.appendChild(projectCardLinksLabel);
    projectCard.appendChild(projectCardLinks);
    projectCard.appendChild(projectCardImage);

    projectBrowser.appendChild(projectBrowserHeader);
    projectBrowser.appendChild(projectCard);

    const skillBrowser = document.createElement("section");
    skillBrowser.className = "terminal-skills-browser";
    skillBrowser.hidden = true;

    const skillBrowserHeader = document.createElement("div");
    skillBrowserHeader.className = "terminal-project-browser-header";

    const skillBrowserTitle = document.createElement("p");
    skillBrowserTitle.className = "terminal-title";
    skillBrowserTitle.textContent = "Skills Browser";

    const skillBrowserCount = document.createElement("p");
    skillBrowserCount.className = "terminal-project-browser-count";

    const skillBrowserControls = document.createElement("div");
    skillBrowserControls.className = "terminal-project-browser-controls";

    const prevSkillButton = document.createElement("button");
    prevSkillButton.type = "button";
    prevSkillButton.className = "terminal-project-nav-button";
    prevSkillButton.textContent = "Prev";

    const nextSkillButton = document.createElement("button");
    nextSkillButton.type = "button";
    nextSkillButton.className = "terminal-project-nav-button";
    nextSkillButton.textContent = "Next";

    skillBrowserControls.appendChild(prevSkillButton);
    skillBrowserControls.appendChild(nextSkillButton);
    skillBrowserHeader.appendChild(skillBrowserTitle);
    skillBrowserHeader.appendChild(skillBrowserCount);
    skillBrowserHeader.appendChild(skillBrowserControls);

    const skillCard = document.createElement("article");
    skillCard.className = "terminal-project-card";

    const skillCardTitle = document.createElement("h3");
    skillCardTitle.className = "terminal-block-title";
    skillCardTitle.textContent = "Proficiency";

    const skillCardDescription = document.createElement("p");
    skillCardDescription.className = "terminal-project-card-description";
    skillCardDescription.textContent = "A quick snapshot of the technologies I use most often and how comfortable I am with each one.";

    const skillBars = document.createElement("div");
    skillBars.className = "terminal-skill-bars";

    skillCard.appendChild(skillCardTitle);
    skillCard.appendChild(skillCardDescription);
    skillCard.appendChild(skillBars);

    skillBrowser.appendChild(skillBrowserHeader);
    skillBrowser.appendChild(skillCard);

    container.appendChild(banner);
    container.appendChild(terminal);
    container.appendChild(projectBrowser);
    container.appendChild(skillBrowser);

    const commandHistory = [];
    let historyIndex = -1;
    let pendingInput = "";
    let currentProjectIndex = 0;
    let currentSkillCategoryIndex = 0;

    const renderSkillCard = () => {
        const category = SKILL_CATEGORIES[currentSkillCategoryIndex];
        skillBrowserCount.textContent = `${currentSkillCategoryIndex + 1}/${SKILL_CATEGORIES.length}`;
        skillCardTitle.textContent = category.title;
        skillCardDescription.textContent = category.description;

        skillBars.innerHTML = "";

        category.items.forEach((skill) => {
            const skillRow = document.createElement("div");
            skillRow.className = "terminal-skill-row";

            const skillMeta = document.createElement("div");
            skillMeta.className = "terminal-skill-meta";

            const skillName = document.createElement("span");
            skillName.className = "terminal-skill-name";
            skillName.textContent = skill.name;

            const skillValue = document.createElement("span");
            skillValue.className = "terminal-skill-value";
            skillValue.textContent = `${skill.level}%`;

            const progressTrack = document.createElement("div");
            progressTrack.className = "terminal-skill-progress-track";

            const totalBars = 10;
            const activeBars = Math.floor(skill.level / 10);

            for (let index = 0; index < totalBars; index += 1) {
                const bar = document.createElement("span");
                bar.className = "terminal-skill-progress-bar";

                if (index < activeBars) {
                    bar.classList.add("is-active");
                }

                progressTrack.appendChild(bar);
            }

            skillMeta.appendChild(skillName);
            skillMeta.appendChild(skillValue);
            skillRow.appendChild(skillMeta);
            skillRow.appendChild(progressTrack);
            skillBars.appendChild(skillRow);
        });
    };

    const renderProjectCard = () => {
        const project = PROJECT_CARDS[currentProjectIndex];
        projectBrowserCount.textContent = `${currentProjectIndex + 1}/${PROJECT_CARDS.length}`;
        projectCardTitle.textContent = project.title;
        projectCardDescription.textContent = project.description;

        projectCardFeatures.innerHTML = "";
        project.features.forEach((feature) => {
            const featureItem = document.createElement("li");
            featureItem.textContent = feature;
            projectCardFeatures.appendChild(featureItem);
        });

        projectCardStack.innerHTML = "";
        project.stack.forEach((stackItem) => {
            const stackTag = document.createElement("span");
            stackTag.className = "terminal-project-card-stack-tag";
            stackTag.textContent = stackItem;
            projectCardStack.appendChild(stackTag);
        });

        projectCardImage.src = project.screenshot;
        projectCardImage.alt = project.screenshotAlt;
        projectCardGithubLink.href = project.githubUrl;
        projectCardDemoLink.href = project.demoUrl;
    };

    const showProjectBrowser = () => {
        projectBrowser.hidden = false;
        renderProjectCard();
        centerTerminalViewport();
    };

    const hideProjectBrowser = () => {
        projectBrowser.hidden = true;
    };

    const showSkillBrowser = () => {
        skillBrowser.hidden = false;
        renderSkillCard();
        centerTerminalViewport();
    };

    const hideSkillBrowser = () => {
        skillBrowser.hidden = true;
    };

    const centerTerminalViewport = () => {
        requestAnimationFrame(() => {
            terminal.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    };

    prevSkillButton.addEventListener("click", () => {
        currentSkillCategoryIndex = currentSkillCategoryIndex === 0 ? SKILL_CATEGORIES.length - 1 : currentSkillCategoryIndex - 1;
        renderSkillCard();
    });

    nextSkillButton.addEventListener("click", () => {
        currentSkillCategoryIndex = currentSkillCategoryIndex === SKILL_CATEGORIES.length - 1 ? 0 : currentSkillCategoryIndex + 1;
        renderSkillCard();
    });

    prevProjectButton.addEventListener("click", () => {
        currentProjectIndex = currentProjectIndex === 0 ? PROJECT_CARDS.length - 1 : currentProjectIndex - 1;
        renderProjectCard();
    });

    nextProjectButton.addEventListener("click", () => {
        currentProjectIndex = currentProjectIndex === PROJECT_CARDS.length - 1 ? 0 : currentProjectIndex + 1;
        renderProjectCard();
    });

    const appendCommandLine = (text) => {
        const row = document.createElement("p");
        row.className = "terminal-line terminal-line-command";
        
        const promptSpan = document.createElement("span");
        promptSpan.className = "terminal-command-prompt";
        promptSpan.textContent = "visitor@portfolio:~$ ";
        
        const commandSpan = document.createElement("span");
        commandSpan.className = "terminal-command-text";
        commandSpan.textContent = text;
        
        row.appendChild(promptSpan);
        row.appendChild(commandSpan);
        output.appendChild(row);
    };

    const appendResponseBlock = (title, lines, type = "response") => {
        const block = document.createElement("div");
        block.className = `terminal-block terminal-block-${type}`;

        if (title) {
            const heading = document.createElement("p");
            heading.className = "terminal-block-title";
            heading.textContent = title;
            block.appendChild(heading);
        }

        lines.forEach((lineText) => {
            const line = document.createElement("p");
            line.className = "terminal-line";

            if (type === "help" && lineText === "Available commands:") {
                line.classList.add("terminal-line-help");
            }

            if (title === "About" && lineText.trim().startsWith(">")) {
                const aboutMarker = document.createElement("span");
                aboutMarker.className = "terminal-about-marker";
                aboutMarker.textContent = "> ";

                const aboutText = document.createElement("span");
                aboutText.textContent = lineText.trim().slice(1).trimStart();

                line.appendChild(aboutMarker);
                line.appendChild(aboutText);
            } else {
                line.textContent = lineText;
            }

            block.appendChild(line);
        });

        output.appendChild(block);
        output.scrollTop = output.scrollHeight;
    };

    const appendSocialMediaBlock = () => {
        const block = document.createElement("div");
        block.className = "terminal-block terminal-block-social";

        const heading = document.createElement("p");
        heading.className = "terminal-block-title";
        heading.textContent = "Social Media";
        block.appendChild(heading);

        SOCIAL_LINKS.forEach((entry) => {
            const line = document.createElement("p");
            line.className = "terminal-line terminal-line-social";

            const icon = document.createElement("span");
            icon.className = "terminal-social-icon";
            icon.setAttribute("aria-hidden", "true");

            const iconGlyph = document.createElement("i");
            iconGlyph.className = entry.iconClass;
            icon.appendChild(iconGlyph);

            const label = document.createElement("span");
            label.className = "terminal-social-label";
            label.textContent = `${entry.label}: `;

            const link = document.createElement("a");
            link.className = "terminal-social-link";
            link.href = entry.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = entry.url;

            line.appendChild(icon);
            line.appendChild(label);
            line.appendChild(link);
            block.appendChild(line);
        });

        output.appendChild(block);
        output.scrollTop = output.scrollHeight;
    };

    const runCommand = (rawValue) => {
        const command = normalizeCommand(rawValue);

        if (!command) {
            return;
        }

        appendCommandLine(command);

        if (command === "clear") {
            output.innerHTML = "";
            hideProjectBrowser();
            hideSkillBrowser();
            appendResponseBlock("Welcome", [
                "Terminal portfolio initialized.",
                "Type 'help' to view all commands.",
            ]);
            return;
        }

        if (command === "help") {
            appendResponseBlock("Help", HELP_LINES, "help");
            return;
        }

        const aliasMap = {
            social: "social media",
            "social-media": "social media",
            socialmedia: "social media",
        };

        const resolvedCommand = aliasMap[command] || command;
        const commandData = COMMAND_CONTENT[resolvedCommand];

        if (!commandData) {
            hideProjectBrowser();
            hideSkillBrowser();
            appendResponseBlock("Unknown command", ["Type 'help' to view available commands."], "error");
            return;
        }

        if (resolvedCommand === "social media") {
            hideProjectBrowser();
            hideSkillBrowser();
            appendSocialMediaBlock();
            return;
        }

        if (resolvedCommand === "projects") {
            currentProjectIndex = 0;
            showProjectBrowser();
            hideSkillBrowser();
        } else if (resolvedCommand === "skills") {
            currentSkillCategoryIndex = 0;
            showSkillBrowser();
            hideProjectBrowser();
        } else {
            hideProjectBrowser();
            hideSkillBrowser();
        }

        appendResponseBlock(commandData.title, commandData.lines);
    };

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const rawInput = input.value;
        const normalized = normalizeCommand(rawInput);

        runCommand(rawInput);

        if (normalized) {
            centerTerminalViewport();
        }

        if (normalized && commandHistory[commandHistory.length - 1] !== normalized) {
            commandHistory.push(normalized);
            historyIndex = -1;
            pendingInput = "";
        }

        input.value = "";
    });

    input.addEventListener("keydown", (event) => {
        if (!commandHistory.length) {
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();

            if (historyIndex === -1) {
                pendingInput = input.value;
                historyIndex = commandHistory.length - 1;
            } else if (historyIndex > 0) {
                historyIndex -= 1;
            }

            input.value = commandHistory[historyIndex];
            input.setSelectionRange(input.value.length, input.value.length);
            return;
        }

        if (event.key === "ArrowDown" && historyIndex !== -1) {
            event.preventDefault();

            if (historyIndex < commandHistory.length - 1) {
                historyIndex += 1;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = -1;
                input.value = pendingInput;
            }

            input.setSelectionRange(input.value.length, input.value.length);
        }
    });

    appendResponseBlock("Welcome", [
        "Terminal portfolio initialized.",
        "Type 'help' to view all commands.",
    ]);

    input.focus();

    return container;
}