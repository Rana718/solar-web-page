import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hooks'
import { useTheme } from '../context/ThemeContext';

function Connect() {
    const { darkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Let's Connect
                    </h1>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        We'd love to hear from you! Contact us for inquiries, quotes, or partnerships.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`space-y-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className="space-y-6">
                                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                                    >
                                        <h3 className="font-semibold">Email</h3>
                                        <p>support@solartrackerinnovations.com</p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                                    >
                                        <h3 className="font-semibold">Phone</h3>
                                        <p>+1 (800) 555-TRACK</p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                                    >
                                        <h3 className="font-semibold">Address</h3>
                                        <p>123 Solar Avenue, Green City, Earth</p>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Follow Us
                                </h2>
                                <div className="flex space-x-4">
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://twitter.com/SolarTrackerInno"
                                        target="_blank"
                                        className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                                    >
                                        Twitter
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://linkedin.com/company/solar-tracker-innovations"
                                        target="_blank"
                                        className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                                    >
                                        LinkedIn
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg`}
                    >
                        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
                                        } border border-gray-300 focus:ring-2 focus:ring-blue-500`}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
                                        } border border-gray-300 focus:ring-2 focus:ring-blue-500`}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows="4"
                                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
                                        } border border-gray-300 focus:ring-2 focus:ring-blue-500`}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                                transition-colors duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Let's build a sustainable future together!
                    </h2>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Join us in our mission to revolutionize solar energy technology.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default SectionWrapper(Connect, "connect");