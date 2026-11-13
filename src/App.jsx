import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Menu, X, Code2, Smartphone, Palette,
  Layers3, ShieldCheck, Rocket, Clock3, Headphones, HeartHandshake,
  Search, ClipboardList, PenTool, Laptop, Send, CheckCircle2,
  Globe2, Sparkles, ChevronDown, MessageCircle, Mail, Zap
} from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, PARENT_COMPANY_URL } from './config';

const services = [
  { icon: Globe2, number: '01', title: 'Website Development', text: 'Fast, beautiful and conversion-focused websites that make your business look its best.', tags: ['Business websites', 'E-commerce', 'Landing pages', 'Web applications'] },
  { icon: Smartphone, number: '02', title: 'Mobile App Development', text: 'Intuitive mobile experiences that keep your customers connected to your business.', tags: ['Android apps', 'iOS apps', 'Cross-platform', 'Business apps'] },
  { icon: Palette, number: '03', title: 'UI/UX Design', text: 'Thoughtful interfaces and seamless user journeys designed around real people.', tags: ['Website UI/UX', 'App design', 'Prototyping', 'UX optimization'] },
  { icon: Layers3, number: '04', title: 'Custom Software', text: 'Purpose-built digital tools that simplify operations and help your business scale.', tags: ['CRM & ERP', 'Management systems', 'Automation', 'Custom solutions'] },
];

const benefits = [
  [Sparkles, 'Modern by design', 'Fresh ideas, thoughtful design and technology chosen for your goals.'],
  [WalletIcon, 'Practical packages', 'Clear, value-focused development options for businesses at every stage.'],
  [Smartphone, 'Responsive experiences', 'Every experience is designed to work beautifully across screen sizes.'],
  [ShieldCheck, 'Secure & scalable', 'Build on a strong foundation that can grow with your business.'],
  [Clock3, 'Reliable delivery', 'A clear process, regular updates and a focus on agreed milestones.'],
  [Headphones, 'Support that stays', 'A collaborative team ready to help after your project goes live.'],
  [HeartHandshake, 'People-first approach', 'Your goals guide the decisions, from first conversation to launch.'],
];

function WalletIcon(props) { return <Zap {...props} />; }

const steps = [
  [Search, 'Discover', 'We learn about your business, audience and what success looks like.'],
  [ClipboardList, 'Plan', 'We define the scope, priorities and a practical project roadmap.'],
  [PenTool, 'Design', 'We shape the visual direction and user experience before development.'],
  [Code2, 'Develop', 'We build, integrate and refine your digital solution.'],
  [Rocket, 'Launch', 'We test, optimize and help bring your project to the world.'],
  [Headphones, 'Support', 'We stay available for improvements, maintenance and next steps.'],
];

const projects = [
  { category: 'WEB DESIGN', name: 'Northstar Studio', desc: 'A confident digital home for a modern creative business.', type: 'Corporate website', tone: 'blue', label: 'NORTHSTAR', metric: 'Ideas into impact.' },
  { category: 'E-COMMERCE', name: 'Forma Living', desc: 'A clean shopping experience built to showcase every detail.', type: 'Online store concept', tone: 'sand', label: 'forma', metric: 'Objects for everyday.' },
  { category: 'MOBILE APP', name: 'Pulse Connect', desc: 'A simple, focused mobile experience for busy teams.', type: 'Mobile app concept', tone: 'violet', label: 'pulse', metric: 'Work, in sync.' },
];

