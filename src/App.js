import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridArray from './GridArray.js'


class App extends React.Component{
  constructor(props) {
  	super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
  		hover: false,
  	};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  render() {
   return(
       <GridArray
         onMouseEnter = {() => this.onMouseEnter()}
         onMouseLeave = {() => this.onMouseLeave()}
         width = {this.state.width}
         height = {this.state.height}
       />
 	  );
  }

  componentDidMount() {
  this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}

export default App;
