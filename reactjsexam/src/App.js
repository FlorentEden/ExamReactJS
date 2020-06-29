import React from 'react';
import Products from './composents/Products/Products.js';
import './App.scss';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nbLines: [],
    }
  }

  addProducts(){
    this.state.nbLines.push(1);
    this.setState({});
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
          {this.state.nbLines.map((item, i) => {
              return <Products page={i+1} key={i+1}></Products>
          })}
          <Products page={0}></Products>
          <button onClick={() => this.addProducts()}>All Properties</button>
        </div>
      </div>
    );
  }
}

export default App;
