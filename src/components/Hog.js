import React from 'react';

class Hog extends React.Component {

  state = {
    hidden: true
  }

  handleClick = (e) => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  // console.log(props.hog.img_url === `../hog-imgs/mudblood.jpg`)
  render(){
    return (
      <div className="ui four wide column">
        <div className="pigTile">
          <div onClick={this.handleClick}>
            <img src={this.props.hog.img_url} alt={this.props.hog.name}/>
            <h3>{this.props.hog.name}</h3>
          </div>
          <div style={{display: this.state.hidden === true ? "none" : "block"}}>
            <h5>Weight: {this.props.hog.weight}</h5>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased === true ? "Greased" : "Not greased"}</p>
            <p>Medal: {this.props.hog.medal}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Hog
