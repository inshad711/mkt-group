"use client";

import React from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="w-full bg-white pt-44 py-16">
            <div className="space-y-2 text-center pb-10">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                    Contact us our business
                </h2>
                <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                    Why choose our business
                </h3>
            </div>
            <div className="templateContainer grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* LEFT SIDE - Form */}
                <div className="flex flex-col justify-center">
                    {/* Heading and Description */}
                    <h1 className="text-4xl md:text-[42px] font-normal text-black mb-4">
                        Contact Us {/* Changed from 'Contact' to 'Contact Us' to match image header */}
                    </h1>
                    <p className="text-gray-500 mb-10 text-lg">
                        Send a message and our team will get back to within 24hrs
                    </p>

                    <form className="space-y-6">
                        {/* Full Name and Email Address in a two-column layout */}
                        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 md:space-y-0">
                            {/* Full Name Input (W-1/2 on medium screens) */}
                            <div className="w-full md:w-1/2">
                                <input
                                    type="text"
                                    // Changed placeholder to match image
                                    placeholder="Full name"
                                    // Updated className for style closer to image: no background, focus underline
                                    className="w-full text-gray-800 placeholder:text-gray-400 border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>

                            {/* Email Address Input (W-1/2 on medium screens) */}
                            <div className="w-full md:w-1/2">
                                <input
                                    type="email"

                                    placeholder="Company Name"
                                    // Updated className for style closer to image: no background, focus underline
                                    className="w-full text-gray-800 placeholder:text-gray-400 border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                        </div>



                        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 md:space-y-0">
                            {/* Full Name Input (W-1/2 on medium screens) */}
                            <div className="w-full md:w-1/2">
                                <input
                                    type="text"
                                    // Changed placeholder to match image
                                    placeholder="Phone"
                                    // Updated className for style closer to image: no background, focus underline
                                    className="w-full text-gray-800 placeholder:text-gray-400 border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>

                            {/* Email Address Input (W-1/2 on medium screens) */}
                            <div className="w-full md:w-1/2">
                                <input
                                    type="email"
                                    // Changed placeholder to match image
                                    placeholder="Email address"
                                    // Updated className for style closer to image: no background, focus underline
                                    className="w-full text-gray-800 placeholder:text-gray-400 border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Tell about your project Input (Full width, Multiline) */}
                        <div className="w-full">
                            <textarea
                                rows={5}
                                // Changed placeholder to match image
                                placeholder="Message / Product Requirements"

                                className="w-full text-gray-800 placeholder:text-gray-400 border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent resize-none"
                            />
                        </div>

                        {/* Submit Button (Kept the original style as the image doesn't show a button) */}
                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-black text-[#D4AF37] rounded-[4px] py-[12px] text-lg hover:bg-gray-800 transition-colors mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE - Info Card */}
                <div className="bg-[#F4F4F4] rounded-[10px] p-8 md:py-8 flex flex-col justify-between h-full">

                    <div className="space-y-4">
                        {/* Location Section */}
                        <div>
                            <p className="text-xs text-[#D4AF37] tracking-widest uppercase mb-2">
                                Location
                            </p>
                            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
                            <p className="text-lg text-gray-600 font-normal leading-relaxed">
                                Deira, Dubai, <br />
                                United Arab Emirates
                            </p>
                        </div>

                        {/* Working Hours Section */}
                        <div>
                            <p className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase mb-2">
                                Working Hours
                            </p>
                            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
                            <div className="space-y-1">
                                <p className="text-lg text-gray-600 font-medium">Monday To Friday</p>
                                <p className="text-lg text-gray-600 font-medium">9:00 AM to 8:00 PM</p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Our Support Team is available 24Hrs
                                </p>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div>
                            <p className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase mb-2">
                                Contact Us
                            </p>
                            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
                            <div className="space-y-2">
                                <a href="tel:+97142255765" className="block text-lg text-gray-600 underline decoration-1 underline-offset-4">
                                    +971 4 2255765
                                </a>
                                <a href="mailto:sam@mktgroup.ae" className="block text-gray-600 hover:text-black transition-colors">
                                    sam@mktgroup.ae
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons - Bottom */}
                    <div className="flex gap-6 mt-12">
                        <SocialIcon href="#" icon={<Twitter size={20} />} />
                        <SocialIcon href="#" icon={<Instagram size={20} />} />
                        <SocialIcon href="#" icon={<Facebook size={20} />} />
                        <SocialIcon href="#" icon={<Linkedin size={20} />} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// Helper component for social icons to keep code clean
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black transition-all shadow-sm"
        >
            {icon}
        </a>
    );
}