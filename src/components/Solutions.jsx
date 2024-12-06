import React from 'react'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hooks'
import { useTheme } from '../context/ThemeContext';

function Solutions() {
    const { darkMode } = useTheme();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const comparisonData = [
        { feature: "Energy Output", fixed: "Baseline", tracker: "25-45% higher" },
        { feature: "Initial Cost", fixed: "Lower", tracker: "Higher" },
        { feature: "Maintenance", fixed: "Minimal", tracker: "Moderate" },
        { feature: "Land Utilization", fixed: "Moderate", tracker: "Optimized" },
        { feature: "Performance", fixed: "Fixed angle", tracker: "Adapts to sun movement" },
        { feature: "Best Use Cases", fixed: "Small setups", tracker: "High-efficiency projects" }
    ];

    return (
        <div className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Offerings
                    </h1>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Household Installation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} 
                            hover:transform hover:scale-105 transition-all duration-300`}
                    >
                        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Household Installation
                        </h2>
                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Maximize your home's solar energy efficiency with our advanced solar trackers.
                        </p>
                        <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <li>Increase energy production by up to 40%</li>
                            <li>Reduce space requirements</li>
                            <li>Achieve faster ROI and long-term savings</li>
                        </ul>
                    </motion.div>

                    {/* Buy from Power Plant */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}
                            hover:transform hover:scale-105 transition-all duration-300`}
                    >
                        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Buy from Power Plant
                        </h2>
                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Don't want to install solar panels at home? No problem!
                        </p>
                        <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <li>Rent monthly or yearly electricity plans</li>
                            <li>Support green energy initiatives</li>
                            <li>Contribute to sustainability</li>
                        </ul>
                    </motion.div>

                    {/* Industrial Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}
                            hover:transform hover:scale-105 transition-all duration-300`}
                    >
                        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Industrial Solutions
                        </h2>
                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            For large-scale electricity needs in public or private sectors.
                        </p>
                        <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <li>Customizable power plant setups</li>
                            <li>Scalable solutions</li>
                            <li>Expert consultation</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Fixed Panels vs. Solar Trackers
                    </h2>
                    <div className="overflow-x-auto">
                        <table className={`w-full ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <thead className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                <tr>
                                    <th className="px-6 py-3 text-left">Feature</th>
                                    <th className="px-6 py-3 text-left">Fixed Panels</th>
                                    <th className="px-6 py-3 text-left">Solar Trackers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                        className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}
                                    >
                                        <td className="px-6 py-4">{row.feature}</td>
                                        <td className="px-6 py-4">{row.fixed}</td>
                                        <td className="px-6 py-4">{row.tracker}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(Solutions, "solutions");