import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const {products} = useLoaderData();
    console.log(products)
    return (
        <div className='shop'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Shop;