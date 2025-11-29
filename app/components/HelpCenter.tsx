"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Or use simple SVGs if you don't have lucide-react

// --- 1. The Data (Extracted from your HTML) ---
const faqCategories = [
    {
        title: "Shopping Information",
        items: [
            {
                question: "Pellentesque habitant morbi tristique senectus et netus?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                question: "How much is shipping and how long will it take?",
                answer:
                    "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it.",
            },
            {
                question: "How long will it take to get my package?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                question: "Branding is simply a more efficient way to sell things?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
        ],
    },
    {
        title: "Payment Information",
        items: [
            {
                question: "Pellentesque habitant morbi tristique senectus et netus?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                question: "How much is shipping and how long will it take?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                question: "How long will it take to get my package?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
        ],
    },
    {
        title: "Order & Returns",
        items: [
            {
                question: "Pellentesque habitant morbi tristique senectus et netus?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                question: "How much is shipping and how long will it take?",
                answer:
                    "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            },
        ],
    },
];

// --- 2. Accordion Component ---
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 cursor-pointer flex items-center justify-between text-left focus:outline-none group"
            >
                <span
                    className={`text-base font-normal transition-colors duration-200 ${isOpen ? "text-black" : "text-gray-800 group-hover:text-black"
                        }`}
                >
                    {question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-400">
                    {/* Using simple SVG if you don't have lucide icons installed */}
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    )}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 text-gray-600 text-sm leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- 3. Main Page Component ---
export default function HelpCenter() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header Section */}
            <header className="py-12 md:py-16 text-center px-4">
                <nav className="flex justify-center items-center space-x-2 text-sm text-gray-500 mb-4">
                    <a href="#" className="hover:text-black transition">Home</a>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-black font-medium">FAQ</span>
                </nav>
                <h1 className="text-4xl font-normal tracking-tight mb-4">Help Center</h1>
                <p className="text-gray-600 max-w-lg font-light mx-auto">
                    Please use the below form. You can also call customer service on +971 4 2255765.
                </p>
            </header>

            {/* Main Content Area */}
            <main className="templateContainer px-4 pb-12 md:pb-24">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Sidebar (Sticky) */}
                    <aside className="lg:w-1/3">
                        <div className="bg-[#F4F4F4] rounded-lg p-8 sticky top-8">
                            <h2 className="text-xl font-normal mb-4">Contact Us</h2>
                            <div className="text-sm text-gray-600 mb-6 space-y-4">
                                <p>
                                    If you have an issue or question that requires immediate
                                    assistance, you can click the button below to chat live with a
                                    Customer Service representative.
                                </p>
                                <p>
                                    Please allow 3 - 5 business days from the time your package
                                    arrives back to us for a refund to be issued.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button className="w-full cursor-pointer py-3 px-6 border border-black rounded text-black font-normal hover:bg-black hover:text-white transition duration-300">
                                    Contact Us
                                </button>
                                <button className="w-full cursor-pointer py-3 px-6 bg-black text-white rounded font-normal border border-black hover:bg-transparent hover:text-black transition duration-300">
                                    About us
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Right Content (FAQs) */}
                    <section className="lg:w-2/3">
                        {faqCategories.map((category, index) => (
                            <div key={index} className="mb-12 last:mb-0">
                                <h2 className="text-xl font-normal mb-2">
                                    {category.title}
                                </h2>
                                <div className="w-full">
                                    {category.items.map((item, i) => (
                                        <FaqItem
                                            key={i}
                                            question={item.question}
                                            answer={item.answer}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                </div>
            </main>
        </div>
    );
}