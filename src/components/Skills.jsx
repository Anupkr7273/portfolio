import { FaCode, FaServer, FaPaintBrush, FaRocket } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Frontend */}
          <div className="flex flex-col items-center">
            <FaCode className="text-green-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-300">
              Expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. Focus on responsive, accessible, and optimized UIs.
            </p>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center">
            <FaServer className="text-green-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-300">
              Skilled in Node.js, Express, and MongoDB. Building scalable APIs and backend systems.
            </p>
          </div>

          {/* UI/UX */}
          <div className="flex flex-col items-center">
            <FaPaintBrush className="text-green-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-300">
              Designing clean, intuitive user interfaces using Figma and Framer with focus on user-centric design.
            </p>
          </div>

          {/* Animations */}
          <div className="flex flex-col items-center">
            <FaRocket className="text-green-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Animations</h3>
            <p className="text-gray-300">
              Adding interactivity and smooth animations using Framer Motion and GSAP for engaging experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
