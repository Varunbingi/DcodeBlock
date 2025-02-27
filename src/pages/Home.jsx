import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import Spansors from "../components/Spansors";
import Spansors2 from "../components/Spansors2";

function Home() {
    return (
        <div className="  flex flex-col ">
            <MainSection />
            <Spansors />
            <HeroSection />
            <Spansors2 />
        </div>
    );
}

export default Home;
