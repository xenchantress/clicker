import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  return <div>
    <h3><Link to="/">Home</Link></h3>
    <ul>
        <li><link to="products/coffees">Coffees</link></li>
        </ul>
    <h3><Link to="checkout">Checkout</Link></h3>
    Products list
    </div>;
  
};

export default Products;