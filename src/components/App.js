import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import porkers_data from '../porkers_data'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <HogContainer data={porkers_data}/>
      </div>
    )
  }
}

export default App;
