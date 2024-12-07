import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Loading = () => {
    const { darkMode } = useTheme();

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="relative">
                {/* Sun/Solar Core */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`w-16 h-16 rounded-full 
            ${darkMode
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                            : 'bg-gradient-to-r from-yellow-300 to-orange-400'}`}
                />

                {/* Rotating Orbits */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className={`absolute inset-0 rounded-full border-2 border-dashed
              ${darkMode
                                ? 'border-blue-400/30'
                                : 'border-blue-600/30'}`}
                        style={{
                            width: `${(i + 1) * 48}px`,
                            height: `${(i + 1) * 48}px`,
                            left: `-${(i + 1) * 16}px`,
                            top: `-${(i + 1) * 16}px`,
                        }}
                    >
                        {/* Solar Panel on Orbit */}
                        <motion.div
                            className={`absolute w-4 h-4 
                ${darkMode
                                    ? 'bg-blue-400'
                                    : 'bg-blue-600'} 
                rounded`}
                            style={{
                                top: '0%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    </motion.div>
                ))}

                {/* Loading Text */}
                <motion.p
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 
            ${darkMode ? 'text-gray-300' : 'text-gray-700'} 
            font-medium text-sm whitespace-nowrap`}
                >
                    Loading Solar Energy...
                </motion.p>
            </div>
        </div>
    );
};

export default Loading;