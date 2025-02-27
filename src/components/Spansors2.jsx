import singularity from "../assets/singularity.png";
import rair from "../assets/rair.png";
import sharp from "../assets/sharp.png";
import stratis from "../assets/stratis.png";
import csharp from "../assets/csharp.png";
import beyod from "../assets/beyod.png";

function Sponsors2() {
    const sponsors = [singularity, rair, stratis, sharp, csharp, beyod];

    return (
        <div className="flex justify-around items-center flex-nowrap overflow-x-scroll bg-[#D9D9D9] h-[100px]  gap-6">
            {sponsors.map((sponsor, index) => (
                <img
                    key={index}
                    src={sponsor}
                    alt={`Sponsor ${index + 1}`}
                    className="h-[80px] object-contain "
                />
            ))}
        </div>
    );
}

export default Sponsors2;
