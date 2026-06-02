export default function SpaceBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            <div className=" absolute -top-37.5 -left-37.5 h-125 w-125 rounded-full bg-blue-500/20 blur-[120px] "/>
            <div className=" absolute -bottom-37.5 -right-37.5 h-125 w-125 rounded-full bg-purple-500/20 blur-[120px] "/>
        </div>
    );
}