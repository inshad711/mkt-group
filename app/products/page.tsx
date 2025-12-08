// D:\mktgroup\app\products\page.tsx

import React from 'react'

import FullProductCard from '../components/FullProductCard'
import FullCard from '../components/FullCard'
import SingleProduct from '../components/SingleProduct'
import NewBreadCrumb from '../components/NewBreadCrumb';

const pageTitle = "Our Products";

const ProductPage = () => {
    return (
        <div>

            <NewBreadCrumb
                title={pageTitle}
                page={pageTitle}
                img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.webp"
                version2={false}
            />
            <FullProductCard />
            <FullCard />
            <SingleProduct />
        </div>
    )
}

export default ProductPage