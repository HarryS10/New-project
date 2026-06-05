"use client";

import { useMemo } from "react";
import IntroDialog from "@/components/journey/IntroDialog";

export default function JourneyPage() {
    const gender = useMemo(() => {
        if (typeof window === "undefined") return "";
        return localStorage.getItem("visitorGender") || "";
    }, []);

    return (
        <main
            className=" h-screen bg-black relative overflow-hidden flex items-center justify-center "
        >
            {/* Background Stars */}
            <div className="absolute inset-0">
                <div className="stars" />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <IntroDialog gender={gender} />
            </div>
        </main>
    );
}