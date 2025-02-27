export function Footer() {
    return (
        <footer className="text-center text-white grid grid-cols-1 sm:grid-cols-2 items-center p-4 sm:h-[100px] gap-4 sm:gap-0">
            <p className="text-sm sm:text-base md:text-lg">
                Copyright © 2024 DcodeBlock
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-around gap-2 sm:gap-4">
                <p className="sm:border-r-2 border-white text-sm sm:text-base md:text-lg sm:pr-4">
                    Help Center
                </p>
                <p className="sm:border-r-2 border-white text-sm sm:text-base md:text-lg sm:pr-4">
                    Terms and Conditions
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                    Privacy policy
                </p>
            </div>
        </footer>
    );
}

export default Footer;
