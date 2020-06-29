import React from 'react';
import '../Products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      euro: 0,
    }
  }

  render(){
    let euro = Math.round(this.props.dollar*0.88836);
      return (
        <div className="Product">
          <img src={this.props.img} alt="Image de l'appartement"></img>
          <h5>{this.props.address}</h5>
          <p>{this.props.city}</p>
          <span>{euro}€</span>
          <div className="moreInfo">
            <p>{this.props.squareFit} Sq Ft</p>
              <FontAwesomeIcon className="dot-Separator" icon={faCircle} />
            <p>{this.props.nbBedRoom} Bedrooms</p>
              <FontAwesomeIcon className="dot-Separator" icon={faCircle} />
            <p>{this.props.nbBathRoom} Bathroom</p>
          </div>
        </div>
      );
  }
}

export default Product;
