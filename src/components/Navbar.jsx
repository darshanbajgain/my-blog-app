
import React, { useState } from "react";
import { menu, close, logo } from "../assets";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <div className='w-full h-[100px] m-auto z-10 fixed'>

            <div className=" mx-auto p-5 md:px-6  flex justify-between items-center md:max-w-[1340px]  dark:bg-slate-900 drop-shadow-lg">
                <div className="flex items-center">
                    {/*<img src={logo} alt="logo" className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%} w-full h-[90px] py-1" /> */}
                    <Link to="/about">
                    <h1 className=" text-slate-300 text-lg sm:text-xl font-bold m-auto px-5 uppercase tracking-widest  hover:text-gray-100">{'</Dev.Darshan>'}</h1>
                    </Link>
                </div>
                <div className="flex items-center">

                    <ul className="hidden md:flex uppercase text-white font-bold tracking-widest">
                        <Link to='/' className="p-6 hover:text-gray-400">Home</Link>
                        <Link to='/posts' className="p-6 hover:text-gray-400">Post</Link>
                        <Link to='/about' className="p-6 hover:text-gray-400">About</Link>
                    </ul>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    <img src={!toggle ? menu : close} alt="toggle-menu" className="w-[28px] text-white m-4" />
                </div>

            </div>

            <ul className={toggle ? "md:hidden px-8 py-10 absolute flex flex-col items-center dark:bg-slate-900 w-full uppercase text-slate-300 font-bold" : "hidden"}>

                <Link to='/' className="p-3 hover:text-gray-400">Home</Link>
                <Link to='/posts' className="p-3 hover:text-gray-400">Post</Link>
                <Link to='/about' className="p-3 hover:text-gray-400">About</Link>
            </ul>

        </div>
    )
}
export default Navbar;


