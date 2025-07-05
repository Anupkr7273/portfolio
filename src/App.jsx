import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;