// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Playfair_Display, Noto_Serif_Devanagari } from 'next/font/google';

// // 1. Configure Fonts using Next.js optimization
// const playfair = Playfair_Display({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     variable: '--font-playfair'
// });

// const notoSerif = Noto_Serif_Devanagari({
//     subsets: ['devanagari'],
//     weight: ['700'],
//     variable: '--font-noto'
// });

// // 2. Define TypeScript Interfaces
// interface TeaImage {
//     src: string;
//     alt: string;
//     rotate: number;
//     top: number;
//     left: number;
// }

// // 3. Data Array
// const teas: TeaImage[] = [
//     { src: '/images/tea1.jpeg', alt: 'Tea 1', rotate: -15, top: -350, left: 20 },
//     { src: '/images/tea.jpg', alt: 'Tea 2', rotate: 10, top: -280, left: 200 },
//     { src: '/images/tea2.jpg', alt: 'Tea 3', rotate: -5, top: -70, left: 180 },
// ];

// const AnimatedCard = () => {
//     return (
//         <section
//             className={`
//         ${playfair.variable} ${notoSerif.variable}
//         min-h-screen w-full relative overflow-hidden
//         flex flex-col lg:flex-row justify-center items-center
//         px-6 py-20 lg:px-24 gap-10
//         bg-gradient-to-b from-[#ffe58b] via-[#f6d173] via-25% to-[#de992d]
//       `}
//         >

//             {/* --- Left Side: Images --- */}
//             <div className="relative flex-1 w-full h-[600px] flex justify-center items-center lg:items-start lg:mt-32">
//                 {teas.map((tea, index) => (
//                     <motion.img
//                         key={index}
//                         src={tea.src}
//                         alt={tea.alt}
//                         className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] object-cover absolute border-[10px] border-white shadow-xl rounded-sm"
//                         // Use inline styles for dynamic specific positioning from your array
//                         style={{
//                             top: tea.top, // Note: On mobile you might want to adjust these values
//                             left: tea.left
//                         }}
//                         // Animation Props
//                         initial={{ opacity: 0, y: 150, rotate: 0 }}
//                         whileInView={{ opacity: 1, y: 0, rotate: tea.rotate }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.6, delay: index * 0.3 }}
//                     />
//                 ))}
//             </div>

//             {/* --- Right Side: Text --- */}
//             <motion.div
//                 className="flex-1 flex flex-col gap-6 z-10"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//             >
//                 <motion.h1
//                     className="font-playfair text-4xl lg:text-6xl text-[#6d4c41] font-normal"
//                     initial={{ opacity: 0, x: 100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     OUR <span className="font-noto mx-2">चाय</span> STORY
//                 </motion.h1>

//                 <motion.div
//                     className="text-[#4b2e1e] text-lg leading-relaxed font-serif max-w-2xl"
//                     initial={{ opacity: 0, x: 100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                 >
//                     <p className="mb-6">
//                         From the first sip, our teas take you on a journey of flavors and aromas, carefully selected from the finest leaves. Each blend tells its own story, crafted with passion and expertise to bring warmth and comfort to your daily life. Whether it’s the delicate scent of rose, the exotic touch of kesar, or the classic spices in masala and cardamom, our chai is designed to delight your senses and make every cup a memorable experience.
//                     </p>
//                     <p className="mb-6">
//                         Every ingredient is sourced ethically, ensuring that each sip supports local farmers and sustainable practices. Our brewing process respects traditional methods while embracing modern techniques to bring out the richest flavors. Whether shared with friends, enjoyed during quiet reflection, or served as a comforting ritual in your daily routine, our chai is more than just a drink—it’s a celebration of culture, care, and connection.
//                     </p>
//                     <p>
//                         Let the aroma fill your space, let the flavors dance on your palate, and let each cup remind you that the simple joys in life are often the most profound. Welcome to a world where every tea tells a story, and every story is steeped in love.
//                     </p>
//                 </motion.div>

//                 <motion.button
//                     className="bg-[#6d4c41] text-white px-8 py-3 text-base rounded-lg mt-5 w-fit hover:bg-[#533724] transform hover:scale-105 transition-all duration-300 shadow-md"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1 }}
//                 >
//                     Explore More
//                 </motion.button>
//             </motion.div>
//         </section>
//     );
// };

