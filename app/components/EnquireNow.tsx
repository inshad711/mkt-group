
// /// enquire 
// "use client";
// import React, { useState } from 'react';
// import { MapPin, Phone, Mail, MessageCircle, X, CheckCircle } from 'lucide-react';

// // --- Sub-Components ---

// const SectionTitle = ({ title, subtitle }) => (
//     <div className="">

//     </div>
// );

// const Button = ({ children, className = "", onClick, type = "button" }) => (
//     <button
//         type={type}
//         onClick={onClick}
//         className={`bg-[#0B2447] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-[#0B2447] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 ${className}`}
//     >
//         {children}
//     </button>
// );

// const SuccessModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
//             <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-in zoom-in-95 duration-200 transform">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
//                 >
//                     <X size={20} />
//                 </button>

//                 <div className="text-center">
//                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                         <CheckCircle className="w-10 h-10 text-green-600" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-[#0B2447] mb-2">Quote Request Received!</h3>
//                     <p className="text-gray-600 mb-8">
//                         Thank you for contacting us. One of our sales representatives will review your requirements and get back to you within 24 hours.
//                     </p>

//                     <Button onClick={onClose} className="w-full">
//                         Close & Continue
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- Main Component ---

// const EnquireNow = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate API call
//         setTimeout(() => {
//             setIsSubmitting(false);
//             setShowModal(true);
//             // Reset form if needed here
//         }, 1000);
//     };

//     return (
//         <section id="contact" className="py-20 bg-white relative">
//             <div className="container mx-auto px-4 md:px-8">
//                 <SectionTitle

//                 />

//                 <div className="grid md:grid-cols-3 gap-8">
//                     {/* Contact Info */}


//                     {/* Contact Form */}
//                     <div className="md:col-span-2">
//                         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
//                             <div>
//                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                                         <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="John Doe" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                                         <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Your Company Ltd." />
//                                     </div>
//                                 </div>

//                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                                         <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="john@example.com" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
//                                         <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="+971 50..." />
//                                     </div>
//                                 </div>

//                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                                         <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="e.g. Tanzania" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Interested Products</label>
//                                         <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors bg-white">
//                                             <option>Mixed Container</option>
//                                             <option>Cleaning Products</option>
//                                             <option>Canned Foods</option>
//                                             <option>Beverages</option>
//                                             <option>Other</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                                     <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Tell us about your requirements..."></textarea>
//                                 </div>
//                             </div>

//                             <Button type="submit" className="w-full md:w-auto flex items-center justify-center gap-2">
//                                 {isSubmitting ? 'Sending...' : 'Send Enquiry'}
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Success Popup */}
//             <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
//         </section>
//     );
// };

// export default EnquireNow;


// // D:\mktgroup\app\components\EnquireNow.tsx

// "use client";

// // --- Main Component ---

// const EnquireNow = () => {


//     return (
//         <section id="contact" className="py-20 bg-white relative">
//             <div className="container mx-auto px-4 md:px-8">
//                 {/* SectionTitle component removed */}

//                 <div className="grid md:grid-cols-1 gap-8 justify-center">
//                     {/* Contact Info column removed */}

//                     {/* Contact Form */}
//                     <div className="md:col-span-1 max-w-3xl mx-auto w-full">
//                         <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
//                             <div>
//                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                                         <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="John Doe" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                                         <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Your Company Ltd." />
//                                     </div>
//                                 </div>

//                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                                         <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="john@example.com" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
//                                         <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="+971 50..." />
//                                     </div>
//                                 </div>

//                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                                         <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="e.g. Tanzania" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Interested Products</label>
//                                         <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors bg-white">
//                                             <option>Mixed Container</option>
//                                             <option>Cleaning Products</option>
//                                             <option>Canned Foods</option>
//                                             <option>Beverages</option>
//                                             <option>Other</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                                     <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Tell us about your requirements..."></textarea>
//                                 </div>
//                             </div>

