import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualSquare from './IndividualSquare'

class GridArray extends React.Component{
  constructor(props) {
  	super(props)
    this.state = {
      width: this.props.width,
      height: this.props.height,
  		hover: false,
  	};
  }

  renderIndividualSquare(j) {
    return (
      <IndividualSquare
        className = "individual-square"
        // value = {"hi"}
        onMouseEnter = {() => this.onMouseEnter()}
        onMouseLeave = {() => this.onMouseLeave()}
        key={j}
      />
    );
  }

  renderEntireCol(col, i) {
    let styles = {
    margin: '0px',
    width: this.state.width + '250px',
    height: '30px',
  };
    return (
      <div className="grid-row" style={styles} key={i}>
        {col}
      </div>
    );
  }

  render() {
    console.log("this.state.width / 10: " + Math.floor(this.state.width / 30))
    console.log("resize width: " + this.props.width)
    console.log("resize height: " + this.props.height)
    var numberOfRows = Math.floor(this.state.height / 30) - 1;
    var numberOfCols = Math.floor(this.state.width / 32) - 2;
    var row = [];
    for(var i=0; i<numberOfRows; i++){
      var col = [];
      for(var j=0; j<numberOfCols; j++){
        col.push(this.renderIndividualSquare(j));
      }
      row.push(this.renderEntireCol(col, i));
    }
    return (
      <div>
        {row}
      </div>
    );
  }
}


export default GridArray;
