
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