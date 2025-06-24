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
    const projects = [{"id":1,"title":"AI for Clinical History Management","category":"Healthcare","status":"Active","progress":10,"description":"This project focuses on the development of an advanced AI-driven system for the intelligent management of clinical histories. It aims to overcome the challenges of unstructured data in healthcare, such as SOAP notes, by employing Large Language Models (LLMs) and semantic search technologies. The core objective is to create a dynamic knowledge layer over patient data, utilizing graph databases to map complex relationships and ensure robust data interoperability. This will facilitate sophisticated querying for diagnostic support and clinical research, while rigorously adhering to data privacy protocols and healthcare compliance standards.","technologies":["LLM","SOAP Notes","Semantic Search","Data Privacy","Healthcare Compliance","Graph Databases"]},{"id":2,"title":"AI assisted tool to Learning and Training for Medical Professionals","category":"Healthcare","status":"Planning","progress":5,"description":"This initiative constitutes a formal investigation into the pedagogical applications of generative AI within medical education. The project will evaluate the efficacy of an AI-assisted adaptive learning platform designed to enhance the training of medical professionals. By leveraging specialized LLMs such as MedGemma, the system will generate personalized learning trajectories and provide real-time, context-aware feedback. The research will critically assess how cutting-edge AI models that process medical text and imagery can be used to create immersive and effective training modules, with a foundational analysis of the ethical considerations inherent in AI-mediated professional development [1, 2].","technologies":["LLMs","Generative AI","AI Ethics","MedGemma","AI Engineering"]},{"id":3,"title":"Onboarding of Employee and Reskilling","category":"Education","status":"Active","progress":10,"description":"This research initiative is dedicated to mitigating knowledge deficits and accelerating the organizational assimilation of new personnel within medium to large enterprises. The project evaluates the efficacy of LLM-powered adaptive tutoring systems in creating personalized and efficient onboarding and reskilling pathways. A central focus is the development and validation of sophisticated prompt engineering strategies and AI-driven pedagogical frameworks to optimize knowledge transfer. The study also incorporates a critical examination of the ethical implications surrounding AI-mediated employee training and performance analytics [1, 2].","technologies":["AI Engineering","Prompt Engineering","AI Ethics","LLMs","EEC"]},{"id":4,"title":"LLM Impact & Risk Analysis","category":"Education","status":"Pending","progress":40,"description":"This project undertakes a techno-cognitive analysis of the integration of Large Language Models within corporate educational frameworks. The research aims to systematically quantify the impact of LLMs on employee productivity while investigating associated cognitive risks, such as intellectual dependency and the phenomenon of 'cognitive debt.' The primary scholarly and practical outcome will be the formulation of an empirically-grounded set of guidelines and governance protocols for the responsible, effective, and ethical deployment of LLM technologies in professional development settings [1, 2].","technologies":["Cognitive Science","LLM Analysis","AI Ethics","Productivity Metrics"]},{"id":5,"title":"Software Developer Onboarding","category":"Business","status":"Active","progress":8,"description":"This project involves a systematic survey and development of an AI-augmented ecosystem designed to accelerate the onboarding process for software developers in organizations undergoing digital transformation. The research is centered on architecting intelligent AI agents, manifested as IDE extensions (e.g., for VSCode), which utilize Retrieval-Augmented Generation (RAG) to parse proprietary codebases and GIT repositories. The objective is to deliver a system that provides real-time, contextual support, thereby significantly reducing the ramp-up period and enhancing developer efficacy and integration [1, 2].","technologies":["AI Agents","VSCode Extension","GIT","RAG","LLMs"]},{"id":6,"title":"AI for Unstructured Business Data","category":"Business","status":"Planning","progress":0,"description":"This initiative is focused on architecting an intelligent knowledge management framework to extract actionable insights from heterogeneous, unstructured corporate data sources such as reports, emails, and contracts. By synthesizing Retrieval-Augmented Generation (RAG), vector databases, and knowledge graphs, the project aims to construct a sophisticated semantic search and data analysis layer. A pivotal goal is the seamless integration of this structured intelligence into enterprise systems like Business Process Management Systems (BPMS) and Headless CMS, thereby transforming inert data archives into dynamic assets that drive process automation and strategic decision-making [1, 2].","technologies":["RAG","Vector DB","LLM","Semantic Search","Knowledge Graphs","BPMS","CMS Headless"]},{"id":7,"title":"Mini-pilot AI Tools for Senior Support","category":"Completed","progress":100,"description":"This concluded pilot project encompassed the design, implementation, and empirical assessment of an assistive AI technology tailored for older adults. The research objective was to evaluate the effectiveness of user-centric AI in augmenting the autonomy of seniors in daily activities. The solution employed multimodal interfaces, specifically leveraging voice-driven AI and video capture analysis powered by the Gemini LLM. Foundational to its design was a rigorous application of accessibility engineering principles to ensure high usability and foster adoption within the target demographic, aligning with the lab's mission of creating socially impactful technology [1, 2].","team":["Felipe Valencia USA"],"technologies":["Gemini LLM","Voice AI","Accessibility Tech"]},{"id":8,"title":"AI Tools for Senior Support","category":"Healthcare","status":"Planning","progress":0,"description":"Building upon the empirical findings from the initial mini-pilot, this project will architect a second-generation AI companion for senior care. This planning phase is focused on the conceptual design of a more sophisticated, proactive system utilizing autonomous AI agents and advanced LLMs. The research will investigate methodologies for delivering personalized, context-aware support that extends beyond simple task execution to include cognitive engagement and wellness monitoring. The ultimate aim is to address complex challenges in elder care through a scalable, ethically-grounded technological solution [1, 2].","technologies":["AI Agents","LLMs"]}];

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
            card.innerHTML = `<h4>${project.title}</h4><p>${project.description.substring(0, 100)}...</p><div class="project-tags"><span class="tag category">${project.category}</span>${project.technologies.map(tag => `<span class="tag tech">${tag}</span>`).join('')}</div><div class="status-bar"><div class="status-progress" style="width: ${project.progress}%;"></div></div>`;
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
        document.querySelector('.modal-tags').innerHTML = `<span class="tag category">${project.category}</span> ${project.technologies.map(tag => `<span class="tag tech">${tag}</span>`).join('')}`;
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
