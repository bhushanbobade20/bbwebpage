import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  Bookmark,
  Brain,
  BriefcaseBusiness,
  Building2,
  BarChart3,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Server,
  Sparkles,
  Users,
  UserRound,
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const resumeUrl = `${baseUrl}images/BhushanBobade_Resume_April-2025_1p.pdf`;

const profile = {
  name: 'Bhushan Bobade',
  handle: '@bhushanbobade20',
  role: 'Assistant Manager at Deloitte USI | Full Stack Web Developer | Driving Digital Innovation',
  current: 'Assistant Manager at Deloitte USI',
  location: 'Hyderabad, India',
  phone: '+91-7776923123',
  email: 'bhushanbobade7@gmail.com',
  avatarImage: './images/bhushan-avatar.jpg',
  heroImage: './images/bhushanbobade.jpg',
};

const links = {
  mail: `mailto:${profile.email}`,
  phone: 'tel:+917776923123',
  linkedin: 'https://www.linkedin.com/in/bhushan-bobade/',
  github: 'https://github.com/bhushanbobade20',
};

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '20+', label: 'GitHub Repositories' },
  { value: '2025', label: 'Joined Deloitte USI' },
];

const companies = ['Deloitte USI', 'Capgemini', 'Hurix', 'Yardi', 'Brainstorm Force', 'Tech4em'];

const heroSummary = [
  'Senior Full Stack Web Developer with 10+ years of experience delivering scalable, high-performance web applications for enterprise and internal platforms.',
  'Adept in modern full-stack ecosystems (React, Node.js, Laravel) and enterprise CMS (AEM, SharePoint, WordPress). Strong expertise in diverse databases, CI/CD, cloud architecture, and AI-driven development.',
];

