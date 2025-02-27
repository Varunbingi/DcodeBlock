function NavBar() {
    return (
        <div className="bg-[#28083A] text-white flex w-full sm:full lg:w-1/2 gap-[10px] justify-center border-2 border-[#DFDFDF1A] rounded-lg drop-shadow-lg h-[60px] items-center">
            {[
                "Overview",
                "Create Team",
                "Price & Sponsors",
                "FAQs",
                "Judging & Rules",
                "Resources",
            ].map((item, index) => (
                <h1
                    key={index}
                    className="bg-[#B026FF66] border-2 border-[#B026FF] drop-shadow-xl py-2 px-1 cursor-pointer transition-all duration-300 hover:bg-[#B026FF] hover:text-white rounded-lg"
                >
                    {item}
                </h1>
            ))}
        </div>
    );
}

export default NavBar;
