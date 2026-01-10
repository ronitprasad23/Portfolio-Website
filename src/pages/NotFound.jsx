import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-light-base dark:bg-dark-base transition-colors duration-300">
            <div className="text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-9xl font-bold text-light-primary dark:text-dark-primary mb-4"
                >
                    404
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-light-heading dark:text-dark-heading mb-6"
                >
                    Page Not Found
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-light-text dark:text-dark-text mb-8 max-w-md mx-auto"
                >
                    Oops! The page you are looking for seems to have vanished into the digital void.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="px-8 py-3 bg-light-primary hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white font-bold rounded-full transition-all shadow-lg hover:shadow-light-primary/30 inline-block"
                    >
                        Go Back Home
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;
