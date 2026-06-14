"use client";

import { useMemo, useState } from "react";

import IntroDialog from "@/components/journey/IntroDialog";
import CommandCenter from "@/components/journey/CommandCenter";
import Starfield from "@/components/space/Starfield";
import Nebula from "@/components/space/Nebula";
import Radar from "@/components/space/Radar";
import MissionStatus from "@/components/space/MissionStatus";

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

            <div className="relative min-h-screen overflow-hidden bg-black">

                <Nebula />

                <Starfield />

                <Radar />

                <MissionStatus />

                <main className="relative z-10">
                    <CommandCenter />
                </main>

            </div>
        </main>
    );
}