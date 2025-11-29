// "use client";
// import React, { useState, useEffect } from 'react';
// // Import the icon directly from lucide-react (Standard practice)
// import { ArrowUp } from 'lucide-react';

// /**
//  * ScrollToTopButton Component ⬆️
//  * Renders a fixed, floating button that appears after scrolling down a certain distance.
//  * Clicking it smoothly scrolls the user to the top of the page.
//  */
// const ScrollToTopButton: React.FC = () => {
//     // 1. State to control the visibility of the button
//     const [isVisible, setIsVisible] = useState<boolean>(false);

//     // Scroll threshold in pixels
//     const SCROLL_THRESHOLD = 300;

//     // 2. Function to handle the actual scrolling
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' // Provides a smooth animation
//         });
//     };

//     // 3. Effect to set up and clean up the scroll event listener
//     useEffect(() => {
//         const toggleVisibility = () => {
//             // Check if the vertical scroll position is past the threshold
//             setIsVisible(window.scrollY > SCROLL_THRESHOLD);
//         };

//         // Attach the event listener to the window
//         window.addEventListener('scroll', toggleVisibility);

//         // Cleanup: remove the event listener when the component unmounts
//         return () => window.removeEventListener('scroll', toggleVisibility);
//     }, []);
//     // Empty dependency array ensures this effect runs only once after the initial render

//     // 4. Render the button
//     return (
//         // Fixed positioning container
//         <div className="fixed bottom-8 right-8 z-50">
//             <button
//                 onClick={scrollToTop}
//                 // Tailwind classes for styling and transition logic
//                 className={`
//                     bg-lime-500 text-gray-800 p-3 rounded-md shadow-2xl 
//                     transition-all duration-300 ease-in-out
//                     transform 
//                     ${isVisible
//                         ? 'opacity-100 scale-100 translate-y-0' // Visible state
//                         : 'opacity-0 scale-0 translate-y-4 pointer-events-none'} // Hidden state
//                     hover:bg-lime-400 hover:scale-105 active:scale-95
//                 `}
//                 aria-label="Scroll to top"
//                 // Disable the button when it's hidden for accessibility/robustness
//                 disabled={!isVisible}
//             >
//                 {/* Use the imported Lucide icon component */}
//                 <ArrowUp className="w-5 h-5 stroke-2" />
//             </button>
//         </div>
//     );
// };

// export default ScrollToTopButton;


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
            className={`fixed cursor-pointer bottom-6 right-6 p-3 rounded-md bg-black text-white shadow-lg 
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