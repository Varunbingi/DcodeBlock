import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

function Spansors() {
    return (
        <div className="bg-[#D9D9D9] h-[100px] flex justify-center items-center overflow-x-auto scrollbar-hide scroll-container gap-8">
            <img src={one} alt="" className="h-full" />
            <img src={two} alt="" className="h-full" />
            <img src={three} alt="" className="h-full" />
            <img src={four} alt="" className="h-full" />
        </div>
    );
}

export default Spansors;
