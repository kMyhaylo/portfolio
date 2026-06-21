// 1. All data is stored here in JavaScript
const portfolioData = {
    profile: {
        "name": "Myhaylo Koltun",
        "title": "Python Developer",
        "bio": "Computer Science student at National University 'Lviv Polytechnic' with a strong passion for Python development and web technologies.",
        "location": "Lviv, Ukraine"
    },
    experience: [
        {
            "company": "EPAM Systems",
            "role": "EPAM Laboratory",
            "period": "April - Present",
            "description": "Practical development and work on real-world projects within the laboratory environment."
        },
        {
            "company": "EPAM Systems",
            "role": "Internship",
            "period": "February - April",
            "description": "Intensive internship focusing on modern software development practices and methodologies."
        },
        {
            "company": "Kredobank",
            "role": "Monitoring Department",
            "period": "Practical Experience",
            "description": "Educational practice, familiarization with the monitoring processes of banking IT systems."
        },
        {
            "company": "Tsukat",
            "role": "Game Tester",
            "period": "Commercial Experience",
            "description": "VR IT company where I tested games to ensure their quality, performance, and stability."
        }
    ],
    hard_skills: [
        {"name": "Python", "level": "Intermediate", "experience": "1+ year"},
        {"name": "Django", "level": "Beginner-Intermediate", "experience": "6 months"},
        {"name": "FastAPI", "level": "Beginner-Intermediate", "experience": "Learning / Practice"},
        {"name": "MySQL/SQL", "level": "Intermediate", "experience": "6 months"},
        {"name": "JavaScript", "level": "Beginner-Intermediate", "experience": "1 year"},
        {"name": "HTML/CSS", "level": "Intermediate", "experience": "1 year"},
        {"name": "OOP & Design Patterns", "level": "Intermediate", "experience": "1 year"},
        {"name": "Git/GitHub", "level": "Intermediate", "experience": "6 months"},
        {"name": "Docker", "level": "Beginner-Intermediate", "experience": "6 months"},
        {"name": "AWS", "level": "Beginner-Intermediate", "experience": "6 months"}
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
            "title": "Restaurant Service",
            "description": "Development of a restaurant service application. Worked as a Backend Developer to ensure robust business logic and data processing.",
            "technologies": ["Python", "Next.js", "AWS"]
        },
        {
            "title": "Streaming Service",
            "description": "Client-server system designed for media content streaming.",
            "technologies": ["FastAPI", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            "title": "AutoGalaxy: Rental Cars Website",
            "description": "Full-stack Django application for car reservations with user authentication and profile management.",
            "technologies": ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            "title": "Personal Portfolio",
            "description": "Modern portfolio website built with responsive frontend technologies.",
            "technologies": ["Python", "HTML", "CSS", "JavaScript"]
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

// 2. Load Portfolio Function
function loadPortfolio() {
    try {
        const data = portfolioData;

        // Profile
        document.getElementById('name').textContent = data.profile.name;
        document.getElementById('title').textContent = data.profile.title;
        document.getElementById('bio').textContent = data.profile.bio;

        // Education
        const edu = data.education;
        document.getElementById('education').innerHTML = `
            <h3 style="margin-bottom: 10px;">${edu.institution}</h3>
            <p><strong>Specialization:</strong> ${edu.specialization}</p>
            <p><strong>Period:</strong> ${edu.period}</p>
            <p><strong>Status:</strong> ${edu.status}</p>
        `;

        // Experience
        const experienceHTML = data.experience.map(exp => `
            <div class="project-card">
                <div class="project-title">${exp.role} @ ${exp.company}</div>
                <p style="color: #c9a961; margin-bottom: 10px;"><strong>📅 ${exp.period}</strong></p>
                <p>${exp.description}</p>
            </div>
        `).join('');
        document.getElementById('experience').innerHTML = experienceHTML;

        // Hard Skills
        const hardSkillsHTML = data.hard_skills.map(skill => `
            <div class="skill-card">
                <div class="skill-name">${skill.name}</div>
                <div><strong>Level:</strong> ${skill.level}</div>
                <div><strong>Experience:</strong> ${skill.experience}</div>
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
                <h3>📱 Phone</h3>
                <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
            </div>
            <div class="contact-item">
                <h3>✉️ Email</h3>
                <a href="mailto:${data.contact.email}">${data.contact.email}</a>
            </div>
            <div class="contact-item">
                <h3>💼 GitHub</h3>
                <a href="${data.contact.github}" target="_blank">View Profile</a>
            </div>
            <div class="contact-item">
                <h3>🔗 LinkedIn</h3>
                <a href="${data.contact.linkedin}" target="_blank">View Profile</a>
            </div>
        `;
        document.getElementById('contact').innerHTML = contactHTML;

        // Show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';

    } catch (error) {
        console.error('Error loading portfolio:', error);
        document.getElementById('loading').textContent = 'Error loading. Please try refreshing the page.';
    }
}

// 3. Initialize
loadPortfolio();
