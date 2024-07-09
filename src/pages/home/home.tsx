import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Home() {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Product' },
        { id: 3, text: 'Pricing' },
        { id: 4, text: 'Contact' },
    ];

    // form validations
    const [data, setData] = useState({
        fullName: '',
        email: '',
        department: '',
        time: ''
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
            <div className="bg-cover bg-no-repeat bg-[url('assets/image1.jfif')] size-full md:h-screen">
                <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#737373]'>
                    {/* Logo */}
                    <h3 className="font-['Martel'] w-full text-3xl font-bold text-[#252B42] invisible sm:visible" >Litigade</h3>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex'>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className='p-4 hover:bg-[#295C7A] hover:text-white rounded-xl m-2 cursor-pointer duration-300'
                            >
                                {item.text}
                            </li>
                        ))}
                        <li> <img src="../assets/icons/lupa.png" width={50} /></li>
                        <li> <img src="../assets/icons/car.png" width={50} /></li>
                    </ul>

                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className='block md:hidden z-10 sticky'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    {/* Mobile Navigation Menu */}
                    <ul
                        className={
                            nav
                                ? 'fixed md:hidden left-0 top-0 w-[100%] border-r-gray-900 bg-white ease-in-out duration-500'
                                : 'w-[100%] fixed top-0 bottom-0 left-[-100%]'
                        }
                    >
                        {/* Mobile Logo */}
                        <h1 className='w-full text-3xl font-bold text-[#252B42]" m-4'>Litigade.</h1>

                        {/* Mobile Navigation Items */}
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className='p-4 border-b hover:bg-[#295C7A] duration-300 hover:text-white cursor-pointer border-gray-600'
                            >
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <section className="container max-w-[1240px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                        <div className="text-center md:text-left mb-4 mt-5 sm:mb-10 sm:mt-20">
                            <h1 className="font-['Martel'] font-black text-3xl sm:text-5xl inline-block align-middle mb-4 text-[#252B42]">Help to reclaim your <br /> life and freedom</h1>
                            <p className="inline-block align-middle text-[#737373] mb-8 font-['Montserrat'] font-medium">We know how large objects will act, but things on a small scale.</p>
                            <div className='flex flex-wrap justify-start mb-4 sm:mb-8'>
                                <button className="bg-[#784F33] text-white font-bold py-2 px-4 rounded-full mx-2 inline-block align-middle">
                                    Get Quote Now
                                </button>
                                <button className="bg-transparent text-[#784F33] border border-[#784F33] font-bold py-2 px-4 rounded-full mx-2 inline-block align-middle">
                                    Learn More
                                </button>

                            </div>
                        </div>

                        <div className="">
                            <div className="min-w-80">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="" method="POST" onSubmit={handleRegistration}>
                                    <h1 className="font-['Martel'] font-bold text-2xl inline-block align-middle w-full mb-8 text-[#252B42] text-center">Book Appointment</h1>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" >
                                            Name*
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500 h-14"
                                            id="name" pattern="[0-9a-zA-Z ]{6,}" type="text" placeholder="Full Name" required
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    fullName: e.target.value
                                                });
                                            }}
                                            maxLength={100}
                                        />
                                        <span className="mt-1 hidden text-sm text-red-400">
                                            Full name must be at least 6 characters long
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" >
                                            Email*
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500 h-14"
                                            id="email" type="email" placeholder="example@gmail.com" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    email: e.target.value
                                                });
                                            }}
                                            maxLength={100}
                                        />
                                        <span className="mt-1 hidden text-sm text-red-400">
                                            Please enter a valid email address.{' '}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" >
                                            Deparment*
                                        </label>
                                        <select
                                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-14"
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
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" >
                                            Time*
                                        </label>
                                        <select
                                            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-14"
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
                                    <div className="flex items-center justify-center mb-4 mt-8">
                                        <button
                                            className="bg-[#295C7A] w-full text-white py-2 px-3 rounded-lg h-14"
                                            disabled={!canSubmit} >
                                            Book Appointment
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Home