const COMMAND_CONTENT = {
    about: {
        title: "About",
        lines: [
            "Frontend developer focused on clean interfaces and practical web experiences.",
            "I enjoy building portfolio sites, dashboards, and responsive landing pages with strong structure.",
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
            "1) Terminal Portfolio - command-driven personal site",
            "2) Responsive Landing Pages - conversion-focused page builds",
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
            "GitHub: https://github.com/your-username",
            "LinkedIn: https://linkedin.com/in/your-profile",
            "X: https://x.com/your-handle",
        ],
    },
};

const HELP_LINES = [
    "Available commands:",
    "about",
    "skills",
    "projects",
    "resume",
    "contact",
    "social media",
    "help",
    "clear",
];

function normalizeCommand(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function createTerminalPortfolioView() {
    const container = document.createElement("section");
    container.className = "terminal-portfolio";
    const bannerImageSrc = new URL("../../img/terminal-portfolio.png", import.meta.url).href;

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
        bannerBorder,
        bannerRow("                     TERMINAL PORTFOLIO"),
        bannerRow("          ____   ___   ____     _    ____    ___    ____"),
        bannerRow("         |  _ \\ / _ \\ |  _ \\   / \\  |  _ \\  / _ \\  / ___|"),
        bannerRow("         | |_) | | | || |_) | / _ \\ | | | || | | | \\___ \\"),
        bannerRow("         |  __/| |_| ||  __/ / ___ \\| |_| || |_| |  ___)|"),
        bannerRow("         |_|    \\___/ |_|   /_/   \\_\\____/  \\___/  |____/"),
        bannerRow(),
        bannerRow("                        >>> POPADOS <<<"),
        bannerBorder,
    ].join("\n");

    const bannerSubtitle = document.createElement("p");
    bannerSubtitle.textContent = "Terminal Console Portfolio";

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

    container.appendChild(banner);
    container.appendChild(terminal);

    const appendCommandLine = (text) => {
        const row = document.createElement("p");
        row.className = "terminal-line terminal-line-command";
        row.textContent = `visitor@portfolio:~$ ${text}`;
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
            line.textContent = lineText;
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
            return;
        }

        if (command === "help") {
            appendResponseBlock("Help", HELP_LINES);
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
            appendResponseBlock("Unknown command", ["Type 'help' to view available commands."], "error");
            return;
        }

        appendResponseBlock(commandData.title, commandData.lines);
    };

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runCommand(input.value);
        input.value = "";
    });

    appendResponseBlock("Welcome", [
        "Terminal portfolio initialized.",
        "Type 'help' to view all commands.",
    ]);

    input.focus();

    return container;
}