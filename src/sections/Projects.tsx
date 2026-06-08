import { portfolioData } from "@/data/portfolio";

export default function Projects() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
                Projects
            </h1>

            <div className="space-y-5">
                {portfolioData.projects.map((project) => (
                    <div
                        key={project.title}
                        className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            {project.title}
                        </h2>

                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}