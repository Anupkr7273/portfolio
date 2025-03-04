import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto1.png';

const projects = [
    {
        title: 'Project One',
        details: 'More details about Project One.',
        image: myPhoto,
    },
    {
        title: 'Project Two',
        details: 'More details about Project Two.',
        image: myPhoto,
    },
    {
        title: 'Project Three',
        details: 'More details about Project Three.',
        image: myPhoto,
    },
];

const ProjectCard = ({ title, image, details }) => {
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
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0"
                    style={{ background: 'linear-gradient(to top, rgba(34, 197, 94, 0.9), rgba(34, 197, 94, 0.5), rgba(34, 197, 94, 0))' }}
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
