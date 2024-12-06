import { motion } from "framer-motion";
import React from "react";



const staggerContainer = (staggerChildren, delayChildren = 0) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
}

const StarWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer(0.5, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default StarWrapper;