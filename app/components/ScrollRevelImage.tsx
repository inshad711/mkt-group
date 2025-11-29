

///////////// older version kept for reference /////////////

// "use client";
// import React, { useRef, useState, useEffect, useMemo } from 'react';
// import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

// // --- Types & Data ---

// type ContentItem = {
//     id: number;
//     badge: string;
//     badgeColor: string;
//     badgeBg: string;
//     titleBefore: string;
//     titleHighlight: string;
//     titleAfter: string;
//     description: string;
//     markerColor: string;
//     markerType: 'zigzag' | 'curve' | 'loop';
//     imageUrl: string;
// };

// const CONTENT: ContentItem[] = [
//     {
//         id: 1,
//         badge: "Security Locks",
//         badgeColor: "#2c2d2e",
//         badgeBg: "#cdf3fb",
//         titleBefore: "A key that works",
//         titleHighlight: "everywhere",
//         titleAfter: "",
//         description: "Auto-Unlock detects when you arrive and unlocks the door. Enable Auto-Lock to lock when the door closes. Welcome home to an even smarter home. Upgrade your deadbolt with the all-new August Wi-Fi Smart Lock.",
//         markerColor: "#3fb1e5",
//         markerType: "zigzag",
//         imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-01.webp?v=1728895878&width=1300"
//     },
//     {
//         id: 2,
//         badge: "Smart Lighting",
//         badgeColor: "#2c2d2e",
//         badgeBg: "#fadcce",
//         titleBefore: "",
//         titleHighlight: "Control",
//         titleAfter: "your house lights",
//         description: "Smart home lighting refers to the use of connected and programmable lights in a residential setting. It can be customized based on the room or area of the house to create the perfect atmosphere.",
//         markerColor: "#fd9962",
//         markerType: "curve",
//         imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-02.webp?v=1728895924&width=1300"
//     },
//     {
//         id: 3,
//         badge: "Video Doorbell",
//         badgeColor: "#151515",
//         badgeBg: "#e7e3fc",
//         titleBefore: "A",
//         titleHighlight: "smart home",
//         titleAfter: "starts at the front door",
//         description: "A smart home video doorbell is a device that allows you to see and speak with anyone who comes to your door, whether you are at home or away. It connects directly to your Wi-Fi network.",
//         markerColor: "#8662fd",
//         markerType: "loop",
//         imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-03.webp?v=1728895942&width=1300"
//     }
// ];

// // --- Sub-Components ---

// const AnimatedMarker = ({ type, color }: { type: string, color: string }) => {
//     const paths = {
//         zigzag: "M3 12L16.6923 4L30.3846 12L44.0769 4L57.7692 12L71.4615 4L85.1538 12L98.8462 4L112.538 12L126.231 4L139.923 12L153.615 4L167.308 12L181 4",
//         curve: "M3 10.5732C55.565 6.61382 168.107 -0.117058 197.753 4.63415",
//         loop: "M2.99996 17.9626C12.8399 12.7075 30.9393 4.04876 36.8901 3.37945C42.8408 2.71013 41.6481 9.55371 38.7739 14.0685C38.0439 16.3832 40.2101 19.2307 54.715 12.1027L65.0248 7.05411C66.2099 6.45989 68.7141 6.06011 69.2498 9.21479C69.9193 13.1581 74.1326 16.5301 86.875 16.0475C99.6174 15.5649 118.079 9.0809 130.833 7.38711C143.587 5.69332 154.465 4.07802 180.617 7.35907"
//     };

//     const currentPath = paths[type as keyof typeof paths];
//     const viewBox = type === 'curve' ? "0 0 201 14" : type === 'loop' ? "0 0 184 21" : "0 0 184 16";

//     const positionStyles: React.CSSProperties = type === 'zigzag'
//         ? { bottom: '-12px', left: '0', width: '100%' }
//         : type === 'curve'
//             ? { bottom: '-14px', left: '0', width: '100%' }
//             : { bottom: '-14px', left: '0', width: '100%' };