// export default AnimatedCard;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';


// // 2. Data
// const teas = [
//     { src: '/dummy-image/al-jubail-souk-sharjah.jpg', alt: 'Tea 1', rotate: -15, top: -350, left: 20 },
//     { src: '/dummy-image/al-jubail-souk-sharjah.jpg', alt: 'Tea 2', rotate: 10, top: -280, left: 200 },
//     { src: '/dummy-image/al-jubail-souk-sharjah.jpg', alt: 'Tea 3', rotate: -5, top: -70, left: 180 },
// ];

// const TeaStorySection = () => {
//     return (
//         <div className="relative w-full overflow-hidden bg-white">

//             {/* Container to center content */}
//             <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-10 px-6 lg:flex-row lg:px-24">

//                 {/* Left Side: Images */}
//                 <div className="relative flex min-h-[500px] w-full flex-1 items-center justify-center ">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[250px] w-[250px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] lg:h-[350px] lg:w-[350px]"
//                             // We use inline styles for the specific positioning logic from your CSS
//                             // Note: Adjusted positioning logic slightly to work within the relative container
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 left: tea.left
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top, // Using Y translate to handle the "top" positioning relative to center
//                                 rotate: tea.rotate,
//                                 left: tea.left
//                             }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             transition={{ duration: 0.6, delay: index * 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-4xl font-bold text-[#6d4c41] lg:text-6xl`}
//                         initial={{ opacity: 0, x: 100 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         OUR
//                         <span className={` mx-3 font-bold`}>
//                             MKT
//                         </span>
//                         STORY
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"
//                         initial={{ opacity: 0, x: 100 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                     >
//                         <p className="text-lg leading-relaxed text-[#4b2e1e] lg:w-[90%] lg:text-xl">
//                             From the first sip, our teas take you on a journey of flavors and aromas, carefully selected from the finest leaves. Each blend tells its own story, crafted with passion and expertise to bring warmth and comfort to your daily life. Whether it’s the delicate scent of rose, the exotic touch of kesar, or the classic spices in masala and cardamom, our chai is designed to delight your senses and make every cup a memorable experience.
//                         </p>



//                         <p className=" text-lg leading-relaxed text-[#4b2e1e] lg:w-[90%] lg:text-xl">
//                             Let the aroma fill your space, let the flavors dance on your palate, and let each cup remind you that the simple joys in life are often the most profound. Welcome to a world where every tea tells a story, and every story is steeped in love.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1 }}
//                     >
//                         <button
//                             className="mt-5 w-[200px] rounded-lg bg-[#6d4c41] px-8 py-3 text-base text-white transition-all duration-300 hover:scale-105 hover:bg-[#533724]"
//                         >
//                             Explore More
//                         </button>
//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default TeaStorySection;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';


// // 2. Data
// // FIX: Adjusted 'top' values to be less negative or positive to prevent them from being pushed above the parent container's top boundary.
// const teas = [
//     { src: '/dummy-image/al-jubail-souk-sharjah.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/al-jubail-souk-sharjah.jpg', alt: 'Tea 2', rotate: 10, top: 0, left: 200 },
//     { src: '/dummy-image/al-jubail-souk-sharjah.jpg', alt: 'Tea 3', rotate: -5, top: 80, left: 180 },
// ];

// const TeaStorySection = () => {
//     return (
//         <div className="relative w-full overflow-hidden bg-white">

//             {/* Container to center content */}
//             <div className=" flex templateContainer flex-col items-center justify-center gap-10 px-6 lg:flex-row lg:px-24">

