///////// all /////////////////////////////

// D:\mktgroup\app\contact\page.tsx

import { Metadata } from 'next';
import ContactSection from '../components/ContactSection'
import NewBreadCrumb from '../components/NewBreadCrumb'

const pageTitle = "Our Contact";

export const metadata: Metadata = {
    title: "Mkt",
    description:
        "mkt",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/contact`,
    },
};


const ContactPage = () => {
    return (
        <div>
            <NewBreadCrumb
                title={pageTitle}
                page={pageTitle}
                img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.webp"
                version2={false}
            />

            <ContactSection />

        </div>
    )
}

export default ContactPage