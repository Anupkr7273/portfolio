function Navbar() {
    return (
        <nav className="p-4 shadow-md flex justify-between items-center bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Welcome!</h1>
            <ul className="flex space-x-4">
                <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;