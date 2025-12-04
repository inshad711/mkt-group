import React from 'react'
import MulticolumnFeatures from '../components/MulticolumnFeatures'
import Products from '../components/Products'
import ScrollRevelImage from '../components/ScrollRevelImage'
import ProductCard from '../components/ProductCard'
import WhyTop from '../components/WhyTop'
import TeamTestimonial from '../components/TeamTestimonial'

const TestePage = () => {
    return (
        <div>
            <TeamTestimonial />
            <MulticolumnFeatures />
            <Products />
            <ScrollRevelImage />
            <ProductCard />
            <WhyTop />
        </div>
    )
}

export default TestePage
