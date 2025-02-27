import { useState, useEffect } from "react";
import singularityNET from "../assets/singularityNET.png";
import hackindia from "../assets/hackindia.png";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBar from "./NavBar";

function MainSection() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden flex justify-center items-center text-white">
            <div
                className={`fixed left-0 w-full z-50 transition-all duration-300 ${
                    isScrolled ? "top-0" : "top-25"
                }`}
            >
                <div className="flex items-center justify-between p-4 sm:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? (
                            <FaTimes size={28} />
                        ) : (
                            <FaBars size={28} />
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#28083A] flex flex-col items-center gap-4 p-4 shadow-lg">
                        <ul className="w-full text-center">
                            <li className="py-2 hover:bg-[#B026FF66] border-b border-[#DFDFDF1A]">
                                Overview
                            </li>
                            <li className="py-2 hover:bg-[#B026FF66] border-b border-[#DFDFDF1A]">
                                Create Team
                            </li>
                            <li className="py-2 hover:bg-[#B026FF66] border-b border-[#DFDFDF1A]">
                                Price & Sponsors
                            </li>
                            <li className="py-2 hover:bg-[#B026FF66] border-b border-[#DFDFDF1A]">
                                FAQs
                            </li>
                            <li className="py-2 hover:bg-[#B026FF66] border-b border-[#DFDFDF1A]">
                                Judging & Rules
                            </li>
                            <li className="py-2 hover:bg-[#B026FF66]">
                                Resources
                            </li>
                        </ul>
                    </div>
                )}
                <div className="hidden sm:flex items-center justify-center p-4">
                    <NavBar />
                </div>
            </div>

            <div className="absolute top-10 px-4 sm:px-10 md:px-20 md:top-30 lg:top-10 left-0 flex items-center justify-center z-10">
                <img
                    src={hackindia}
                    alt="HackIndia Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                    HACKINDIA
                </h1>
            </div>

            <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt=""
            >
                <source src="/bgVideo.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 flex flex-col items-center gap-5 text-center">
                <img
                    src={singularityNET}
                    alt="SingularityNET Logo"
                    className="w-28 sm:w-40 md:w-52 drop-shadow-lg"
                />
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
                    <span className="bg-orange-600 py-1 px-1 sm:py-2 md:py-3">
                        Ha
                    </span>
                    ckIndia2025
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 drop-shadow-lg">
                    India's Biggest Web3 & AI Hackathon
                </h2>
                <button className="text-base sm:text-lg md:text-xl drop-shadow-lg bg-gradient-to-r from-[#6A1799] to-[#230833] h-10 md:h-12 rounded-lg px-4 py-2 md:px-6 md:py-3 border-[#D9D9D94D] border-2">
                    February 28 - September 28
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-base sm:text-lg md:text-xl text-center">
                    <p className="sm:border-r-2 border-white px-4">
                        <span className="font-bold text-orange-600">
                            $150K+
                        </span>{" "}
                        Prize Pool
                    </p>
                    <p className="sm:border-r-2 border-white px-4">
                        <span className="font-bold text-orange-600">150+</span>{" "}
                        Universities
                    </p>
                    <p>
                        <span className="font-bold text-orange-600">
                            25,000+
                        </span>{" "}
                        Students
                    </p>
                </div>
                <button
                    className="mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-white border-2 border-[#B026FF] shadow-lg"
                    aria-label="Register for HackIndia2025"
                >
                    Register Now!
                </button>
            </div>
        </div>
    );
}

export default MainSection;