//                 {/* Left Side: Images */}
//                 <div className="relative flex min-h-[500px] w-full flex-1 items-center justify-center ">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[250px] w-[250px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] lg:h-[350px] lg:w-[350px]"
//                             // Positioning logic is kept the same:
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 left: tea.left
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top, // Now using the adjusted 'top' (Y translate) value
//                                 rotate: tea.rotate,
//                                 left: tea.left
//                             }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             transition={{ duration: 0.6, delay: index * 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-4xl font-bold text-[#6d4c41] lg:text-6xl`}
//                         initial={{ opacity: 0, x: 100 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         OUR
//                         <span className={` mx-3 font-bold`}>
//                             MKT
//                         </span>
//                         STORY
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"
//                         initial={{ opacity: 0, x: 100 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                     >
//                         <p className="text-lg leading-relaxed text-[#4b2e1e] lg:w-[90%] lg:text-xl">
//                             From the first sip, our teas take you on a journey of flavors and aromas, carefully selected from the finest leaves. Each blend tells its own story, crafted with passion and expertise to bring warmth and comfort to your daily life. Whether it’s the delicate scent of rose, the exotic touch of kesar, or the classic spices in masala and cardamom, our chai is designed to delight your senses and make every cup a memorable experience.
//                         </p>



//                         <p className=" text-lg leading-relaxed text-[#4b2e1e] lg:w-[90%] lg:text-xl">
//                             Let the aroma fill your space, let the flavors dance on your palate, and let each cup remind you that the simple joys in life are often the most profound. Welcome to a world where every tea tells a story, and every story is steeped in love.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1 }}
//                     >
//                         <button
//                             className="mt-5 w-[200px] rounded-lg bg-[#6d4c41] px-8 py-3 text-base text-white transition-all duration-300 hover:scale-105 hover:bg-[#533724]"
//                         >
//                             Explore More
//                         </button>
//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default TeaStorySection;

// ////////////////////////////
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );
// // 2. Data
// const teas = [
//     // Added explicit zIndex to control stacking order if needed, or we rely on loop index
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// const AnimatedCard = () => {
//     return (
//         <div className="relative w-full  bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 lg:flex-row lg:px-24">

//                 {/* Left Side: Images */}
//                 <div className="relative flex min-h-[550px] lg:min-h-[660px]  w-full flex-1 items-center justify-center">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[250px] w-[250px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] lg:h-[350px] lg:w-[350px]"

//                             // 1. Static Styles (Layout & Z-Index)
//                             style={{
//                                 left: tea.left,
//                                 zIndex: index + 1 // Ensures 1st is bottom, 3rd is top
//                             }}

//                             // 2. Animation States
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 scale: 0.8
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top,
//                                 rotate: tea.rotate,
//                                 scale: 1
//                             }}

//                             // 3. Transition Control (Sequential Timing)
//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.4,
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 15
//                             }}

//                             viewport={{ once: true, amount: 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content (Unchanged) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}

//                     >
//                         OUR {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"

//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40  years  What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div

//                     >
//                         {/* <button
//                             className=" cursor-pointer inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group"
//                         >
//                             Explore More
//                             <span className="transition-transform group-hover:translate-x-1">
//                                 <ArrowRightIcon />
//                             </span>
//                         </button> */}

//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>


//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;




//////////////////////////

// // D:\mktgroup\app\components\AnimatedCard.tsx
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );
// // 2. Data
// const teas = [
//     // Added explicit zIndex to control stacking order if needed, or we rely on loop index
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// const AnimatedCard = () => {
//     return (
//         <div className="relative w-full  bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 lg:flex-row lg:px-24">

//                 {/* Left Side: Images */}
//                 <div className="relative flex min-h-[550px] lg:min-h-[660px]  w-full flex-1 items-center justify-center">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[250px] w-[250px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] lg:h-[350px] lg:w-[350px]"

//                             // 1. Static Styles (Layout & Z-Index)
//                             style={{
//                                 left: tea.left,
//                                 zIndex: index + 1 // Ensures 1st is bottom, 3rd is top
//                             }}

//                             // 2. Animation States
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 scale: 0.8
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top,
//                                 rotate: tea.rotate,
//                                 scale: 1
//                             }}

//                             // 3. Transition Control (Sequential Timing)
//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.4,
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 15
//                             }}

//                             viewport={{ once: true, amount: 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content (Unchanged) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}

//                     >
//                         OUR {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"

//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40  years  What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div

//                     >

//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>


//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;



// // D:\mktgroup\app\components\AnimatedCard.tsx
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );
// // 2. Data
// const teas = [
//     // Added explicit zIndex to control stacking order if needed, or we rely on loop index
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// const AnimatedCard = () => {
//     return (
//         <div className="relative w-full  bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 lg:flex-row lg:px-24">

