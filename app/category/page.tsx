
// import FullCard from '../components/FullCard'
// import CardSection from '../components/CardSection'
// import SingleProduct from '../components/SingleProduct'


// const OurCategory = () => {
//     return (
//         <div>
//             <CardSection />
//             <FullCard />
//             <SingleProduct />
//         </div>
//     )
// }

// export default OurCategory



// // D:\mktgroup\app\category\page.tsx


// import CardSection from '../components/CardSection'



// const OurCategory = () => {
//     return (
//         <div>

//             <CardSection />



//         </div>
//     )
// }

// export default OurCategory


//////////////////////////////////////////////////////////////

// // D:\mktgroup\app\category\page.tsx


// import CardSection from '../components/CardSection'
// import NewBreadCrumb from '../components/NewBreadCrumb'





// const OurCategory = () => {

//     const pageTitle = "Our Categories";

//     return (
//         <div>

//             <NewBreadCrumb
//                 title={pageTitle}
//                 page={pageTitle}
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <CardSection />

//         </div>
//     )
// }

// export default OurCategory


// // D:\mktgroup\app\category\page.tsx


// import CardSection from '../components/CardSection'
// import NewBreadCrumb from '../components/NewBreadCrumb'
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Our Categories',
//     description: 'Explore categories of our solutions for modern effects and colors.',
//     keywords: 'categories, solutions, products',
//     alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/category`,
//     },
// };





// const OurCategory = () => {

//     const pageTitle = "Our Categories";

//     return (
//         <div>

//             <NewBreadCrumb
//                 title={pageTitle}
//                 page={pageTitle}
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <CardSection />

//         </div>
//     )
// }

// export default OurCategory

// D:\mktgroup\app\category\page.tsx

import CardSection from '../components/CardSection'
import NewBreadCrumb from '../components/NewBreadCrumb'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Categories',
    description: 'Explore categories of our solutions for modern effects and colors.',
    keywords: 'categories, solutions, products',
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL || 'http://localhost:3000'), // FIXED: Add this
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/category`,
    },
};

const OurCategory = () => {

    const pageTitle = "Our Categories";

    return (
        <div>

            <NewBreadCrumb
                title={pageTitle}
                page={pageTitle}
                img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.png"
                version2={false}
            />
            <CardSection />

        </div>
    )
}

export default OurCategory