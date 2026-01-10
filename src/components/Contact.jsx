import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log(`Sending Email with: Service=${serviceId}, Template=${templateId}, Key=${publicKey}`);

        if (!serviceId || !templateId || !publicKey) {
            toast.error("Configuration Error: Missing EmailJS keys.");
            setIsLoading(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                toast.error(`Failed to send: ${error.text || "Unknown error"}`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-light-base dark:bg-dark-base transition-colors duration-300 relative">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-light-primary dark:text-dark-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl font-display font-bold text-light-heading dark:text-dark-heading">
                        Contact Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-light-heading dark:text-dark-heading mb-6">
                            Let's Talk About Your Project
                        </h3>
                        <p className="text-light-text dark:text-dark-text mb-8 text-lg">
                            I'm open to freelance opportunities and interesting projects.
                            Feel free to reach out using the form or directly via email.
                        </p>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-light-primary/10 dark:bg-dark-primary/10 rounded-lg text-light-primary dark:text-dark-primary">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-light-heading dark:text-dark-heading">Email</h4>
                                <a href="mailto:ronitprasad.per06@gmail.com" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                                    ronitprasad.per06@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-light-primary/10 dark:bg-dark-primary/10 rounded-lg text-light-primary dark:text-dark-primary">
                                <FiMapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-light-heading dark:text-dark-heading">Location</h4>
                                <p className="text-light-text dark:text-dark-text">
                                    Ahmedabad, Gujarat, India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-light-section dark:bg-dark-section p-8 rounded-2xl border border-light-border dark:border-dark-border"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-8 py-4 bg-light-primary hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-light-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