//                 {/* Left Side: Images */}
//                 <div className="relative flex min-h-[550px] lg:min-h-[660px]  w-full flex-1 items-center justify-center">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[250px] w-[250px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] lg:h-[350px] lg:w-[350px]"


//                             style={{
//                                 left: tea.left,
//                                 zIndex: index + 1
//                             }}

//                             // 2. Animation States
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 scale: 0.8
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top,
//                                 rotate: tea.rotate,
//                                 scale: 1
//                             }}


//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.4,
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 15
//                             }}

//                             viewport={{ once: true, amount: 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content (Unchanged) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}

//                     >
//                         OUR {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"

//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40  years  What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div

//                     >

//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>


//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;



// // D:\mktgroup\app\components\AnimatedCard.tsx
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );
// // 2. Data
// const teas = [
//     // Added explicit zIndex to control stacking order if needed, or we rely on loop index
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// const AnimatedCard = () => {
//     return (
//         <div className="relative w-full  bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 lg:flex-row lg:px-24">

//                 {/* Left Side: Images */}
//                 <div className="relative lg: flex min-h-[550px] lg:min-h-[660px]  w-full flex-1 items-center justify-center">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[250px] w-[250px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] lg:h-[350px] lg:w-[350px]"


//                             style={{
//                                 left: tea.left,
//                                 zIndex: index + 1
//                             }}

//                             // 2. Animation States
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 scale: 0.8
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top,
//                                 rotate: tea.rotate,
//                                 scale: 1
//                             }}


//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.4,
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 15
//                             }}

//                             viewport={{ once: true, amount: 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content (Unchanged) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}

//                     >
//                         OUR {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"

//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40  years  What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div

//                     >

//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>


//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;

// // D:\mktgroup\app\components\AnimatedCard.tsx
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );
// // 2. Data
// const teas = [
//     // Added explicit zIndex to control stacking order if needed, or we rely on loop index
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// const AnimatedCard = () => {
//     return (
//         <div className="relative w-full bg-white">
//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 lg:flex-row lg:px-24">

//                 {/* 🌟 Left Side: Images (Conditional rendering based on screen size) 🌟 */}

//                 {/* 1. Animated Images (Visible only on lg and above) */}
//                 <div className="relative hidden lg:flex min-h-[660px] w-full flex-1 items-center justify-center">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[350px] w-[350px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)]"
//                             style={{
//                                 left: tea.left,
//                                 zIndex: index + 1
//                             }}
//                             // 2. Animation States
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 scale: 0.8
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top,
//                                 rotate: tea.rotate,
//                                 scale: 1
//                             }}
//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.4,
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 15
//                             }}
//                             viewport={{ once: true, amount: 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* 2. Simple, Static Images (Visible on screens smaller than lg) */}
//                 <div className="flex lg:hidden w-full flex-1 items-center justify-center gap-4 py-10">
//                     {/* Only showing the first two images for a simpler layout, without rotation or absolute positioning */}
//                     {teas.slice(0, 3).map((tea, index) => (
//                         <img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="h-[150px] w-[150px] border-[5px] border-white object-cover shadow-[0_4px_8px_rgba(0,0,0,0.2)] sm:h-[200px] sm:w-[200px]"
//                         />
//                     ))}
//                 </div>

//                 {/* Right Side: Content (Unchanged) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}
//                     >
//                         OUR {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"
//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40  years  What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div>
//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );

// // 2. Data
// const teas = [
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// const AnimatedCard = () => {
//     return (
//         <div className="relative w-full bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 lg:flex-row lg:px-24">

//                 {/* 1. Animated Images (Visible only on lg and above) - NO CHANGES HERE */}
//                 <div className="relative hidden lg:flex min-h-[660px] w-full flex-1 items-center justify-center">
//                     {teas.map((tea, index) => (
//                         <motion.img
//                             key={index}
//                             src={tea.src}
//                             alt={tea.alt}
//                             className="absolute h-[350px] w-[350px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-xl"
//                             style={{
//                                 left: tea.left,
//                                 zIndex: index + 1
//                             }}
//                             // 2. Animation States
//                             initial={{
//                                 opacity: 0,
//                                 y: 150,
//                                 rotate: 0,
//                                 scale: 0.8
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: tea.top,
//                                 rotate: tea.rotate,
//                                 scale: 1
//                             }}
//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.4,
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 15
//                             }}
//                             viewport={{ once: true, amount: 0.3 }}
//                         />
//                     ))}
//                 </div>

