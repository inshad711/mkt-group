// // D:\mktgroup\app\components\NewBreadCrumb.tsx

// import { ChevronRight, Home } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// interface BreadCrumbProps {
//     title: string;
//     page: string;
//     img: string;
//     version2: boolean;
// }

// const NewBreadCrumb: React.FC<BreadCrumbProps> = ({
//     title,
//     page,
//     img,
//     version2 = false,
// }) => {
//     const decodeHtml = (html: string) => {
//         if (typeof window !== "undefined") {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, "text/html");
//             return doc.documentElement.textContent;
//         }
//         return html; // fallback during SSR
//     };

//     return (
//         <>
//             {version2 ? (
//                 <div className="relative bg-bottom h-auto py-8 object-cover">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
//                     <div className="flex flex-col items-start justify-center relative px-5 md:px-10 lg:px-16 z-10">
//                         <div className="flex items-center justify-between w-full">
//                             <div>
//                                 <h2 className="text-2xl lg:text-5xl capitalize text-white">
//                                     {decodeHtml(title)}
//                                 </h2>
//                                 <div>
//                                     <ul className="flex items-center text-sm justify-start gap-1 pt-2">
//                                         <Link href="/">
//                                             <Home size={17} className="-mt-1" color="white" />
//                                         </Link>
//                                         <li>
//                                             <Link href={"/"}>
//                                                 <span className="text-white font-medium">Home</span>
//                                             </Link>
//                                         </li>
//                                         <ChevronRight size={19} color="white" />
//                                         <li className="text-white capitalize">
//                                             {decodeHtml(page)}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div>
//                                 <img
//                                     src="/betlogo.png"
//                                     className="min-w-24 max-w-24 md:min-w-48 md:max-w-48"
//                                     alt=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div
//                     className="relative bg-bottom h-auto py-14 md:py-24 object-cover"
//                     style={{
//                         backgroundImage: `url(${img ? img : "/aboutbanner.jpg"})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "cover",
//                         backgroundPosition: "center right",
//                     }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary to-black/10"></div>
//                     <div className="flex flex-col templateContainer items-start justify-center relative px-5 md:px-10 lg:px-16 z-10">
//                         <h2 className="text-3xl lg:text-5xl capitalize text-white">
//                             {title}
//                         </h2>
//                         <div>
//                             <ul className="flex items-center text-sm justify-start gap-1 pt-2">
//                                 <Link href="/">
//                                     <Home size={17} className="-mt-1" color="white" />
//                                 </Link>
//                                 <li>
//                                     <Link href={"/"}>
//                                         <span className="text-white font-medium">Home</span>
//                                     </Link>
//                                 </li>
//                                 <ChevronRight size={19} color="white" />
//                                 <li className="text-white">{page}</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default NewBreadCrumb;

////////////////////////////////////////////////////////

// // D:\mktgroup\app\components\NewBreadCrumb.tsx

// import { ChevronRight, Home } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// interface BreadCrumbProps {
//     title?: string;
//     page: string;
//     img: string;
//     version2: boolean;
// }

// const NewBreadCrumb: React.FC<BreadCrumbProps> = ({
//     title,
//     page,
//     img,
//     version2 = false,
// }) => {
//     const decodeHtml = (html: string) => {
//         if (typeof window !== "undefined") {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, "text/html");
//             return doc.documentElement.textContent;
//         }
//         return html; // fallback during SSR
//     };