const profileHighlights = [
  {
    icon: Code2,
    title: 'Enterprise Architecture',
    text: 'Expert in robust full-stack development utilizing React, Node.js, PHP, Laravel, and GraphQL. Delivering enterprise-grade solutions for internal platforms, including SharePoint integrations and dynamic D3.js data visualizations.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    text: 'Hands-on with CI/CD pipelines via GitLab, containerization using Docker and Kubernetes, and cloud deployments on AWS and Azure. Experienced with Rancher Desktop and Azure DevOps for efficient delivery.',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    text: 'Leveraging GitHub Copilot and AI Builder to accelerate development. Implementing Azure AI Language sentiment analysis for intelligent content moderation and user insights in CMS applications.',
  },
  {
    icon: Users,
    title: 'Leadership & Delivery',
    text: 'Leading cross-functional teams through Agile methodologies. Proven people manager mentoring junior developers, driving innovation, and ensuring on-time enterprise delivery across multiple client engagements.',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Angular 8', 'D3.js', 'jQuery', 'jQuery UI', 'Angular Material', 'AJAX', 'JSON'],
  },
  {
    title: 'CMS & Backend',
    items: ['WordPress', 'Headless WordPress', 'SharePoint', 'Theme Development', 'Plugin Development', 'Adobe Experience Manager (AEM)', 'PHP', 'Laravel', 'CodeIgniter', 'Joomla', 'Node.js'],
  },
  {
    title: 'Styling & UI',
    items: ['Responsive Web Design', 'Cross-Browser Compatibility', 'Cross-Platform Development', 'Bootstrap', 'Sass', 'Less', 'PSD to WordPress', 'Accessibility Compliance'],
  },
  {
    title: 'Cloud & Delivery',
    items: ['Git', 'GitHub', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Azure DevOps', 'Rancher Desktop', 'Jira', 'Workfront', 'TFS'],
  },
  {
    title: 'Gen AI & AI Tools',
    items: ['GitHub Copilot', 'Claude AI', 'Azure AI Language', 'Sentiment Analysis', 'NLP', 'AI-Powered Applications', 'Prompt Engineering', 'AI Integration'],
  },
  {
    title: 'Data & Support',
    items: ['MySQL', 'MongoDB', 'SQL', 'RESTful APIs', 'Microservices', 'Secure Coding Practices', 'Application Support', 'L1/L2 Support'],
  },
  {
    title: 'Leadership',
    items: ['Agile Scrum', 'Team Management', 'Small Team Leadership', 'Project Management', 'Client Communication', 'Problem Solving'],
  },
];

const skillIconMap = {
  'Frontend': Code2,
  'CMS & Backend': Server,
  'Styling & UI': Palette,
  'Cloud & Delivery': Cloud,
  'Gen AI & AI Tools': Brain,
  'Data & Support': BarChart3,
  'Leadership': Users,
};

const achievements = [
  'Star Performer',
  'Customer Delight Award',
  'Ace of Capgemini Award',
  'Currently leveraging GitHub Copilot and Claude AI tools for accelerated development and AI-powered solutions delivery.',
  'Implementing Azure AI Language sentiment analysis in WordPress to enable AI-driven content moderation and user insights for internal applications.',
  'Earned Engagement Manager Foundation Level Certification from Capgemini, valid until November 2026.',
  'Completed Project Planning and Management, Agile Development and Scrum, Google Project Management Foundations, GitHub Copilot, AstroJS, Node.js with MongoDB, and Generative AI training.',
  'Earned AWS Partner: Generative AI Essentials Business badge in 2023.',
  'Winner of Public Choice Award for an AI-assisted review moderation and consumer care workflow using NLP and Azure Sentiment Analysis in 2023.',
  'Received multiple client appreciations, Customer Delight Award in 2021, and Star Performer Award in 2019.',
];

const experience = [
  {
    role: 'Assistant Manager - Full Stack Web Developer',
    company: 'Deloitte USI',
    location: 'Hyderabad, India',
    period: 'August 2025 - Present',
    details: [
      'Develop, customize, and maintain web applications and pages for internal platforms including SharePoint and enterprise systems.',
      'Implement responsive, cross-browser, and cross-platform web solutions using HTML, CSS, JavaScript, TypeScript, and modern front-end frameworks.',
      'Write clean, efficient, and reusable code; integrate web solutions with backend services, RESTful APIs, and CMS platforms.',
      'Troubleshoot, debug, and optimize applications for performance, stability, and scalability.',
      'Follow secure coding standards and best practices for enterprise-grade application delivery.',
      'Collaborate with cross-functional teams to translate business requirements into technical solutions using Agile methodologies.',
      'Support deployments, enhancements, and ongoing maintenance of web applications across the enterprise.',
      'Leverage AI tools including GitHub Copilot and implement D3.js data visualizations to accelerate development and deliver intelligent solutions.',
    ],
  },
  {
    role: 'Senior Consultant & People Manager',
    company: 'Capgemini Technology Services India Limited',
    location: 'Pune, India',
    period: 'September 2018 - August 2025 (7 years)',
    details: [
      'Led enterprise-grade and consumer-facing web application development using React.js, WordPress (custom themes/plugins from scratch), Laravel, Node.js, SCSS, and Bootstrap.',
      'Built and integrated RESTful APIs, Headless WordPress, and microservices for scalable, modern solutions.',
      'Designed, developed and optimized digital assets while ensuring SEO best practices, multilingual support, accessibility compliance, and cross-browser compatibility.',
      'Applied software design patterns and component-based architecture with a focus on performance optimization and responsive design.',
      'Implemented CI/CD pipelines with GitLab, managed containerization using Docker and Kubernetes, and deployed on cloud platforms like AWS and Azure.',
      'Provided L1 and L2 product support, mentored junior developers, and drove innovation through leadership and cross-functional collaboration.',
      'Winner of Customer Delight Award (2021), Ace of Capgemini Award (2023), and Star Performer Award (2019).',
    ],
  },
  {
    role: 'Associate Software Developer',
    company: 'Hurix Systems Pvt. Ltd.',
    location: 'Pune, India',
    period: 'November 2017 - September 2018',
    details: [
      'Built responsive web applications using HTML, CSS, JavaScript, jQuery, PHP, Sass, JSON, and WordPress templates.',
      'Delivered browser-side UI code across web and mobile projects with cross-browser testing and client collaboration.',
    ],
  },
  {
    role: 'Web Designer I',
    company: 'Yardi Software India Pvt. Ltd.',
    location: 'Pune, India',
    period: 'August 2017 - September 2017',
    details: [
      'Created responsive websites, UI mockups, templates, and production integrations using Photoshop, HTML, CSS, JavaScript, jQuery, and TFS.',
    ],
  },
  {
    role: 'UI Developer',
    company: 'Brainstorm Force',
    location: 'Pune, Maharashtra, India',
    period: 'May 2016 - July 2017',
    details: [
      'Developed WordPress themes, plugins, Beaver Builder add-ons, PSD to HTML/WordPress templates, and product support workflows.',
      'Worked with Node.js, AJAX, PHP, MySQL, Sass, Bootstrap, GitHub, Asana, Photoshop, and customer service teams.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Tech4em Solutions Private Limited',
    location: 'Nagpur, Maharashtra, India',
    period: 'January 2014 - April 2016',
    details: [
      'Developed responsive templates from PSD designs and integrated CodeIgniter, Joomla, and WordPress solutions with HTML, CSS, JavaScript, JSON, AJAX, PHP, and MySQL.',
    ],
  },
];

const education = [
  {
    title: 'Bachelor of Engineering (B.E.), Information Technology',
    place: 'Sant Gadge Baba Amravati University, Amravati, Maharashtra',
    period: '2009 - 2014',
    score: 'First Class',
  },
  {
    title: 'HSC, General Science',
    place: 'Shri R.L.T. College of Science, Akola',
    period: 'June 2007 - April 2009',
    score: 'First Class, 60.00%',
  },
  {
    title: 'SSC',
    place: 'Sitabai Sangai High School, Anjangaon Surji',
    period: 'June 2006 - May 2007',
    score: 'First Class, 78.46%',
  },
];

const certifications = [
  'Claude Code in Action - Anthropic (2026)',
  'Impact Day Lead 2025 - Deloitte (2025)',
  'Developing Front-End Apps with React - IBM (2025)',
  'Certified Engagement Manager - Capgemini (2024)',
  'Generative AI - Capgemini (2024)',
  'Foundations of Project Management - Google (2024)',
  'Agile Development & Scrum - IBM (2024)',
  'Agile Software Development - University of Minnesota via Coursera',
  'GitHub Copilot Fundamentals: AI Paired Programming - Pluralsight',
  'GitHub Copilot: Use AI to write code for you - Udemy',
  'AstroJS 101: Build Blazing Fast Frontends - Udemy',
  'Build NodeJS Applications with MongoDB - Udemy',
  'AWS Partner: Generative AI Essentials Business - AWS',
  'Introduction to Docker: The Basics - Coursera Project Network',
  'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
  'Fundamentals of Project Planning and Management - University of Virginia',
  'Introduction to HTML5 - University of Michigan',
  'HTML, CSS, and JavaScript for Web Developers - Johns Hopkins University',
  'PHP & MySQL Certification - Infinite Skills Inc.',
];

const projects = [
  { title: 'Create Online Academy', image: 'coa.png', full: 'coa-full.png' },
  { title: 'Hurix Digital', image: 'hurix.png', full: 'hurix-full.png' },
  { title: 'Michelin Engineering & Services', image: 'mes-home.png', full: 'mes-full.png' },
  { title: 'Automated Vehicle Inspection', image: 'tireia.png', full: 'tireia-full.png' },
  { title: 'Aircraft', image: 'aircraft.png', full: 'aircraft-full.png' },
  { title: 'Michelin', image: 'michelin.png', full: 'michelin-full.png' },
  { title: 'Movinon', image: 'movinon.png', full: 'movinon-full.png' },
  { title: 'Purchasing', image: 'purchasing.png', full: 'purchasing-full.png' },
  { title: 'RFID', image: 'rfid.png', full: 'rfid-full.png' },
  { title: 'SohPem', image: 'sohpem.png', full: 'sohpem-full.png' },
  { title: 'Timeline for Beaver Builder', image: 'tbb.png', full: 'tbb-full.png' },
  { title: 'Bootstrap Cards for Beaver Builder', image: 'cbb.png', full: 'cbb-full.png' },
  { title: 'Ultimate Addon Templates for Beaver Builder', image: 'uabb-temp.png', full: 'uabb-temp-full.png' },
  { title: 'Ultimate Addon for Beaver Builder', image: 'uabb.png', full: 'uabb-full.png' },
];

function imageUrl(path) {
  return `${baseUrl}/images/${path}`;
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <span>{children}</span> : null}
    </div>
  );
}

