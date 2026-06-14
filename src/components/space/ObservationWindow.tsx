export default function ObservationWindow() {
    return (
        <div className=" border border-cyan-500/40 bg-black/30 backdrop-blur-md rounded-3xl p-6
        shadow-[0_0_30px_rgba(0,255,255,0.2)] " >
            <h2 className="mb-4 text-cyan-300">
                Observation Window
            </h2>

            <div className="relative h-64 overflow-hidden rounded-2xl bg-black">
                <div className="absolute left-20 top-16 h-24 w-24 rounded-full bg-blue-500" />
                <div className="absolute right-20 top-8 h-16 w-16 rounded-full bg-orange-400" />
                <div className="absolute bottom-10 left-1/2 h-3 w-3 rounded-full bg-white" />
            </div>
        </div>
    );
}