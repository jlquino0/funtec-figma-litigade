function Footer() {

    return (
        <>


            <footer className="bg-[#252B42] dark:bg-[#252B42]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="font-['Martel'] self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Litigade</span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src="../assets/icons/ant-design_facebook-filled.png" className=""></img>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <img src="../assets/icons/ant-design_instagram-outlined.png" className=""></img>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <img src="../assets/icons/ant-design_twitter-outlined.png" className=""></img>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <img src="../assets/icons/carbon_logo-youtube.png" className=""></img>
                                <span className="sr-only">Youtube account</span>
                            </a>
                        </div>
                    </div>


                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">Company Info</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">About Us</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Carrier</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">We are hiring</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">Legal</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">About Us</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Carrier</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">We are hiring</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Features</h2>
                                    <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Business Marketing</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">User Analytic</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Live Chat</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Unlimited Support</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                                    <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">IOS & Android</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Watch a Demo</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Customers</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">API</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-0 sm:gap-0 sm:grid-cols-1">
                            <div className=" flex justify-center items-center">
                                <div className=" p-1">
                                    <label className="block text-sm font-medium text-gray-100 dark:text-gray-100">Get In Touch</label>
                                    <div className="flex items-center ">
                                        <input type="email" id="input-9" className="w-full h-10 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm" placeholder="Your Email" />
                                        <button className="h-10 px-4 text-sm bg-[#D0A144] border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-gradient-to-r from-[#0072B5] to-[#295C7A] w-full px-0 sm:px-36 py-6 lg:py-8">
                <p className="text-white font-sans">Made With Love By Figmaland All Right Reserved</p>
            </div>

        </>
    )
}

export default Footer