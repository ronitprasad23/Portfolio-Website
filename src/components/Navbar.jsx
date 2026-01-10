import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [theme, toggleTheme] = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const activeLink = "text-light-primary dark:text-dark-primary font-semibold";
    const normalLink = "text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300";

    return (
        <div className="fixed w-full z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md shadow-sm border-b border-light-border dark:border-dark-border transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <img
                        src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                        alt="RP Logo"
                        className="w-10 h-10 object-cover rounded-full"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-light-section dark:bg-dark-section text-light-text dark:text-yellow-400 hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-light-section dark:bg-dark-section text-light-text dark:text-yellow-400"
                    >
                        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>

                    <button
                        onClick={toggleMenu}
                        className="text-light-heading dark:text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 p-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-2 ${isActive ? activeLink : normalLink}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
