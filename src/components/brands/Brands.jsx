import React from 'react';
import ProductList from '../innerPages/components/productList/ProductList';
import PageCover from '../innerPages/components/pageCover/PageCover';

const Brands = () => {
    // Sample product data
    const products = [
        {
            id: 1,
            image: 'https://example.com/image1.jpg',
            tags: ['new', 'best selling'],
            title: 'Product 1',
            description: 'This is a short description of Product 1.',
            rating: 4.5,
            variants: [{ size: 'S', price: 10 }, { size: 'M', price: 12 }],
            discountHint: '10% off',
            tooltip: 'More details about Product 1',
            price: 10,
        },
        {
            id: 2,
            image: 'https://example.com/image2.jpg',
            tags: ['editor choice'],
            title: 'Product 2',
            description: 'This is a short description of Product 2.',
            rating: 4.0,
            variants: [{ size: 'S', price: 15 }, { size: 'M', price: 18 }],
            discountHint: '5% off',
            tooltip: 'More details about Product 2',
            price: 15,
        },
        // Add more products as needed
    ];

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