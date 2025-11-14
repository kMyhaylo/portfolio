// 1. Всі дані з 'main.py' тепер зберігаються тут, в JavaScript
const portfolioData = {
    profile: {
        "name": "Myhaylo Koltun",
        "title": "Python Developer",
        "bio": "Computer Science student at National University 'Lviv Polytechnic' with strong passion for Python development and web technologies.",
        "location": "Lviv, Ukraine"
    },
    hard_skills: [
        {"name": "Python", "level": "Intermediate", "experience": "1+ year"},
        {"name": "Django", "level": "Beginner-Intermediate", "experience": "6 months"},
        {"name": "MySQL/SQL", "level": "Intermediate", "experience": "6 months"},
        {"name": "JavaScript", "level": "Beginner-Intermediate", "experience": "1 year"},
        {"name": "HTML/CSS", "level": "Intermediate", "experience": "1 year"},
        {"name": "FastAPI", "level": "Beginner", "experience": "Learning"},
        {"name": "OOP & Design Patterns", "level": "Intermediate", "experience": "1 year"},
        {"name": "Git/GitHub", "level": "Intermediate", "experience": "1+ year"}
    ],
    soft_skills: [
        "Effective Communication",
        "Hardworking & Responsible",
        "Quick Learning & Adaptability",
        "Strong Motivation",
        "Problem-Solving",
        "Team Collaboration"
    ],
    projects: [
        {
            "title": "AutoGalaxy: Rental Cars Website",
            "description": "Full-stack Django application for car reservations with user authentication, profile management",
            "technologies": ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            "title": "Data Analysis Projects",
            "description": "Academic projects focusing on Big Data concepts including data preprocessing, analysis, and visualization",
            "technologies": ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization"]
        },
        {
            "title": "API Integration Projects",
            "description": "Various projects implementing OOP principles, design patterns, file handling, and external API integration",
            "technologies": ["Python", "OOP", "REST APIs", "JSON/CSV"]
        },
        {
            "title": "Personal Portfolio",
            "description": "Modern portfolio website built with FastAPI backend and responsive frontend",
            "technologies": ["FastAPI", "Python", "HTML", "CSS", "JavaScript"]
        }
    ],
    contact: {
        "phone": "+380 98 250 45 76",
        "email": "myhaylo.koltun@gmail.com",
        "github": "https://github.com/Myhaylo17",
        "linkedin": "https://www.linkedin.com/in/михайло-колтун-049ba1362/"
    },
    education: {
        "institution": "National University 'Lviv Polytechnic'",
        "specialization": "Computer Science",
        "period": "2023 - Present",
        "status": "Current Student"
    }
};

// 2. Функція 'loadPortfolio' тепер не 'async' і бере дані з локального об'єкта
function loadPortfolio() {
    try {
        // Ми просто використовуємо локальний об'єкт 'portfolioData'
        const data = portfolioData;

        // Profile
        document.getElementById('name').textContent = data.profile.name;
        document.getElementById('title').textContent = data.profile.title;
        document.getElementById('bio').textContent = data.profile.bio;

        // Education
        const edu = data.education;
        document.getElementById('education').innerHTML = `
            <h3 style="margin-bottom: 10px;">${edu.institution}</h3>
            <p><strong>Спеціальність:</strong> ${edu.specialization}</p>
            <p><strong>Період:</strong> ${edu.period}</p>
            <p><strong>Статус:</strong> ${edu.status}</p>
        `;

        // Hard Skills
        const hardSkillsHTML = data.hard_skills.map(skill => `
            <div class="skill-card">
                <div class="skill-name">${skill.name}</div>
                <div><strong>Рівень:</strong> ${skill.level}</div>
                <div><strong>Досвід:</strong> ${skill.experience}</div>
            </div>
        `).join('');
        document.getElementById('hard-skills').innerHTML = hardSkillsHTML;

        // Soft Skills
        const softSkillsHTML = data.soft_skills.map(skill => `
            <div class="soft-skill-item">${skill}</div>
        `).join('');
        document.getElementById('soft-skills').innerHTML = softSkillsHTML;

        // Projects
        const projectsHTML = data.projects.map(project => `
            <div class="project-card">
                <div class="project-title">${project.title}</div>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech =>
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `).join('');
        document.getElementById('projects').innerHTML = projectsHTML;

        // Contact
        const contactHTML = `
            <div class="contact-item">
                <h3>📱 Телефон</h3>
                <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
            </div>
            <div class="contact-item">
                <h3>✉️ Email</h3>
                <a href="mailto:${data.contact.email}">${data.contact.email}</a>
            </div>
            <div class="contact-item">
                <h3>💼 GitHub</h3>
                <a href="${data.contact.github}" target="_blank">Переглянути профіль</a>
            </div>
            <div class="contact-item">
                <h3>🔗 LinkedIn</h3>
                <a href="${data.contact.linkedin}" target="_blank">Переглянути профіль</a>
            </div>
        `;
        document.getElementById('contact').innerHTML = contactHTML;

        // Show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';

    } catch (error) {
        console.error('Error loading portfolio:', error);
        document.getElementById('loading').textContent = 'Помилка завантаження. Спробуйте оновити сторінку.';
    }
}

// 3. Викликаємо функцію. Оскільки скрипт завантажується в кінці <body>,
// DOM на цей момент вже буде готовий.
loadPortfolio();