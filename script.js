document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });
    
    // --- Navigation Active State on Scroll ---
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.main-nav a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Section is 50% in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const navLink = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // --- Working Topics Project Grid ---
    const projects = [
        { title: "AI in Medical Diagnostic Support", description: "Develop AI tools for diagnostic assistance and clinical history management. Create adaptive, immersive training modules for medical professionals.[1]", category: "healthcare", status: "Active", progress: 75, tags: ["AI", "Diagnostic", "Training"] },
        { title: "AI in Education and Reskilling", description: "Build adaptive learning systems for employee onboarding and reskilling. Research impacts of LLMs in educational settings.[1]", category: "education", status: "Active", progress: 60, tags: ["LLM", "Adaptive Learning", "EdTech"] },
        { title: "AI in Onboarding of Software Developers", description: "Automate and personalize onboarding for developers in digitally transforming companies. Survey and evaluate current AI onboarding tools.[1]", category: "business", status: "Planning", progress: 25, tags: ["Automation", "DevOps", "HR Tech"] },
        { title: "AI for Unstructured Data in Business", description: "Develop AI-powered semantic search and knowledge management tools for unstructured business data. Evaluate LLMs in enterprise environments.[1]", category: "business", status: "Active", progress: 85, tags: ["Semantic Search", "NLP", "Enterprise AI"] },
        { title: "AI Tools for Senior Support", description: "Design and pilot AI solutions to assist seniors in high-tech environments, focusing on usability and accessibility.[1]", category: "healthcare", status: "Completed", progress: 100, tags: ["Accessibility", "UX/UI", "Senior Care"] },
        { title: "Educational AI Tool Design", description: "Design tools specifically for trainers to enhance knowledge transfer and improve training efficiency across various domains.[1]", category: "education", status: "Planning", progress: 15, tags: ["EdTech", "Training Tools", "AI"] }
    ];

    const projectGrid = document.querySelector('.project-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');

    function displayProjects(filter = 'all') {
        projectGrid.innerHTML = '';
        const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description.substring(0, 100)}...</p>
                <div class="project-tags">
                    <span class="tag category">${project.category}</span>
                    ${project.tags.map(tag => `<span class="tag tech">${tag}</span>`).join('')}
                </div>
                <div class="status-bar">
                    <div class="status-progress" style="width: ${project.progress}%;"></div>
                </div>
            `;
            card.addEventListener('click', () => openModal(project));
            projectGrid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProjects(btn.dataset.filter);
        });
    });
    
    function openModal(project) {
        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-description').innerText = project.description;
        document.querySelector('.modal-tags').innerHTML = `
            <span class="tag category">${project.category}</span>
            ${project.tags.map(tag => `<span class="tag tech">${tag}</span>`).join('')}
        `;
        const progressBar = document.querySelector('.modal .progress-bar');
        modal.classList.add('show');
        setTimeout(() => {
            progressBar.style.width = `${project.progress}%`;
        }, 100);
    }

    closeBtn.onclick = () => {
        modal.classList.remove('show');
        document.querySelector('.modal .progress-bar').style.width = '0%';
    }
    window.onclick = (e) => {
        if (e.target == modal) {
            modal.classList.remove('show');
            document.querySelector('.modal .progress-bar').style.width = '0%';
        }
    }
    displayProjects();


    // --- Milestones & Timeline with GSAP ---
    gsap.registerPlugin(ScrollTrigger);
    const timelineData = [
        { date: "Q2 2025", text: "Finalize vision, recruit core team", status: "past" },
        { date: "Q3 2025", text: "Establish partnerships, launch initial research projects", status: "present" },
        { date: "Q4 2025", text: "Develop first prototypes, conduct stakeholder workshops", status: "future" },
        { date: "Q1 2026", text: "Pilot deployments, collect feedback, iterate solutions", status: "future" },
        { date: "Q2 2026", text: "Set up infrastructure leveraging Colombian tech parks and universities", status: "future" },
        { date: "Q3 2026", text: "Evaluate pilot results, expand educational and business data research", status: "future" },
        { date: "Q4 2026", text: "Publish research, host public demo day, and refine ethical guidelines", status: "future" }
    ];

    const timelineContainer = document.getElementById('timeline');
    const icons = { past: 'fa-check', present: 'fa-person-running', future: 'fa-hourglass-start' };
    
    timelineData.forEach(item => {
        const desc = {
            "Q2 2025": "Lay the foundational strategy and bring together the initial experts to guide the lab's direction.[1]",
            "Q3 2025": "Form key alliances with academic and industry partners to kickstart the first wave of research initiatives.[1]",
            "Q4 2025": "Translate research concepts into tangible early-stage models and engage with stakeholders for initial validation.[1]",
            "Q1 2026": "Deploy initial solutions in real-world settings with partners, gathering critical data to refine and improve.[1]",
            "Q2 2026": "Build out the technical backbone of the lab by integrating with national technology platforms for scalability.[1]",
            "Q3 2026": "Analyze the outcomes from pilot programs and broaden the scope of research in key focus areas.[1]",
            "Q4 2026": "Share findings with the public, showcase successful projects, and formalize a long-term sustainability plan.[1]"
        };

        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item status-${item.status}`;
        timelineItem.innerHTML = `
            <div class="timeline-icon"><i class="fas ${icons[item.status]}"></i></div>
            <div class="timeline-card">
                <div class="timeline-date">${item.date}</div>
                <h4>${item.text}</h4>
                <p>${desc[item.date]}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // GSAP Animations for Timeline (Simplified for vertical scroll)
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const feedbackEl = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        if (name && email && message) {
            feedbackEl.textContent = 'Thank you for your message!';
            feedbackEl.style.color = '#4caf50';
            contactForm.reset();
        } else {
            feedbackEl.textContent = 'Please fill out all fields.';
            feedbackEl.style.color = '#e91e63';
        }
        setTimeout(() => feedbackEl.textContent = '', 3000);
    });
});
