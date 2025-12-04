// D:\mktgroup\app\product\[slug]\ProductDetailClient.tsx
'use client';

import React from 'react';
import MainSingleSection from '../../components/MainSingleSection';
import NewBreadCrumb from '@/app/components/NewBreadCrumb';

interface ContactInfo {
    whatsappNumber: string;
    emailAddress: string;
    phoneNumber: string;
}

interface ProductDetail {
    category: string;
    title: string;
    description: string;
    images: string[];
    sizes: string[];
    accordions: Array<{
        id: string;
        title: string;
        content: string;
    }>;
    contactInfo: ContactInfo;
}

const ProductDetailClient = ({ productDetail }: { productDetail: ProductDetail }) => {
    return (
        <div>
            <NewBreadCrumb
                page={productDetail.title}
                img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.png"
                version2={false}
            />
            <MainSingleSection {...productDetail} />
        </div>
    );
};

export default ProductDetailClient;