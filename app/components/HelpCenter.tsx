"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Or use simple SVGs if you don't have lucide-react
import Link from "next/link";

// --- 1. The Data (Extracted from your HTML) ---
const faqCategories = [
    {
        title: "Authentic product",
        items: [
            {
                question: "What is your Minimum Order Quantity (MOQ)?",
                answer:
                    "Our standard MOQ is typically a **mixed-container** (20ft or 40ft), as we specialize in providing flexible consolidation solutions. Smaller orders, such as single pallets, may be considered depending on the product category and destination.",
            },
            {
                question: "Do you offer mixed-container loading?",
                answer:
                    "**Yes, this is one of our key strengths.** We specialize in mixed-container loading, allowing importers to combine multiple FMCG categories (food, cleaning, household) and brands in a single shipment from our Dubai hub. This provides flexibility and cost savings.",
            },
            {
                question: "What is the typical shipping process and delivery time?",
                answer:
                    "Once an order is confirmed, our team handles product sourcing, quality check, consolidation, and container loading from our warehouse in Dubai. Shipping time varies greatly based on the destination (e.g., GCC or African markets). We coordinate closely with shipping lines and forwarders and will provide an estimated delivery schedule with your quote.",
            },
            {
                question: "What documentation do you provide for customs clearance?",
                answer:
                    "We provide comprehensive documentation support, including the **Commercial Invoice, Packing List, Certificate of Origin, and any other specific certifications or documents** required for smooth customs clearance in your target market.",
            },
        ],
    },
    {
        title: "Product & Sourcing Information",
        items: [
            {
                question: "What product categories does MKT Trading specialize in?",
                answer:
                    "We primarily trade a wide range of Fast-Moving Consumer Goods (FMCG), including **Cleaning & Home Care** products, **Canned Foods, Breakfast & Pantry staples, Beverages, and Baby & Personal Care** items. We are a one-stop hub for diverse FMCG needs.",
            },
            {
                question: "What makes MKT Trading’s sourcing competitive?",
                answer:
                    "Our competitive edge comes from being based in the Dubai trading hub and working **directly with manufacturers and major distributors**. This allows us to access multiple origins, focus on regular and promotional deals, and offer highly competitive pricing, especially for price-sensitive markets in the GCC and Africa.",
            },
            {
                question: "Where do you source your products from?",
                answer:
                    "We source primarily from global manufacturers and large distributors, with main origins including **UAE, India, Brazil, Thailand, Turkey, China, and the EU**. Our Dubai base allows us to consolidate products from these various origins efficiently.",
            },
        ],
    },
    {
        title: "Company & Payment",
        items: [
            {
                question: "What is MKT Trading’s primary target audience?",
                answer:
                    "Our primary audience includes **importers, distributors, wholesalers, and retail chains** in our target regions (GCC and Africa). We focus on B2B clients looking for reliable, consolidated FMCG supply.",
            },
            {
                question: "What payment methods do you accept?",
                answer:
                    "We accept standard B2B payment methods. Specific terms (such as T/T – Telegraphic Transfer, or L/C – Letter of Credit) are discussed and agreed upon during the quotation and order confirmation process.",
            },
            {
                question: "How can I get a custom quote for my order?",
                answer:
                    "You can easily get a quote by using the **'Get a Quote' form** on our website or by clicking the **'WhatsApp Now'** button for immediate contact. Please include your company name, country, desired product categories, and approximate order quantity for the fastest response.",
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
        <div className=" bg-white text-gray-900">
            {/* Header Section */}
            <header className="py-10 md:py-12 text-center px-4">
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
            <main className="templateContainer px-4 pb-7 md:pb-12">
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
                                <Link href="/contact">
                                    <button className="w-full cursor-pointer py-3 px-6 border border-black rounded text-black font-normal hover:bg-black hover:text-white transition duration-300">
                                        Contact Us
                                    </button></Link>
                                <Link href="/about">
                                    <button className="w-full cursor-pointer py-3 px-6 bg-black text-white rounded font-normal border border-black hover:bg-transparent hover:text-black transition duration-300">
                                        About us
                                    </button>
                                </Link>
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
            </main >
        </div >
    );
}