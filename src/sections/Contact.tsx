import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
                Contact
            </h1>

            <div className="space-y-4">
                <p>Email: {portfolioData.contact.email}</p>

                <p>GitHub: {portfolioData.contact.github}</p>

                <p>LinkedIn: {portfolioData.contact.linkedin}</p>
            </div>
        </div>
    );
}