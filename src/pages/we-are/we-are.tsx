import './we-are.css';

function Weare() {
    return (
        <section className="bg-[#FAFAFA] relative mb-40">
            <div className="flex flex-wrap justify-center">
                <div className="p-4 max-w-sm">
                    <div className="flex items-center mt-20">
                        <h2 className="font-['Martel'] font-bold text-4xl text-[#252B42]">Who We Are</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="items-center">
                    <div className="flex items-center">
                        <p className="text-xs text-center font-[#737373] mt-5 mb-10">Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
            </div>
            <div className="relative max-w-2xl mx-auto z-40">
                <img
                    src="../assets/we-are.jfif" className="w-full h-auto p-5 sm:p-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-[#295C7A] text-white p-3 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.062v5.876a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="z-0 box-blue">
                <img
                    src="../assets/background.png"
                    alt="About Us"
                    className="w-full h-64"
                />
            </div>
        </section>
    )
}

export default Weare