//     return (
//         <svg
//             className="absolute overflow-visible pointer-events-none"
//             style={{ ...positionStyles, zIndex: -1 }}
//             viewBox={viewBox}
//             fill="none"
//             preserveAspectRatio="none"
//         >
//             <motion.path
//                 d={currentPath}
//                 stroke={color}
//                 strokeWidth="6"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 1 }}
//                 viewport={{ once: true, margin: "-10%" }}
//                 transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//             />
//         </svg>
//     );
// };

// // Modified TextSection to accept a ref
// const TextSection = React.forwardRef<HTMLDivElement, { item: ContentItem, setActiveId: (id: number) => void }>(
//     ({ item, setActiveId }, ref) => {
//         // We use a local internal ref for the useInView hook to trigger the "Active ID" state
//         // (This is for the text markers/logic, separate from the image scrolling)
//         const internalRef = useRef(null);
//         const isInView = useInView(internalRef, { margin: "-45% 0px -45% 0px" });

//         useEffect(() => {
//             if (isInView) {
//                 setActiveId(item.id);
//             }
//         }, [isInView, item.id, setActiveId]);

//         return (
//             // Attach the forwarded ref to the outer container so the ImageSection can track this div's scroll position
//             <div ref={ref} className="min-h-screen flex flex-col justify-center py-20 px-6 lg:pl-20 lg:pr-12 max-w-xl mx-auto lg:mx-0">
//                 <div ref={internalRef}> {/* Internal container for the 'Active' check */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, margin: "-20%" }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                     >
//                         <div className="mb-6">
//                             <span
//                                 className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
//                                 style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
//                             >
//                                 • {item.badge}
//                             </span>
//                         </div>

//                         <h3 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#252f35] leading-[1.1] mb-8 tracking-tight">
//                             {item.titleBefore}{' '}
//                             <span className="relative inline-block whitespace-nowrap z-10">
//                                 {item.titleHighlight}
//                                 <AnimatedMarker type={item.markerType} color={item.markerColor} />
//                             </span>{' '}
//                             {item.titleAfter}
//                         </h3>

//                         <div className="text-lg text-[#303c43] leading-relaxed mb-8">
//                             <p dangerouslySetInnerHTML={{ __html: item.description }} />
//                         </div>

//                         <a
//                             href="#"
//                             className="group inline-flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
//                             style={{ color: '#3f72e5' }}
//                         >
//                             Shop Now
//                             <span className="transform group-hover:translate-x-1 transition-transform flex items-center">
//                                 <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </span>
//                         </a>
//                     </motion.div>
//                 </div>
//             </div>
//         );
//     }
// );
// TextSection.displayName = "TextSection";


// // --- Scroll-Linked Image Card ---

// const ImageCard = ({
//     item,
//     textRef,
//     index
// }: {
//     item: ContentItem,
//     textRef: React.RefObject<HTMLDivElement>,
//     index: number
// }) => {


//     // useScroll hook tracks the progress of the textRef element relative to the viewport
//     const { scrollYProgress } = useScroll({
//         target: textRef,

//         offset: ["start end", "center center"]
//     });

//     const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

//     // If it's the first image, it doesn't move. If it's others, apply the transform.
//     const style = index === 0 ? {} : { y };

//     return (
//         <motion.div
//             className="absolute inset-0 w-full h-full bg-white"
//             style={{
//                 zIndex: index,
//                 ...style
//             }}
//         >
//             <img
//                 src={item.imageUrl}
//                 alt={item.badge}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//             />
//             <div className="absolute inset-0 bg-black/0" />
//         </motion.div>
//     );
// };

// const ImageSection = ({ sectionRefs }: { sectionRefs: React.RefObject<HTMLDivElement>[] }) => {
//     return (
//         <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 lg:p-12 overflow-hidden bg-[#f5f5f5]">
//             <div className="relative w-full h-full max-h-[85vh] rounded-[2px] overflow-hidden bg-white shadow-sm">
//                 {CONTENT.map((item, index) => (
//                     <ImageCard
//                         key={item.id}
//                         item={item}
//                         textRef={sectionRefs[index]}
//                         index={index}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// // --- Main Component ---

