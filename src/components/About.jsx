import React from 'react'
import { motion } from 'framer-motion';
import { solar1, solar2 } from '../assets';
import { SectionWrapper } from '../hooks'
import { useTheme } from '../context/ThemeContext';

function About() {
    const { darkMode } = useTheme();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto py-16">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-12 px-4"
                >
                    <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Innovating Solar Energy for a Brighter Tomorrow
                    </h1>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        We specialize in state-of-the-art solar tracking systems that maximize energy production 
                        for homes, industries, and communities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg overflow-hidden shadow-xl"
                    >
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={solar1} type="video/mp4" />
                        </video>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-lg overflow-hidden shadow-xl"
                    >
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={solar2} type="video/mp4" />
                        </video>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                    >
                        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Single-Axis Trackers
                        </h2>
                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <li>• Panels adjust along a single axis (horizontal or vertical)</li>
                            <li>• Tracks the sun's position daily</li>
                            <li>• Boosts energy output automatically</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                    >
                        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Dual-Axis Trackers
                        </h2>
                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <li>• Adjust along two axes: East-West rotation and North-South tilt</li>
                            <li>• Increases energy production by up to 45% over fixed panels</li>
                            <li>• Maximum sunlight capture throughout the day</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Goal
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        To provide affordable, efficient, and sustainable solar energy solutions that reduce 
                        reliance on non-renewable energy sources.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about");