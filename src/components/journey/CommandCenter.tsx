"use client";

import { useState } from "react";

import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Timeline from "@/sections/Timeline";
import Contact from "@/sections/Contact";

export default function CommandCenter() {
    const [activeSection, setActiveSection] =
        useState("about");

    const sections = [
        "about",
        "skills",
        "projects",
        "timeline",
        "contact",
    ];

    return (
        <div className="h-screen flex text-white">
            {/* Left Navigation Panel */}
            <aside className="w-64 border-r border-cyan-500/30 bg-black/40 backdrop-blur-md p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-8">
                    COMMAND CENTER
                </h2>

                <div className="space-y-3">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() =>
                                setActiveSection(section)
                            }
                            className={`
                                w-full
                                p-3
                                rounded-xl
                                text-left
                                transition-all
                                duration-300
                                ${
                                activeSection === section
                                    ? "bg-cyan-500 text-black font-semibold"
                                    : "bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20"
                            }
                            `}
                        >
                            {section.toUpperCase()}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-8">
                {activeSection === "about" && (
                    <About />
                )}

                {activeSection === "skills" && (
                    <Skills />
                )}

                {activeSection === "projects" && (
                    <Projects />
                )}

                {activeSection === "timeline" && (
                    <Timeline />
                )}

                {activeSection === "contact" && (
                    <Contact />
                )}
            </main>

            {/* AI Assistant Panel */}
            <aside className="w-80 border-l border-cyan-500/30 bg-black/40 backdrop-blur-md p-6">
                <h3 className="text-cyan-400 text-xl font-bold mb-4">
                    AI ASSISTANT
                </h3>

                <div className="space-y-4">
                    <p className="text-green-400">
                        ● SYSTEM ONLINE
                    </p>

                    <p>
                        Welcome aboard,
                        explorer.
                    </p>

                    <p className="text-white/70">
                        You are currently viewing:
                    </p>

                    <div className="rounded-lg border border-cyan-500/30 p-3 bg-cyan-500/5">
                        <span className="text-cyan-400 font-semibold">
                            {activeSection.toUpperCase()}
                        </span>
                    </div>

                    <p className="text-white/60 text-sm">
                        Use the navigation panel to
                        explore Shashwat's portfolio,
                        projects, skills and journey.
                    </p>
                </div>
            </aside>
        </div>
    );
}