import React from 'react';
import logo from './logo.svg';

class IndividualSquare extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      hovering: true,
      text: this.props.value,
      updatedStyle: this.defaultStyle()
    }
  }

  defaultStyle(){
    var cellStyles = {
      backgroundColor: 'white',
      width: '32px',
      height: '32px',
      border: "1px solid gray",
      display: 'inline-block',
      margin: '0',
      marginLeft: '-1px',
      color: '#ed1212',
      cursor: 'pointer'
    }
    return cellStyles
  }

  mouseToggle(){
    console.log("mounseToggle in IndividualSquare: " + this.state.hovering);
    var linkStyle;
    // var buttonText;
    if (this.state.hovering) {
      var cellStyles = this.defaultStyle()
      cellStyles.backgroundColor = 'black'
      cellStyles.color = '#fff'
      linkStyle = cellStyles
      // buttonText = "hi"
    } else {
      var cellStyles = this.defaultStyle()
      cellStyles.backgroundColor = 'white'
      cellStyles.color = '#ed1212'
      linkStyle = cellStyles
      // buttonText = "hi"
    }
    this.setState({
      hovering: !this.state.hovering,
      // text: buttonText,
      updatedStyle: linkStyle
    });
  }



  render(){
    return(
      <div
        style={this.state.updatedStyle}
        onMouseEnter = {() => this.mouseToggle()}
        onMouseLeave = {() => this.mouseToggle()}>
        {this.state.text}
      </div>
    );
  }
}


export default IndividualSquare;
