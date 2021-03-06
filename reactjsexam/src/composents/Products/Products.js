import React from 'react';
import Product from './Product/Product.js';
import './Products.scss';

class Products extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      record: null,
      load: false,
      Endofrecord: false,
    }
  }

  componentDidMount(){
    this.searchProduct();
  }

  searchProduct(){
      fetch("http://www.json-generator.com/api/json/get/ceXAUnjMZe?indent=2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({record:result,load: true});
          console.log("res : "+result);
          if (result.numberOfElements == 0) {
            this.setState({Endofrecord: true});
            alert("Plus d'appartement à découvrir :(")
          }
        },
        (error) => {
          alert(error);
          this.setState({load: false});
        }
      );
    }

  render(){
    if (this.state.load === true && this.state.Endofrecord === false) {
      return(
        <div className="Products">
          <div className="ProductsLines">
          {this.state.record.map((item, i) => {
              return <Product img={item.img} address={item.address} city={item.city} dollar={item.dollar} squareFit={item.squareFit} nbBedRoom={item.nbBedRoom} nbBathRoom={item.nbBathRoom} key={i}></Product>
            })}
          </div>
        </div>
      )
    }
    return (
      <p></p>
    );
  }
}

export default Products;
