import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
                Skills
            </h1>

            {Object.entries(portfolioData.skills).map(
                ([category, skills]) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-xl mb-3 capitalize">
                            {category}
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}