//                 {/* 2. Simple, Static Images (Visible on screens smaller than lg) */}
//                 <div className="flex lg:hidden w-full flex-1 items-center justify-center py-10">

//                     {/* A. 2x1 Layout (Default/Mobile: < md) - Hidden on md and up */}
//                     <div className="flex flex-col items-center gap-4 md:hidden">

//                         {/* Row 1: First two images side-by-side */}
//                         <div className="flex justify-center gap-4">
//                             {teas.slice(0, 2).map((tea, index) => (
//                                 <img
//                                     key={index}
//                                     src={tea.src}
//                                     alt={tea.alt}
//                                     // Sizing for small screens
//                                     className="h-[140px] w-[140px] border-[5px] border-white object-cover shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg"
//                                 />
//                             ))}
//                         </div>

//                         {/* Row 2: Third image centered */}
//                         {teas.length > 2 && (
//                             <img
//                                 key={2}
//                                 src={teas[2].src}
//                                 alt={teas[2].alt}
//                                 className="h-[140px] w-[140px] border-[5px] border-white object-cover shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg"
//                             />
//                         )}
//                     </div>

//                     {/* B. 1x3 Layout (Tablet: md to lg) - Visible on md, hidden on lg */}
//                     <div className="hidden md:flex justify-center gap-4 w-full">
//                         {teas.map((tea, index) => (
//                             <img
//                                 key={index}
//                                 src={tea.src}
//                                 alt={tea.alt}
//                                 // Adjusted sizing to fit three images comfortably on md screens
//                                 className="h-[150px] w-[150px] border-[5px] border-white object-cover shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg"
//                             />
//                         ))}
//                     </div>

//                 </div>

//                 {/* Right Side: Content (Unchanged) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}
//                     >
//                         OUR {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"
//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40  years  What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div>
//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );

// // 2. Data
// const teas = [
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// // Helper component for repeated motion.img logic on large screens
// const AnimatedImage = ({ tea, index }) => (
//     <motion.img
//         key={index}
//         src={tea.src}
//         alt={tea.alt}
//         className="absolute h-[350px] w-[350px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-xl"
//         style={{
//             left: tea.left,
//             zIndex: index + 1
//         }}
//         // 2. Animation States
//         initial={{
//             opacity: 0,
//             y: 150,
//             rotate: 0,
//             scale: 0.8
//         }}
//         whileInView={{
//             opacity: 1,
//             y: tea.top,
//             rotate: tea.rotate,
//             scale: 1
//         }}
//         transition={{
//             duration: 0.6,
//             delay: index * 0.4,
//             type: "spring",
//             stiffness: 100,
//             damping: 15
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//     />
// );

// const StaticImage = ({ tea, className, index }) => (
//     <img
//         key={index}
//         src={tea.src}
//         alt={tea.alt}
//         className={className}
//     />
// );


// const AnimatedCard = () => {
//     // Check if teas array has enough elements
//     const hasImage1 = teas.length > 0;
//     const hasImage2 = teas.length > 1;
//     const hasImage3 = teas.length > 2;

//     const mobileImageClass = "h-[240px] w-[240px] border-[5px] border-white object-cover shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg";
//     const tabletImageClass = "h-[330px] w-[330px] border-[5px] border-white object-cover shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg";


//     return (
//         <div className="relative w-full bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 xl:flex-row lg:px-24">

//                 {/* 1. Animated Images (Visible only on lg and above) - REFLECTED CHANGES HERE */}
//                 <div className="relative hidden xl:flex min-h-[660px] w-full flex-1 items-center justify-center">
//                     {hasImage1 && <AnimatedImage tea={teas[0]} index={0} />}
//                     {hasImage2 && <AnimatedImage tea={teas[1]} index={1} />}
//                     {hasImage3 && <AnimatedImage tea={teas[2]} index={2} />}
//                 </div>

