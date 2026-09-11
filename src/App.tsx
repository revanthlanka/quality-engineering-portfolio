import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { ArrowDownRight, ArrowRight, CheckCircle2, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import SectionTitle from './components/SectionTitle'
import ThemeToggle from './components/ThemeToggle'
import CapabilityExplorer from './components/CapabilityExplorer'
import { experience, stack } from './data/portfolio'
import './styles.css'

const nav=[['Profile','#about'],['Expertise','#expertise'],['Experience','#experience'],['Stack','#stack'],['Contact','#contact']]

export default function App(){
 const [dark,setDark]=useState(()=>localStorage.getItem('qa-theme')==='dark')
 const [menu,setMenu]=useState(false)
 useEffect(()=>{document.documentElement.classList.toggle('dark',dark);localStorage.setItem('qa-theme',dark?'dark':'light')},[dark])
 return <div className="app">
  <header className="header"><div className="container nav">
   <a className="brand" href="#home">Revanth Lanka<span>.</span></a>
   <nav className={menu?'open':''}>{nav.map(([n,h])=><a key={h} href={h} onClick={()=>setMenu(false)}>{n}</a>)}</nav>
   <div className="nav-actions"><ThemeToggle dark={dark} onToggle={()=>setDark(v=>!v)}/><a className="nav-cta" href="#contact">Let's Connect</a><button className="menu-button" onClick={()=>setMenu(v=>!v)} aria-label="Menu">{menu?<X/>:<Menu/>}</button></div>
  </div></header>

  <main>
   <section id="home" className="hero"><div className="container hero-grid">
    <div><p className="eyebrow">AUTOMATION TESTER / QUALITY ENGINEER</p><h1>Engineering confidence<br/><em>into every release.</em></h1>
    <p className="hero-copy">Quality engineering across enterprise banking systems — from automated IVR journeys and REST APIs to middleware, host integrations, CI/CD pipelines and production validation.</p>
    <div className="hero-actions"><a className="button primary" href="#experience">View Experience <ArrowRight size={16}/></a><a className="button" href="#stack">Explore Stack</a></div><a href="/resume.pdf"  download="Revanth-Lanka-Resume.pdf"  className="btn btn-primary"> <Download size={18} /> Download Resume</a>
    <div className="hero-stats">{[['IVR','Automation'],['API','Engineering'],['E2E','Quality'],['CI/CD','Delivery']].map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></div>
    <div className="architecture">
      <div className="arch-head"><span>QUALITY / SYSTEM VIEW</span><span className="online">● ONLINE</span></div>
      <div className="arch-flow">{[['01','IVR','Cyara + Voice'],['02','API','REST + JSON'],['03','MW','Validation'],['04','HOST','Logs + RCA']].map(([n,a,b],i)=><div key={a}><div className={i===0?'node active':'node'}><small>{n}</small><b>{a}</b><span>{b}</span></div>{i<3&&<div className="connector"><ArrowDownRight size={15}/></div>}</div>)}</div>
      <div className="arch-foot"><span>RELEASE CONFIDENCE</span><b>HIGH</b></div>
    </div>
   </div></section>

   <section id="about" className="section"><div className="container split">
    <div><p className="eyebrow">01 / PROFILE</p><h2>Testing across<br/><em>the full stack.</em></h2></div>
    <div className="copy"><p className="lead">I work where customer journeys, APIs, middleware and enterprise systems meet.</p><p>My focus is end-to-end quality engineering for complex banking applications, with primary expertise in IVR automation, REST API testing, API automation, middleware validation and integration testing.</p><p>I combine hands-on test engineering with defect investigation, CI/CD, service virtualization, deployment validation and Agile delivery. I also mentor testers and help teams turn quality into a repeatable engineering practice.</p>
    <div className="profile-grid">{[['DOMAIN','Enterprise Banking'],['PRIMARY FOCUS','IVR + API + Integration'],['DELIVERY','Agile / Scrum'],['LEADERSHIP','Mentoring & Code Reviews']].map(([a,b])=><div key={a}><span>{a}</span><b>{b}</b></div>)}</div></div>
   </div></section>

   <section id="expertise" className="section dark-section"><div className="container"><SectionTitle eyebrow="02 / CORE EXPERTISE" title={<>Quality built around<br/><em>real customer journeys.</em></>} description="From voice interactions to backend services, validate the complete chain rather than testing systems in isolation."/><CapabilityExplorer/></div></section>

   <section id="experience" className="section"><div className="container"><SectionTitle eyebrow="03 / EXPERIENCE" title={<>What I bring<br/>to a delivery team.</>} description="A quality engineer who can move between voice, API, automation, middleware, infrastructure and delivery conversations."/>
    <div className="experience-list">{experience.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><CheckCircle2 className="check" size={18}/></article>)}</div>
   </div></section>

   <section id="stack" className="section stack-section"><div className="container"><SectionTitle eyebrow="04 / TECHNOLOGY STACK" title={<>The tools behind<br/><em>the quality.</em></>} description="A practical stack spanning test design, automation, observability, deployment and collaboration."/>
    <div className="stack-grid">{stack.map(([name,items])=><div className="stack-card" key={name}><h3>{name}</h3><div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
   </div></section>

   <section className="section mindset"><div className="container"><p className="eyebrow">05 / QUALITY MINDSET</p><div className="mind-grid">{[['01','Understand the journey','Start with the customer and business outcome.'],['02','Challenge the boundary','Test negative paths, integrations and failure modes.'],['03','Trace the evidence','Use API responses, logs and system behavior to find the cause.'],['04','Automate intelligently','Build reusable coverage where repeatability creates value.']].map(([n,t,d])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

   <section id="contact" className="section contact"><div className="container contact-grid"><div><p className="eyebrow muted">06 / CONTACT</p><h2>Let's talk about<br/><em>quality engineering.</em></h2><p>Open to conversations around software testing, automation, API quality, IVR engineering and quality leadership.</p></div>
    <div className="contact-card"><div><span>Email</span><a href="mailto:revanth.lanka@gmail.com"><Mail size={14}/> revanth.lanka@gmail.com</a></div><div><span>LinkedIn</span><a href="https://www.linkedin.com/in/revanth-lanka-a8331ab8/" target="_blank" rel="noopener noreferrer"><Linkedin size={14}/>https://www.linkedin.com/in/revanth-lanka-a8331ab8/</a></div><div><span>GitHub</span><a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><Github size={14}/> github.com/your-profile</a></div><a className="button primary full" href="mailto:revanth.lanka@gmail.com">Start a Conversation <ArrowRight size={16}/></a></div>
   </div></section>
  </main>
  <footer><div className="container footer"><span>RQ. / QUALITY ENGINEERING</span><span>React + TypeScript + Vite</span></div></footer>
 </div>
}
