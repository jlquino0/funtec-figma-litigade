import { useState } from "react";

function Contact() {

    // form validations
    const [data, setData] = useState({
        fullName: '',
        email: '',
        department: '',
        time: '',
        message: ''
    });
    const handleRegistration = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(data);
    };

    // Destructure data
    const { ...allData } = data;

    // Disable submit button until all fields are filled in
    const canSubmit = [...Object.values(allData)].every(Boolean);

    return (
        <>
            <div className="bg-cover bg-no-repeat bg-[url('assets/backgroud2.jpg')]">
                <section className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                        <div className="text-center md:text-left mb-4 mt-5 sm:mb-10 sm:mt-20 ">
                            <div className="flex items-center justify-center">
                                <div className="max-w-screen-lg mx-auto">
                                    <div className="p-4 px-4 md:p-8 mb-6">
                                        <form className="" action="" method="POST" onSubmit={handleRegistration}>
                                            <p className='inline-block text-[#252B42] mb-1'>Contact Us</p> <br />
                                            <h1 className="font-['Martel'] font-bold text-4xl inline-block align-middle mb-4 text-[#252B42] pr-0 sm:pr-44">Make an Appoinment </h1>
                                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">

                                                <div className="lg:col-span-2">
                                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                                                        <div className="md:col-span-3">
                                                            <input type="text" name="full_name" id="full_name" placeholder="Full Name"
                                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                                                pattern="[0-9a-zA-Z ]{6,}"
                                                                onChange={(e) => {
                                                                    setData({
                                                                        ...data,
                                                                        fullName: e.target.value
                                                                    });
                                                                }}
                                                                required
                                                                maxLength={100}
                                                            />
                                                            <span className="mt-1 hidden text-sm text-red-400">
                                                                Full name must be at least 6 characters long
                                                            </span>
                                                        </div>

                                                        <div className="md:col-span-3">
                                                            <input type="email" name="email" id="email"
                                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                                                placeholder="example@gmail.com"
                                                                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                                                onChange={(e) => {
                                                                    setData({
                                                                        ...data,
                                                                        email: e.target.value
                                                                    });
                                                                }}
                                                                maxLength={100}
                                                                required
                                                            />
                                                            <span className="mt-1 hidden text-sm text-red-400">
                                                                Please enter a valid email address.{' '}
                                                            </span>
                                                        </div>

                                                        <div className="md:col-span-3">
                                                            <select
                                                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="service" name="service" required
                                                                onChange={(e) => {
                                                                    setData({
                                                                        ...data,
                                                                        department: e.target.value
                                                                    });
                                                                }}
                                                            >
                                                                <option value="">Please Select</option>
                                                                <option value="1">List Entry # 1</option>
                                                                <option value="2">List Entry # 2</option>
                                                                <option value="3">List Entry # 3</option>
                                                                <option value="4">List Entry # 4</option>
                                                            </select>
                                                        </div>

                                                        <div className="md:col-span-3">
                                                            <select
                                                                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="service" name="service" required
                                                                onChange={(e) => {
                                                                    setData({
                                                                        ...data,
                                                                        time: e.target.value
                                                                    });
                                                                }}
                                                            >
                                                                <option value="">4:00 Available</option>
                                                                <option value="1">List Entry # 1</option>
                                                                <option value="2">List Entry # 2</option>
                                                                <option value="3">List Entry # 3</option>
                                                                <option value="4">List Entry # 4</option>
                                                                <option value="5">List Entry # 5</option>
                                                            </select>
                                                        </div>
                                                        <div className="md:col-span-6">
                                                            <textarea id="message"
                                                                rows={4}
                                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                                                placeholder="Message"
                                                                onChange={(e) => {
                                                                    setData({
                                                                        ...data,
                                                                        message: e.target.value
                                                                    });
                                                                }}
                                                                maxLength={300}
                                                                required
                                                            ></textarea>
                                                            <span className="mt-1 hidden text-sm text-red-400">
                                                                Message must be no longer than 300 characters
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='grid grid-flow-col  mb-4 sm:mb-8 mt-5'>
                                                <button className="bg-[#784F33] text-white font-bold py-2 px-5 rounded font-font-sans text-xs w-full sm:w-48 h-12" disabled={!canSubmit}>
                                                    Book Appointment
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container bg-white w-full flex flex-wrap justify-between px-10 py-12 sm:px-40">
                <div>
                    <h3 className="font-['Martel'] font-black text-xl inline-block align-middle text-[#252B42]">Request A Free Consultation</h3>
                    <p>the quick fox jumps over the lazy dog </p>
                </div>
                <button className="bg-[#784F33] text-white font-bold py-2 px-4 rounded font-font-sans text-xs ">
                    Contact Us
                </button>

            </div>
        </>
    )
}

export default Contact