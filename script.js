document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });
    
    // --- Navigation Active State on Scroll ---
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.main-nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const navLink = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    
    // --- Working Topics Project Grid ---
    const projects = [
        { title: "AI in Medical Diagnostic Support and Training", description: "Develop AI tools for diagnostic assistance and clinical history management. Create adaptive, immersive training modules for medical professionals.", category: "healthcare", status: "Active", progress: 75, tags: ["AI", "Diagnostic", "Training"] },
        { title: "AI in Education and Reskilling", description: "Build adaptive learning and tutoring systems for onboarding and reskilling of employees. Research the impact and risks of LLMs in educational settings in the company.", category: "education", status: "Active", progress: 60, tags: ["LLM", "Adaptive Learning", "EdTech"] },
        { title: "AI in Onboarding of Software Developers", description: "Automate and personalize onboarding for developers in digitally transforming companies. Survey and evaluate current AI onboarding tools and frameworks.", category: "business", status: "Planning", progress: 25, tags: ["Automation", "DevOps", "HR Tech"] },
        { title: "AI for Unstructured Data in Business Processes", description: "Develop AI-powered semantic search and knowledge management tools for unstructured business data. Evaluate and enhance the use of LLMs and deep search in enterprise environments.", category: "business", status: "Active", progress: 85, tags: ["Semantic Search", "NLP", "Enterprise AI"] },
        { title: "AI Tools for Senior Support", description: "Design and pilot AI solutions to assist seniors in high-tech environments, focusing on usability and accessibility.", category: "healthcare", status: "Completed", progress: 100, tags: ["Accessibility", "UX/UI", "Senior Care"] }
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
            card.innerHTML = `<h4>${project.title}</h4><p>${project.description.substring(0, 100)}...</p><div class="project-tags"><span class="tag category">${project.category}</span>${project.tags.map(tag => `<span class="tag tech">${tag}</span>`).join('')}</div><div class="status-bar"><div class="status-progress" style="width: ${project.progress}%;"></div></div>`;
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
        document.querySelector('.modal-tags').innerHTML = `<span class="tag category">${project.category}</span> ${project.tags.map(tag => `<span class="tag tech">${tag}</span>`).join('')}`;
        const progressBar = document.querySelector('.modal .progress-bar');
        modal.classList.add('show');
        setTimeout(() => progressBar.style.width = `${project.progress}%`, 100);
    }

    closeBtn.onclick = () => { modal.classList.remove('show'); document.querySelector('.modal .progress-bar').style.width = '0%'; }
    window.onclick = (e) => { if (e.target == modal) { modal.classList.remove('show'); document.querySelector('.modal .progress-bar').style.width = '0%'; } }
    displayProjects();

    // --- Milestones & Timeline with GSAP ---
    gsap.registerPlugin(ScrollTrigger);
    const timelineData = [
        { date: "Q2 2025", text: "Finalize vision, recruit core team", desc: "Lay the foundational strategy and bring together the initial experts to guide the lab's direction.", status: "past" },
        { date: "Q3 2025", text: "Establish partnerships, launch initial research projects", desc: "Form key alliances with academic and industry partners to kickstart the first wave of research initiatives.", status: "present" },
        { date: "Q4 2025", text: "Develop first prototypes, conduct stakeholder workshops", desc: "Translate research concepts into tangible early-stage models and engage with stakeholders for initial validation.", status: "future" },
        { date: "Q1 2026", text: "Pilot deployments, collect feedback, iterate solutions", desc: "Deploy initial solutions in real-world settings with partners, gathering critical data to refine and improve.", status: "future" },
        { date: "Q2 2026", text: "Set up infrastructure leveraging Colombian tech parks", desc: "Build out the technical backbone of the lab by integrating with national technology platforms for scalability.", status: "future" },
        { date: "Q3 2026", text: "Evaluate pilot results, expand educational and business data research", desc: "Analyze the outcomes from pilot programs and broaden the scope of research in key focus areas.", status: "future" },
        { date: "Q4 2026", text: "Publish research, host public demo day, refine ethical guidelines", desc: "Share findings with the public, showcase successful projects, and formalize a long-term sustainability plan.", status: "future" }
    ];

    const timelineContainer = document.getElementById('timeline');
    const icons = { past: 'fa-check', present: 'fa-person-running', future: 'fa-hourglass-start' };
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item status-${item.status}`;
        timelineItem.innerHTML = `<div class="timeline-icon"><i class="fas ${icons[item.status]}"></i></div><div class="timeline-card"><div class="timeline-date">${item.date}</div><h4>${item.text}</h4><p>${item.desc}</p></div>`;
        timelineContainer.appendChild(timelineItem);
    });

    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, { x: -100, opacity: 0, duration: 1, scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' } });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const feedbackEl = document.getElementById('form-feedback');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (contactForm.checkValidity()) {
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
