import { portfolioData } from "@/data/portfolio";

export default function Timeline() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
                Mission Log
            </h1>

            <div className="space-y-4">
                {portfolioData.timeline.map((item, index) => (
                    <div
                        key={index}
                        className="border-l-2 border-cyan-500 pl-5 py-2"
                    >
                        🚀 {item}
                    </div>
                ))}
            </div>
        </div>
    );
}