function ProfileRail() {
  return (
    <aside className="profile-rail">
      <div className="rail-card">
        <img className="rail-avatar" src={profile.avatarImage} alt={profile.name} />
        <h1>{profile.name}</h1>
        <div className="rail-meta">
          <span>{profile.handle}</span>
          <span className="dot" />
          <span>
            <MapPin size={14} />
            Hyderabad, India
          </span>
        </div>
        <p className="rail-role">{profile.role}</p>
        <div className="rail-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="rail-actions">
          <a className="message-button" href={links.mail}>
            <MessageCircle size={20} />
            Message
          </a>
          <a className="save-button" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="Download resume">
            <Bookmark size={19} />
          </a>
        </div>
        <nav className="rail-tabs" aria-label="Profile sections">
          <a href="#profile">
            <UserRound size={21} />
            Profile
          </a>
          <a href="#portfolio" className="active">
            <BriefcaseBusiness size={21} />
            Portfolio
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio-app">
      <div className="app-shell">
        <ProfileRail />

        <main className="main-pane">
          <div className="profile-mobile-card">
            <img src={profile.avatarImage} alt={profile.name} />
            <div>
              <h1>{profile.name}</h1>
              <p>
                {profile.handle} · {profile.location}
              </p>
            </div>
          </div>

          <div className="portfolio-header">
            <strong>{profile.name}</strong>
            <nav>
              <a href="#portfolio">Projects</a>
              <a href="#profile">About</a>
              <a href="#experience">Experience</a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                Resume
                <Download size={16} />
              </a>
            </nav>
          </div>

          <section className="hero-panel">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="hero-copy"
            >
              <p className="kicker">Full Stack Web Developer · Hyderabad</p>
              <h2>Hello, I'm Bhushan</h2>
              <p>
                {heroSummary.map((text, idx) => (
                  <span key={idx}>
                    {text}
                    {idx < heroSummary.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </p>
              <div className="social-row">
                <span>Reach out</span>
                <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <ExternalLink size={19} />
                </a>
                <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Code2 size={19} />
                </a>
                <a href={links.mail} aria-label="Email">
                  <Mail size={19} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="hero-portrait"
            >
              <img src={profile.heroImage} alt={profile.name} />
              <div className="availability-badge">
                <span />
                Available for relevant opportunities
              </div>
            </motion.div>
          </section>

          <section className="company-strip">
            <p>I have worked with teams at</p>
            <div>
              {companies.map((company) => (
                <span key={company}>{company}</span>
              ))}
            </div>
          </section>

          <section id="portfolio" className="pane-section">
            <SectionTitle eyebrow="Portfolio" title="Selected web work and product contributions.">
              A mix of enterprise platforms, CMS builds, responsive websites, and WordPress product extensions.
            </SectionTitle>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  className="project-card"
                  href={imageUrl(`fulls/${project.full}`)}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                >
                  <img src={imageUrl(`thumbs/${project.image}`)} alt={project.title} />
                  <div>
                    <strong>{project.title}</strong>
                    <ExternalLink size={17} />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="profile" className="pane-section">
            <SectionTitle eyebrow="Profile" title="A practical builder with strong delivery instincts." />
            <div className="summary-grid">
              {profileHighlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <article key={`highlight-${index}`} className="summary-card highlight-variant">
                    <div className="summary-icon-wrapper">
                      <IconComponent size={24} />
                    </div>
                    <div className="summary-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="pane-section">
            <SectionTitle eyebrow="Skills" title="Technical skills across product, CMS, and cloud delivery." />
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const IconComponent = skillIconMap[group.title] || Code2;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-icon">
                      <IconComponent size={20} />
                    </div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="pane-section">
            <SectionTitle eyebrow="Highlights" title="Awards, promotions, and continuous learning." />
            <div className="highlights-grid">
              {achievements.map((item) => (
                <article className="highlight-card" key={item}>
                  <Award size={20} />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="pane-section">
            <SectionTitle eyebrow="Employment History" title="Experience across agencies, product teams, and enterprise delivery." />
            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-card" key={`${job.company}-${job.period}`}>
                  <div className="experience-icon">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <span>{job.period}</span>
                    <h3>{job.role}</h3>
                    <p>
                      {job.company} · {job.location}
                    </p>
                    <ul>
                      {job.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="pane-section split-section">
            <div>
              <SectionTitle eyebrow="Education" title="Academic foundation." />
              <div className="stack-list">
                {education.map((item) => (
                  <article className="compact-card" key={item.title}>
                    <GraduationCap size={20} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.place}</p>
                      <span>
                        {item.period} · {item.score}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Certifications" title="Validated learning." />
              <div className="cert-list">
                {certifications.map((item) => (
                  <span key={item}>
                    <BadgeCheck size={16} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="pane-section contact-panel">
            <div>
              <p className="kicker">Contact</p>
              <h2>My inbox is always open.</h2>
              <p>
                Whether you have a question, a relevant job update, or just want to say hello, I will try my best to get
                back to you.
              </p>
            </div>
            <div className="contact-actions">
              <a href={links.mail}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a href={links.phone}>
                <Phone size={18} />
                {profile.phone}
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
              <a href={baseUrl} target="_blank" rel="noreferrer">
                <Globe2 size={18} />
                Original Portfolio
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