//                             <button
//                                 type="submit" // Use "submit" to make the button submit the form
//                                 className="w-full cursor-pointer md:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md"
//                             >
//                                 Send Enquiry
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>



//         </section >
//     );
// };

// export default EnquireNow;


// // D:\mktgroup\app\components\EnquireNow.tsx
// "use client";

// interface EnquireNowProps {
//     isModal?: boolean;
// }

// // --- Main Component ---
// const EnquireNow = ({ isModal = false }: EnquireNowProps) => {
//     return (
//         <div className={isModal ? "w-full" : "py-20 bg-white relative"}>
//             {!isModal && (
//                 <div className="container mx-auto px-4 md:px-8">
//                     {/* SectionTitle component removed */}
//                     <div className="grid md:grid-cols-1 gap-8 justify-center">
//                         {/* Contact Info column removed */}
//                         {/* Contact Form */}
//                         <div className="md:col-span-1 max-w-3xl mx-auto w-full">
//                             <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
//                                 <div>
//                                     <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                                             <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="John Doe" />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                                             <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Your Company Ltd." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                                             <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="john@example.com" />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
//                                             <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="+971 50..." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                                             <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="e.g. Tanzania" />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Interested Products</label>
//                                             <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors bg-white">
//                                                 <option>Mixed Container</option>
//                                                 <option>Cleaning Products</option>
//                                                 <option>Canned Foods</option>
//                                                 <option>Beverages</option>
//                                                 <option>Other</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="mb-6">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                                         <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Tell us about your requirements..."></textarea>
//                                     </div>
//                                 </div>
//                                 <button
//                                     type="submit" // Use "submit" to make the button submit the form
//                                     className="w-full cursor-pointer md:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md"
//                                 >
//                                     Send Enquiry
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {isModal && (
//                 <div className="p-4 md:p-8">
//                     <div className="max-w-3xl mx-auto w-full">
//                         <form className="bg-white p-6 md:p-8 rounded-xl  border border-gray-100 h-full flex flex-col justify-between">
//                             <div>
//                                 <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                                         <input required type="text" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="John Doe" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                                         <input type="text" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Your Company Ltd." />
//                                     </div>
//                                 </div>
//                                 <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                                         <input required type="email" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="john@example.com" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
//                                         <input type="tel" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="+971 50..." />
//                                     </div>
//                                 </div>
//                                 <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                                         <input type="text" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="e.g. Tanzania" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Interested Products</label>
//                                         <select className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors bg-white">
//                                             <option>Mixed Container</option>
//                                             <option>Cleaning Products</option>
//                                             <option>Canned Foods</option>
//                                             <option>Beverages</option>
//                                             <option>Other</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4 md:mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                                     <textarea rows={3} className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" placeholder="Tell us about your requirements..."></textarea>
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit" // Use "submit" to make the button submit the form
//                                 className="w-full cursor-pointer md:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md"
//                             >
//                                 Send Enquiry
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default EnquireNow;


// // D:\mktgroup\app\components\EnquireNow.tsx
// "use client";

// interface EnquireNowProps {
//     isModal?: boolean;
// }

// // --- Main Component ---
// const EnquireNow = ({ isModal = false }: EnquireNowProps) => {
//     // कॉम्पैक्ट इनपुट/सेलेक्ट क्लास
//     const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors";
//     const labelClass = "block text-sm font-medium text-gray-700 mb-1"; // mb-2 को mb-1 किया

//     return (
//         <div className={isModal ? "w-full" : "py-10 bg-white relative"}> {/* py-20 को py-10 किया */}
//             {!isModal && (

//                 <div className="grid md:grid-cols-1 gap-4 justify-center"> {/* gap-8 को gap-4 किया */}
//                     {/* Contact Form */}
//                     <div className="md:col-span-1 max-w-xl mx-auto w-full">
//                         <form className="bg-white p-6 rounded-xl border border-gray-100 h-full flex flex-col justify-between"> {/* p-8 को p-6 किया */}
//                             <div>
//                                 <div className="grid md:grid-cols-2 gap-4 mb-4"> {/* gap-6 को gap-4 किया, mb-6 को mb-4 किया */}
//                                     <div>
//                                         <label className={labelClass}>Full Name</label>
//                                         <input required type="text" className={inputClass} placeholder="John Doe" />
//                                     </div>
//                                     <div>
//                                         <label className={labelClass}>Company Name</label>
//                                         <input type="text" className={inputClass} placeholder="Your Company Ltd." />
//                                     </div>
//                                 </div>
//                                 <div className="grid md:grid-cols-2 gap-4 mb-4"> {/* gap-6 को gap-4 किया, mb-6 को mb-4 किया */}
//                                     <div>
//                                         <label className={labelClass}>Email Address</label>
//                                         <input required type="email" className={inputClass} placeholder="john@example.com" />
//                                     </div>
//                                     <div>
//                                         <label className={labelClass}>WhatsApp Number</label>
//                                         <input type="tel" className={inputClass} placeholder="+971 50..." />
//                                     </div>
//                                 </div>
//                                 <div className="grid md:grid-cols-2 gap-4 mb-4"> {/* gap-6 को gap-4 किया, mb-6 को mb-4 किया */}
//                                     <div>
//                                         <label className={labelClass}>Country</label>
//                                         <input type="text" className={inputClass} placeholder="e.g. Tanzania" />
//                                     </div>
//                                     <div>
//                                         <label className={labelClass}>Interested Products</label>
//                                         <select className={`${inputClass} bg-white`}>
//                                             <option>Mixed Container</option>
//                                             <option>Cleaning Products</option>
//                                             <option>Canned Foods</option>
//                                             <option>Beverages</option>
//                                             <option>Other</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4"> {/* mb-6 को mb-4 किया */}
//                                     <label className={labelClass}>Message</label>
//                                     <textarea rows={3} className={inputClass} placeholder="Tell us about your requirements..."></textarea> {/* rows={4} को rows={3} किया */}
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md" // py-3 px-6 को py-2.5 px-5 किया
//                             >
//                                 Send Enquiry
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//             )
//             }
//             {
//                 isModal && (
//                     <div className="p-4"> {/* p-4 md:p-8 को p-4 किया */}
//                         <div className="max-w-2xl mx-auto w-full">
//                             <form className="bg-white p-4 rounded-xl border border-gray-100 h-full flex flex-col justify-between"> {/* p-6 md:p-8 को p-4 किया */}
//                                 <div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Full Name</label>
//                                             <input required type="text" className={inputClass} placeholder="John Doe" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Company Name</label>
//                                             <input type="text" className={inputClass} placeholder="Your Company Ltd." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Email Address</label>
//                                             <input required type="email" className={inputClass} placeholder="john@example.com" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>WhatsApp Number</label>
//                                             <input type="tel" className={inputClass} placeholder="+971 50..." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Country</label>
//                                             <input type="text" className={inputClass} placeholder="e.g. Tanzania" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Interested Products</label>
//                                             <input type="text" placeholder="title" />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3"> {/* mb-4 md:mb-6 को mb-3 किया */}
//                                         <label className={labelClass}>Message</label>
//                                         <textarea rows={2} className={inputClass} placeholder="Tell us about your requirements..."></textarea> {/* rows={3} को rows={2} किया */}
//                                     </div>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md" // py-3 px-6 को py-2.5 px-5 किया
//                                 >
//                                     Send Enquiry
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )
//             }
//         </div >
//     );
// };

// export default EnquireNow;

// // D:\mktgroup\app\components\EnquireNow.tsx
// "use client";

// interface EnquireNowProps {
//     isModal?: boolean;
//     title?: string; // ADDED: Optional title prop
// }

// // --- Main Component ---
// const EnquireNow = ({ isModal = false, title }: EnquireNowProps) => { // DESTRUCTURED title
//     // कॉम्पैक्ट इनपुट/सेलेक्ट क्लास
//     const inputClass = "w-full px-3 py-2 rounded-lg font-normal border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors";
//     const labelClass = "block text-sm font-normal text-gray-700 mb-1"; // mb-2 को mb-1 किया

//     return (
//         <div className={isModal ? "w-full" : "py-10 bg-white relative"}> {/* py-20 को py-10 किया */}

//             {
//                 isModal && (
//                     <div className="p-4"> {/* p-4 md:p-8 को p-4 किया */}
//                         <div className="max-w-2xl mx-auto w-full">
//                             <form className="bg-white p-4 rounded-xl h-full flex flex-col justify-between"> {/* p-6 md:p-8 को p-4 किया, Removed border-gray-100 to avoid double border with Modal */}
//                                 <div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Full Name</label>
//                                             <input required type="text" className={inputClass} placeholder="John Doe" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Company Name</label>
//                                             <input type="text" className={inputClass} placeholder="Your Company Ltd." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Email Address</label>
//                                             <input required type="email" className={inputClass} placeholder="john@example.com" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>WhatsApp Number</label>
//                                             <input type="tel" className={inputClass} placeholder="+971 50..." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Country</label>
//                                             <input type="text" className={inputClass} placeholder="e.g. Tanzania" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Interested Products</label>
//                                             {/* MODIFIED: Input pre-filled with title */}
//                                             <input type="text" className={inputClass} readOnly value={title || 'N/A'} />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3"> {/* mb-4 md:mb-6 को mb-3 किया */}
//                                         <label className={labelClass}>Message</label>
//                                         <textarea rows={2} className={inputClass} placeholder="Tell us about your requirements..."></textarea> {/* rows={3} को rows={2} किया */}
//                                     </div>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md" // py-3 px-6 को py-2.5 px-5 किया
//                                 >
//                                     Send Enquiry
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )
//             }
//         </div >
//     );
// };