function Logo() {
  return <a className="brand" href="#home" aria-label="Glotekensol Digital home">
    <span className="brand-mark"><span></span><span></span><span></span></span>
    <span className="brand-copy">glotekensol<span>digital</span></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Services', '#services'], ['Why us', '#why-us'], ['Our work', '#work'], ['Process', '#process'], ['Contact', '#contact']];
  return <header className="site-header">
    <div className="container nav-wrap">
      <Logo />
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={16}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X/> : <Menu/>}
      </button>
    </div>
  </header>;
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Abstract preview of website and mobile app interfaces">
    <div className="visual-glow"></div>
    <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
    <div className="float-chip chip-code"><Code2 size={15}/> Clean code</div>
    <div className="float-chip chip-live"><span className="live-dot"></span> Built to grow</div>
    <div className="browser-card">
      <div className="browser-top"><div className="browser-dots"><i></i><i></i><i></i></div><div className="browser-address">yourbrand.com</div><div className="browser-top-icon"><Sparkles size={13}/></div></div>
      <div className="browser-content">
        <div className="mock-nav"><b><span className="mock-logo"></span> STUDIO</b><span>About&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span></div>
        <div className="mock-hero"><div className="mock-kicker">DESIGNED FOR WHAT'S NEXT</div><div className="mock-heading">Make your<br/><em>next move.</em></div><div className="mock-lines"><i></i><i></i></div><div className="mock-button">Explore more <ArrowUpRight size={10}/></div></div>
        <div className="mock-bottom"><div><b>01</b><span>Strategy</span></div><div><b>02</b><span>Design</span></div><div><b>03</b><span>Build</span></div></div>
      </div>
    </div>
    <div className="phone-card"><div className="phone-notch"></div><div className="phone-screen"><div className="phone-greeting">Good morning <span>✦</span></div><div className="phone-title">Your business,<br/>in your pocket.</div><div className="phone-graph"><div className="graph-label">THIS MONTH <b>+28.4%</b></div><svg viewBox="0 0 180 62" role="img" aria-label="Rising performance line"><path d="M2 50 C22 45 24 37 43 41 S66 21 83 29 S107 9 123 20 S151 3 178 5" fill="none" stroke="#56c9ff" strokeWidth="3" strokeLinecap="round"/><path d="M2 50 C22 45 24 37 43 41 S66 21 83 29 S107 9 123 20 S151 3 178 5 L178 62 L2 62Z" fill="url(#area)" opacity=".18"/><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#56c9ff"/><stop offset="1" stopColor="#56c9ff" stopOpacity="0"/></linearGradient></defs></svg></div><div className="phone-stats"><div><b>1.2k</b><small>Visitors</small></div><div><b>84%</b><small>Engagement</small></div></div><div className="phone-nav"><i></i><i></i><i></i><i></i></div></div></div>
    <div className="code-float"><span>01</span><span>const future =</span><b> limitless;</b><span className="cursor">_</span></div>
  </div>;
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>
    <div className="eyebrow"><span></span>{eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.service || !form.details.trim()) {
      setError('Please complete your name, email, service and project description.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (CONTACT_EMAIL.includes('YOUR_EMAIL')) {
      setError('The contact form is ready. Please configure the business email in src/config.js to enable email submission.');
      return;
    }
    const subject = encodeURIComponent(`New project enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\nProject details:\n${form.details}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-intro"><span>LET'S START A CONVERSATION</span><h3>Tell us what you're<br/>thinking about.</h3><p>Share a few details and we'll take it from there.</p></div>
    <div className="form-grid">
      <label>Full name <b>*</b><input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required/></label>
      <label>Email address <b>*</b><input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" required/></label>
      <label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91 00000 00000" autoComplete="tel"/></label>
      <label>Company name<input name="company" value={form.company} onChange={update} placeholder="Your company" autoComplete="organization"/></label>
      <label>Service required <b>*</b><span className="select-wrap"><select name="service" value={form.service} onChange={update} required><option value="">Choose a service</option><option>Website Development</option><option>Mobile App Development</option><option>UI/UX Design</option><option>Custom Software Development</option><option>Not sure yet</option></select><ChevronDown size={16}/></span></label>
      <label>Project budget<span className="select-wrap"><select name="budget" value={form.budget} onChange={update}><option value="">Select a budget</option><option>Under ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>₹1,00,000 – ₹3,00,000</option><option>₹3,00,000+</option><option>Let's discuss</option></select><ChevronDown size={16}/></span></label>
      <label className="full-field">Project description <b>*</b><textarea name="details" value={form.details} onChange={update} placeholder="Tell us a little about your idea, goals and timeline..." rows="4" required/></label>
    </div>
    {error && <p className="form-message error" role="alert">{error}</p>}
    {sent && <p className="form-message success" role="status"><CheckCircle2 size={16}/> Your email app has been opened with the enquiry details.</p>}
    <button className="button button-primary submit-btn" type="submit">Send project enquiry <Send size={16}/></button>
    <small className="form-note">Your information is only used to respond to your enquiry.</small>
  </form>;
}

function App() {
  const whatsappReady = !WHATSAPP_NUMBER.includes('X');
  const whatsappUrl = whatsappReady ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Glotekensol Digital, I'd like to discuss a project.")}` : '#contact';
  return <>
    <Header/>
    <main>
      <section className="hero section-dark" id="home">
        <div className="hero-grid"></div>
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-pill"><span className="pill-spark">✦</span> DIGITAL EXPERIENCES. REAL BUSINESS GROWTH.</div>
            <h1>Your Vision.<br/>Our Code.<br/><span>Limitless Possibilities.</span></h1>
            <p className="hero-lead">We design and develop powerful websites and mobile apps that help your business stand out, connect with customers and grow faster.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Get a Free Quote <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#services">Explore Our Services <ArrowRight size={16}/></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>G</span><span>D</span><span>+</span></div><div><b>Built around your business</b><small>Thoughtful digital solutions, from idea to launch.</small></div></div>
          </div>
          <HeroVisual/>
        </div>
        <div className="hero-bottom container"><span>WEB DEVELOPMENT</span><i></i><span>MOBILE APPLICATIONS</span><i></i><span>UI/UX DESIGN</span><i></i><span>CUSTOM SOFTWARE</span></div>
      </section>

      <section className="intro-strip"><div className="container intro-inner"><p>Good technology should do more than look impressive.</p><p className="intro-emphasis">It should move your business forward. <ArrowUpRight size={19}/></p></div></section>

      <section className="section services-section" id="services">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title={<>Digital solutions for<br/><span>ambitious businesses.</span></>} text="From your first website to a custom platform, we bring design, technology and strategy together to help you move forward."/>
          <div className="service-grid">{services.map(({icon: Icon, number, title, text, tags}) => <article className="service-card" key={number}><div className="service-card-top"><span className="service-icon"><Icon size={22}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="card-link">Discuss your project <ArrowUpRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="section why-section" id="why-us">
        <div className="container why-layout">
          <div className="why-left"><SectionHeading eyebrow="THE GLOTEKENSOL DIFFERENCE" title={<>A digital partner<br/>that thinks <span>ahead.</span></>} text="Great outcomes start with understanding. We combine creative thinking, dependable development and a collaborative mindset to build solutions that work in the real world."/><a href="#contact" className="text-link">Let's talk about your goals <ArrowUpRight size={17}/></a></div>
          <div className="benefit-grid">{benefits.map(([Icon, title, text]) => <div className="benefit" key={title}><span className="benefit-icon"><Icon size={19}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="work-heading"><SectionHeading eyebrow="SELECTED CONCEPTS" title={<>Ideas brought to<br/><span>digital life.</span></>} text="A preview of the kinds of experiences we love to create. These are illustrative concept projects, ready to be replaced with our live client work."/></div>
          <div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.name}>
            <div className={`project-preview preview-${project.tone}`}>
              <div className="preview-window"><div className="preview-bar"><i></i><i></i><i></i><span>{project.name.toLowerCase().replaceAll(' ', '')}.com</span></div><div className="preview-page"><div className="preview-brand">{project.label}</div><div className="preview-copy">{project.metric}</div><div className="preview-subline"></div><div className="preview-cta"></div><div className="preview-shape"></div></div></div>
              {i === 2 && <div className="mini-phone"><div className="mini-phone-top"></div><div className="mini-phone-content"><b>pulse</b><span></span><span></span><span></span><i></i></div></div>}
              <span className="preview-index">0{i+1}</span>
            </div>
            <div className="project-info"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.desc}</p><div className="project-type">{project.type} <span>·</span> Concept preview</div></div><a href="#contact" aria-label={`Discuss a project like ${project.name}`}><ArrowUpRight size={20}/></a></div>
          </article>)}</div>
          <p className="portfolio-note"><span className="note-dot"></span> Portfolio previews are illustrative placeholders, not claimed client engagements.</p>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from idea<br/>to <span>impact.</span></>} text="A collaborative, transparent process keeps every project moving in the right direction." center/>
          <div className="process-grid">{steps.map(([Icon, title, text], i) => <div className="process-step" key={title}><div className="process-top"><span className="process-icon"><Icon size={21}/></span><span className="process-num">0{i+1}</span></div><h3>{title}</h3><p>{text}</p>{i !== steps.length - 1 && <div className="process-connector"><ArrowRight size={15}/></div>}</div>)}</div>
        </div>
      </section>

      <section className="cta-band"><div className="cta-orb orb-a"></div><div className="cta-orb orb-b"></div><div className="container cta-content"><div className="eyebrow light"><span></span> YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to take your<br/><em>business digital?</em></h2><p>Whether you need a professional website, a powerful mobile app or a custom digital solution, we're ready to bring your ideas to life.</p><a className="button button-light" href="#contact">Let's Build Something Great <ArrowUpRight size={17}/></a></div></section>

      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy"><SectionHeading eyebrow="GET IN TOUCH" title={<>Let's make<br/><span>something happen.</span></>} text="Have an idea, a challenge or just a question? Tell us a little about it. We'd love to hear from you."/></div>
          <ContactForm/>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container">
        <div className="footer-main"><div className="footer-about"><Logo/><p>We build websites, mobile apps and digital solutions that help businesses turn their next big idea into meaningful progress.</p><a className="parent-link" href={PARENT_COMPANY_URL} target="_blank" rel="noreferrer">Part of Glotekensol <ArrowUpRight size={14}/></a></div>
          <div className="footer-col"><h4>Explore</h4><a href="#services">Services</a><a href="#why-us">Why choose us</a><a href="#work">Our work</a><a href="#process">Our process</a></div>
          <div className="footer-col"><h4>What we build</h4><a href="#services">Websites</a><a href="#services">Mobile apps</a><a href="#services">UI/UX design</a><a href="#services">Custom software</a></div>
          <div className="footer-col footer-contact"><h4>Start a conversation</h4><a href="#contact">Tell us about your project <ArrowUpRight size={14}/></a><a href={PARENT_COMPANY_URL} target="_blank" rel="noreferrer">glotekensol.com <ArrowUpRight size={14}/></a><a href={whatsappUrl} target={whatsappReady ? '_blank' : undefined} rel="noreferrer"><MessageCircle size={15}/> WhatsApp us</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Glotekensol Digital. All Rights Reserved.</span><span>Designed with purpose. Built for growth.</span><a href="#home">Back to top ↑</a></div>
      </div>
    </footer>
    <a className="whatsapp-float" href={whatsappUrl} target={whatsappReady ? '_blank' : undefined} rel="noreferrer" aria-label="Contact Glotekensol Digital on WhatsApp"><MessageCircle size={22}/></a>
  </>;
}

export default App;
