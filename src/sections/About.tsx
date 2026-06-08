import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
                About Me
            </h1>

            <div className="space-y-4">
                <p>
                    <strong>Name:</strong> {portfolioData.personal.name}
                </p>

                <p>
                    <strong>Role:</strong> {portfolioData.personal.role}
                </p>

                <p>
                    <strong>Location:</strong> {portfolioData.personal.location}
                </p>

                <p>
                    <strong>Education:</strong> {portfolioData.personal.education}
                </p>

                <p>{portfolioData.personal.tagline}</p>
            </div>
        </div>
    );
}