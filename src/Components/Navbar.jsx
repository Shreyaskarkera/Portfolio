import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // install if needed: npm i lucide-react

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > lastScrollY) {
                setIsVisible(false); // hide on scroll down
            } else {
                setIsVisible(true); // show on scroll up
            }
            setLastScrollY(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav
            className={`flex justify-between items-center px-8 py-5 bg-transparent fixed top-0 left-0 w-full z-50 transition-transform duration-300 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <p className="text-sm font-semibold tracking-wider text-[var(--text-color)]">
                SHREYAS KARKERA
            </p>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-[var(--text-color)]">
                <li><a href="#home" className="hover:text-gray-400">HOME</a></li>
                <li><a href="#about" className="hover:text-gray-400">ABOUT</a></li>
                <li><a href="#project" className="hover:text-gray-400">PROJECTS</a></li>
                <li><a href="#contact" className="hover:text-gray-400">CONTACT</a></li>
            </ul>

            <ul className="hidden md:flex gap-5 text-sm font-medium text-[var(--text-color)]">
                <li className="hover:text-pink-500 cursor-pointer">INSTAGRAM</li>
                <li className="hover:text-gray-400 cursor-pointer">GITHUB</li>
            </ul>

            {/* Mobile Hamburger Button */}
            <button className="md:hidden text-[var(--text-color)]" onClick={handleMenuClick}>
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile Slide Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-transperent/90 backdrop-blur-sm flex flex-col items-center text-white text-sm font-medium md:hidden overflow-hidden transition-all duration-300 ease-in-out
  ${menuOpen ? "max-h-96 py-6 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-[-10px]"}`}
            >
                <a href="#home" onClick={() => setMenuOpen(false)} className="py-2">HOME</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className="py-2">ABOUT</a>
                <a href="#project" onClick={() => setMenuOpen(false)} className="py-2">PROJECTS</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2">CONTACT</a>

                <hr className="w-3/4 border-gray-700 my-3" />

                <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 py-2">INSTAGRAM</a>
                <a href="https://github.com" target="_blank" className="hover:text-gray-300 py-2">GITHUB</a>
            </div>

        </nav>
    );
};

export default Navbar;
