"use client";

import { useRouter } from "next/navigation";

import SpaceBackground from "@/components/landing/SpaceBackground";
import StarField from "@/components/landing/StarField";
import GenderSelection from "@/components/landing/GenderSelection";
import WarpTransition from "@/components/landing/WarpTransition";
import {useState} from "react";

export default function Home() {
    const router = useRouter();
    const [warp, setWarp] = useState(false);

    const handleSelect = (gender: string) => {
        localStorage.setItem("visitorGender", gender);

        setWarp(true);

        setTimeout(() => {
            router.push("/journey");
        }, 2000);
    };

    return (
        <main className=" relative h-screen overflow-hidden flex flex-col
            items-center justify-center bg-black "
        >
            <WarpTransition active={warp} />

            <SpaceBackground />
            <StarField />

            <div className={` text-center transition-all duration-2000 ${warp ? "scale-[4] opacity-0 blur-xl" : ""} `}>
                <h1 className=" text-white text-6xl md:text-8xl font-black tracking-widest
                drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] ">
                    WELCOME
                </h1>

                <p className="text-white/70 mt-6 text-xl">
                    Who are you?
                </p>

                <GenderSelection onSelect={handleSelect} />
            </div>
        </main>
    );
}