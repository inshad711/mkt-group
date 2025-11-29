// "use client";
// import React from 'react';
// import Image from 'next/image';

// // Reusable component for each feature card
// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   className?: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = '' }) => {
//   return (
//     <div className={`bg-white text-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-start gap-4 z-10 relative ${className}`}>
//       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-800">
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-600 leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };

// // Icons as SVG components
// const ChargingIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     <path fillRule="evenodd" clipRule="evenodd" d="M12.0005 4C8.6863 4 6 6.68631 6 10.0004C6 13.3136 8.68622 16 12.0005 16C15.3147 16 18.0009 13.3136 18.0009 10.0004C18.0009 6.68631 15.3146 4 12.0005 4ZM4 10.0004C4 5.58173 7.58174 2 12.0005 2C16.4192 2 20.0009 5.58174 20.0009 10.0004C20.0009 14.4183 16.4191 18 12.0005 18C7.58182 18 4 14.4183 4 10.0004Z"></path>
//     <path fillRule="evenodd" clipRule="evenodd" d="M11.0047 21.2455L11 17.2455L13 17.2432L13.0047 21.2432L11.0047 21.2455Z"></path>
//     <path fillRule="evenodd" clipRule="evenodd" d="M13.3627 6.81037L11.982 9.34961H15.3795L12.3877 14.8426L10.6314 13.886L12.0128 11.3496H8.61798L11.6057 5.85498L13.3627 6.81037Z"></path>
//   </svg>
// );

// const ShieldIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     <path fillRule="evenodd" clipRule="evenodd" d="M21 3.21924L12 0.969238L3 3.21924V19.4141L3.37576 19.7143C4.31332 20.4635 5.81113 21.2736 7.35442 21.8943C8.88712 22.5107 10.6112 23 12 23C13.3888 23 15.1129 22.5107 16.6456 21.8943C18.1889 21.2736 19.6867 20.4635 20.6242 19.7143L21 19.4141V3.21924ZM5 18.4298V4.78079L12 3.03079L19 4.78079V18.4298C18.2408 18.9548 17.1188 19.5483 15.8993 20.0388C14.448 20.6225 13.0064 21 12 21C10.9936 21 9.55204 20.6225 8.1007 20.0388C6.88118 19.5483 5.7592 18.9548 5 18.4298ZM16.3187 8.26794L10.5528 13.6339L7.68126 10.9615L6.31873 12.4256L10.5528 16.366L17.6813 9.73202L16.3187 8.26794Z"></path>
//   </svg>
// );

// const BluetoothIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     <path fillRule="evenodd" clipRule="evenodd" d="M10.5336 3.00003L12.1582 2.21912L17.7791 6.71523L17.779 8.27712L13.1291 11.9957L17.7791 15.7152L17.7798 17.2765L12.1589 21.7804L10.5336 21V14.0788L7.46991 16.5263L6.22159 14.9637L9.93254 11.9991L6.2207 9.02688L7.4708 7.46571L10.5336 9.91819V3.00003ZM12.5336 14.0805L15.5544 16.4968L12.5336 18.9173V14.0805ZM12.5336 9.91107V5.08047L15.5534 7.49605L12.5336 9.91107Z"></path>
//   </svg>
// );


// const ProductFeatures = () => {
//   return (
//     <section className="bg-[#333333] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Section Header */}
//       <div className="text-center max-w-3xl mx-auto mb-20">
//         <span className="block text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
//           Hear the Difference
//         </span>
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
//           Our new earbuds: Empowering Mobility
//         </h2>
//         <p className="text-lg text-gray-300">
//           Crafted with durable shatter-resistant sapphire glass and Kevlar® fiber
//         </p>
//       </div>

//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto relative">
//         {/* This SVG is for the connecting lines on desktop */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-20" xmlns="http://www.w3.org/2000/svg">
//           {/* Line 1: Top Left to Headband */}
//           <line x1="25%" y1="25%" x2="50%" y2="15%" stroke="#FCD34D" strokeWidth="1.5" />
//           {/* Line 2: Bottom Left to Left Earcup */}
//           <line x1="25%" y1="75%" x2="45%" y2="65%" stroke="#FCD34D" strokeWidth="1.5" />
//           {/* Line 3: Right to Right Earcup */}
//           <line x1="75%" y1="65%" x2="58%" y2="65%" stroke="#FCD34D" strokeWidth="1.5" />

