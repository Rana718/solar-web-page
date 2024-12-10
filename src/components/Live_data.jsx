import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const getTitleAndUnit = (fieldName) => {
    switch (fieldName) {
        case 'tem':
            return { displayTitle: 'Temperature', yAxisLabel: 'Temperature (°C)' };
        case 'hum':
            return { displayTitle: 'Humidity', yAxisLabel: 'Humidity (%)' };
        case 'gps':
            return { displayTitle: 'GPS', yAxisLabel: 'Location' };
        case 'rtc':
            return { displayTitle: 'Real Time Clock', yAxisLabel: 'Time' };
        case 'azi':
            return { displayTitle: 'Azimuth Angle', yAxisLabel: 'Angle (°)' };
        case 'ele':
            return { displayTitle: 'Elevation', yAxisLabel: 'Angle (°)' };
        case 'ltr':
            return { displayTitle: 'Solar Tracking System', yAxisLabel: 'Position' };
        default:
            return { displayTitle: 'Temp Gauge', yAxisLabel: 'Value' };
    }
};

const ChartCard = ({ id, title, data, darkMode }) => {
    const { displayTitle, yAxisLabel } = getTitleAndUnit(title);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: displayTitle,
                color: darkMode ? '#fff' : '#111',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: yAxisLabel,
                    color: darkMode ? '#9ca3af' : '#4b5563'
                },
                ticks: {
                    color: darkMode ? '#9ca3af' : '#4b5563'
                },
                grid: {
                    color: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: darkMode ? '#9ca3af' : '#4b5563'
                },
                ticks: {
                    color: darkMode ? '#9ca3af' : '#4b5563',
                    maxRotation: 45,
                    minRotation: 45
                },
                grid: {
                    color: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl shadow-lg ${darkMode
                    ? 'bg-gray-800/50 border border-gray-700'
                    : 'bg-white/50 border border-gray-200'
                }`}
            style={{ height: '300px' }}
        >
            <Line
                data={data}
                options={chartOptions}
                id={`chart-${id}`}
            />
        </motion.div>
    );
};

export default function LiveData() {
    const { darkMode } = useTheme();
    const [charts, setCharts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const channelId = '2742897';
    const apiKey = import.meta.env.API_KEY;

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=100`
                );
        
                if (!response.ok) throw new Error('Network response was not ok');
                if (!isMounted) return;
        
                const data = await response.json();
        
                const chartData = [];
                const feeds = data.feeds.slice(-25); 
        
                for (let i = 1; i <= 8; i++) {
                    const fieldData = {
                        labels: feeds.map(feed => new Date(feed.created_at).toLocaleTimeString()),
                        datasets: [{
                            label: data.channel[`field${i}`],
                            data: feeds.map(feed => feed[`field${i}`]),
                            borderColor: darkMode ? '#60a5fa' : '#3b82f6',
                            backgroundColor: darkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    };
                    chartData.push({
                        title: data.channel[`field${i}`],
                        data: fieldData
                    });
                }
        
                setCharts(chartData);
                setLoading(false);
            } catch (err) {
                if (isMounted) {
                    console.error('Error fetching data:', err);
                    setError('Failed to load data');
                    setLoading(false);
                }
            }
        };

        fetchData();
        console.log(charts)
    }, [darkMode]);

    if (loading) {
        return (
            <div className={`min-h-screen pt-20 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} 
        flex items-center justify-center`}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent"
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className={`min-h-screen pt-20 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-black'}
        flex items-center justify-center`}>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen pt-20 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className={`text-4xl font-bold mb-6 
            ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Live Solar Performance Data
                    </h1>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Real-time monitoring of our solar tracking systems
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {charts.map((chart, index) => (
                        <ChartCard
                            key={index}
                            id={index}
                            title={chart.title}
                            data={chart.data}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}