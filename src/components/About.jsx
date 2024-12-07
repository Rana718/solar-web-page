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

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className={`w-full relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-20"
                >
                    <motion.div
                        animate={floatingAnimation}
                        className="relative"
                    >
                        <h1 className={`text-5xl md:text-6xl font-bold mb-6 
                            bg-clip-text text-transparent bg-gradient-to-r
                            ${darkMode 
                                ? 'from-blue-400 via-blue-200 to-purple-400' 
                                : 'from-blue-600 via-blue-800 to-purple-600'}`}
                        >
                            Innovating Solar Energy for a Brighter Tomorrow
                        </h1>
                    </motion.div>
                    <motion.p 
                        className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} 
                            max-w-3xl mx-auto leading-relaxed`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        We specialize in state-of-the-art solar tracking systems that maximize energy production 
                        for homes, industries, and communities.
                    </motion.p>
                </motion.div>

                {/* Video Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {[solar1, solar2].map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 rounded-2xl transform transition-all duration-300
                                ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} 
                                group-hover:bg-transparent`} 
                            />
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[400px] object-cover rounded-2xl shadow-xl 
                                    transform transition-all duration-300 group-hover:shadow-2xl"
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                            <motion.div 
                                className={`absolute inset-0 rounded-2xl border-2 border-transparent
                                    group-hover:border-blue-500/50 transition-all duration-300`}
                                whileHover={{ scale: 1.02 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {['Single-Axis Trackers', 'Dual-Axis Trackers'].map((title, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300
                                ${darkMode 
                                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                                    : 'bg-white/50 hover:bg-white/70'} 
                                shadow-lg hover:shadow-xl border
                                ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                        >
                            <h2 className={`text-2xl font-bold mb-6 
                                ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {title}
                            </h2>
                            <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {index === 0 ? (
                                    <>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>Panels adjust along a single axis</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>Tracks the sun's position daily</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>Boosts energy output automatically</span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>East-West rotation and North-South tilt</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>45% increase over fixed panels</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>Maximum sunlight capture all day</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Goal Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <h3 className={`text-3xl font-bold mb-6 
                        ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Goal
                    </h3>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} 
                        max-w-3xl mx-auto leading-relaxed`}>
                        To provide affordable, efficient, and sustainable solar energy solutions that reduce 
                        reliance on non-renewable energy sources.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default SectionWrapper(About, "about");