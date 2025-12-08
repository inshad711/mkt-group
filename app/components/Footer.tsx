// import React from 'react';
// import Link from 'next/link';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="bg-[#f4f7f9] pt-24 pb-12 font-sans text-gray-600">
//             <div className="container mx-auto px-4">
//                 {/* Top Footer Area */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

//                     {/* Column 1: Logo & Description (Wider column) */}
//                     <div className="lg:col-span-4">
//                         <div className="mb-6">
//                             <Link href="/">
//                                 {/* Replace with your actual Logo Image */}
//                                 <img src="/images/logo/logo.svg" alt="Shofy Logo" className="h-8" />
//                             </Link>
//                         </div>
//                         <p className="mb-6 text-base leading-relaxed text-gray-500">
//                             We are a team of designers and developers that create high quality WordPress
//                         </p>
//                         <div className="flex space-x-2">
//                             <SocialLink href="https://www.facebook.com/" icon={<FaFacebookF />} />
//                             <SocialLink href="https://twitter.com/" icon={<FaTwitter />} />
//                             <SocialLink href="https://www.linkedin.com/" icon={<FaLinkedinIn />} />
//                             <SocialLink href="https://vimeo.com/" icon={<FaVimeoV />} />
//                         </div>
//                     </div>

//                     {/* Column 2: My Account */}
//                     <div className="lg:col-span-2 md:col-span-6">
//                         <h4 className="text-xl font-bold text-black mb-6">My Account</h4>
//                         <ul className="space-y-3">
//                             <FooterLink href="#">Track Orders</FooterLink>
//                             <FooterLink href="#">Shipping</FooterLink>
//                             <FooterLink href="#">Wishlist</FooterLink>
//                             <FooterLink href="#">My Account</FooterLink>
//                             <FooterLink href="#">Order History</FooterLink>
//                             <FooterLink href="#">Returns</FooterLink>
//                         </ul>
//                     </div>

//                     {/* Column 3: Information */}
//                     <div className="lg:col-span-3 md:col-span-6">
//                         <h4 className="text-xl font-bold text-black mb-6">Information</h4>
//                         <ul className="space-y-3">
//                             <FooterLink href="#">Our Story</FooterLink>
//                             <FooterLink href="#">Careers</FooterLink>
//                             <FooterLink href="#">Privacy Policy</FooterLink>
//                             <FooterLink href="#">Terms & Conditions</FooterLink>
//                             <FooterLink href="#">Latest News</FooterLink>
//                             <FooterLink href="#">Contact Us</FooterLink>
//                         </ul>
//                     </div>

//                     {/* Column 4: Talk To Us */}
//                     <div className="lg:col-span-3">
//                         <h4 className="text-xl font-bold text-black mb-6">Talk To Us</h4>
//                         <div className="mb-6">
//                             <span className="text-gray-500 text-sm block mb-1">Got Questions? Call us</span>
//                             <h4 className="text-2xl font-medium text-black">
//                                 <a href="tel:670-413-90-762" className="hover:text-blue-600 transition-colors">
//                                     +670 413 90 762
//                                 </a>
//                             </h4>
//                         </div>

//                         <div className="space-y-4">
//                             {/* Email Item */}
//                             <div className="flex items-start">
//                                 <div className="mr-3 mt-1 text-gray-500">
//                                     {/* Email SVG from your code */}
//                                     <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M1 11.4004H5.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M1 8.19922H3.4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <a href="mailto:shofi@gmail.com" className="hover:text-blue-600 transition-colors">shofi@gmail.com</a>
//                                 </div>
//                             </div>

//                             {/* Address Item */}
//                             <div className="flex items-start">
//                                 <div className="mr-3 mt-1 text-gray-500">
//                                     {/* Location SVG from your code */}
//                                     <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M8.50001 10.9417C9.99877 10.9417 11.2138 9.72668 11.2138 8.22791C11.2138 6.72915 9.99877 5.51416 8.50001 5.51416C7.00124 5.51416 5.78625 6.72915 5.78625 8.22791C5.78625 9.72668 7.00124 10.9417 8.50001 10.9417Z" stroke="currentColor" strokeWidth="1.5" />
//                                         <path d="M1.21115 6.64496C2.92464 -0.887449 14.0841 -0.878751 15.7889 6.65366C16.7891 11.0722 14.0406 14.8123 11.6313 17.126C9.88298 18.8134 7.11704 18.8134 5.36006 17.126C2.95943 14.8123 0.210885 11.0635 1.21115 6.64496Z" stroke="currentColor" strokeWidth="1.5" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <a href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
//                                         79 Sleepy Hollow St. <br /> Jamaica, New York 1432
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Footer (Copyright) */}
//                 <div className="border-t border-gray-200 pt-8 mt-12">
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                         <div className="mb-4 md:mb-0 text-center md:text-left">
//                             <p className="text-gray-500 text-sm">
//                                 © 2025 All Rights Reserved | Vue nuxt Template by <Link href="/" className="text-blue-600 hover:underline">Themepure</Link>.
//                             </p>
//                         </div>
//                         <div className="text-center md:text-right">
//                             {/* Replace with your payment image */}
//                             <img src="/images/footer/footer-pay-2.png" alt="Payment Options" className="inline-block" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// // Helper components to keep the code clean

// const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//     <li>
//         <Link href={href} className="text-gray-500 hover:text-blue-600 transition-colors text-sm hover:pl-1 duration-200 block">
//             {children}
//         </Link>
//     </li>
// );

// const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
//     <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-9 h-9 bg-white shadow-sm text-gray-600 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
//     >
//         {icon}
//     </a>
// );

// export default Footer;


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