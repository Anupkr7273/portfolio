import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Button({ text, onClick, href, download, className }) {
    const [hoverPosition, setHoverPosition] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const ButtonComponent = href ? "a" : "button";

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseMove = (e) => {
        if (!isMobile) {
            const rect = e.target.getBoundingClientRect();
            setHoverPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) setHoverPosition(null);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.01 }}
            className="relative overflow-hidden"
        >
            <ButtonComponent
                className={`px-6 py-2 rounded-md transition relative overflow-hidden ${className}`}
                onClick={onClick}
                href={href}
                download={download ? "" : undefined}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {isMobile ? (
                    <motion.span
                        className="absolute w-6 h-40 bg-zinc-700 opacity-20 transform -translate-y-1/2 rotate-20 pointer-events-none"
                        initial={{ left: "-10%" }}
                        animate={{ left: "110%" }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        style={{ top: "50%" }}
                    ></motion.span>
                ) : (
                    hoverPosition && (
                        <span
                            className="absolute w-6 h-40 bg-zinc-700 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rotate-20 pointer-events-none"
                            style={{
                                top: hoverPosition.y,
                                left: hoverPosition.x,
                            }}
                        ></span>
                    )
                )}
                {text}
            </ButtonComponent>
        </motion.div>
    );
}

export default Button;
