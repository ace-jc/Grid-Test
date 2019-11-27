import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualSquare from './IndividualSquare'

class GridArray extends React.Component{
  constructor(props) {
  	super(props)
  }

  renderIndividualSquare(j) {
    return (
      <IndividualSquare
        className = "individual-square"
        value = {"hi"}
        onMouseEnter = {() => this.onMouseEnter()}
        onMouseLeave = {() => this.onMouseLeave()}
        key={j}
      />
    );
  }

  renderEntireCol(col, i) {
    return (
      <div className="grid-row" key={i}>
        {col}
      </div>
    );
  }

  render() {
    var numberOfRows = 10;
    var numberOfCols = 5;
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
