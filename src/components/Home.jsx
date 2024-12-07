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

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative min-h-screen pt-16">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={solar}
                    alt="Solar Panel Background"
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 
                    ${darkMode 
                        ? 'bg-gradient-to-br from-black/70 via-indigo-950/50 to-black/70' 
                        : 'bg-gradient-to-br from-white/70 via-blue-50/50 to-white/70'
                    } backdrop-blur-sm`}
                />
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-64 h-64 rounded-full 
                                ${darkMode ? 'bg-blue-500' : 'bg-blue-200'} 
                                opacity-10 blur-3xl`}
                            style={{
                                left: `${30 + i * 20}%`,
                                top: `${20 + i * 15}%`
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center space-y-8 max-w-4xl"
                >
                    {/* Main Title */}
                    <motion.div
                        animate={floatingAnimation}
                        className="space-y-4"
                    >
                        <h1 className={`text-5xl md:text-7xl font-bold 
                            ${darkMode ? 'text-white' : 'text-gray-900'}
                            bg-clip-text text-transparent bg-gradient-to-r 
                            ${darkMode 
                                ? 'from-blue-400 via-blue-200 to-blue-400' 
                                : 'from-blue-600 via-blue-800 to-blue-600'}`}
                        >
                            Welcome to Solar Tracker Innovations!
                        </h1>
                        <p className={`text-xl md:text-2xl italic 
                            ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}
                        >
                            "Empowering Sustainable Energy with Advanced Solar Tracking Technology."
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`p-6 rounded-xl backdrop-blur-md 
                                    ${darkMode 
                                        ? 'bg-gray-900/40 hover:bg-gray-800/60' 
                                        : 'bg-white/40 hover:bg-white/60'} 
                                    shadow-lg hover:shadow-xl transform transition-all duration-300
                                    border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                            >
                                <h3 className={`text-xl font-bold mb-4 
                                    ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}
                                >
                                    {service.title}
                                </h3>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="mt-12"
                    >
                        <a href="#about"
                            className={`inline-block px-8 py-4 rounded-full text-lg font-semibold
                                ${darkMode 
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                                    : 'bg-blue-600 hover:bg-blue-700 text-white'}
                                transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                        >
                            Discover More
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className={`w-6 h-10 rounded-full border-2 
                        ${darkMode ? 'border-gray-300' : 'border-gray-700'} 
                        flex justify-center p-2`}
                    >
                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className={`w-1 h-3 rounded-full 
                                ${darkMode ? 'bg-gray-300' : 'bg-gray-700'}`}
                        />
                    </div>
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