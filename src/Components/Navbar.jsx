import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > lastScrollY) {
                // Scrolling down → hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up → show navbar
                setIsVisible(true);
            }

            setLastScrollY(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (

        <nav
            className={`flex justify-between items-center px-8 py-5 bg-transparent fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <p className="text-sm font-semibold tracking-wider text-[var(--text-color)]">
                SHREYAS KARKERA
            </p>

            <ul className="hidden md:flex gap-8 text-sm font-medium text-[var(--text-color)]">

                <li>
                    <a href="#home" className="hover:text-gray-400 cursor-pointer">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-gray-400 cursor-pointer">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#project" className="hover:text-gray-400 cursor-pointer">
                        PROJECTS
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-400 cursor-pointer">
                        CONTACT
                    </a>
                </li>
            </ul>

            <ul className="hidden md:flex gap-5 text-sm font-medium text-[var(--text-color)]">
                <li className="hover:text-pink-500 cursor-pointer">INSTAGRAM</li>
                <li className="hover:text-gray-400 cursor-pointer">GITHUB</li>
            </ul>
        </nav>
    );
};

export default Navbar;
