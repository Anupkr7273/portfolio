import { useState, useEffect } from "react";

function BlurEffect({ children }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ filter: `blur(${Math.min(scrollY / 400, 3)}px)` }}>
            {children}
        </div>
    );
}

export default BlurEffect;