//                 {/* 2. Simple, Static Images (Visible on screens smaller than lg) - REFLECTED CHANGES HERE */}
//                 <div className="flex xl:hidden w-full flex-1 items-center justify-center py-10">

//                     {/* A. 2x1 Layout (Default/Mobile: < md) - Hidden on md and up */}
//                     <div className="flex flex-col items-center gap-4 md:hidden">

//                         {/* Row 1: First two images side-by-side */}
//                         <div className="flex justify-center gap-4">
//                             {hasImage1 && <StaticImage tea={teas[0]} index={0} className={mobileImageClass} />}
//                             {hasImage2 && <StaticImage tea={teas[1]} index={1} className={mobileImageClass} />}
//                         </div>

//                         {/* Row 2: Third image centered */}
//                         {hasImage3 && (
//                             <StaticImage tea={teas[2]} index={2} className={mobileImageClass} />
//                         )}
//                     </div>

//                     {/* B. 1x3 Layout (Tablet: md to lg) - Visible on md, hidden on lg */}
//                     <div className="hidden md:flex justify-center gap-4 w-full">
//                         {hasImage1 && <StaticImage tea={teas[0]} index={0} className={tabletImageClass} />}
//                         {hasImage2 && <StaticImage tea={teas[1]} index={1} className={tabletImageClass} />}
//                         {hasImage3 && <StaticImage tea={teas[2]} index={2} className={tabletImageClass} />}
//                     </div>

//                 </div>

//                 {/* Right Side: Content (Typo fix in Heading) */}
//                 <motion.div
//                     className="flex flex-1 flex-col gap-6 text-center lg:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading - Corrected typo from 'OUR' + 'story' to 'Our' + 'Story' */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}
//                     >
//                         Our {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"
//                     >
//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40 years. What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxedlg:w-[90%] text-base font-light text-zinc-600 leading-relaxed">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div>
//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;


////////////////////

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );

// // 2. Data
// const teas = [
//     { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
//     { src: '/dummy-image/2151893421.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
//     { src: '/dummy-image/1333.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
// ];

// // Helper component for repeated motion.img logic on large screens
// const AnimatedImage = ({ tea, index }) => (
//     <motion.img
//         key={index}
//         src={tea.src}
//         alt={tea.alt}
//         className="absolute h-[350px] w-[350px] border-[10px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-xl"
//         style={{
//             left: tea.left,
//             zIndex: index + 1
//         }}
//         // 2. Animation States
//         initial={{
//             opacity: 0,
//             y: 150,
//             rotate: 0,
//             scale: 0.8
//         }}
//         whileInView={{
//             opacity: 1,
//             y: tea.top,
//             rotate: tea.rotate,
//             scale: 1
//         }}
//         transition={{
//             duration: 0.6,
//             delay: index * 0.4,
//             type: "spring",
//             stiffness: 100,
//             damping: 15
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//     />
// );

// // Helper component for static images (under XL)
// // Uses aspect-square and object-cover for responsive sizing
// const StaticImage = ({ tea, className, index }) => (
//     <img
//         key={index}
//         src={tea.src}
//         alt={tea.alt}
//         className={`w-full aspect-square object-cover ${className}`}
//     />
// );


// const AnimatedCard = () => {
//     // Check if teas array has enough elements
//     const hasImage1 = teas.length > 0;
//     const hasImage2 = teas.length > 1;
//     const hasImage3 = teas.length > 2;

//     // Common styling for the image frame
//     const imageFrameClass = "border-[2px] border-white shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg";


//     return (
//         <div className="relative w-full bg-white">

//             {/* Container to center content */}
//             <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 xl:flex-row lg:px-24">

//                 {/* 1. Animated Images (Visible only on xl and above) */}
//                 <div className="relative hidden xl:flex min-h-[660px] w-full flex-1 items-center justify-center">
//                     {hasImage1 && <AnimatedImage tea={teas[0]} index={0} />}
//                     {hasImage2 && <AnimatedImage tea={teas[1]} index={1} />}
//                     {hasImage3 && <AnimatedImage tea={teas[2]} index={2} />}
//                 </div>

