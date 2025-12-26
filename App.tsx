import React from 'react';
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, ENGAGEMENTS } from './constants';
import ParticleBackground from './components/ParticleBackground';
import Taskbar from './components/Taskbar';
import TopBar from './components/TopBar';
import CertificationsBanner from './components/CertificationsBanner';
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronRight, Globe, Shield, Terminal, Database, Server, GraduationCap, Users, Video, Presentation, Command } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleOnHover = {
    hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-text-main pt-8">
            <ParticleBackground />
            <TopBar />
            <Taskbar />

            <main className="relative z-10 pb-24 sm:pb-32">

                {/* Hero Section */}
                <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20 md:pt-0">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

                        {/* Left Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative flex justify-center order-1 md:order-1"
                        >
                            {/* Glowing Backdrops */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[300px] md:h-[300px] bg-primary/20 rounded-full blur-[80px] -z-10"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[280px] md:h-[280px] border border-primary/30 rounded-full animate-pulse -z-10"></div>

                            {/* Image Container - thinner border */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 profile-shadow"
                            >
                                <img
                                    src={PROFILE.avatarUrl}
                                    alt={PROFILE.fullName}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                            </motion.div>

                            {/* Decorative Elements with enhanced shadows */}
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="absolute -bottom-4 -right-4 bg-surfaceHighlight border border-primary/20 p-3 rounded-xl hidden md:block icon-badge cursor-pointer"
                            >
                                <Shield className="text-primary w-7 h-7" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="absolute -top-4 -left-4 bg-surfaceHighlight border border-secondary/20 p-3 rounded-xl hidden md:block icon-badge cursor-pointer"
                            >
                                <Terminal className="text-blue-500 w-7 h-7" />
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Text */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="text-left space-y-8 order-2 md:order-2"
                        >
                            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 rounded-full bg-surfaceHighlight border border-white/5 text-primary text-xs font-mono font-medium tracking-wide">
                                STATUS: Open to a 4–6 month internship beginning February 2026.
                            </motion.div>

                            <div className="space-y-2">
                                <motion.h2 variants={fadeInUp} className="text-lg text-primary font-mono">Hello, I'm</motion.h2>
                                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-main leading-tight">
                                    {PROFILE.fullName}
                                </motion.h1>
                                <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-gray-400 font-light">
                                    {PROFILE.title}
                                </motion.p>
                            </div>

                            <motion.p variants={fadeInUp} className="text-text-muted text-lg max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6">
                                Cybersecurity engineering student aspiring <span className="text-text-main">Blue Team Operations</span>, <span className="text-text-main">SOC Architecture</span>, and <span className="text-text-main">Threat Intelligence</span>.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#projects"
                                    className="bg-primary hover:bg-primaryDark text-text-main px-8 py-3 rounded-lg font-bold transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                                >
                                    View Operations
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={`mailto:${PROFILE.email}`}
                                    className="bg-surfaceHighlight hover:bg-surface border border-white/10 hover:border-white/20 text-text-main px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                                >
                                    <Mail size={18} /> Contact Me
                                </motion.a>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 opacity-70">
                                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                                <a href="https://github.com/n48i1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={24} /></a>
                                <a href={PROFILE.portfolio} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Globe size={24} /></a>
                            </motion.div>
                        </motion.div>

                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 px-4 bg-surface/30">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={fadeInUp} className="relative">
                            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"></div>
                            <div className="relative bg-surfaceHighlight border border-white/5 p-8 rounded-2xl shadow-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Terminal size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-text-main font-bold text-lg">System Specs</h3>
                                        <p className="text-text-muted text-sm font-mono">ENIAD // Engineering Student</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 font-mono text-sm text-gray-300">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Location</span> <span className="text-text-main">{PROFILE.location}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Focus</span> <span className="text-text-main">Defensive Security</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Experience</span> <span className="text-text-main">3 Years (Academic + Ops)</span>
                                    </li>
                                </ul>
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="/assets/resume.pdf"
                                    download="Nabil_El_Hilali_Resume.pdf"
                                    className="w-full mt-6 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-text-main py-3 rounded-lg transition-colors border border-white/5"
                                >
                                    <Download size={16} /> Download Resume
                                </motion.a>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span> About Me
                            </h2>
                            <p className="text-text-muted leading-relaxed text-lg mb-6">
                                {PROFILE.description}
                            </p>
                            <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                                <p className="text-primary italic font-medium">"{PROFILE.tagline}"</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 px-4 relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Technical Arsenal</h2>
                            <p className="text-text-muted max-w-2xl mx-auto">A comprehensive toolkit utilized for offensive and defensive security operations.</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {SKILLS.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-6 rounded-xl transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        {idx === 0 ? <Shield size={20} /> : idx === 1 ? <Terminal size={20} /> : idx === 2 ? <Server size={20} /> : <Database size={20} />}
                                    </div>
                                    <h3 className="text-text-main font-bold text-lg mb-4">{category.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5 hover:border-primary/50 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Certifications Marquee Banner */}
                <CertificationsBanner />

                {/* Projects Section */}
                <section id="projects" className="py-24 px-4 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-2">Featured Operations</h2>
                                <p className="text-text-muted">Key projects and deployments.</p>
                            </div>
                            <a href="https://github.com/n48i1" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-text-main transition-colors font-medium">
                                View GitHub <ExternalLink size={16} />
                            </a>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {PROJECTS.map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="group relative bg-surfaceHighlight border border-white/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                                >
                                    <div className="h-2 bg-gradient-to-r from-primary to-blue-600"></div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-text-muted text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>

                                        <div className="space-y-4">
                                            {project.details && (
                                                <ul className="space-y-2">
                                                    {project.details.slice(0, 2).map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                                            <ChevronRight size={12} className="text-primary mt-1 shrink-0" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                                {project.tech.map((tech, i) => (
                                                    <span key={i} className="text-[10px] font-mono font-medium px-2 py-1 rounded bg-background text-gray-400 border border-white/5">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-24 px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-text-main mb-16 text-center"
                        >
                            Professional Timeline
                        </motion.h2>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {EXPERIENCE.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surfaceHighlight group-[.is-active]:border-primary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                        <Shield size={18} />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 md:group-odd:mr-auto md:group-even:ml-auto hover:border-primary/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row justify-between mb-2">
                                            <h3 className="font-bold text-text-main text-lg">{exp.role}</h3>
                                            <span className="text-primary font-mono text-xs">{exp.period}</span>
                                        </div>
                                        <div className="text-sm text-gray-400 mb-4 font-medium flex items-center gap-1">
                                            {exp.company} <span className="text-text-main/20">•</span> {exp.location}
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.tasks.map((task, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education Full Width */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-24 max-w-4xl mx-auto"
                        >
                            <div className="bg-surfaceHighlight p-8 rounded-2xl border border-white/5">
                                <h3 className="text-2xl font-bold text-text-main mb-8 flex items-center justify-center gap-3">
                                    <GraduationCap size={28} className="text-primary" /> Academic Background
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {EDUCATION.map((edu, i) => (
                                        <div key={i} className="p-6 rounded-xl bg-background border border-white/5 hover:border-primary/30 transition-all flex flex-col items-center text-center">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                                <GraduationCap size={20} />
                                            </div>
                                            <div className="text-text-main font-bold mb-2">{edu.degree}</div>
                                            <div className="text-sm text-gray-400 mb-3">{edu.institution}</div>
                                            <div className="text-xs text-primary font-mono px-3 py-1 rounded-full bg-primary/10">{edu.year}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Community & Engagements Section */}
                <section id="engagements" className="py-24 px-4 bg-surface/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 flex items-center justify-center gap-3">
                                <Users className="text-primary" /> Community & Teaching
                            </h2>
                            <p className="text-text-muted max-w-2xl mx-auto">Sharing knowledge and mentoring the next generation of engineers.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {ENGAGEMENTS.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-surfaceHighlight rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-primary/30 transition-colors group"
                                >
                                    {/* Visual Header - Icon or Image */}
                                    <div className="h-48 bg-gradient-to-br from-background to-[#1a202c] flex items-center justify-center relative overflow-hidden">
                                        {item.imageUrl ? (
                                            <React.Fragment>
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.role}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                                />
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div className="absolute inset-0 bg-primary/5"></div>
                                                <div className="relative z-10 w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                    {idx === 0 ? <Presentation size={32} className="text-primary" /> :
                                                        idx === 1 ? <Command size={32} className="text-orange-500" /> :
                                                            <Video size={32} className="text-blue-400" />}
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-text-main mb-1 leading-tight">{item.role}</h3>
                                                <p className="text-primary text-xs font-medium">{item.company}</p>
                                            </div>
                                            {item.location === "Remote" ? (
                                                <span className="bg-blue-500/10 text-blue-400 text-[10px] px-2 py-1 rounded border border-blue-500/20 shrink-0">Remote</span>
                                            ) : (
                                                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded border border-emerald-500/20 shrink-0">On-Site</span>
                                            )}
                                        </div>

                                        <ul className="space-y-3 mb-6 flex-1">
                                            {item.tasks.slice(0, 3).map((task, i) => (
                                                <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                                                    <ChevronRight size={12} className="text-gray-600 mt-0.5 shrink-0" />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="py-12 border-t border-white/5 text-center relative z-10 bg-background mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text-main font-bold font-mono">N</div>
                    </div>
                    <p className="text-text-muted text-sm">
                        Designed & Built by <span className="text-text-main">N48I1</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-2 font-mono">
                        © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default App;