// dependencies: npm install framer-motion clsx tailwind-merge
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Overlapping = () => {
    return (
        <section className="w-full pb-24 pt-10 bg-[#FFFFFF] overflow-hidden">
            <div className="templateContainer px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                    {/* Left Side: Overlapping Images */}
                    <div className="relative w-full max-w-xl mx-auto lg:mx-0">

                        {/* Decorative Background Block (Optional, based on the white space in reference) */}
                        <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-50 -z-10 rounded-sm translate-x-10 -translate-y-10" />

                        {/* Image 1: The Shoe (Back/Right) */}
                        <motion.div
                            initial={{ opacity: 1, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="absolute top-0 right-0 w-2/3 z-10 shadow-xl aspect-[3/3]"
                        >
                            <div className="relative h-full w-full bg-[#f4f4f4]">
                                {/* Replace src with your actual shoe image path */}
                                <Image
                                    src="/dummy-image/715b3308-f657-4faa-8294-a366e46e6f39.png"
                                    alt="Made to order shoe"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </motion.div>

                        {/* Image 2: The Lifestyle/Model (Front/Left) */}
                        <motion.div
                            initial={{ opacity: 1, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="relative w-2/3 z-20 mt-24 shadow-2xl aspect-[3/3]"
                        >
                            {/* Replace src with your actual lifestyle image path */}
                            <div className="relative h-full w-full bg-gray-200">
                                <Image

                                    src="/dummy-image/al-jubail-souk-sharjah.jpg"

                                    alt="Model wearing shoes"
                                    fill
                                    className="object-cover object-center "
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 lg:pl-12"
                    >
                        <h2 className="text-sm md:text-[22px] font-normal tracking-wide text-gray-900">
                            Timeless footwear for the discerning individual who values quality and craft.{' '}
                            <span className="relative inline-block">
                                Made-to-order

                                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#f8deab] -z-10 opacity-80"></span>
                            </span>{' '}
                            with care, exclusively for you in the heart of Italy.
                        </h2>

                        <div className="pt-4">
                            <button className="group bg-black text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-gray-800 cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col  pt-20 lg:pt-0 text-center lg:items-start lg:text-left space-y-8 lg:pl-12"
                    >
                        {/* Heading from the image */}
                        {/* <h1 className=" tracking-tight   mb-4 inline-flex items-center gap-2 rounded-lg  bg-[#F4F4F4] px-3 py-1 text-sm font-light text-black ring-1 ring-inset ring-white/70">
                            MKT GENERALTRADING LLC

                        </h1> */}
                        <h1 className=" tracking-tight mb-4 items-center gap-2 rounded-lg bg-[#F4F4F4] px-3 py-1 text-sm font-light text-black ring-1 ring-inset ring-white/70 w-fit">
                            MKT GENERALTRADING LLC
                        </h1>


                        {/* Content Section */}
                        <div className="space-y-6 text-left">
                            <h2 className=" text-pretty text-3xl md:text-4xl font-normal leading-tight text-zinc-900">
                                WHY MKT GENERAL TRADING LLC?
                            </h2>
                            <ul className="list-none space-y-2  text-base font-light text-zinc-600 leading-relaxed">
                                {/* First point */}
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 text-zinc-600 text-base md:text-md font-light">&#x21e8;</span>
                                    <span>
                                        MKT GENERALTRADING LLC has been able to maintain high proficiency and was also able to render professional services with the help of its highly trained and professional group of employees. We believe in Teamwork.
                                    </span>
                                </li>
                                {/* Second point, note the missing subject in the original text */}
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 text-zinc-600 text-base md:text-md font-light">&#x21e8;</span>
                                    <span>
                                        MKT General Trading LLC  has been successful as a one stop shop to serve the FMCG business to business market, Ship chandlers, Hotels, Supermarkets, Catering companies in the U.A.E as well as Export Market and also have high level of specializing in its areas of business.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* Removed the 'Learn More' button as it's not in the image content */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Overlapping;