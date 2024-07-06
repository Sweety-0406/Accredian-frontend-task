const NavBar = ()=>{
    return (
        <div>
            <div className="text-center px-5 md:px-20 bg-red-400 py-3 justify-center ">
                Navigate your ideal carrer path with tailored expert advice <span className="text-green-600 font-semibold  cursor-pointer">Contact Expert</span>
            </div>
            <div className="flex justify-between mx-5 md:mx-20 mb-4 mt-3 ">
                <div>
                    <div className="flex">
                        <div className=" cursor-pointer ">
                            <h1 className="text-2xl font-bold text-green-700">accredian</h1>
                            <p className="text-xs -mt-2 text-white md:block">credential that matter</p>
                        </div>
                        <div>
                            <button className="bg-gradient-to-b from-green-500 to-green-700 hover:shadow-green-300 hover:shadow-lg text-white font-bold py-1 mt-2 ml-2 px-4 rounded">
                                Courses
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 mt-2 text-white ml-4">
                    <div className="col-span-3 hidden md:block">
                        <div className="grid grid-cols-3">
                            <div className="cursor-pointer">Refer & Earn</div>
                            <div className="cursor-pointer">Resources</div>
                            <div className="cursor-pointer">About Us</div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-gradient-to-b from-slate-300 to-slate-400 hover:shadow-white hover:shadow-lg text-white font-bold py-1 ml-2 px-4 rounded">
                            Login
                        </button>
                    </div>
                    <div>
                        <button className="bg-gradient-to-b from-green-500 to-green-700 hover:shadow-green-300 hover:shadow-lg text-white font-bold py-1  ml-2 px-4 rounded">
                            Try for free
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <div className="mx-[10%] md:mx-[20%] rounded-full flex justify-evenly bg-red-400 py-1">
                    <div className="cursor-pointer text-green-600">Refer</div>
                    <div className="cursor-pointer">Benifits</div>
                    <div className="cursor-pointer">FAQs</div>
                    <div className="cursor-pointer">Support</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar