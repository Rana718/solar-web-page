import React from 'react'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hooks'
import { useTheme } from '../context/ThemeContext';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

function Connect() {
    const { darkMode } = useTheme();

    return (
        <footer className={`w-full relative ${darkMode
            ? 'bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 border-t border-indigo-800/30'
            : 'bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 border-t border-blue-200/50'
            } before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)] 
            before:opacity-40 before:pointer-events-none`}>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Footer Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Solar Quest
                        </h3>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                            Innovating solar energy solutions for a sustainable future.
                        </p>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                            <p>123 Solar Avenue</p>
                            <p>Green City, Earth</p>
                        </div>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Quick Links
                        </h3>
                        <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a></li>
                            <li><a href="#connect" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Contact Us
                        </h3>
                        <div className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                            <p>Email: support@solartrackerinnovations.com</p>
                            <p>Phone: +1 (800) 555-TRACK</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://twitter.com/SolarTrackerInno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-full ${darkMode
                                        ? 'bg-gray-800 hover:bg-gray-700'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                    } shadow-lg hover:text-blue-400 transition-all flex items-center justify-center`}
                            >
                                <FaXTwitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://linkedin.com/company/solar-tracker-innovations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-full ${darkMode
                                        ? 'bg-gray-800 hover:bg-gray-700'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                    } shadow-lg hover:text-blue-400 transition-all flex items-center justify-center`}
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={`pt-8 mt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300'
                        } text-center ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}
                >
                    <p>© 2024 Solar Quest. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}

export default SectionWrapper(Connect, "connect");