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

    return (
        <div className={`w-full relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 
                        bg-clip-text text-transparent bg-gradient-to-r
                        ${darkMode
                            ? 'from-blue-400 via-blue-200 to-purple-400'
                            : 'from-blue-600 via-blue-800 to-purple-600'}`}
                    >
                        Our Solutions
                    </h1>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative p-8 rounded-2xl transition-all duration-300
                                ${darkMode
                                    ? 'bg-gray-800/50 hover:bg-gray-800/70'
                                    : 'bg-white/50 hover:bg-white/70'} 
                                backdrop-blur-sm shadow-lg hover:shadow-2xl
                                border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
                                overflow-hidden`}
                            >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br
                                ${darkMode
                                    ? 'from-blue-500/10 via-purple-500/10 to-transparent'
                                    : 'from-blue-500/5 via-purple-500/5 to-transparent'}`
                                }
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className={`text-2xl font-bold mb-4 bg-clip-text bg-gradient-to-r${darkMode
                                        ? 'from-blue-300 to-purple-300 text-white'
                                        : 'from-blue-600 to-purple-600 text-black'}`
                                    }
                                >
                                    {service.title}
                                </h3>
                                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + (index * 0.2) + (featureIndex * 0.1) }}
                                            className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}/>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16"
                >
                    <h2 className={`text-3xl font-bold mb-8 text-center 
                        ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Fixed Panels vs. Solar Trackers
                    </h2>
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                        <div className="overflow-x-auto">
                            <table className={`w-full ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <thead className={`${darkMode
                                    ? 'bg-gray-800/80'
                                    : 'bg-gray-100/80'} backdrop-blur-sm`}
                                >
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Feature</th>
                                        <th className="px-6 py-4 text-left font-semibold">Fixed Panels</th>
                                        <th className="px-6 py-4 text-left font-semibold">Solar Trackers</th>
                                    </tr>
                                </thead>
                                <tbody className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
                                    {comparisonData.map((row, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * index }}
                                            className={`
                                                ${darkMode
                                                    ? 'hover:bg-gray-800/50 border-gray-700'
                                                    : 'hover:bg-gray-50/50 border-gray-200'} 
                                                border-b transition-colors duration-200`}
                                        >
                                            <td className="px-6 py-4 font-medium">{row.feature}</td>
                                            <td className="px-6 py-4">{row.fixed}</td>
                                            <td className={`px-6 py-4 ${row.tracker.includes('higher') || row.tracker.includes('Optimized')
                                                ? darkMode ? 'text-green-400' : 'text-green-600'
                                                : ''
                                                }`}>{row.tracker}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default SectionWrapper(Solutions, "solutions");


const comparisonData = [
    { feature: "Energy Output", fixed: "Baseline", tracker: "25-45% higher" },
    { feature: "Initial Cost", fixed: "Lower", tracker: "Higher" },
    { feature: "Maintenance", fixed: "Minimal", tracker: "Moderate" },
    { feature: "Land Utilization", fixed: "Moderate", tracker: "Optimized" },
    { feature: "Performance", fixed: "Fixed angle", tracker: "Adapts to sun movement" },
    { feature: "Best Use Cases", fixed: "Small setups", tracker: "High-efficiency projects" }
];


const servicesData = [
    {
        title: "Household Installation",
        description: "Maximize your home's solar energy efficiency with our advanced solar trackers.",
        features: [
            "Increase energy production by up to 40%",
            "Reduce space requirements",
            "Achieve faster ROI and long-term savings"
        ]
    },
    {
        title: "Buy from Power Plant",
        description: "Don't want to install solar panels at home? No problem!",
        features: [
            "Rent monthly or yearly electricity plans",
            "Support green energy initiatives",
            "Contribute to sustainability"
        ]
    },
    {
        title: "Industrial Solutions",
        description: "For large-scale electricity needs in public or private sectors.",
        features: [
            "Customizable power plant setups",
            "Scalable solutions",
            "Expert consultation"
        ]
    }
];