// export default function ScrollRevelImage() {
//     const [activeId, setActiveId] = useState(1);

//     // Create an array of refs, one for each content item
//     const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
//     if (sectionRefs.current.length !== CONTENT.length) {
//         sectionRefs.current = Array(CONTENT.length).fill(null).map(() => React.createRef());
//     }

//     return (
//         <div className="bg-[#f5f5f5] min-h-screen selection:bg-blue-100  selection:text-blue-900">


//             {/* Main Layout */}
//             <main className="relative templateContainer">
//                 <div className="flex flex-col lg:flex-row">
//                     {/* Left Column: Text */}
//                     <div className="w-full lg:w-1/2 flex flex-col relative z-10">
//                         <div className="h-[10vh] lg:h-[20vh]" />
//                         {CONTENT.map((item, index) => (
//                             <TextSection
//                                 key={item.id}
//                                 ref={sectionRefs.current[index]}
//                                 item={item}
//                                 setActiveId={setActiveId}
//                             />
//                         ))}
//                         <div className="h-[20vh]" />
//                     </div>

//                     {/* Right Column: Sticky Images */}
//                     <div className="hidden lg:block w-full lg:w-1/2 h-screen sticky top-0 right-0 z-0 pr-6">
//                         <ImageSection sectionRefs={sectionRefs.current} />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }




/////////////////// latest version ///////////////////

// "use client";
// import React, { useRef, useState, useEffect, useMemo } from 'react';
// import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

// // --- Types & Data ---

// type ContentItem = {
//     id: number;
//     badge: string;
//     badgeColor: string;
//     badgeBg: string;
//     titleBefore: string;
//     titleHighlight: string;
//     titleAfter: string;
//     description: string;
//     markerColor: string;
//     markerType: 'zigzag' | 'curve' | 'loop';
//     imageUrl: string;
// };

// const CONTENT: ContentItem[] = [
//     {
//         id: 1,
//         badge: "Security Locks",
//         badgeColor: "#2c2d2e",
//         badgeBg: "#cdf3fb",
//         titleBefore: "A key that works",
//         titleHighlight: "everywhere",
//         titleAfter: "",
//         description: "Auto-Unlock detects when you arrive and unlocks the door. Enable Auto-Lock to lock when the door closes. Welcome home to an even smarter home. Upgrade your deadbolt with the all-new August Wi-Fi Smart Lock.",
//         markerColor: "#3fb1e5",
//         markerType: "zigzag",
//         imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-01.webp?v=1728895878&width=1300"
//     },
//     {
//         id: 2,
//         badge: "Smart Lighting",
//         badgeColor: "#2c2d2e",
//         badgeBg: "#fadcce",
//         titleBefore: "",
//         titleHighlight: "Control",
//         titleAfter: "your house lights",
//         description: "Smart home lighting refers to the use of connected and programmable lights in a residential setting. It can be customized based on the room or area of the house to create the perfect atmosphere.",
//         markerColor: "#fd9962",
//         markerType: "curve",
//         imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-02.webp?v=1728895924&width=1300"
//     },
//     {
//         id: 3,
//         badge: "Video Doorbell",
//         badgeColor: "#151515",
//         badgeBg: "#e7e3fc",
//         titleBefore: "A",
//         titleHighlight: "smart home",
//         titleAfter: "starts at the front door",
//         description: "A smart home video doorbell is a device that allows you to see and speak with anyone who comes to your door, whether you are at home or away. It connects directly to your Wi-Fi network.",
//         markerColor: "#8662fd",
//         markerType: "loop",
//         imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-03.webp?v=1728895942&width=1300"
//     }
// ];

// // --- Sub-Components ---

