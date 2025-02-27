import VideoSection from "./VideoSection";
import light from "../assets/light.png";

function HeroSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-white h-auto md:h-120">
            <div className="flex flex-col items-center md:items-start p-10">
                <img
                    src={light}
                    alt="lighting pic"
                    className="w-1/2 md:w-1/3 mb-6"
                />
                <div className="text-center md:text-left mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        150+
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        Universities participating
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            72+
                        </h2>
                        <p className="text-lg  lg:text-2xl">Judges</p>
                    </div>
                    <div className="">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            21
                        </h2>
                        <p className="text-lg  lg:text-2xl ">Hackathons</p>
                    </div>
                    <div className="">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            36+
                        </h2>
                        <p className="text-lg  lg:text-2xl ">Great Speakers</p>
                    </div>
                </div>
            </div>
            <VideoSection
                videoUrl="https://www.youtube.com/embed/gi1kkMbfNAE"
                title="HackIndia 2024 Finals"
            />
        </div>
    );
}

export default HeroSection;
