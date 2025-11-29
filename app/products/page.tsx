import React from 'react'
import FullCard from '../components/FullCard'
import CardSection from '../components/CardSection'
import SingleProduct from '../components/SingleProduct'
import FullProductCard from '../components/FullProductCard'

const ProductPage = () => {
    return (
        <div>
            {/* <CardSection /> */}
            <FullProductCard />
            <FullCard />
            <SingleProduct />
        </div>
    )
}

export default ProductPage