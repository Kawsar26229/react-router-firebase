import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {title, thumbnail, price, stock, rating} = product;
    return (
        <div className='product'>
            <img src={thumbnail} alt="" />
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
            <p>Rating: {rating}</p>
            <button className='addToCart'>Add to cart</button>
        </div>
    );
};

export default Product;