//                 {/* 2. Simple, Static Images (Visible on screens smaller than xl, i.e., sm, md, lg) */}
//                 <div className="flex xl:hidden w-full flex-1 items-center justify-center py-10">

//                     {/* A. 2x1 Layout (Mobile: < md) - Hidden on md and up */}
//                     <div className="flex relative flex-col items-center gap-2 px-2 md:hidden w-full max-w-xl">



//                         {/* Row 2: Third image centered. Use w-1/2 for visual balance */}
//                         {hasImage3 && (
//                             <div className="flex justify-center w-full">
//                                 <div className="w-1/2">
//                                     <StaticImage tea={teas[2]} index={2} className={`${imageFrameClass} rotate-0 `} />
//                                 </div>
//                             </div>
//                         )}

//                         {/* Row 1: First two images side-by-side. Each is w-1/2 of their container */}
//                         <div className="flex absolute top-32 justify-center  gap-2 w-full">
//                             {hasImage1 && <div className="w-1/2">
//                                 <StaticImage tea={teas[0]} index={0} className={`${imageFrameClass} -rotate-10 `} />
//                             </div>}
//                             {hasImage2 && <div className="w-1/2">
//                                 <StaticImage tea={teas[1]} index={1} className={`${imageFrameClass} rotate-10 `} />
//                             </div>}
//                         </div>
//                     </div>

//                     {/* B. 1x3 Layout (Tablet & Small Desktop: md to xl) - Visible on md, hidden on xl */}
//                     <div className="hidden md:flex  justify-center gap-4 w-full px-4">
//                         {hasImage1 && <div className="w-1/3">
//                             <StaticImage tea={teas[0]} index={0} className={imageFrameClass} />
//                         </div>}
//                         {hasImage2 && <div className="w-1/3">
//                             <StaticImage tea={teas[1]} index={1} className={imageFrameClass} />
//                         </div>}
//                         {hasImage3 && <div className="w-1/3">
//                             <StaticImage tea={teas[2]} index={2} className={imageFrameClass} />
//                         </div>}
//                     </div>

//                 </div>

//                 {/* Right Side: Content */}
//                 <motion.div
//                     className="flex flex-1 flex-col mt-[120px] md:mt-0 gap-6 text-center xl:text-left"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* Heading - Corrected typo from 'OUR' + 'story' to 'Our' + 'Story' */}
//                     <motion.h1
//                         className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}
//                     >
//                         Our {" "}
//                         <span>
//                             story at <br />
//                         </span>{" "}
//                         MKT General Trading L.L.C
//                     </motion.h1>

//                     {/* Paragraphs */}
//                     <motion.div
//                         className="flex flex-col gap-6"
//                     >
//                         <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
//                             Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40 years. What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
//                         </p>

//                         <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
//                             We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
//                         </p>

//                         <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
//                             That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
//                         </p>
//                     </motion.div>

//                     {/* Button */}
//                     <motion.div>
//                         <div className="">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
//                                 Contact Us
//                                 <span className="transition-transform group-hover:translate-x-1">
//                                     <ArrowRightIcon />
//                                 </span>
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default AnimatedCard;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Type Definitions
interface Tea {
    src: string;
    alt: string;
    rotate: number;
    top: number;
    left: number;
}

interface AnimatedImageProps {
    tea: Tea;
    index: number;
}

interface StaticImageProps {
    tea: Tea;
    className: string;
    index: number;
}

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);

