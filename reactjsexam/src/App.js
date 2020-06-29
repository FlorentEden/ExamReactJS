import React, { useEffect } from 'react';
import Products from './composents/Products/Products.js';
import Products2 from './composents/Products/Products2.js';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Typewriter from 'typewriter-effect';
import AOS from 'aos'
import "aos/dist/aos.css";



const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

AOS.init({
  duration: 600,
});

class App extends React.Component{

  constructor(props){
    super(props);
    this.slider = React.createRef();
    this.state = {
      nbLines: [],
      modal: false,
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
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };

  addProducts(){
    this.state.nbLines.push(1);
    this.setState({});
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(
      <div className="App">
        <div className="Header">
          <h1 data-aos="zoom-out" data-aos-duration="2000"><span>Featured &nbsp;</span><Typewriter className="SpanH1" options={{strings: ['Properties', 'Appartements', 'Your future house'], autoStart: true, loop: true,}}/></h1>
          <div className="Separator"></div>
          <p data-aos="fade-left">Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
        </div>
        <MDBBtn color="red" onClick={this.toggle}>Decouvrir</MDBBtn>
        <div className="Products">
          {this.state.nbLines.map((item, i) => {
              return <Products data-aos="fade-right" page={i+1} key={i+1}></Products>
          })}
          <Products data-aos="fade-left" page={0}></Products>
          <button data-aos="fade-right" onClick={() => this.addProducts()}>All Properties</button>
        </div>

        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
            <MDBModalHeader>
              <MDBBtn color="red" onClick={this.toggle}>Close</MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='Modal'>
              <Products2 page={0}></Products2>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>



      </div>
    );
  }
}

export default App;
