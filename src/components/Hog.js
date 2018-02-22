import React from 'react'

export default class Hog extends React.Component {
  state = {
    info: false,
    show: true
  }

  changeInfo = () => {
    this.setState({
      info: !this.state.info
    })
  }

  hidePig = event => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="ui eight wide column">
          <div className="card">
          <button onClick={this.hidePig}>{this.state.show ? `Hide Piggy` : `Show Piggy`}</button>
          {this.state.show ?
          <div onClick={this.changeInfo}>
            <h1>{this.props.name}</h1>
            <div className="image">
              <img src={this.props.pic}/>
            </div>
            {this.state.info ?
              <div className="info">
                <p> Weight: {this.props.weight} <br/> Specialty: {this.props.specialty} <br/> Highest Medal: {this.props.medal} </p>
              </div> : null
            }
          </div> : null
        }
        </div>
      </div>
    )
  }
}
