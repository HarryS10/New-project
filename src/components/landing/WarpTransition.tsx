"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
    active: boolean;
}

export default function WarpTransition({ active, }: Props) {
    return (
        <AnimatePresence>
            {active && (
                <>
                    <motion.div
                        className=" fixed inset-0 z-999 bg-black "
                        initial={{
                            opacity: 0,
                            scale: 1,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 30,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className=" fixed inset-0 z-1000 bg-white "
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0, 0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            times: [0, 0.5, 0.7, 1],
                        }}
                    />
                </>
            )}
        </AnimatePresence>
    );
}