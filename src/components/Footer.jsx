import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-light-section dark:bg-dark-section border-t border-light-border dark:border-dark-border pt-20 pb-10 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-light-primary/0 via-light-primary/50 to-light-primary/0 dark:from-dark-primary/0 dark:via-dark-primary/50 dark:to-dark-primary/0"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">

                    {/* Brand & Bio (Col 1 - spans 5 cols) */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-6">
                        <h3 className="text-3xl font-display font-bold text-light-heading dark:text-dark-heading tracking-tight">
                            <img src="/logo.png" alt="Ronit Prasad Logo" className="h-10 w-auto" />
                        </h3>
                        <p className="text-light-text dark:text-dark-text leading-relaxed text-lg max-w-md">
                            Crafting exceptional digital experiences with a blend of data-driven insights and creative design. Open to new opportunities.
                        </p>
                    </div>

                    {/* Quick Links (Col 2 - spans 3 cols) */}
                    <div className="md:col-span-6 lg:col-span-3">
                        <h4 className="text-lg font-bold text-light-heading dark:text-dark-heading mb-6 flex items-center gap-2">
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-light-primary dark:bg-dark-primary transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch (Col 3 - spans 4 cols) */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <h4 className="text-lg font-bold text-light-heading dark:text-dark-heading mb-6">
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <a href="mailto:ronitprasad.per06@gmail.com" className="flex items-center gap-3 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors group">
                                <span className="p-2 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border group-hover:border-light-primary dark:group-hover:border-dark-primary transition-colors">
                                    <FiMail size={18} />
                                </span>
                                <span>ronitprasad.per06@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-light-text dark:text-dark-text">
                                <span className="p-2 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
                                    <FiMapPin size={18} />
                                </span>
                                <span>Ahmedabad, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-8 border-t border-light-border dark:border-dark-border">
                            <h5 className="text-sm font-semibold text-light-text dark:text-dark-text mb-4 uppercase tracking-wider">Connect</h5>
                            <div className="flex space-x-3">
                                {[
                                    { icon: <FiGithub size={20} />, href: "https://github.com/ronitprasad23" },
                                    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/ronit-prasad-aa90122a2/" },
                                    { icon: <FiTwitter size={20} />, href: "https://x.com/" },
                                    { icon: <FiInstagram size={20} />, href: "https://www.instagram.com/ronit_prasad_1599/" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="p-3 rounded-lg bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border hover:border-light-primary dark:hover:border-dark-primary hover:text-light-primary dark:hover:text-dark-primary transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-light-border dark:border-dark-border pt-8 text-center">
                    <p className="text-light-text/60 dark:text-dark-text/60 text-sm">
                        &copy; {new Date().getFullYear()} Ronit Prasad. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
