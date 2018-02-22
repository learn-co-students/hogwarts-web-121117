import React from 'react';
import HogsList from './HogsList'

class FilterHogs extends React.Component{
  state = {
    input: '',
    selected: '',
    isGreased: false,
    isNotGreased: false,
    alphabetically: false,
    lightest: false,
    heaviest: false
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleCheckGreased = (event) =>{
    this.setState({
      isGreased: !this.state.isGreased
    })
  }

  handleCheckNotGreased = (event) =>{
    this.setState({
      isNotGreased: !this.state.isNotGreased
    })
  }

  handleAlphabetically = (event) =>{
    this.setState({
      alphabetically: !this.state.alphabetically
    })
  }

  handleLightest = (event) =>{
    this.setState({
      lightest: !this.state.lightest
    })
  }
  handleHeaviest = (event) =>{
    this.setState({
      heaviest: !this.state.heaviest
    })
  }

  // handleSelect = (event) => {
  //   this.setState({
  //     selected: event.target.value
  //   }, () => console.log(this.state.selected))
  // }

  render(){
    return(
      <div className="ui centered grid container">
        <br/>
        <label>Greased: <input type='checkbox' name='isGreased' onChange={this.handleCheckGreased} checked={this.state.isGreased}/></label>
        <label>Not Greased: <input type='checkbox' name='isNotGreased' onChange={this.handleCheckNotGreased} checked={this.state.isNotGreased}/></label>
        <label>A-Z: <input type='checkbox' name='isNotGreased' onChange={this.handleAlphabetically} checked={this.state.alphabetically}/></label>
        <label>Lightest-Heaviest: <input type='checkbox' name='lightest' onChange={this.handleLightest} checked={this.state.lightest}/></label>
        <label>Heaviest-Lightest: <input type='checkbox' name='heaviest' onChange={this.handleHeaviest} checked={this.state.heaviest}/></label>

      <br/>
      <br/>
      <div>
        <HogsList
        alphabetically={this.state.alphabetically}
        isGreased = {this.state.isGreased}
        isNotGreased={this.state.isNotGreased}
        lightest={this.state.lightest}
        heaviest={this.state.heaviest}/></div>
      </div>
    )
  }
}

export default FilterHogs

// <input placeholder="Name" value={this.state.input} onChange={this.handleInput}/>
// <select onChange={this.handleSelect}>
//   <option></option>
//   <option>Name</option>
//   <option>Weight</option>
//   <option>Greased</option>
// </select>
