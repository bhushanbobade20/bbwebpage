import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const resumeUrl = `${baseUrl}images/BhushanBobade_Resume_April-2025_1p.pdf`;

const profile = {
  name: 'Bhushan Bobade',
  handle: '@bhushanbobade20',
  role: 'Full Stack Web Developer',
  current: 'Assistant Manager at Deloitte USI',
  location: 'Hyderabad, India',
  phone: '+91-7776923123',
  email: 'bhushanbobade7@gmail.com',
  avatarImage: './images/bhushan-avatar.jpg',
  heroImage: './images/bhushan-hero.png',
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

const summary = [
  'Experienced Full Stack Web Developer with more than 10 years of expertise in web technology design, development, implementation, and support.',
  'Specialized in React.js, WordPress custom theme and plugin development, Laravel, PHP, MySQL, RESTful APIs, microservices, CI/CD, Docker, Kubernetes, AWS, Azure, and responsive UI delivery.',
  'Self-motivated, collaborative, and comfortable leading teams, communicating with clients, solving production issues, and turning design concepts into polished web experiences.',
];

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Angular 8', 'jQuery', 'AJAX', 'JSON'],
  },
  {
    title: 'CMS & Backend',
    items: ['WordPress', 'Headless WordPress', 'Theme Development', 'Plugin Development', 'PHP', 'Laravel', 'CodeIgniter', 'Joomla', 'Node.js'],
  },
  {
    title: 'Styling & UI',
    items: ['Responsive Web Design', 'Bootstrap', 'Sass', 'Less', 'Tailwind CSS', 'Animate.css', 'PSD to WordPress', 'Adobe Experience Manager'],
  },
  {
    title: 'Cloud & Delivery',
    items: ['Git', 'GitHub', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jira', 'Asana', 'VS Code'],
  },
  {
    title: 'Data & Support',
    items: ['MySQL', 'MongoDB', 'SQL', 'RESTful APIs', 'Microservices', 'XML', 'Application Support', 'L1/L2 Support'],
  },
  {
    title: 'Leadership',
    items: ['Agile Scrum', 'Team Management', 'Small Team Leadership', 'Project Management', 'Client Communication', 'Problem Solving'],
  },
];

const achievements = [
  'Promoted to People Manager in 2024 and Senior Consultant in 2023.',
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
      'Lead enterprise-grade and consumer-facing web application delivery using React.js, WordPress, Laravel, Node.js, SCSS, and Bootstrap.',
      'Collaborate with infrastructure teams on deployments, code issue resolution, unit testing, quality checks, and scalable integrations.',
    ],
  },
  {
    role: 'Senior Consultant & People Manager',
    company: 'Capgemini Technology Services India Limited',
    location: 'Pune, India',
    period: 'September 2018 - August 2025',
    details: [
      'Delivered enterprise websites and digital platforms with WordPress, React.js, PHP, Bootstrap, jQuery, AEM, APIs, and CI/CD workflows.',
      'Managed agile delivery, business analysis, application support, maintenance, secure implementation, mentoring, and client communication.',
    ],
  },
  {
    role: 'Associate Software Engineer',
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
    location: 'Pune, India',
    period: 'May 2016 - July 2017',
    details: [
      'Developed WordPress themes, plugins, Beaver Builder add-ons, PSD to HTML/WordPress templates, and product support workflows.',
      'Worked with Node.js, AJAX, PHP, MySQL, Sass, Bootstrap, GitHub, Asana, Photoshop, and customer service teams.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Tech4em Solutions Private Limited',
    location: 'Nagpur, India',
    period: 'January 2014 - June 2014',
    details: [
      'Developed responsive templates from PSD designs and integrated CodeIgniter, Joomla, and WordPress solutions with HTML, CSS, JavaScript, JSON, AJAX, PHP, and MySQL.',
    ],
  },
];

const education = [
  {
    title: 'Bachelor of Engineering in Information Technology',
    place: 'Sant Gadge Baba Amravati University',
    period: 'June 2009 - May 2014',
    score: 'First Class, 62.88%',
  },
  {
    title: 'HSC',
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
  'Engagement Manager Foundation Level Certification - Capgemini',
  'Fundamentals of Project Planning and Management - University of Virginia',
  'Introduction to Agile Development and Scrum - Coursera',
  'GitHub Copilot Fundamentals: AI Paired Programming - Pluralsight',
  'Foundations of Project Management - Google',
  'GitHub Copilot: Use AI to write code for you - Udemy',
  'AstroJS 101: Build Blazing Fast Frontends - Udemy',
  'Build NodeJS Applications with MongoDB - Udemy',
  'Generative AI Training - Capgemini',
  'AWS Partner: Generative AI Essentials Business - AWS',
  'Introduction to Docker: The Basics - Coursera Project Network',
  'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
  'Agile Software Development - University of Minnesota',
  'Introduction to HTML5 - University of Michigan',
  'HTML, CSS, and JavaScript for Web Developers - Johns Hopkins University',
  'PHP & MySQL Certification - Infinite Skills Inc.',
];

const projects = [
  { title: 'Create Online Academy', image: 'coa.svg', full: 'coa-full.svg' },
  { title: 'Hurix Digital', image: 'hurix.svg', full: 'hurix-full.svg' },
  { title: 'Michelin Engineering & Services', image: 'mes-home.svg', full: 'mes-full.svg' },
  { title: 'Automated Vehicle Inspection', image: 'tireia.svg', full: 'tireia-full.svg' },
  { title: 'Aircraft', image: 'aircraft.svg', full: 'aircraft-full.svg' },
  { title: 'Michelin', image: 'michelin.svg', full: 'michelin-full.svg' },
  { title: 'Movinon', image: 'movinon.svg', full: 'movinon-full.svg' },
  { title: 'Purchasing', image: 'purchasing.svg', full: 'purchasing-full.svg' },
  { title: 'RFID', image: 'rfid.svg', full: 'rfid-full.svg' },
  { title: 'SohPem', image: 'sohpem.svg', full: 'sohpem-full.svg' },
  { title: 'Timeline for Beaver Builder', image: 'tbb.svg', full: 'tbb-full.svg' },
  { title: 'Bootstrap Cards for Beaver Builder', image: 'cbb.svg', full: 'cbb-full.svg' },
  { title: 'Ultimate Addon Templates for Beaver Builder', image: 'uabb-temp.svg', full: 'uabb-temp-full.svg' },
  { title: 'Ultimate Addon for Beaver Builder', image: 'uabb.svg', full: 'uabb-full.svg' },
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
        <a className="open-work-link" href={links.mail}>
          <BriefcaseBusiness size={15} />
          Open to Work
        </a>
        <h1>{profile.name}</h1>
        <div className="rail-meta">
          <span>{profile.handle}</span>
          <span className="dot" />
          <span>
            <MapPin size={14} />
            India
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
              <a className="open-work-link" href={links.mail}>
                <BriefcaseBusiness size={15} />
                Open to Work
              </a>
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
                Hands-on web engineering leader with <strong>10+ years</strong> of experience building responsive,
                scalable, user-friendly web platforms with React.js, WordPress, PHP, Laravel, cloud, CI/CD, and
                enterprise delivery practices.
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
              {summary.map((item) => (
                <article key={item} className="summary-card">
                  <Sparkles size={20} />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="pane-section">
            <SectionTitle eyebrow="Skills" title="Technical skills across product, CMS, and cloud delivery." />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-icon">
                    <Code2 size={20} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
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
