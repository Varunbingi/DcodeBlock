import Home from "./pages/Home";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-gradient-to-r from-[#05191f] via-[#28083B] to-[#28083E] min-h-screen">
            <div className="bg-[#000000E5] h-[75px] flex justify-between items-center px-2 sm:px-10 border-b-[4px] border-[#B026FF80]">
                <img
                    src={logo}
                    alt="logo"
                    className="h-[40px] w-3xs object-cover"
                />
                <div>
                    <button className="text-white border-2 border-[#B026FF] py-2 px-4 rounded-lg   ">
                        Sign in
                    </button>
                </div>
            </div>
            <Home />
            <Footer />
        </div>
    );
}

export default App;
