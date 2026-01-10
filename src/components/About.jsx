import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward } from 'react-icons/fi';

const About = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section id="about" className="py-20 bg-light-base dark:bg-dark-base transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-light-primary dark:text-dark-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                        My Journey
                    </span>
                    <h2 className="text-4xl font-display font-bold text-light-heading dark:text-dark-heading">
                        About Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FiBriefcase className="text-2xl text-light-primary dark:text-dark-primary" />
                            <h3 className="text-2xl font-bold text-light-heading dark:text-dark-heading">Experience</h3>
                        </div>

                        <div className="relative border-l-2 border-light-border dark:border-dark-border ml-3 pl-8 pb-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-light-primary dark:bg-dark-primary ring-4 ring-light-card dark:ring-dark-card"></div>
                            <h4 className="text-xl font-bold text-light-heading dark:text-dark-heading">Data Science & Analytics Intern</h4>
                            <p className="text-light-primary dark:text-dark-primary font-medium mb-2">Zidio Development | March 2025 - May 2025</p>
                            <p className="text-light-text dark:text-dark-text leading-relaxed">
                                Developed and implemented data-driven solutions in a rapidly growing product-based startup.
                                Collaborated with cross-functional teams to design, code, and validate new analytical features.
                                Conducted targeted research and analysis for ongoing real-world development projects.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FiBook className="text-2xl text-light-primary dark:text-dark-primary" />
                            <h3 className="text-2xl font-bold text-light-heading dark:text-dark-heading">Education</h3>
                        </div>

                        <div className="relative border-l-2 border-light-border dark:border-dark-border ml-3 pl-8 pb-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-light-primary dark:bg-dark-primary ring-4 ring-light-card dark:ring-dark-card"></div>
                            <h4 className="text-xl font-bold text-light-heading dark:text-dark-heading">BSc-IT Animation Department</h4>
                            <p className="text-light-primary dark:text-dark-primary font-medium mb-2">Gujarat University | 2021 - 2024</p>
                            <p className="text-light-text dark:text-dark-text">
                                CGPA: 7.49 <br />
                                Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management, Software Engineering.
                            </p>
                        </div>
                        <div className="relative border-l-2 border-light-border dark:border-dark-border ml-3 pl-8 pb-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-light-primary dark:bg-dark-primary ring-4 ring-light-card dark:ring-dark-card"></div>
                            <h4 className="text-xl font-bold text-light-heading dark:text-dark-heading">MSC-IT Faculity of computer application and technology</h4>
                            <p className="text-light-primary dark:text-dark-primary font-medium mb-2">GLS University | 2025 - 2027</p>
                            <p className="text-light-text dark:text-dark-text">
                                CGPA: 8.49 <br />
                                Relevant Coursework: Big Data Analytics, Data Mining, Statistical Analysis, Predictive Modeling, Data Visualization.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications */}
                {/* Certifications Carousel */}
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <FiAward className="text-2xl text-light-primary dark:text-dark-primary" />
                        <h3 className="text-2xl font-bold text-light-heading dark:text-dark-heading">Certifications</h3>
                    </div>

                    <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className="flex gap-6 w-max px-4"
                        >
                            {[
                                {
                                    title: "Deloitte Virtual Certification Course",
                                    desc: "Data-Analytics integrated with AI • 2025"
                                },
                                {
                                    title: "Python for Data Structure & Algorithms",
                                    desc: "NPTEL Swayam (IIT) • Sep 2025 • Score: 80%"
                                },
                                {
                                    title: "Internal Hackathon Participation",
                                    desc: "GLS University (FCAIT) • 4th Oct 2025"
                                },
                                {
                                    title: "The Hour of AI",
                                    desc: "GLS University (ACM Student Chapter) • CS for ALL"
                                }
                            ].map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="min-w-[300px] md:min-w-[400px] bg-light-card dark:bg-dark-card p-6 rounded-xl border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <h4 className="font-bold text-light-heading dark:text-dark-heading mb-2">{cert.title}</h4>
                                    <p className="text-sm text-light-text dark:text-dark-text">{cert.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
