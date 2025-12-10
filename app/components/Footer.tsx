

import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Linkedin,
    Video, // Using 'Video' as a fallback for Vimeo (Lucide doesn't have a branded Vimeo icon)
    Mail,
    MapPin
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#e1e3e8] py-4 text-gray-600">
            <div className="templateContainer px-4">
                {/* Top Footer Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

                    {/* Column 1: Logo & Description */}
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <Link href="/">
                                {/* Replace with your actual Logo */}
                                <img src="/image/mktlogo.webp" alt="mkt Logo" className="h-8" />
                            </Link>
                        </div>
                        <p className="mb-6 text-base leading-relaxed text-gray-500">
                            We are a team of designers and developers that create high quality WordPress
                        </p>
                        <div className="flex space-x-2">
                            <SocialLink href="https://www.facebook.com/" icon={<Facebook size={18} />} />
                            <SocialLink href="https://twitter.com/" icon={<Twitter size={18} />} />
                            <SocialLink href="https://www.linkedin.com/" icon={<Linkedin size={18} />} />
                            {/* Lucide doesn't have Vimeo, using Video as generic fallback */}
                            <SocialLink href="https://vimeo.com/" icon={<Video size={18} />} />
                        </div>
                    </div>

                    {/* Column 2: My Account */}
                    <div className="lg:col-span-2 md:col-span-6">
                        <h4 className="text-xl font-bold text-black mb-6">My Account</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#">Shipping</FooterLink>
                            <FooterLink href="#">My Account</FooterLink>
                            <FooterLink href="#">Order History</FooterLink>
                            <FooterLink href="#">Returns</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Information */}
                    <div className="lg:col-span-3 md:col-span-6">
                        <h4 className="text-xl font-bold text-black mb-6">Information</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#">Our Story</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms & Conditions</FooterLink>
                            <FooterLink href="#">Latest News</FooterLink>

                        </ul>
                    </div>

                    {/* Column 4: Talk To Us */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold text-black mb-6">Talk To Us</h4>
                        <div className="mb-6">
                            <span className="text-gray-500 text-sm block mb-1">Got Questions? Call us</span>
                            <h4 className="text-xl">
                                <a href="tel:670-413-90-762" className="hover:text-blue-600 transition-colors">
                                    +670 413 90 762
                                </a>
                            </h4>
                        </div>

                        <div className="space-y-4">
                            {/* Email Item */}
                            <div className="flex items-start">
                                <div className="mr-3 mt-1 text-gray-500">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <a href="mailto:shofi@gmail.com" className="hover:text-blue-600 transition-colors">shofi@gmail.com</a>
                                </div>
                            </div>

                            {/* Address Item */}
                            <div className="flex items-start">
                                <div className="mr-3 mt-1 text-gray-500">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <a href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                                        79 Sleepy Hollow St. <br /> Jamaica, New York 1432
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer (Copyright) */}
                <div className="border-t border-gray-200 pt-4">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <p className="text-gray-500 text-sm">
                                © 2025 All Rights Reserved |  by <Link href="/" className="text-blue-600 hover:underline">MKT</Link>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="text-gray-500 hover:text-blue-600 transition-colors text-sm hover:pl-1 duration-200 block">
            {children}
        </Link>
    </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-white shadow-sm text-gray-600 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;