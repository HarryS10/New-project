"use client";

import { motion } from "framer-motion";

export default function Radar() {
    return (
        <div className="absolute right-5 top-5">
            <div className="relative h-28 w-28">
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border border-cyan-500"
                        animate={{
                            scale: [0.5, 1.5],
                            opacity: [1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: ring * 0.8,
                        }}
                    />
                ))}

                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400" />
            </div>
        </div>
    );
}