//           {/* Circles at the end of lines on the image */}
//           <circle cx="50%" cy="15%" r="4" fill="#FCD34D" />
//           <circle cx="45%" cy="65%" r="4" fill="#FCD34D" />
//           <circle cx="58%" cy="65%" r="4" fill="#FCD34D" />
//         </svg>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* Left Column - Feature Cards */}
//           <div className="lg:col-span-3 flex flex-col gap-8 lg:gap-32 order-2 lg:order-1">
//             <FeatureCard
//               icon={<ChargingIcon />}
//               title="Fast Wireless Charging"
//               description="Power Delivery charging technology with high-capacity batteries and efficient charging circuitry."
//             />
//             <FeatureCard
//               icon={<ShieldIcon />}
//               title="Durable Sapphire Glass"
//               description="Built with Sapphire glass, engineered to resist shattering, provides unparalleled durability for long-lasting use."
//             />
//           </div>

//           {/* Middle Column - Central Image */}
//           <div className="lg:col-span-6 order-1 lg:order-2 relative z-10">
//             <div className="rounded-3xl overflow-hidden shadow-2xl">
//               {/* Replace with your actual image path */}
//               <Image
//                 src="/images/headphones-stand.jpg"
//                 alt="Headphones on a stand"
//                 width={800}
//                 height={600}
//                 className="w-full h-auto object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Column - Feature Card */}
//           <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center order-3">
//             <FeatureCard
//               icon={<BluetoothIcon />}
//               title="Advanced Antenna Technology"
//               description="Latest antenna technology, high-quality Bluetooth chipsets, and reliable signal amplifiers ensure a seamless and drop-free wireless experience."
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductFeatures;



"use client";

import React from "react";
import Image from "next/image";

// --- 1. ICONS COMPONENTS ---

const ChargingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0005 4C8.6863 4 6 6.68631 6 10.0004C6 13.3136 8.68622 16 12.0005 16C15.3147 16 18.0009 13.3136 18.0009 10.0004C18.0009 6.68631 15.3146 4 12.0005 4ZM4 10.0004C4 5.58173 7.58174 2 12.0005 2C16.4192 2 20.0009 5.58174 20.0009 10.0004C20.0009 14.4183 16.4191 18 12.0005 18C7.58182 18 4 14.4183 4 10.0004Z"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0047 21.2455L11 17.2455L13 17.2432L13.0047 21.2432L11.0047 21.2455Z"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3627 6.81037L11.982 9.34961H15.3795L12.3877 14.8426L10.6314 13.886L12.0128 11.3496H8.61798L11.6057 5.85498L13.3627 6.81037Z"
    ></path>
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 3.21924L12 0.969238L3 3.21924V19.4141L3.37576 19.7143C4.31332 20.4635 5.81113 21.2736 7.35442 21.8943C8.88712 22.5107 10.6112 23 12 23C13.3888 23 15.1129 22.5107 16.6456 21.8943C18.1889 21.2736 19.6867 20.4635 20.6242 19.7143L21 19.4141V3.21924ZM5 18.4298V4.78079L12 3.03079L19 4.78079V18.4298C18.2408 18.9548 17.1188 19.5483 15.8993 20.0388C14.448 20.6225 13.0064 21 12 21C10.9936 21 9.55204 20.6225 8.1007 20.0388C6.88118 19.5483 5.7592 18.9548 5 18.4298ZM16.3187 8.26794L10.5528 13.6339L7.68126 10.9615L6.31873 12.4256L10.5528 16.366L17.6813 9.73202L16.3187 8.26794Z"
    ></path>
  </svg>
);

const BluetoothIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5336 3.00003L12.1582 2.21912L17.7791 6.71523L17.779 8.27712L13.1291 11.9957L17.7791 15.7152L17.7798 17.2765L12.1589 21.7804L10.5336 21V14.0788L7.46991 16.5263L6.22159 14.9637L9.93254 11.9991L6.2207 9.02688L7.4708 7.46571L10.5336 9.91819V3.00003ZM12.5336 14.0805L15.5544 16.4968L12.5336 18.9173V14.0805ZM12.5336 9.91107V5.08047L15.5534 7.49605L12.5336 9.91107Z"
    ></path>
  </svg>
);