// export default EnquireNow;


// // D:\mktgroup\app\components\EnquireNow.tsx (Updated with form submission handling)
// "use client";

// interface EnquireNowProps {
//     isModal?: boolean;
//     title?: string; // ADDED: Optional title prop
// }

// // --- Main Component ---
// const EnquireNow = ({ isModal = false, title }: EnquireNowProps) => {
//     // कॉम्पैक्ट इनपुट/सेलेक्ट क्लास
//     const inputClass = "w-full px-3 py-2 rounded-lg font-normal border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors";
//     const labelClass = "block text-sm font-normal text-gray-700 mb-1"; // mb-2 को mb-1 किया

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         formData.append('interestedProducts', title || 'N/A');

//         try {
//             const response = await fetch('/api/enquiry', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             if (result.success) {
//                 alert('Enquiry sent successfully!'); // Or use a toast notification
//                 e.currentTarget.reset(); // Reset form
//             } else {
//                 alert(`Error: ${result.error}`);
//             }
//         } catch (error) {
//             alert('Failed to send enquiry. Please try again.');
//         }
//     };

//     return (
//         <div className={isModal ? "w-full" : "py-10 bg-white relative"}> {/* py-20 को py-10 किया */}

//             {
//                 isModal && (
//                     <div className="p-4"> {/* p-4 md:p-8 को p-4 किया */}
//                         <div className="max-w-2xl mx-auto w-full">
//                             <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl h-full flex flex-col justify-between"> {/* Added onSubmit, p-6 md:p-8 को p-4 किया, Removed border-gray-100 to avoid double border with Modal */}
//                                 <div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Full Name</label>
//                                             <input required name="fullName" type="text" className={inputClass} placeholder="John Doe" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Company Name</label>
//                                             <input name="companyName" type="text" className={inputClass} placeholder="Your Company Ltd." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Email Address</label>
//                                             <input required name="email" type="email" className={inputClass} placeholder="john@example.com" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>WhatsApp Number</label>
//                                             <input name="whatsapp" type="tel" className={inputClass} placeholder="+971 50..." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3"> {/* gap-4 md:gap-6 को gap-3 किया, mb-4 md:mb-6 को mb-3 किया */}
//                                         <div>
//                                             <label className={labelClass}>Country</label>
//                                             <input name="country" type="text" className={inputClass} placeholder="e.g. Tanzania" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Interested Products</label>
//                                             {/* MODIFIED: Input pre-filled with title */}
//                                             <input name="interestedProducts" type="text" className={inputClass} readOnly value={title || 'N/A'} />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3"> {/* mb-4 md:mb-6 को mb-3 किया */}
//                                         <label className={labelClass}>Message</label>
//                                         <textarea name="message" rows={2} className={inputClass} placeholder="Tell us about your requirements..."></textarea> {/* rows={3} को rows={2} किया */}
//                                     </div>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md" // py-3 px-6 को py-2.5 px-5 किया
//                                 >
//                                     Send Enquiry
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )
//             }
//         </div >
//     );
// };

