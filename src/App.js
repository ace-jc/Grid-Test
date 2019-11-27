import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridArray from './GridArray.js'



class App extends React.Component{
  constructor(props) {
  	super(props)
    this.state = {
  		hover: false,
  	};
  }

  render() {
   return(
       <GridArray
         onMouseEnter = {() => this.onMouseEnter()}
         onMouseLeave = {() => this.onMouseLeave()}
       />
 	  );
  }
}

export default App;
