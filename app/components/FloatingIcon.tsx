
"use client";
import React from 'react';

/**
 * WhatsAppFloatingButton Component
 * * A fixed floating action button (FAB) for WhatsApp.
 * It uses Tailwind CSS for positioning and the "pulse" animation.
 */
const FloatingIcon = () => {
    // The link provided in your snippet
    const whatsappLink = "http://izea.pl/ctb/I";

    // The image URL provided in your snippet
    const imageUrl = "https://d13pvy8xd75yde.cloudfront.net/global/india/whatsapp/Whatsapp-Icon-for-website.png";

    return (
        <div className="fixed bottom-6 left-6 z-50 group">

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-16 h-16 transition-transform duration-300 hover:scale-110 focus:outline-none"
                aria-label="Chat on WhatsApp"
            >


                <span className="relative inline-flex rounded-full h-12 w-12 bg-green-500 shadow-lg items-center justify-center overflow-hidden">

                    <img
                        src={imageUrl}
                        alt="WhatsApp"
                        className="w-full h-full object-cover"
                    // Fallback if the specific Cloudfront URL fails

                    />
                </span>


                <span className="absolute left-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with us
                </span>
            </a>
        </div>
    );
};

export default FloatingIcon;


