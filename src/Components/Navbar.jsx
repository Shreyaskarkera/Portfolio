import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-5 bg-transparent absolute top-0 left-0 w-full z-50">

            <p className="text-sm font-semibold tracking-wider text-[var(--text-color)]">SHREYAS KARKERA</p>

            <ul className="hidden md:flex gap-8 text-sm font-medium text-[var(--text-color)]">
                <li className="hover:text-gray-400 cursor-pointer">HOME</li>
                <li className="hover:text-gray-400 cursor-pointer">ABOUT</li>
                <li className="hover:text-gray-400 cursor-pointer">PROJECTS</li>
                <li className="hover:text-gray-400 cursor-pointer">CONTACT</li>
            </ul>

            <ul className="hidden md:flex gap-5 text-sm font-medium text-[var(--text-color)]">
                <li className="hover:text-pink-500 cursor-pointer">INSTAGRAM</li>
                <li className="hover:text-gray-400 cursor-pointer">GITHUB</li>
            </ul>
        </nav>
    );
};

export default Navbar;
