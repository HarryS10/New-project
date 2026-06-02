"use client";

import { motion } from "framer-motion";

type Props = {
    onSelect: (gender: string) => void;
};

export default function GenderSelection({onSelect,}: Props) {
    return (
        <div className=" flex flex-col items-center gap-5 mt-10 ">
            {["MALE", "FEMALE"].map((gender) => (
                <motion.button
                    key={gender}
                    whileHover={{
                        scale: 1.05,
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    onClick={() => onSelect(gender)}
                    className=" w-64 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md
                    text-white font-bold tracking-widest shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/30
                    transition-all duration-300 "
                >
                    {gender}
                </motion.button>
            ))}
        </div>
    );
}