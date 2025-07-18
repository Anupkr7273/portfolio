import { useState } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";
import BlurEffect from "./BlurEffect";

const AboutMe = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-b from-gray-900 to-gray-800 relative">
            {/* Blur Effect Overlay */}
            <BlurEffect>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900 via-gray-900/50 to-transparent z-0"></div>
            </BlurEffect>

            <div className="max-w-4xl w-full glassmorphism p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center relative z-10">
                {/* Left Side: Text Content */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

                    {/* Read More Feature ONLY for Mobile */}
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base md:leading-relaxed">
                        <span className="hidden md:inline">
                            {/* Full text visible on PC */}
                            I am Anup Kumar, a passionate Full-Stack Developer and Web Designer who loves crafting modern, interactive, and high-performing web applications.
                            With a strong foundation in both frontend and backend technologies, I enjoy transforming creative ideas into reality through clean, efficient code.
                            I specialize in building user-friendly interfaces, optimizing performance, and ensuring seamless user experiences.
                            My journey into web development started with curiosity and has now become my profession and passion. I am always eager to learn new technologies,
                            take on challenges, and contribute to impactful projects that make a difference.
                        </span>

                        {/* Read More/Less only for small screens */}
                        <span className="md:hidden">
                            {expanded ? (
                                <>
                                    I am Anup Kumar, a passionate Full-Stack Developer and Web Designer who loves crafting modern, interactive, and high-performing web applications.
                                    With a strong foundation in both frontend and backend technologies, I enjoy transforming creative ideas into reality through clean, efficient code.
                                    I specialize in building user-friendly interfaces, optimizing performance, and ensuring seamless user experiences.
                                    My journey into web development started with curiosity and has now become my profession and passion. I am always eager to learn new technologies,
                                    take on challenges, and contribute to impactful projects that make a difference.
                                    <span
                                        className="cursor-pointer font-semibold ml-2 text-green-400"
                                        onClick={() => setExpanded(false)}
                                    >
                                        Read Less
                                    </span>
                                </>
                            ) : (
                                <>
                                    Passionate Full-Stack Developer & Web Designer, crafting interactive and high-performing web applications.
                                    <span
                                        className="cursor-pointer font-semibold ml-2 text-green-400"
                                        onClick={() => setExpanded(true)}
                                    >
                                        Read More
                                    </span>
                                </>
                            )}
                        </span>
                    </p>

                    {/* Quick Facts Section */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg text-center">
                            <span className="text-lg font-semibold text-white">Profile</span>
                            <p className="text-green-400">Software Engineer</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center">
                            <span className="text-lg font-semibold text-white">Location</span>
                            <p className="text-green-400">India</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Profile Photo */}
                <motion.div
                    className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0 relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={myPhoto}
                        alt="Anup Kumar"
                        className="w-64 h-64 object-cover rounded-full shadow-lg"
                    />
                </motion.div>
            </div>

            {/* Animated Timeline */}
            <div className="mt-16 max-w-4xl w-full">
                <h3 className="text-3xl font-bold text-white text-center mb-8">My Journey</h3>
                <div className="relative border-l-4 border-green-400 ml-6">
                    <motion.div
                        className="pl-6 pb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h4 className="text-xl font-semibold text-white">Software Engineer - World On Networks</h4>
                        <p className="text-gray-400">2023 - Present</p>
                    </motion.div>
                    <motion.div
                        className="pl-6 pb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h4 className="text-xl font-semibold text-white">Bachelors in Computer Application (BCA)</h4>
                        <p className="text-gray-400">2020 - 2023</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
