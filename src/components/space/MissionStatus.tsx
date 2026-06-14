export default function MissionStatus() {
    return (
        <div className=" fixed bottom-5 right-5 w-72 rounded-xl border border-cyan-500/30 bg-black/40 p-4
        backdrop-blur-md " >
            <h3 className="mb-3 text-cyan-300">
                Mission Status
            </h3>

            {[
                "Profile",
                "Skills",
                "Projects",
                "Contact",
            ].map((item) => (
                <div key={item} className="mb-2">
                    <p className="text-xs">{item}</p>

                    <div className="h-2 rounded bg-gray-700">
                        <div className="h-2 w-full rounded bg-cyan-400" />
                    </div>
                </div>
            ))}
        </div>
    );
}