import React from 'react';
import '../Products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class Product extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="Product">
        <img></img>
        <h5>1450 Cloudcroft Drop</h5>
        <p>Illinois / Chicago</p>
        <span>$250,000</span>
        <div className="moreInfo">
          <p>3400 Sq Ft</p>
            <FontAwesomeIcon className="dot-Separator" icon={faCircle} />
          <p>2 Bedrooms</p>
            <FontAwesomeIcon className="dot-Separator" icon={faCircle} />
          <p>1 Bathroom</p>
        </div>
      </div>
    );
  }
}

export default Product;
