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
            <section
                id={idName}
                className="relative z-0 w-full"
            >
                <motion.div
                    variants={staggerContainer(0.5, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <Component />
                </motion.div>
            </section>
        );
    };

export default StarWrapper;