import React from 'react'
import AboutSection from '../components/AboutSection'
import AnimatedCard from '../components/AnimatedCard'
import TeamTestimonial from '../components/TeamTestimonial'
import ScrollRevelImage from '../components/ScrollRevelImage'
import CorparateCard from '../components/CorparateCard'

const AboutPage = () => {
    return (
        <div>
            <AboutSection />
            <div>
                <AnimatedCard />
            </div>
            {/* <ScrollRevelImage /> */}
            <div>
                <TeamTestimonial />
            </div>
            <div>
                <CorparateCard />
            </div>
        </div>
    )
}

export default AboutPage