// SoilMoistureChart.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';


const SoilMoistureChart = () => {
    const { darkMode } = useTheme();
    const chartRef = useRef();
    const tooltipRef = useRef();
    const containerRef = useRef();
    const [width, setWidth] = useState(500);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chartData, setChartData] = useState([]);

   
    useEffect(() => {
        if (!containerRef.current) return;
        
        setWidth(containerRef.current.clientWidth);
        
        const resizeObserver = new ResizeObserver(entries => {
            if (entries[0]) {
                setWidth(entries[0].contentRect.width);
            }
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    
    useEffect(() => {
        const channelID = '2742897';
        const apiKey = import.meta.env.API_KEY;
        const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=100`;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const parsedData = data.feeds.map(d => ({
                    date: new Date(d.created_at),
                    value: +d.field1 || 0
                }));
                setChartData(parsedData);
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); 

    
    useEffect(() => {
        if (!chartRef.current || !chartData.length || width === 0) return;

        try {
            const margin = {
                top: 20,
                right: width < 600 ? 20 : 30,
                bottom: 50,
                left: width < 600 ? 40 : 60
            };

            const chartWidth = width - margin.left - margin.right;
            const height = 275 - margin.top - margin.bottom;

            // Clear previous chart
            d3.select(chartRef.current).selectAll('*').remove();

            const svg = d3.select(chartRef.current)
                .append('svg')
                .attr('width', width)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            const x = d3.scaleTime()
                .domain(d3.extent(chartData, d => d.date))
                .range([0, chartWidth]);

            const y = d3.scaleLinear()
                .domain([0, d3.max(chartData, d => d.value) * 1.1])
                .nice()
                .range([height, 0]);

            // Add X axis
            svg.append('g')
                .attr('class', 'x-axis')
                .attr('transform', `translate(0,${height})`)
                .style('color', darkMode ? '#9ca3af' : '#4b5563')
                .call(d3.axisBottom(x).ticks(width < 600 ? 4 : 6))
                .selectAll('text')
                .style('text-anchor', 'end')
                .attr('dx', '-.8em')
                .attr('dy', '.15em')
                .attr('transform', 'rotate(-45)');

            // Add Y axis
            svg.append('g')
                .attr('class', 'y-axis')
                .style('color', darkMode ? '#9ca3af' : '#4b5563')
                .call(d3.axisLeft(y).ticks(5));

            // Add line
            const line = d3.line()
                .x(d => x(d.date))
                .y(d => y(d.value))
                .curve(d3.curveMonotoneX);

            // Add line path with animation
            const path = svg.append('path')
                .datum(chartData)
                .attr('fill', 'none')
                .attr('stroke', darkMode ? '#60a5fa' : '#3b82f6')
                .attr('stroke-width', 2)
                .attr('d', line);

            // Animate line drawing
            const pathLength = path.node().getTotalLength();
            path.attr('stroke-dasharray', pathLength)
                .attr('stroke-dashoffset', pathLength)
                .transition()
                .duration(1000)
                .attr('stroke-dashoffset', 0);

            svg.selectAll('.dot')
                .data(chartData)
                .enter()
                .append('circle')
                .attr('class', 'dot')
                .attr('cx', d => x(d.date))
                .attr('cy', d => y(d.value))
                .attr('r', 0)
                .attr('fill', darkMode ? '#60a5fa' : '#3b82f6')
                .on('mouseover', (event, d) => {
                    const tooltip = d3.select(tooltipRef.current);
                    tooltip
                        .style('opacity', 1)
                        .style('left', `${event.pageX + 10}px`)
                        .style('top', `${event.pageY - 10}px`)
                        .html(`
                            <div class="p-2">
                                <div class="font-semibold">Soil Moisture: ${d.value.toFixed(1)}%</div>
                                <div class="text-sm">${d.date.toLocaleString()}</div>
                            </div>
                        `);
                })
                .on('mouseout', () => {
                    d3.select(tooltipRef.current)
                        .style('opacity', 0);
                })
                .transition()
                .duration(1000)
                .attr('r', 4);

        } catch (error) {
            console.error('Error drawing chart:', error);
            setError('Failed to render chart');
        }
    }, [chartData, darkMode, width]);

    if (isLoading) {
        return (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center items-center h-64"
            >
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`w-12 h-12 border-4 rounded-full
                        ${darkMode 
                            ? 'border-t-blue-500 border-blue-500/20' 
                            : 'border-t-blue-600 border-blue-600/20'
                        }`}
                />
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-6 rounded-xl ${
                    darkMode 
                        ? 'bg-red-950/50 text-red-400 border border-red-900/50' 
                        : 'bg-red-50 text-red-600 border border-red-200'
                }`}
            >
                <span className="text-xl">⚠️</span>
                <p className="mt-2">{error}</p>
            </motion.div>
        );
    }

    return (
        <div 
            ref={containerRef}
            className={`relative p-4 sm:p-6 rounded-xl transition-all duration-300
                ${darkMode 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }
                hover:shadow-lg hover:shadow-blue-500/5`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div 
                    ref={chartRef} 
                    className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500/20 
                        scrollbar-track-transparent"
                />
                <motion.div
                    ref={tooltipRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute opacity-0 pointer-events-none px-4 py-3 rounded-lg
                        backdrop-blur-sm shadow-xl z-50 
                        ${darkMode 
                            ? 'bg-gray-800/90 text-gray-200 border border-gray-700' 
                            : 'bg-white/90 text-gray-800 border border-gray-200'
                        }`}
                />
            </motion.div>

            {/* Enhanced Legend & Stats */}
            <div className={`mt-6 px-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    {[
                        { label: 'Min', value: `${Math.min(...chartData.map(d => d.value)).toFixed(1)}%` },
                        { label: 'Avg', value: `${(chartData.reduce((a,b) => a + b.value, 0) / chartData.length).toFixed(1)}%` },
                        { label: 'Max', value: `${Math.max(...chartData.map(d => d.value)).toFixed(1)}%` }
                    ].map(stat => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-3 rounded-lg ${
                                darkMode 
                                    ? 'bg-gray-800/50 border border-gray-700' 
                                    : 'bg-gray-50/50 border border-gray-200'
                            }`}
                        >
                            <div className="text-xs uppercase">{stat.label}</div>
                            <div className={`text-lg font-semibold ${
                                darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Last Updated */}
                <div className="text-xs text-center mt-4 opacity-75">
                    Last updated: {new Date(chartData[chartData.length - 1]?.date).toLocaleString() || 'N/A'}
                </div>
            </div>
        </div>
    );
};

export default SoilMoistureChart;