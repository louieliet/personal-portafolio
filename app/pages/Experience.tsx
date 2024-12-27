import TimeLine from "@/app/components/timeline";

const Experience = () => {
    return(
        <div className="min-h-full text-white flex justify-center items-center -space-x-96">
            {/* Left side for the title */}
            <div className="w-[45%] flex justify-end items-center">
                <h1 className="timeline-title text-8xl font-bold transform -rotate-90 whitespace-nowrap mt-24">
                    [02] Mi experiencia
                </h1>
            </div>

            {/* Right side for the timeline content */}
            <div className="timeline-content w-[45%] mt-40">
                <TimeLine />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-noise opacity-70"></div>
        </div>
    );
};
export default Experience;