import React from 'react';
import ProductList from '../innerPages/components/productList/ProductList';
import { products } from '../innerPages/components/productList/data';
import PageCover from '../innerPages/components/pageCover/PageCover';

const Brands = () => {
    // Sample product data

    return (
        <>
            <PageCover
                title="Our Brands"
                subtitle="Explore our exclusive brands"
                backgroundImage="https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div style={{ padding: '20px' }}>
                <ProductList products={products} />
            </div>
        </>
    );
};

export default Brands;