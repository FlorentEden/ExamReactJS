import React from 'react';
import Products from './composents/Products/Products.js';
import './App.scss';
import Logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <div className="Header">
          <h1>Featured <span>Properties</span></h1>
          <div className="Separator"></div>
          <p>Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
        </div>
        <div className="Products">
          <div className="ProductsLines">
            <div className="Product">
              <img src={Logo}></img>
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
            <div className="Product">
              <img src={Logo}></img>
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
            <div className="Product">
              <img src={Logo}></img>
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
          </div>

          <button>All Properties</button>
        </div>
        <Products></Products>
      </div>
    );
  }
}

export default App;
