"use client";

import { useMemo, useState } from "react";

import IntroDialog from "@/components/journey/IntroDialog";
import CommandCenter from "@/components/journey/CommandCenter";

export default function JourneyPage() {
    const [missionStarted, setMissionStarted] = useState(false);

    const gender = useMemo(() => {
        if (typeof window === "undefined") return "";
        return localStorage.getItem("visitorGender") || "";
    }, []);

    return (
        <main className="h-screen bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="stars" />
            </div>

            <div className="relative z-10 h-full">
                {!missionStarted ? (
                    <IntroDialog
                        gender={gender}
                        onStartMission={() => setMissionStarted(true)}
                    />
                ) : (
                    <CommandCenter />
                )}
            </div>
        </main>
    );
}