import React from 'react';
import Product from './Product/Product.js';
import './Products.scss';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class Products2 extends React.Component{
  constructor(props){
    super(props);
    this.slider = React.createRef();
    this.state = {
      record: null,
      load: false,
      Endofrecord: false,
      autoplay: true,
    }
  }

  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };


  componentDidMount(){
    this.searchProduct();
  }

  searchProduct(){
      fetch("http://92.222.69.104/appartement/all?size=6&page="+this.props.page)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({record:result.content,load: true});
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
        <RBCarousel indicators={false} animation={true} autoplay={this.state.autoplay} slideshowSpeed={2000} defaultActiveIndex={0} leftIcon={this.state.leftIcon} rightIcon={this.state.rightIcon} onSelect={this._onSelect} ref={this.slider} version={4}>
          {this.state.record.map((item, i) => {
              return <Product img={item.img} address={item.address} city={item.city} dollar={item.dollar} squareFit={item.squareFit} nbBedRoom={item.nbBedRoom} nbBathRoom={item.nbBathRoom} key={i}></Product>
            })}
          </RBCarousel>
      )
    }
    return (
      <p>...</p>
    );
  }
}

export default Products2;
