


"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // modern look

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed cursor-pointer bottom-6 z-999 right-6 p-3 rounded-md bg-black text-white shadow-lg 
    hover:bg-black/70 transition-all duration-300 ease-in-out 
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-100"} 
    `}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTopButton;