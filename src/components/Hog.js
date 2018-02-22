import React from "react";
import HogDetails from "./HogDetails";

// change this to a class // done
// that class now has a state //done
// when on click happens, the state changes to true
// and that state change points to the hog details render page

class Hog extends React.Component {
  state = {
    value: false
  };

  handleClick = (event) => {
    console.log(this);
    this.setState({
      value: !this.state.value,

    })
  }

  render() {
    return (
      <div className="ui eight wide column">
        <img src={this.props.image} onClick={this.handleClick}/>
        <p><strong>{this.props.name}</strong></p>
      {this.state.value ?
        <HogDetails specialty={this.props.specialty}
          description={this.props.description}
          medal={this.props.medal}
          greased={this.props.greased}/>
        : null
      }
      </div>

    );
  }
}

export default Hog;
