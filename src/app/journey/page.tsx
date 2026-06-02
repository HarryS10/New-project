"use client";

import { useMemo } from "react";

export default function JourneyPage() {
    const gender = useMemo(() => {
        if (typeof window === "undefined") return "";
        return localStorage.getItem("visitorGender") || "";
    }, []);

    return (
        <main className="h-screen bg-black flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold">
                    Welcome to Shashwat&apos;s Portfolio 🚀
                </h1>

                <p className="mt-4 text-xl text-white/70">
                    Selected: {gender}
                </p>
            </div>
        </main>
    );
}