//     const cleanTitle = title || '';
//     return (
//         <>
//             {version2 ? (
//                 <div className="relative bg-bottom h-auto py-8 object-cover">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
//                     <div className="flex flex-col items-start justify-center relative px-5 md:px-10 lg:px-16 z-10">
//                         <div className="flex items-center justify-between w-full">
//                             <div>
//                                 <h2 className="text-2xl lg:text-5xl capitalize text-white">
//                                     {decodeHtml(cleanTitle)}
//                                 </h2>
//                                 <div>
//                                     <ul className="flex items-center text-sm justify-start gap-1 pt-2">
//                                         <Link href="/">
//                                             <Home size={17} className="-mt-1" color="white" />
//                                         </Link>
//                                         <li>
//                                             <Link href={"/"}>
//                                                 <span className="text-white font-medium">Home</span>
//                                             </Link>
//                                         </li>
//                                         <ChevronRight size={19} color="white" />
//                                         <li className="text-white capitalize">
//                                             {decodeHtml(page)}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div>
//                                 <img
//                                     src="/betlogo.png"
//                                     className="min-w-24 max-w-24 md:min-w-48 md:max-w-48"
//                                     alt=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div
//                     className="relative bg-bottom h-auto py-16 md:py-20 lg:py-32 object-cover"
//                     style={{
//                         backgroundImage: `url(${img ? img : "/aboutbanner.jpg"})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "cover",
//                         backgroundPosition: "center right",
//                     }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#0B2447] to-black/10"></div>
//                     <div className="flex flex-col templateContainer items-start relative px-5 md:px-10 lg:px-16 z-10">
//                         <h2 className="text-3xl lg:text-5xl capitalize text-white">
//                             {cleanTitle}
//                         </h2>
//                         <div>
//                             <ul className="flex text-sm justify-start gap-1 pt-2">
//                                 <Link href="/">
//                                     <Home size={17} className="mt-[0.10rem]" color="white" />
//                                 </Link>
//                                 <li>
//                                     <Link href={"/"}>
//                                         <span className="text-white font-medium">Home</span>
//                                     </Link>
//                                 </li>
//                                 <ChevronRight size={19} color="white" />
//                                 <li className="text-white">{page}</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default NewBreadCrumb;





// D:\mktgroup\app\components\NewBreadCrumb.tsx

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadCrumbProps {
    title?: string;
    page: string;
    img: string;
    version2: boolean;
}

const NewBreadCrumb: React.FC<BreadCrumbProps> = ({
    title,
    page,
    img,
    version2 = false,
}) => {
    const decodeHtml = (html: string) => {
        if (typeof window !== "undefined") {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            return doc.documentElement.textContent;
        }
        return html; // fallback during SSR
    };

    const cleanTitle = title || '';
    return (
        <>
            {version2 ? (
                <div className="relative bg-bottom h-auto py-8 object-cover">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="flex flex-col items-start justify-center relative px-5 md:px-10 lg:px-16 z-10">
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <h2 className="text-2xl lg:text-5xl capitalize text-white">
                                    {decodeHtml(cleanTitle)}
                                </h2>
                                <div>
                                    <ul className="flex items-center text-sm justify-start gap-1 pt-2">
                                        <Link href="/">
                                            <Home size={17} className="-mt-1" color="white" />
                                        </Link>
                                        <li>
                                            <Link href={"/"}>
                                                <span className="text-white font-medium">Home</span>
                                            </Link>
                                        </li>
                                        <ChevronRight size={19} color="white" />
                                        <li className="text-white capitalize">
                                            {decodeHtml(page)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/betlogo.png"
                                    className="min-w-24 max-w-24 md:min-w-48 md:max-w-48"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="relative bg-bottom h-[200px] md:h-[280px] lg:h-[330px] object-cover"
                    style={{
                        backgroundImage: `url(${img ? img : "/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.png"})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2447] to-black/10"></div>
                    {/* MODIFIED: Changed alignment to 'justify-end' and added 'pb-10' for bottom spacing */}
                    <div className="flex flex-col templateContainer items-start justify-end h-full relative px-5 md:px-10 lg:px-16 z-10 pb-10">
                        <h2 className="text-3xl lg:text-5xl capitalize text-white">
                            {cleanTitle}
                        </h2>
                        <div>
                            <ul className="flex text-sm justify-start gap-1 pt-2">
                                <Link href="/">
                                    <Home size={17} className="mt-[0.10rem]" color="white" />
                                </Link>
                                <li>
                                    <Link href={"/"}>
                                        <span className="text-white font-medium">Home</span>
                                    </Link>
                                </li>
                                <ChevronRight size={19} color="white" />
                                <li className="text-white">{page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewBreadCrumb;

