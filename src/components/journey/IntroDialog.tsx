"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroDialogProps { gender: string; }

export default function IntroDialog({ gender, }: IntroDialogProps) {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!name.trim()) return;

        localStorage.setItem("visitorName", name);
        setSubmitted(true);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 80,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
            }}
            className=" w-175 max-w-[90vw] p-8 rounded-3xl border border-cyan-500/30
            bg-white/10 backdrop-blur-xl text-white "
        >
            <p className="text-cyan-400 mb-2">
                SYSTEM ONLINE...
            </p>

            <h1 className="text-4xl font-bold mb-6">
                Welcome to Shashwat&apos;s Portfolio 🚀
            </h1>

            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                    >
                        <label className="block mb-3 text-white/70">
                            Enter Name:
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit();
                                }
                            }}
                            placeholder="Your Name"
                            className=" w-full px-4 py-3 rounded-xl bg-black/30 border
                                border-cyan-500/40 outline-none focus:border-cyan-400 "
                        />

                        <button
                            onClick={handleSubmit}
                            className=" mt-4 px-6 py-3 rounded-xl bg-cyan-500
                                hover:bg-cyan-400 transition "
                        >
                            Continue
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="hello"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                    >
                        <h2 className="text-3xl font-semibold text-cyan-400">
                            Hello {name} 👋
                        </h2>

                        <p className="mt-4 text-white/60">
                            Navigation systems initialized.
                        </p>

                        <button
                            className=" mt-6 px-6 py-3 rounded-xl bg-cyan-500
                                hover:bg-cyan-400 transition"
                        >
                            START MISSION
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}