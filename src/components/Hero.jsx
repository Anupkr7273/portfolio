import Button from "./Button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import myPhoto from "../assets/myPhoto.jpg";
import resume from "../assets/resume.pdf"; // Importing the resume file

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

const roles = ["Full-Stack Developer", "Web Designer"];

function Hero() {
    const [displayedText, setDisplayedText] = useState(roles[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? Math.random() * 50 + 25 : Math.random() * 100 + 50;
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < roles[currentIndex].length) {
                setTypedText((prev) => prev + roles[currentIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setTypedText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === roles[currentIndex].length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex]);

    const handleScrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-b from-gray-800 to-gray-900 px-6 md:px-16 relative"
        >
            <div className="relative mt-[-0px]">
                <motion.img
                    src={myPhoto}
                    alt="Anup Kumar"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-12 relative z-10"
                />
            </div>
            <div>
                <div className="flex gap-2">
                    <motion.h1
                        className="text-4xl sm:text-4xl md:text-5xl font-bold text-zinc-500 drop-shadow-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-zinc-500 glow-effect">Hi, I'm </span>
                        <span className="text-zinc-100 glow-effect">Anup Kumar</span>
                    </motion.h1>
                </div>

                <motion.p
                    className="text-xl mt-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    A <span className="text-green-400">{typedText}</span>
                </motion.p>

                <motion.div
                    className="mt-6 flex space-x-4 justify-center md:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Button 
                        text="View My Work" 
                        onClick={handleScrollToProjects} 
                        className="bg-gray-900 text-white"
                    />
                    <Button 
                        text="Download Resume" 
                        href={resume} 
                        download="Anup_Kumar_Resume.pdf" 
                        className="bg-gray-900 text-white inline-block "
                    />
                </motion.div>
            </div>
            <motion.div
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-8 h-8 border-b-4 border-r-4 border-dotted border-zinc-700 rotate-45"></div>
            </motion.div>
        </section>
    );
}

export default Hero;