// 2. Data (Ensure 'teas' matches the Tea interface)
const teas: Tea[] = [
    { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
    { src: '/dummy-image/75158.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
    { src: '/dummy-image/69130.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
];

// Helper component for repeated motion.img logic on large screens
// 3. Type applied to props
const AnimatedImage = ({ tea, index }: AnimatedImageProps) => (
    <motion.img
        key={index}
        src={tea.src}
        alt={tea.alt}
        className="absolute h-[350px] w-[350px] border-[7px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-xl"
        style={{
            left: tea.left,
            zIndex: index + 1
        }}
        // 2. Animation States
        initial={{
            opacity: 0,
            y: 150,
            rotate: 0,
            scale: 0.8
        }}
        whileInView={{
            opacity: 1,
            y: tea.top,
            rotate: tea.rotate,
            scale: 1
        }}
        transition={{
            duration: 0.6,
            delay: index * 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15
        }}
        viewport={{ once: true, amount: 0.3 }}
    />
);

// Helper component for static images (under XL)
// Uses aspect-square and object-cover for responsive sizing
// 3. Type applied to props
const StaticImage = ({ tea, className, index }: StaticImageProps) => (
    <img
        key={index}
        src={tea.src}
        alt={tea.alt}
        className={`w-full aspect-square object-cover ${className}`}
    />
);


const AnimatedCard = () => {
    // Check if teas array has enough elements
    const hasImage1 = teas.length > 0;
    const hasImage2 = teas.length > 1;
    const hasImage3 = teas.length > 2;

    // Common styling for the image frame
    const imageFrameClass = "border-[2px] border-white shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg";


    return (
        <div className="relative w-full bg-white">

            {/* Container to center content */}
            <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 xl:flex-row lg:px-24">

                {/* 1. Animated Images (Visible only on xl and above) */}
                <div className="relative hidden xl:flex min-h-[660px] w-full flex-1 items-center justify-center">
                    {hasImage1 && <AnimatedImage tea={teas[0]} index={0} />}
                    {hasImage2 && <AnimatedImage tea={teas[1]} index={1} />}
                    {hasImage3 && <AnimatedImage tea={teas[2]} index={2} />}
                </div>

                {/* 2. Simple, Static Images (Visible on screens smaller than xl, i.e., sm, md, lg) */}
                <div className="flex xl:hidden w-full flex-1 items-center justify-center py-10">

                    {/* A. 2x1 Layout (Mobile: < md) - Hidden on md and up */}
                    <div className="flex relative flex-col items-center gap-2 px-2 md:hidden w-full max-w-xl">



                        {/* Row 2: Third image centered. Use w-1/2 for visual balance */}
                        {hasImage3 && (
                            <div className="flex justify-center w-full">
                                <div className="w-1/2">
                                    <StaticImage tea={teas[2]} index={2} className={`${imageFrameClass} rotate-0 `} />
                                </div>
                            </div>
                        )}

                        {/* Row 1: First two images side-by-side. Each is w-1/2 of their container */}
                        <div className="flex absolute top-32 justify-center  gap-2 w-full">
                            {hasImage1 && <div className="w-1/2">
                                <StaticImage tea={teas[0]} index={0} className={`${imageFrameClass} -rotate-10 `} />
                            </div>}
                            {hasImage2 && <div className="w-1/2">
                                <StaticImage tea={teas[1]} index={1} className={`${imageFrameClass} rotate-10 `} />
                            </div>}
                        </div>
                    </div>

                    {/* B. 1x3 Layout (Tablet & Small Desktop: md to xl) - Visible on md, hidden on xl */}
                    <div className="hidden md:flex  justify-center gap-4 w-full px-4">
                        {hasImage1 && <div className="w-1/3">
                            <StaticImage tea={teas[0]} index={0} className={imageFrameClass} />
                        </div>}
                        {hasImage2 && <div className="w-1/3">
                            <StaticImage tea={teas[1]} index={1} className={imageFrameClass} />
                        </div>}
                        {hasImage3 && <div className="w-1/3">
                            <StaticImage tea={teas[2]} index={2} className={imageFrameClass} />
                        </div>}
                    </div>

                </div>

                {/* Right Side: Content */}
                <motion.div
                    className="flex flex-1 flex-col mt-[120px] md:mt-0 gap-6 text-center xl:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Heading - Corrected typo from 'OUR' + 'story' to 'Our' + 'Story' */}
                    <motion.h1
                        className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}
                    >
                        Our {" "}
                        <span>
                            story at <br />
                        </span>{" "}
                        MKT General Trading L.L.C
                    </motion.h1>

                    {/* Paragraphs */}
                    <motion.div
                        className="flex flex-col gap-6"
                    >
                        <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
                            Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40 years. What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
                        </p>

                        <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
                            We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
                        </p>

                        <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
                            That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
                        </p>
                    </motion.div>

                    {/* Button */}
                    <motion.div>
                        <div className="">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
                                Contact Us
                                <span className="transition-transform group-hover:translate-x-1">
                                    <ArrowRightIcon />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default AnimatedCard;