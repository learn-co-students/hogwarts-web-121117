import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsList from './HogsList.js'
import FilterHogs from './FilterHogs'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <FilterHogs />
        
      </div>
    )
  }
}

export default App;
