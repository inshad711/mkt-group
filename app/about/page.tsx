import React from 'react'
import AboutSection from '../components/AboutSection'
import AnimatedCard from '../components/AnimatedCard'
import TeamTestimonial from '../components/TeamTestimonial'
import ScrollRevelImage from '../components/ScrollRevelImage'
import CorparateCard from '../components/CorparateCard'
import ParallexSection from '../components/ParallexSection'
import NewBreadCrumb from '../components/NewBreadCrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Mkt",
    description:
        "mkt",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/about`,
    },
};


const pageTitle = "About Us";

const AboutPage = () => {
    return (
        <div>
            <NewBreadCrumb
                title={pageTitle}
                page={pageTitle}
                img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.webp"
                version2={false}
            />
            <AboutSection />
            <div>
                <AnimatedCard />
            </div>

            <ParallexSection />
            {/* <ScrollRevelImage /> */}
            {/* <div>
                <TeamTestimonial />
            </div> */}
            <div>
                <CorparateCard />
            </div>
        </div>
    )
}

export default AboutPage