// export default EnquireNow;

// // D:\mktgroup\app\components\EnquireNow.tsx
// "use client";

// import React from 'react'; // Import React for useState

// interface EnquireNowProps {
//     isModal?: boolean;
//     title?: string; // ADDED: Optional title prop
// }

// // --- Main Component ---
// const EnquireNow = ({ isModal = false, title }: EnquireNowProps) => {
//     // 1. ADDED: Loading state to prevent double submissions
//     const [isLoading, setIsLoading] = React.useState(false);

//     // कॉम्पैक्ट इनपुट/सेलेक्ट क्लास
//     const inputClass = "w-full px-3 py-2 rounded-lg font-normal border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors";
//     const labelClass = "block text-sm font-normal text-gray-700 mb-1";

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         // Prevent submission if already loading
//         if (isLoading) return;

//         setIsLoading(true); // Set loading state

//         const formData = new FormData(e.currentTarget);
//         formData.append('interestedProducts', title || 'N/A');

//         try {
//             const response = await fetch('/api/enquiry', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             if (result.success) {
//                 alert('Enquiry sent successfully!'); // Or use a toast notification
//                 e.currentTarget.reset(); // Reset form
//             } else {
//                 alert(`Error: ${result.error}`);
//             }
//         } catch (error) {
//             alert('Failed to send enquiry. Please try again.');
//         } finally {
//             setIsLoading(false); // Reset loading state regardless of outcome
//         }
//     };