// const AnimatedMarker = ({ type, color }: { type: string, color: string }) => {
//     const paths = {
//         zigzag: "M3 12L16.6923 4L30.3846 12L44.0769 4L57.7692 12L71.4615 4L85.1538 12L98.8462 4L112.538 12L126.231 4L139.923 12L153.615 4L167.308 12L181 4",
//         curve: "M3 10.5732C55.565 6.61382 168.107 -0.117058 197.753 4.63415",
//         loop: "M2.99996 17.9626C12.8399 12.7075 30.9393 4.04876 36.8901 3.37945C42.8408 2.71013 41.6481 9.55371 38.7739 14.0685C38.0439 16.3832 40.2101 19.2307 54.715 12.1027L65.0248 7.05411C66.2099 6.45989 68.7141 6.06011 69.2498 9.21479C69.9193 13.1581 74.1326 16.5301 86.875 16.0475C99.6174 15.5649 118.079 9.0809 130.833 7.38711C143.587 5.69332 154.465 4.07802 180.617 7.35907"
//     };

//     const currentPath = paths[type as keyof typeof paths];
//     const viewBox = type === 'curve' ? "0 0 201 14" : type === 'loop' ? "0 0 184 21" : "0 0 184 16";

//     const positionStyles: React.CSSProperties = type === 'zigzag'
//         ? { bottom: '-12px', left: '0', width: '100%' }
//         : type === 'curve'
//             ? { bottom: '-14px', left: '0', width: '100%' }
//             : { bottom: '-14px', left: '0', width: '100%' };

//     return (
//         <svg
//             className="absolute overflow-visible pointer-events-none"
//             style={{ ...positionStyles, zIndex: -1 }}
//             viewBox={viewBox}
//             fill="none"
//             preserveAspectRatio="none"
//         >
//             <motion.path
//                 d={currentPath}
//                 stroke={color}
//                 strokeWidth="6"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 1 }}
//                 viewport={{ once: true, margin: "-10%" }}
//                 transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//             />
//         </svg>
//     );
// };

// // Modified TextSection to accept a ref
// const TextSection = React.forwardRef<HTMLDivElement, { item: ContentItem, setActiveId: (id: number) => void }>(
//     ({ item, setActiveId }, ref) => {
//         // We use a local internal ref for the useInView hook to trigger the "Active ID" state 
//         // (This is for the text markers/logic, separate from the image scrolling)
//         const internalRef = useRef(null);
//         const isInView = useInView(internalRef, { margin: "-45% 0px -45% 0px" });

//         useEffect(() => {
//             if (isInView) {
//                 setActiveId(item.id);
//             }
//         }, [isInView, item.id, setActiveId]);

//         return (
//             // Attach the forwarded ref to the outer container so the ImageSection can track this div's scroll position
//             <div ref={ref} className="min-h-screen flex flex-col justify-center py-20 px-6 lg:pl-20 lg:pr-12 max-w-xl mx-auto lg:mx-0">
//                 <div ref={internalRef}> {/* Internal container for the 'Active' check */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, margin: "-20%" }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                     >
//                         <div className="mb-6">
//                             <span
//                                 className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
//                                 style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
//                             >
//                                 • {item.badge}
//                             </span>
//                         </div>

//                         <h3 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#252f35] leading-[1.1] mb-8 tracking-tight">
//                             {item.titleBefore}{' '}
//                             <span className="relative inline-block whitespace-nowrap z-10">
//                                 {item.titleHighlight}
//                                 <AnimatedMarker type={item.markerType} color={item.markerColor} />
//                             </span>{' '}
//                             {item.titleAfter}
//                         </h3>

//                         <div className="text-lg text-[#303c43] leading-relaxed mb-8">
//                             <p dangerouslySetInnerHTML={{ __html: item.description }} />
//                         </div>

