import React from 'react';
import Product from './Product/Product.js';
import './Products.scss';

class Products extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="Products">
        <div className="ProductsLines">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div className="ProductsLines">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    );
  }
}

export default Products;
