import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import GreaseFilter from './GreaseFilter'
import SortFilter from './SortFilter'

class App extends Component {
  state = {
    showGrease: "all",
    sortType: "None"
  }

  handleGrease = event => {
    if (event.target.value !== "all") {
      event.target.value === "greased" ?
      this.setState({
        showGrease: true
      }) :
      this.setState({
        showGrease: false
      })
    } else {
      this.setState({
        showGrease: "all"
      })
    }
  }

  handleSort = event => {
    this.setState({
      sortType: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <GreaseFilter handleGrease={this.handleGrease}/>
          <SortFilter handleSort={this.handleSort}/>
          <h1>All The Hogs</h1>
          <HogContainer showGrease={this.state.showGrease} sortType={this.state.sortType}/>
      </div>
    )
  }
}

export default App;
