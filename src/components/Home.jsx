import React from 'react';
import { motion } from 'framer-motion';
import { solar } from '../assets';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
    const { darkMode } = useTheme();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="relative min-h-screen pt-16 flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={solar}
                    alt="Solar Panel Background"
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${darkMode ? 'bg-black/30' : 'bg-white/40'} backdrop-blur-sm`}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="space-y-8"
                >
                    <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Welcome to Solar Tracker Innovations!
                    </h1>

                    <p className={`text-xl md:text-2xl italic ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        "Empowering Sustainable Energy with Advanced Solar Tracking Technology."
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
                    >
                        <p className="mb-6">
                            Discover how single-axis and dual-axis solar trackers revolutionize solar panel efficiency
                            by following the sun's movement, ensuring optimal energy output.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.2 }}
                                    className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}
                                >
                                    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="space-y-4"
                        >
                            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Why Choose Solar Trackers?
                            </h2>
                            <ul className={`list-disc list-inside space-y-2 ${darkMode
                                    ? 'text-gray-300'
                                    : 'text-gray-800 font-medium'
                                }`}>
                                <li className="text-shadow-sm">Up to 45% more energy output compared to fixed panels.</li>
                                <li className="text-shadow-sm">Adaptable and efficient performance, optimized for maximum sunlight capture.</li>
                            </ul>
                            <p className={`mt-4 leading-relaxed ${darkMode
                                    ? 'text-gray-300'
                                    : 'text-gray-800 font-medium'
                                } text-shadow-sm`}>
                                Explore our innovative solutions and join us in building a sustainable future.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

const services = [
    {
        title: "Household Installation",
        description: "Enhance energy production by up to 40%."
    },
    {
        title: "Buy from Power Plant",
        description: "Support green energy without installation."
    },
    {
        title: "Industrial Solutions",
        description: "Large-scale energy generation for public or private sectors."
    }
];