// --- 2. CARD COMPONENT ---

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`bg-white text-gray-900 p-6 rounded-2xl shadow-xl flex flex-col items-start text-left z-20 ${className}`}
    >
      <div className="text-gray-900 mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// --- 3. MAIN PAGE COMPONENT ---

export default function EarbudsLandingPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white flex flex-col items-center py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl w-full mx-auto text-center relative">

        {/* Header Section */}
        <span className="block text-amber-400 font-bold tracking-widest mb-4 uppercase text-xs md:text-sm animate-pulse">
          Hear the Difference
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Our new earbuds: Empowering Mobility
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg font-light">
          Crafted with durable shatter-resistant sapphire glass and Kevlar® fiber
        </p>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* --- LEFT COLUMN: Feature Cards --- */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:gap-32 relative z-10 lg:mt-[-40px]">
            <FeatureCard
              icon={<ChargingIcon />}
              title="Fast Wireless Charging"
              description="Power Delivery charging technology with high-capacity batteries and efficient charging circuitry."
            />
            {/* Added margin-left on desktop to push card visually outward like the design */}
            <FeatureCard
              className="lg:ml-8"
              icon={<ShieldIcon />}
              title="Durable Sapphire Glass"
              description="Built with Sapphire glass, engineered to resist shattering, provides unparalleled durability for long-lasting use."
            />
          </div>

          {/* --- CENTER COLUMN: Image & Overlay --- */}
          <div className="lg:col-span-6 relative flex justify-center items-center my-10 lg:my-0">
            {/* Image Container */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
              {/* Using a placeholder image - replace src with your local file path */}
              <Image
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2665&auto=format&fit=crop"
                alt="Headphones Stand"
                fill
                className="object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
              />

              {/* Hotspots (Icons on the image) - Desktop Only */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none">
                {/* Top Hotspot */}
                <div className="absolute top-[18%] left-[48%] -translate-x-1/2 bg-white text-gray-900 p-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-bounce-slow">
                  <ChargingIcon className="w-5 h-5" />
                </div>

                {/* Left Earcup Hotspot */}
                <div className="absolute top-[65%] left-[32%] bg-white text-gray-900 p-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <ShieldIcon className="w-5 h-5" />
                </div>

                {/* Right Earcup Hotspot */}
                <div className="absolute top-[65%] right-[32%] bg-white text-gray-900 p-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <BluetoothIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* --- SVG LINES OVERLAY (Desktop Only) --- */}
            {/* This SVG sits on top of the entire middle column to draw lines to the cards */}
            <svg
              className="hidden lg:block absolute top-0 left-[-50%] w-[200%] h-full pointer-events-none z-0"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Line 1: Top Hotspot to Top Left Card */}
              {/* Coordinates estimated based on layout */}
              <path
                d="M 600 120 L 320 120"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="320" cy="120" r="3" fill="#fbbf24" />

              {/* Line 2: Left Hotspot to Bottom Left Card */}
              <path
                d="M 500 390 L 380 390"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="380" cy="390" r="3" fill="#fbbf24" />

              {/* Line 3: Right Hotspot to Right Card */}
              <path
                d="M 700 390 L 880 390"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="880" cy="390" r="3" fill="#fbbf24" />
            </svg>
          </div>

          {/* --- RIGHT COLUMN: Feature Card --- */}
          <div className="lg:col-span-3 flex flex-col justify-center relative z-10 lg:mt-[150px]">
            <FeatureCard
              icon={<BluetoothIcon />}
              title="Advanced Antenna Technology"
              description="Latest antenna technology, high-quality Bluetooth chipsets, and reliable signal amplifiers ensure a seamless and drop-free wireless experience."
            />
          </div>

        </div>
      </div>

      {/* Custom Styles for Animation */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%) translateX(-50%); }
          50% { transform: translateY(5%) translateX(-50%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}