const GradientWrapper = ({ children }) => {
    return (
        <div className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-b from-gray-800 to-gray-900 px-6 md:px-16 relative">
            {children}
        </div>
    );
};

export default GradientWrapper;