//     return (
//         <div className={isModal ? "w-full" : "py-10 bg-white relative"}>
//             {
//                 isModal && (
//                     <div className="p-4">
//                         <div className="max-w-2xl mx-auto w-full">
//                             <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl h-full flex flex-col justify-between">
//                                 <div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3">
//                                         <div>
//                                             <label className={labelClass}>Full Name</label>
//                                             <input required name="fullName" type="text" className={inputClass} placeholder="John Doe" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Company Name</label>
//                                             <input name="companyName" type="text" className={inputClass} placeholder="Your Company Ltd." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3">
//                                         <div>
//                                             <label className={labelClass}>Email Address</label>
//                                             <input required name="email" type="email" className={inputClass} placeholder="john@example.com" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>WhatsApp Number</label>
//                                             <input name="whatsapp" type="tel" className={inputClass} placeholder="+971 50..." />
//                                         </div>
//                                     </div>
//                                     <div className="grid md:grid-cols-2 gap-3 mb-3">
//                                         <div>
//                                             <label className={labelClass}>Country</label>
//                                             <input name="country" type="text" className={inputClass} placeholder="e.g. Tanzania" />
//                                         </div>
//                                         <div>
//                                             <label className={labelClass}>Interested Products</label>
//                                             <input name="interestedProducts" type="text" className={inputClass} readOnly value={title || 'N/A'} />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className={labelClass}>Message</label>
//                                         <textarea name="message" rows={2} className={inputClass} placeholder="Tell us about your requirements..."></textarea>
//                                     </div>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     // 2. MODIFIED: Disable button while loading to prevent double click
//                                     disabled={isLoading}
//                                     // 3. ADDED: Tailwind classes for disabled state (optional but recommended)
//                                     className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
//                                 >
//                                     {/* 4. MODIFIED: Button text reflects loading state */}
//                                     {isLoading ? (
//                                         <>
//                                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Sending...
//                                         </>
//                                     ) : (
//                                         'Send Enquiry'
//                                     )}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )
//             }
//         </div >
//     );
// };

