import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiPython, SiNodedotjs } from 'react-icons/si';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-light-base to-light-section dark:from-dark-base dark:to-dark-section overflow-hidden relative">
            <div className="container mx-auto px-4 z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative w-40 h-40 mx-auto mb-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-light-primary to-indigo-600 dark:from-dark-primary dark:to-indigo-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                        <img
                            src="/Hero_Profile.jpg" // Fixed path from public/.. to /..
                            alt="Profile"
                            className="relative w-full h-full object-cover rounded-full border-4 border-light-base dark:border-dark-base shadow-2xl"
                        />
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-light-heading dark:text-dark-heading mb-6 leading-tight">
                        Hi, I'm <span className="text-gradient">Ronit Prasad</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-display text-light-text dark:text-dark-text mb-8 font-light tracking-wide">
                        Data Analytics Student & <span className="font-semibold text-light-heading dark:text-dark-heading">Visual Storyteller</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-light-text dark:text-dark-text text-lg md:text-xl mb-10 leading-relaxed font-light">
                        Transforming complex datasets into actionable strategic insights.
                        Passionate about statistical analysis, predictive modeling, and designing data-driven solutions that drive business growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="/projects"
                        className="px-8 py-3 bg-light-primary hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-light-primary/30 transform hover:-translate-y-1"
                    >
                        View My Work
                    </a>
                    <a
                        href="mailto:ronitprasad.per06@gmail.com"
                        className="px-8 py-3 bg-light-card dark:bg-dark-card text-light-heading dark:text-dark-heading border border-light-border dark:border-dark-border font-semibold rounded-full transition-all hover:bg-light-section dark:hover:bg-dark-section flex items-center gap-2"
                    >
                        <FiMail /> Contact Me
                    </a>
                    <a
                        href="/Ronit_Resume.pdf"
                        download="Ronit_Prasad_Resume.pdf"
                        className="px-8 py-3 bg-transparent border border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-semibold rounded-full transition-all hover:border-light-primary hover:text-light-primary dark:hover:text-dark-primary dark:hover:border-dark-primary flex items-center gap-2"
                    >
                        <FiDownload /> Download CV
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 flex justify-center gap-6 text-slate-500 dark:text-slate-400"
                >
                    <a href="https://www.linkedin.com/in/ronit-prasad-aa90122a2/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-2xl">
                        <FiLinkedin />
                    </a>
                    <a href="https://github.com/ronitprasad23" className="hover:text-slate-800 dark:hover:text-white transition-colors text-2xl">
                        <FiGithub />
                    </a>
                </motion.div>

                {/* Tech Stack Marquee (Static for now) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50"
                >
                    <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest">Tech Stack</p>
                    <div className="flex justify-center gap-8 text-3xl text-slate-400 dark:text-slate-600">
                        <SiReact className="hover:text-[#61DAFB] transition-colors" title="React" />
                        <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
                        <SiPython className="hover:text-[#3776AB] transition-colors" title="Python" />
                        <SiNodedotjs className="hover:text-[#339933] transition-colors" title="Node.js" />
                    </div>
                </motion.div>

            </div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Hero;