//                         <a
//                             href="#"
//                             className="group inline-flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
//                             style={{ color: '#3f72e5' }}
//                         >
//                             Shop Now
//                             <span className="transform group-hover:translate-x-1 transition-transform flex items-center">
//                                 <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </span>
//                         </a>
//                     </motion.div>
//                 </div>
//             </div>
//         );
//     }
// );
// TextSection.displayName = "TextSection";


// // --- Scroll-Linked Image Card ---

// const ImageCard = ({
//     item,
//     textRef,
//     index
// }: {
//     item: ContentItem,
//     textRef: React.RefObject<HTMLDivElement>,
//     index: number
// }) => {


//     // useScroll hook tracks the progress of the textRef element relative to the viewport
//     const { scrollYProgress } = useScroll({
//         target: textRef,

//         offset: ["start end", "center center"]
//     });

//     const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

//     // If it's the first image, it doesn't move. If it's others, apply the transform.
//     const style = index === 0 ? {} : { y };

//     return (
//         <motion.div
//             className="absolute inset-0 w-full h-full bg-white"
//             style={{
//                 zIndex: index,
//                 ...style
//             }}
//         >
//             <img
//                 src={item.imageUrl}
//                 alt={item.badge}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//             />
//             <div className="absolute inset-0 bg-black/0" />
//         </motion.div>
//     );
// };

// const ImageSection = ({ sectionRefs }: { sectionRefs: React.RefObject<HTMLDivElement>[] }) => {
//     return (
//         <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 lg:p-12 overflow-hidden bg-[#f5f5f5]">
//             <div className="relative w-full h-full max-h-[85vh] rounded-[2px] overflow-hidden bg-white shadow-sm">
//                 {CONTENT.map((item, index) => (
//                     <ImageCard
//                         key={item.id}
//                         item={item}
//                         textRef={sectionRefs[index]}
//                         index={index}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// // --- Main Component ---

// export default function ScrollRevelImage() {
//     const [activeId, setActiveId] = useState(1);

//     // Create an array of refs, one for each content item
//     const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
//     if (sectionRefs.current.length !== CONTENT.length) {
//         sectionRefs.current = Array(CONTENT.length).fill(null).map(() => React.createRef());
//     }

//     return (
//         <div className="bg-[#f5f5f5] min-h-screen selection:bg-blue-100  selection:text-blue-900">


//             {/* Main Layout */}
//             <main className="relative templateContainer">
//                 <div className="flex flex-col lg:flex-row">
//                     {/* Left Column: Text */}
//                     <div className="w-full lg:w-1/2 flex flex-col relative z-10">
//                         <div className="h-[10vh] lg:h-[20vh]" />
//                         {CONTENT.map((item, index) => (
//                             <TextSection
//                                 key={item.id}
//                                 ref={sectionRefs.current[index]}
//                                 item={item}
//                                 setActiveId={setActiveId}
//                             />
//                         ))}
//                         <div className="h-[20vh]" />
//                     </div>

//                     {/* Right Column: Sticky Images */}
//                     <div className="hidden lg:block w-full lg:w-1/2 h-screen sticky top-0 right-0 z-0 pr-6">
//                         <ImageSection sectionRefs={sectionRefs.current} />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }


"use client";
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- Types & Data ---

type ContentItem = {
    id: number;
    badge: string;
    badgeColor: string;
    badgeBg: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
    markerColor: string;
    markerType: 'zigzag' | 'curve' | 'loop';
    imageUrl: string;
};

