import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi';
import { api } from '../lib/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await api.getProjects();
                setProjects(data || []);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(project => {
        const matchesCategory = filter === 'All' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['All', 'Web Development', 'Data Science', 'Data Analysis', 'Other'];

    if (loading) {
        return (
            <div className="py-20 flex items-center justify-center bg-light-section dark:bg-dark-section">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-light-primary dark:border-dark-primary"></div>
            </div>
        );
    }

    return (
        <section id="projects" className="py-20 bg-light-section dark:bg-dark-section transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-light-primary dark:text-dark-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Work</span>
                    <h2 className="text-4xl font-display font-bold text-light-heading dark:text-dark-heading">Featured Projects</h2>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-light-primary dark:bg-dark-primary text-white shadow-lg shadow-light-primary/30'
                                    : 'bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-light-base dark:hover:bg-dark-base'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-light-text/50 dark:text-dark-text/50" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all font-sans"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-light-primary/10 transition-shadow duration-300 group border border-light-border dark:border-dark-border"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="flex gap-3">
                                            {project.links?.repo && <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-dark-base transition-all" title="View Code"><FiGithub size={20} /></a>}
                                            {project.links?.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-dark-base transition-all" title="Live Demo"><FiExternalLink size={20} /></a>}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-light-primary dark:text-dark-primary uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-light-heading dark:text-dark-heading mb-3 group-hover:text-light-primary transition-colors">{project.title}</h3>
                                    <p className="text-light-text dark:text-dark-text text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech && Array.isArray(project.tech) && project.tech.length > 0 ? (
                                            project.tech.map((t, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block px-3 py-1 text-xs font-bold text-white bg-teal-600 rounded-full shadow-sm"
                                                >
                                                    {t}
                                                </span>
                                            ))
                                        ) : (
                                            project.tech ? (
                                                <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-teal-600 rounded-full shadow-sm">
                                                    {project.tech}
                                                </span>
                                            ) : null
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
