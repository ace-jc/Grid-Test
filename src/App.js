import React from 'react';
import logo from './logo.svg';
import './App.css';


// function IndividualSquare(props){
//   console.log("IndividualSquare props: " + props);
  // return(
  //   <p
  //     style={props.linkStyle}>{props.value}</p>
  // );
// }


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
      buttonText = "ho"
    }
    this.setState({
      hovering: !this.state.hovering,
      text: buttonText,
      updatedStyle: linkStyle
    });
  }

  render(){
    return(
      <p
        style={this.state.updatedStyle}
        onMouseEnter = {() => this.mouseToggle()}
        onMouseLeave = {() => this.mouseToggle()}> {this.state.text} </p>
    );
  }
}



class GridArray extends React.Component{
  constructor(props) {
  	super(props)
  }

  renderIndividualSquare(i) {
    return (
      <IndividualSquare
        value = {"startText"}
        onMouseEnter = {() => this.onMouseEnter()}
        onMouseLeave = {() => this.onMouseLeave()}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="grid-row">
          {this.renderIndividualSquare()}
          {this.renderIndividualSquare()}
          {this.renderIndividualSquare()}
        </div>
        <div className="grid-row">
          {this.renderIndividualSquare()}
          {this.renderIndividualSquare()}
          {this.renderIndividualSquare()}
        </div>
        <div className="grid-row">
          {this.renderIndividualSquare()}
          {this.renderIndividualSquare()}
          {this.renderIndividualSquare()}
        </div>
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
     <li>
       <IndividualSquare
         value = {"startText"}
         onMouseEnter = {() => this.onMouseEnter()}
         onMouseLeave = {() => this.onMouseLeave()}
       />
         <IndividualSquare
           value = {"startText"}
           onMouseEnter = {() => this.onMouseEnter()}
           onMouseLeave = {() => this.onMouseLeave()}
         />
     </li>
 	  );
  }
}

export default App;
