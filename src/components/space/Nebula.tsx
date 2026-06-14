export default function Nebula() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="absolute right-10 top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />

            <div className="absolute bottom-10 left-1/3 h-125 w-125 rounded-full bg-blue-500/10 blur-[140px]" />
        </div>
    );
}