import React from 'react';
import logo from './logo.svg';
import './App.css';


class IndividualSquare extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      hovering: true,
      text: this.props.value,
      updatedStyle: this.props.style
    }
  }

  mouseToggle(){
    console.log("mounseToggle in IndividualSquare: " + this.state.hovering);
    var linkStyle;
    var buttonText;
    if (this.state.hovering) {
      linkStyle = {color: '#ed1212',cursor: 'pointer'}
      buttonText = "hi"
    } else {
      linkStyle = {color: '#000'}
      buttonText = "hi"
    }
    this.setState({
      hovering: !this.state.hovering,
      text: buttonText,
      updatedStyle: linkStyle
    });
  }

  render(){
    return(
      <button style={this.state.updatedStyle} onMouseEnter = {() => this.mouseToggle()} onMouseLeave = {() => this.mouseToggle()}>
        {this.state.text}
      </button>
    );
  }
}



class GridArray extends React.Component{
  constructor(props) {
  	super(props)
  }

  renderIndividualSquare() {
    return (
      <IndividualSquare
        value = {"hi"}
        onMouseEnter = {() => this.onMouseEnter()}
        onMouseLeave = {() => this.onMouseLeave()}
      />
    );
  }

  renderEntireCol(col) {
    return (
      <div className="grid-row">
        {col}
      </div>
    );
  }

  render() {
    var numberOfRows = 7;
    var numberOfCols = 7;
    var row = [];
    for(var i=0; i<numberOfRows; i++){
      var col = [];
      for(var j=0; j<numberOfCols; j++){
        col.push(this.renderIndividualSquare());
      }
      row.push(this.renderEntireCol(col));
    }
    return (
      <div>
        {row}
      </div>
    );
  }
}




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