const CONTENT: ContentItem[] = [
    {
        id: 1,
        badge: "Security Locks",
        badgeColor: "#2c2d2e",
        badgeBg: "#cdf3fb",
        titleBefore: "A key that works",
        titleHighlight: "everywhere",
        titleAfter: "",
        description: "Auto-Unlock detects when you arrive and unlocks the door. Enable Auto-Lock to lock when the door closes. Welcome home to an even smarter home. Upgrade your deadbolt with the all-new August Wi-Fi Smart Lock.",
        markerColor: "#3fb1e5",
        markerType: "zigzag",
        imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-01.webp?v=1728895878&width=1300"
    },
    {
        id: 2,
        badge: "Smart Lighting",
        badgeColor: "#2c2d2e",
        badgeBg: "#fadcce",
        titleBefore: "",
        titleHighlight: "Control",
        titleAfter: "your house lights",
        description: "Smart home lighting refers to the use of connected and programmable lights in a residential setting. It can be customized based on the room or area of the house to create the perfect atmosphere.",
        markerColor: "#fd9962",
        markerType: "curve",
        imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-02.webp?v=1728895924&width=1300"
    },
    {
        id: 3,
        badge: "Video Doorbell",
        badgeColor: "#151515",
        badgeBg: "#e7e3fc",
        titleBefore: "A",
        titleHighlight: "smart home",
        titleAfter: "starts at the front door",
        description: "A smart home video doorbell is a device that allows you to see and speak with anyone who comes to your door, whether you are at home or away. It connects directly to your Wi-Fi network.",
        markerColor: "#8662fd",
        markerType: "loop",
        imageUrl: "https://vision-main.myshopify.com/cdn/shop/files/scroll-03.webp?v=1728895942&width=1300"
    }
];

// --- Sub-Components ---

const AnimatedMarker = ({ type, color }: { type: string, color: string }) => {
    const paths = {
        zigzag: "M3 12L16.6923 4L30.3846 12L44.0769 4L57.7692 12L71.4615 4L85.1538 12L98.8462 4L112.538 12L126.231 4L139.923 12L153.615 4L167.308 12L181 4",
        curve: "M3 10.5732C55.565 6.61382 168.107 -0.117058 197.753 4.63415",
        loop: "M2.99996 17.9626C12.8399 12.7075 30.9393 4.04876 36.8901 3.37945C42.8408 2.71013 41.6481 9.55371 38.7739 14.0685C38.0439 16.3832 40.2101 19.2307 54.715 12.1027L65.0248 7.05411C66.2099 6.45989 68.7141 6.06011 69.2498 9.21479C69.9193 13.1581 74.1326 16.5301 86.875 16.0475C99.6174 15.5649 118.079 9.0809 130.833 7.38711C143.587 5.69332 154.465 4.07802 180.617 7.35907"
    };

    const currentPath = paths[type as keyof typeof paths];
    const viewBox = type === 'curve' ? "0 0 201 14" : type === 'loop' ? "0 0 184 21" : "0 0 184 16";

    const positionStyles: React.CSSProperties = type === 'zigzag'
        ? { bottom: '-12px', left: '0', width: '100%' }
        : type === 'curve'
            ? { bottom: '-14px', left: '0', width: '100%' }
            : { bottom: '-14px', left: '0', width: '100%' };

    return (
        <svg
            className="absolute overflow-visible pointer-events-none"
            style={{ ...positionStyles, zIndex: -1 }}
            viewBox={viewBox}
            fill="none"
            preserveAspectRatio="none"
        >
            <motion.path
                d={currentPath}
                stroke={color}
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            />
        </svg>
    );
};

