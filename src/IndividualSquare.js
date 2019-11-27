import React from 'react';
import logo from './logo.svg';

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
      <button
        style={this.state.updatedStyle}
        onMouseEnter = {() => this.mouseToggle()}
        onMouseLeave = {() => this.mouseToggle()}>
        {this.state.text}
      </button>
    );
  }
}


export default IndividualSquare;
