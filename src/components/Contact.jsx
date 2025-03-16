import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Button from "./Button";
import emailjs from "emailjs-com";
import GradientWrapper from "./GradientWrapper";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
    
        const serviceID = "service_anupkr7273";
        const userTemplateID = "template_nglbzci";
        const adminTemplateID = "template_9cxawaw";
        const publicKey = "b8dNFIz8JFpFQ-8yF";
    
        emailjs.sendForm(serviceID, adminTemplateID, e.target, publicKey)
            .then((response) => {
                console.log("Message sent to admin:", response);
    
                return emailjs.send(serviceID, userTemplateID, {
                    to_email: formData.email,
                    name: formData.name,
                    message: formData.message
                }, publicKey);
            })
            .then((autoReplyResponse) => {
                console.log("Auto-reply sent:", autoReplyResponse);
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error:", error);
                setStatus("Error sending message. Please try again.");
            });
    };
    
    return (
        <GradientWrapper>
        <section id="contact" className="py-20 px-6 text-center bg-gray-800">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Have a project in mind or just want to say hi? Drop me a message!</p>

            <motion.form
                onSubmit={handleSubmit}
                className="mt-6 max-w-lg mx-auto space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-700 focus:ring-2 focus:ring-gray-500 active:border-gray-400 focus:outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-700 focus:ring-2 focus:ring-gray-500 active:border-gray-400 focus:outline-none"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-700 focus:ring-2 focus:ring-gray-500 active:border-gray-400 focus:outline-none"
                />
                <Button type="submit" text="Send Message" className="bg-gray-900 text-white hover:bg-gray-900 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:outline-none" />
            </motion.form>

            {status && <p className="mt-4 text-gray-600 dark:text-gray-300">{status}</p>}

            <div className="mt-8 flex justify-center space-x-6">
                <a href="https://github.com/anupkr7273" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileFocus={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, delay: 0.1, damping: 10 }}>
                        <FaGithub className="text-2xl transition-colors duration-300 hover:text-gray-900 focus:outline-none" />
                    </motion.div>
                </a>
                <a href="https://linkedin.com/in/anupkr8540" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileFocus={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, delay: 0.15, damping: 10 }}>
                        <FaLinkedin className="text-2xl transition-colors duration-300 hover:text-gray-900 focus:outline-none" />
                    </motion.div>
                </a>
                <a href="mailto:anupkr7273@gmail.com">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileFocus={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, delay: 0.2, damping: 10 }}>
                        <FaEnvelope className="text-2xl transition-colors duration-300 hover:text-gray-900 focus:outline-none" />
                    </motion.div>
                </a>
                <a href="tel:+917903873631">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileFocus={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, delay: 0.25, damping: 10 }}>
                        <FaPhone className="text-2xl transition-colors duration-300 hover:text-gray-900 focus:outline-none" />
                    </motion.div>
                </a>
            </div>
        </section>
        </GradientWrapper>
    );
};

export default Contact;
