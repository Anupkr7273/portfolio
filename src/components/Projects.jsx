import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import scatch1 from '../assets/login.jpg';
import scatch2 from '../assets/shop.jpg';
import ochi from '../assets/ochi.jpg';
import ochi_2 from '../assets/ochi_2.jpg';
import ochi_3 from '../assets/ochi_3.jpg';

const projects = [
    {
        title: 'PAN Card Request Form',
        details: 'Dynamic, responsive form with validation, API integration, and mobile support.',
        // video: 
    },
    {
        title: 'Scatch',
        details:'Full-stack e-commerce platform with authentication, admin dashboard, and optimization.',
        slideshow: 'scatch',
    },
    {
        title: 'Ochi.Design',
        details: 'UI/UX website replica with animations, responsiveness, and performance optimizations.',
        slideshow: 'ochi',
    },
];

const slideshowImages_Ochi = [ochi, ochi_2, ochi_3];
const slideshowImages_scatch = [scatch1, scatch2];

const ProjectCard = ({ title, slideshow, video, details }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = slideshow === 'ochi' ? slideshowImages_Ochi : slideshow === 'scatch' ? slideshowImages_scatch : [];

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <motion.div
            className="relative bg-white dark:bg-gray-700 shadow-lg rounded-2xl overflow-hidden h-60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative overflow-hidden rounded-lg h-full">
                {video ? (
                    <video src={video} autoPlay loop muted className="w-full h-full object-cover rounded-lg" />
                ) : images.length > 0 ? (
                    <div className="w-full h-full object-cover rounded-lg flex relative">
                        <AnimatePresence>
                            <motion.img
                                key={currentImage}
                                src={images[currentImage]}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                                className="absolute w-full h-full object-cover rounded-lg"
                            />
                        </AnimatePresence>
                    </div>
                ) : null}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0"
                    style={{ background: 'linear-gradient(to top, rgba(1, 2, 1, 0.9),rgba(34, 197, 94, 0.9), rgba(34, 197, 94, 0))' }}
                    whileHover={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-white text-lg font-semibold text-center">{details}</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    return (
        <section className="py-12 px-6 bg-gray-800">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