// Modified TextSection to accept a ref
const TextSection = React.forwardRef<HTMLDivElement, { item: ContentItem, setActiveId: (id: number) => void }>(
    ({ item, setActiveId }, ref) => {
        // We use a local internal ref for the useInView hook to trigger the "Active ID" state 
        // (This is for the text markers/logic, separate from the image scrolling)
        const internalRef = useRef(null);
        const isInView = useInView(internalRef, { margin: "-45% 0px -45% 0px" });

        useEffect(() => {
            if (isInView) {
                setActiveId(item.id);
            }
        }, [isInView, item.id, setActiveId]);

        return (
            // Attach the forwarded ref to the outer container so the ImageSection can track this div's scroll position
            <div ref={ref} className="min-h-screen flex flex-col justify-center py-20 px-6 lg:pl-20 lg:pr-12 max-w-xl mx-auto lg:mx-0">
                <div ref={internalRef}> {/* Internal container for the 'Active' check */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="mb-6">
                            <span
                                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
                                style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
                            >
                                • {item.badge}
                            </span>
                        </div>

                        <h3 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#252f35] leading-[1.1] mb-8 tracking-tight">
                            {item.titleBefore}{' '}
                            <span className="relative inline-block whitespace-nowrap z-10">
                                {item.titleHighlight}
                                <AnimatedMarker type={item.markerType} color={item.markerColor} />
                            </span>{' '}
                            {item.titleAfter}
                        </h3>

                        <div className="text-lg text-[#303c43] leading-relaxed mb-8">
                            <p dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>

                        <a
                            href="#"
                            className="group inline-flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
                            style={{ color: '#3f72e5' }}
                        >
                            Shop Now
                            <span className="transform group-hover:translate-x-1 transition-transform flex items-center">
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        );
    }
);
TextSection.displayName = "TextSection";


// --- Scroll-Linked Image Card ---

// UPDATED: Changed prop type to explicitly allow null
const ImageCard = ({
    item,
    textRef,
    index
}: {
    item: ContentItem,
    textRef: React.RefObject<HTMLDivElement | null>,
    index: number
}) => {


    // useScroll hook tracks the progress of the textRef element relative to the viewport
    const { scrollYProgress } = useScroll({
        target: textRef,

        offset: ["start end", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    // If it's the first image, it doesn't move. If it's others, apply the transform.
    const style = index === 0 ? {} : { y };

    return (
        <motion.div
            className="absolute inset-0 w-full h-full bg-white"
            style={{
                zIndex: index,
                ...style
            }}
        >
            <img
                src={item.imageUrl}
                alt={item.badge}
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0" />
        </motion.div>
    );
};

// UPDATED: Changed prop type to explicitly allow null in the array elements
const ImageSection = ({ sectionRefs }: { sectionRefs: React.RefObject<HTMLDivElement | null>[] }) => {
    return (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 lg:p-12 overflow-hidden bg-[#f5f5f5]">
            <div className="relative w-full h-full max-h-[85vh] rounded-[2px] overflow-hidden bg-white shadow-sm">
                {CONTENT.map((item, index) => (
                    <ImageCard
                        key={item.id}
                        item={item}
                        textRef={sectionRefs[index]}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Main Component ---

export default function ScrollRevelImage() {
    const [activeId, setActiveId] = useState(1);

    // FIX APPLIED HERE: Correctly type the useRef to accept RefObject<HTMLDivElement | null>[]
    // This resolves the Type error: Type 'RefObject<HTMLDivElement | null>[]' is not assignable to type 'RefObject<HTMLDivElement>[]'.
    const sectionRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);
    if (sectionRefs.current.length !== CONTENT.length) {
        sectionRefs.current = Array(CONTENT.length).fill(null).map(() => React.createRef());
    }

    return (
        <div className="bg-[#f5f5f5] min-h-screen selection:bg-blue-100  selection:text-blue-900">


            {/* Main Layout */}
            <main className="relative templateContainer">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column: Text */}
                    <div className="w-full lg:w-1/2 flex flex-col relative z-10">
                        <div className="h-[10vh] lg:h-[20vh]" />
                        {CONTENT.map((item, index) => (
                            <TextSection
                                key={item.id}
                                // We cast here to satisfy TextSection's forwardRef, as it expects a non-null HTMLDivElement 
                                // and we know it will be attached by the time scrolling occurs.
                                ref={sectionRefs.current[index] as React.RefObject<HTMLDivElement>}
                                item={item}
                                setActiveId={setActiveId}
                            />
                        ))}
                        <div className="h-[20vh]" />
                    </div>

                    {/* Right Column: Sticky Images */}
                    <div className="hidden lg:block w-full lg:w-1/2 h-screen sticky top-0 right-0 z-0 pr-6">
                        <ImageSection sectionRefs={sectionRefs.current} />
                    </div>
                </div>
            </main>
        </div>
    );
}