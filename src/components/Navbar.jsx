import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarHeight = 64; // Adjust based on your navbar height

    return (
        <nav className="p-4 shadow-md bg-gray-800 text-white fixed w-full top-0 z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Welcome!</h1>

                {/* Hamburger Menu Button */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4">
                    {["home", "about", "projects", "contact"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-navbarHeight} // Adjust for navbar height
                                className="hover:text-gray-400 cursor-pointer"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 space-y-2"
                    >
                        {["home", "about", "projects", "contact"].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-navbarHeight} // Adjust offset
                                    className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