// export default EnquireNow;


// D:\mktgroup\app\components\EnquireNow.tsx
"use client";

import React from 'react';

interface EnquireNowProps {
    isModal?: boolean;
    title?: string;
}

const EnquireNow = ({ isModal = false, title }: EnquireNowProps) => {
    const [isLoading, setIsLoading] = React.useState(false);

    // ✨ MODIFIED: Add useEffect hook to handle body scroll lock/unlock
    React.useEffect(() => {
        if (isModal) {
            // Apply overflow: hidden to the body when the modal is open
            document.body.style.overflow = 'hidden';
            // Return a cleanup function to remove the style when the component unmounts
            // or when isModal changes to false
            return () => {
                document.body.style.overflow = ''; // Reset to default
            };
        }
        // Ensure body style is reset if isModal is false initially or changes to false
        document.body.style.overflow = '';
    }, [isModal]); // Dependency array: run effect whenever isModal changes

    const inputClass = "w-full px-3 py-2 rounded-lg font-normal border border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors";
    const labelClass = "block text-sm font-normal text-gray-700 mb-1";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        // --- MODIFIED: Convert FormData to a JSON object ---
        const data = {
            fullName: formData.get("fullName") as string,
            companyName: formData.get("companyName") as string,
            email: formData.get("email") as string,
            whatsapp: formData.get("whatsapp") as string,
            country: formData.get("country") as string,
            // Prioritize the 'title' prop for product name
            interestedProducts: title || formData.get("interestedProducts") as string,
            message: formData.get("message") as string,
        };
        // ---------------------------------------------------

        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                // Tell the server we are sending JSON
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Send the JSON string
            });

            const result = await response.json();
            if (response.ok && result.success) {
                alert('Enquiry sent successfully!');
                form.reset();
            } else {
                alert(`Error: ${result.error || 'Failed to send enquiry.'}`);
            }
        } catch (error) {
            console.error(error);
            alert('Failed to connect to the server. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={isModal ? "w-full" : "py-10 bg-white relative"}>
            {
                isModal && (
                    <div className="p-4">
                        <div className="max-w-2xl mx-auto w-full">
                            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl h-full flex flex-col justify-between">
                                <div>
                                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className={labelClass}>Full Name</label>
                                            <input required name="fullName" type="text" className={inputClass} placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Company Name</label>
                                            <input name="companyName" type="text" className={inputClass} placeholder="Your Company Ltd." />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className={labelClass}>Email Address</label>
                                            <input required name="email" type="email" className={inputClass} placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label className={labelClass}>WhatsApp Number</label>
                                            <input name="whatsapp" type="tel" className={inputClass} placeholder="+971 50..." />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className={labelClass}>Country</label>
                                            <input name="country" type="text" className={inputClass} placeholder="e.g. Tanzania" />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Interested Products</label>
                                            <input name="interestedProducts" type="text" className={inputClass} readOnly value={title || 'N/A'} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className={labelClass}>Message</label>
                                        <textarea name="message" rows={2} className={inputClass} placeholder="Tell us about your requirements..."></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#D4AF37] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#C29F2B] transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Enquiry'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default EnquireNow;