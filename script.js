// Lab 5 – CV 2.0: JavaScript DOM

// Task 1: Dark / Light Mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

// Task 2: Show More / Show Less
const aboutToggle = document.getElementById("about-toggle");
const aboutMore = document.getElementById("about-more");

aboutToggle.addEventListener("click", function () {
    const isExpanded = aboutToggle.getAttribute("aria-expanded") === "true";

    aboutMore.hidden = isExpanded;
    aboutToggle.setAttribute("aria-expanded", String(!isExpanded));
    aboutToggle.textContent = isExpanded ? "Show More" : "Show Less";
});

// Task 3: Dynamic Projects
// Each project includes a title, description, category, and technologies.
const projects = [
    {
        title: "Character Scan",
        description:
            "Built the backend of an interactive system for Tech Hub Day using Node.js and Render. Handled real-time data processing and system integration to display participant interactions live during the event.",
        category: "Programming",
        technologies: ["Node.js", "Express", "Render"]
    },
    {
        title: "IELTS Equivalency Request System",
        description:
            "Built an automated workflow for IELTS equivalency requests using a three-tier architecture, with automatic score validation and reliable submission, approval, and status tracking.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript", "Database"]
    },
    {
        title: "Cinema Management System",
        description:
            "Designed a cinema booking system using DFDs, use case, sequence, class, and state diagrams. Features include recommendations, seat upgrades, split payments, and snack pre-ordering.",
        category: "Programming",
        technologies: ["System Analysis", "UML", "Database Design"]
    }
];

const projectList = document.getElementById("project-list");

// This function clears old cards before creating new ones, preventing duplicates.
function renderProjects(category = "All") {
    projectList.innerHTML = "";

    const filteredProjects = category === "All"
        ? projects
        : projects.filter(project => project.category === category);

    filteredProjects.forEach(function (project) {
        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const categoryLabel = document.createElement("p");
        categoryLabel.classList.add("project-category");
        categoryLabel.textContent = project.category;

        const description = document.createElement("p");
        description.textContent = project.description;

        const technologies = document.createElement("p");
        technologies.classList.add("project-technologies");

        const technologiesTitle = document.createElement("strong");
        technologiesTitle.textContent = "Technologies: ";
        technologies.appendChild(technologiesTitle);
        technologies.appendChild(
            document.createTextNode(project.technologies.join(", "))
        );

        card.appendChild(title);
        card.appendChild(categoryLabel);
        card.appendChild(description);
        card.appendChild(technologies);

        projectList.appendChild(card);
    });
}

// Task 4: Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;

        // Update the selected button's visual and accessibility state.
        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
            filterButton.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Reuse the same rendering function for every filter.
        renderProjects(selectedCategory);
    });
});

// Show all projects when the page first loads.
renderProjects();

// Task 5: Print / Save as PDF
const printButton = document.getElementById("print-btn");

printButton.addEventListener("click", function () {
    window.print();
});
