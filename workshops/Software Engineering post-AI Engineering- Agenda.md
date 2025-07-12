Presentation agenda for "Software Engineering Post-AI Engineering" (Ingeniería de software post Ingeniería de IA), drawing on the provided sources:

---

## Presentation Agenda: Software Engineering Post-AI Engineering
### (Ingeniería de software post Ingeniería de IA)

**I. Introduction: A Transformative Era for Software Engineering**
*   **Software is Changing (Again)**: We are at an extremely unique and interesting time to enter the industry, as software is undergoing fundamental shifts, a level of change not seen in 70 years.
*   **The Evolution of Programming Paradigms (Andrej Karpathy's View)**:
    *   **Software 1.0**: The traditional code you write for the computer (e.g., C++ code for Tesla Autopilot).
    *   **Software 2.0**: Neural networks, where the weights of the network program them, created by tuning datasets and running optimizers (e.g., neural networks replacing C++ code in Autopilot, quite literally "eating through the stack"). Hugging Face is seen as the equivalent of GitHub for Software 2.0.
    *   **Software 3.0**: **Large Language Models (LLMs) which are programmable via natural language prompts**, often English, acting as a new kind of computer and programming language. Prompts are now programs that program the LLM.
*   **Our New Role**: As software engineers, we must become **fluent in all three programming paradigms** (1.0, 2.0, and 3.0) and make decisions about where to program functionality.

**II. Understanding LLMs: The New Computer and its Ecosystem**
*   **LLMs as Utilities**: They behave like utilities, with high capital expenditure (capex) for training (like building a grid) and operational expenditure (opex) for serving intelligence via metered API access (like paying per million tokens). When state-of-the-art LLMs go down, it's akin to an "intelligence brownout" globally.
*   **LLMs as Operating Systems**: LLMs are increasingly complex software ecosystems, analogous to operating systems. The LLM is the CPU equivalent, context windows are like memory, and the LLM orchestrates memory and compute for problem-solving.
*   **The Current Era (Circa 1960s Computing)**: LLM compute is very expensive, centralizing them in the cloud, leading to a time-sharing model where we are "thin clients".
*   **Unprecedented Diffusion**: Unlike previous transformative technologies, LLMs are not primarily in the hands of governments and corporations but are broadly accessible to "billions of people instantly and overnight".

**III. The Psychology and Limitations of LLMs: Understanding Our "People Spirits"**
*   **LLMs as Stochastic Simulations of People**: Trained on vast amounts of internet text, they exhibit emergent human-like psychology.
*   **Superpowers**: Encyclopedic knowledge and memory, often surpassing individual human capacity (e.g., remembering vast amounts of information like the character Rainman).
*   **Cognitive Deficits**:
    *   **Hallucination**: They make up information and have an insufficient internal model of self-knowledge.
    *   **Jagged Intelligence**: Superhuman in some domains, yet make basic errors that no human would (e.g., 9.11 > 9.9, "strawberry" with two 'r's).
    *   **Anterograde Amnesia**: They do not natively consolidate knowledge or develop expertise over time; their context windows function as working memory that is "wiped" after each interaction, akin to protagonists in movies like "Memento" or "51st Dates".
    *   **Gullibility and Security Risks**: Susceptible to prompt injection and data leakage.
*   **The Context Window Challenge**:
    *   Despite claims of "million token context windows," their effective performance is often a fraction of that (e.g., Gemini's solid performance up to ~128,000 tokens).
    *   Models struggle to synthesize information across large structured texts because they read text as a string of tokens, not a structure, leading to information loss in the middle.
    *   This is a fundamental limitation: context scales quadratically, making full utilization computationally intensive and hitting "thermodynamic limits" at AGI scales.
    *   Models often exhibit "edge awareness," paying more attention to the beginning and end of a prompt than the middle.
*   **Our Responsibility**: We must learn to program and work around these deficits while leveraging their superhuman capabilities.

**IV. The "Change of Frame": Moving Beyond Simplistic Views (Choudary's Fallacies)**
*   The popular adage "AI won't take your job but someone using AI will" is **technically true but "utterly useless"**. It's a framing error, directing attention to the individual task level when the real shift is happening at the **system level of work**.
*   **Key Fallacies to Overcome**:
    *   **Automation vs. Augmentation**: AI doesn't just replace tasks; it **reshapes the entire architecture of the system** in which tasks make sense. Optimizing within an old frame is rapidly becoming irrelevant.
    *   **Productivity Gains**: Value capture can be decoupled from value creation. Productivity, when tools are widely available, becomes a commodity, and surplus flows to the coordinating layers, not necessarily the worker.
    *   **Static Jobs**: Jobs are not fixed; they are artifacts of organizational design. AI leads to **role redefinition**, where the logic of a job can collapse even if individual tasks remain.
    *   **'Me vs. Someone-Using-AI' Competition**: The logic of competition itself is restructured. We might lose because the environment stops rewarding the skills we are perfecting, rather than being outcompeted directly.
    *   **Workflow Continuity**: Workflows are being reimagined, potentially eliminating steps entirely and rendering existing skills irrelevant. Improving processes that AI will soon eliminate is a misallocation of resources.
    *   **Neutral Tools**: AI is not merely a neutral tool; it **shifts where decisions are made and how execution happens**, thereby redistributing organizational power.
    *   **Stable Salary**: Increased output does not always mean increased pay. Expertise and pay can decouple due to AI augmenting average workers, making high-skilled workers' premiums flatten.
    *   **Stable Firm**: Integrating AI is not just a feature upgrade; it **reorganizes the firm itself**, changing how decisions are made and coordination happens.
*   **Our Role as Software Engineers**: We are responsible for **"taming the AI dragon"** – understanding this powerful technology and helping to control it. This means helping our clients and organizations to **incorporate these systemic changes into their mental models** and understand *why* and *how* to use these technologies effectively.

**V. Navigating the New Frontier: Opportunities and Best Practices**
*   **Building Partial Autonomy Apps**: These apps integrate LLMs, with humans and AI cooperating where AI handles generation and humans perform verification.
    *   **Key Properties**: Context management by LLMs, orchestration of multiple LLMs, **application-specific GUIs** for faster human auditing and visual verification (as reading text is effortful, but looking at visual changes is intuitive).
    *   **The Autonomy Slider**: Products should allow users to tune the amount of autonomy given to the AI, from tap completion to full agentic control. The Iron Man suit analogy: building augmentations is currently more practical than fully autonomous robots.
    *   **Fast Generation-Verification Loop**: It's crucial to make this loop as fast as possible, keeping the AI on a "leash" to avoid overwhelming users with massive diffs (e.g., 10,000 lines of code) that are difficult to audit.
*   **Embracing Agentic AI Patterns & Vibe Coding**:
    *   **Vibe Coding**: A new programming paradigm where developers primarily interact with code-generating LLMs via natural language prompts, disengaging from direct code manipulation. It's an evolution of AI-assisted programming.
    *   **Workflow**: Characterized by iterative goal satisfaction cycles: formulate goal, prompt AI, review, accept/reject, test, identify bugs, refine prompt/manual debug, repeat.
    *   **Prompting**: Blends vague, high-level directives with detailed technical specifications, often incorporating copied errors, code snippets, or external documentation links.
    *   **Debugging**: A hybrid process combining AI assistance (pasting errors for AI to fix) with essential manual practices (visual inspection, browser developer tools).
    *   **The "Vibe"**: Relies on a holistic perception and emergent understanding, a "vibe check" for coherence and order, often through rapid scanning of code diffs and visual cues, rather than line-by-line review.
    *   **Redistribution of Expertise**: Vibe coding does not eliminate the need for programming expertise but **redistributes it towards context management, rapid code evaluation, and strategic decisions** about when to transition between AI-driven and manual code manipulation.
    *   **Trust**: Trust in AI-generated outputs is granular, dynamic, and contingent on vigilant review and verification, not blanket acceptance.
*   **Building for Agents (A New Consumer of Digital Information)**:
    *   Agents are human-like computers that need to interact with our software infrastructure.
    *   **Adapt Infrastructure**: Create `lm.txt` files (like `robots.txt`) for LLMs to understand domains, convert human-oriented documentation to LLM-readable markdown (e.g., replacing "click this" with `curl` commands), and create tools for LLM-friendly data ingestion (e.g., `get ingest` for GitHub repos).
    *   **Meeting LLMs Halfway**: While LLMs may eventually click and navigate GUIs, making information directly accessible to them is currently more efficient and less expensive.

**VI. Conclusion: Embracing Change and Building the Future**
*   **Uncertainty and Discomfort**: The exact nature of software construction in 5 years is unknown, and **change is always painful**. There are no easy solutions.
*   **What We Can Do Today**: Focus on what we *do* know: creating solutions **supported by LLMs and by building with agentic AI patterns**. This includes understanding how to create Agentic AI and leverage Retrieval Augmented Generation (RAG).
*   **The Imperative to Adapt**: We cannot pretend that traditional software engineering practices remain unchanged. **Test-driven development (TDD), APIs, and DevOps pipelines are evolving profoundly**.
*   **Our Responsibility**: It is our responsibility as software engineers to understand and adapt to this shift in how software is created and what "software" even means. We must help mature this new framework and ensure that these powerful, fallible systems are understood and controlled. The next decade will see us "slide that autonomy slider" from left to right, building increasingly autonomous products.

---