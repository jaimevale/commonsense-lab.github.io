Create a HTML and javascript site of the Common Sense AI Laboratory. 

![[csal_website_prompt]]





---



Create a sophisticated, modern website for the "Common Sense AI Laboratory" using XHTML and advanced JavaScript. The site should embody cutting-edge web design principles while maintaining professional elegance suitable for an AI research institution.

## Design Reference and Inspiration
Use https://www.paralaconfianza.org/ as the primary design reference, specifically incorporating:
- **Animation Style**: use the same user experience
- **Color Palette**: Professional yet engaging color scheme
- **Typography**: Sans-serif headers like “IvyMode” font or “Neue Swiss” or “Work Sans”, readable body text
- **Navigation**: Intuitive, responsive navigation patterns. Use rectangular Cards to make a frame to each information
- **Interactive Elements**: Subtle hover effects and micro-interactions

## Content Structure
Use following titles  in the “2025-06-12-CommonSenseIA-lab.md” 

1\. Mission Statement
2\. Vision, Values, and Governance
3\. Open Collaboration
4\. Working Topics
5\. Lab Structure and Roadmap
6\. Milestones & Timeline
7\. Impact Assessment & Continuous Learning

the  pages are horizontal containers with scroll to the right or to the left, following the theme of https://www.paralaconfianza.org/ 

Each page shows the information in the “2025-06-12-CommonSenseIA-lab.md”, not use external information to create the text. Each page need to have a background image with como relation to the title. Look for background images in internet but not obstructive or distractive, some pale images as act like identificator of the container but take care of not to degrade the capability to read the text. Be sure each page has a image background download the image to avoid 404 of remote images.
When the page has more than the pixels shown in one page include vertical scroll in the container to allow the user can navigate from top to down in the container.

1. Home Page
the home page shows the 1\. Mission Statement and the 8\. Summary content in two cards (with little rounded) include a button to the  Working Topics Page

2. Vision, Values, and Governance Page
use 3 cards (same look and feel like the home page cards) each Vision, Values, and Governance from the “2025-06-12-CommonSenseIA-lab.md” 
3. Open Collaboration page
just the text from “2025-06-12-CommonSenseIA-lab.md” 
4. Working Topics Page
    - Interactive project grid/carousel
    - Filtering by category/status
    - Hover animations revealing project details
    - Modal overlays for detailed project information
    - Progress indicators for ongoing projects 
    - Timeline view option
	- **Real-time Filtering**: Filter projects by category (Healthcare, Education, Business)
	- **Project Status Tracking**: Active, Planning, Completed states with progress bars
	- **Modal System**: Detailed project information overlays
	- **Tag System**: Technology and category tagging
	- **Timeline View**: Development roadmap with milestone tracking
	All 6 project areas represented with realistic data
	 As the navegation in this page is vertical be sure the page navegation is compatible with the working topic display and navegation. This will be an important page in the site be sure all the information and the detail of each topic is reacheable to the users. 

5. Lab Structure and Roadmap Page.
Use 3 cards, the **R\&D Phases** card create a animation. Use vertical icons for each phase 
6. Milestones & Timeline Page
Timeline based on your Q2 2025 - Q4 2026 roadmap. Use a vertical timeline representation using a modern javascript tool starting for the first Q2 2025. Use a card with animation for each Q . The card need to have as title the text of the milestone and create a text to explain the scope of the milestone. use a icon  of checked in the milestones in the past and background green. For the task in future use pink as background. In the actual Q (Q3 2025) show a running man icon and background yellow. create a dynamic and elegant timeline with the milestones
7.  Impact Assessment & Continuous Learning Page
Include a first card with the three bullets of the test and a second card with a form to suscribe to next workshop. Ask for Full name and email, connect that with a google form
8. Contact form with validation and feedback Page
Create a form to receive comments and interest notes.

### Advanced JavaScript Frameworks/Libraries to Consider

- **Animation Libraries**: GSAP, Framer Motion, or AOS (Animate On Scroll)
- **UI Components**: Custom components with vanilla JS or lightweight framework
- **Smooth Scrolling**: Locomotive Scroll or similar
- **Particle Effects**: Three.js for subtle background elements
- **Loading Animations**: Custom preloaders and transitions

## Dynamic Projects Presentation Requirements

### Interactive Features

- **Grid/Card Layout**: Masonry or CSS Grid with smooth transitions
- **Filtering System**: Real-time filtering by project type, status, or technology
- **Search Functionality**: Live search through project titles and descriptions
- **Sorting Options**: By date, alphabetical, or project phase
- **Animation States**:
    - Idle state with subtle animations
    - Hover state with enhanced details
    - Active/selected state with expanded information

### Project Card Elements

- Project title and brief description
- Status indicators (Active, Completed, Planning, etc.)
- Technology tags with color coding
- Progress bars for ongoing projects
- Team member avatars
- Timeline/milestone indicators
- Links to detailed project pages or repositories

### Advanced Interactions

- **Modal System**: Detailed project overlays
- **Timeline View**: Chronological project progression
- **Category Clustering**: Visual grouping of related projects
- **Drag-and-Drop**: Optional project organization interface

## Performance and Optimization

### Technical Excellence

- **Loading Performance**: Lazy loading, code splitting, optimized assets
- **Smooth Animations**: 60fps animations, hardware acceleration
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation
- **SEO Optimization**: Semantic markup, meta tags, structured data
- **Cross-Browser Compatibility**: Modern browsers with graceful degradation

### Advanced Features

- **Progressive Web App**: Service worker, offline functionality
- **Dark/Light Mode**: Theme switching with smooth transitions
- **Internationalization**: Multi-language support structure
- **Analytics Integration**: User interaction tracking

## Design Aesthetics

### Visual Language

- **Modern Minimalism**: Clean, uncluttered design
- **Professional Color Scheme**: Blues, grays, whites with strategic accent colors
- **Typography**: Sans-serif headers like “IvyMode” font or “Neue Swiss” or “Work Sans”, readable body text
- **Spacing**: Generous whitespace, consistent rhythm
- **Visual Hierarchy**: Clear information architecture

### Animation Philosophy

- **Purposeful Motion**: Animations that guide user attention
- **Smooth Transitions**: Seamless state changes
- **Loading States**: Elegant loading animations and skeletons
- **Micro-interactions**: Subtle feedback for user actions