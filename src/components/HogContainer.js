import React from 'react'
import HogList from './HogList'

class HogContainer extends React.Component {
  state = {
    hogs: [],
    checkedName: '',
    checkedWeight: ''
  }

  componentDidMount() {
    this.setState({
      hogs: this.props.data
    })
  }

  handleGreaseChange = (e) => {

    if (e.target.value === "true") {
      const hogsArr = this.props.data
      const greasedHogs = hogsArr.filter( hog => {
        return hog.greased === true
      })
      this.setState({
        hogs: greasedHogs
      })
    } else if (e.target.value === "false") {
      const hogsArr = this.props.data
      const nonGreasedHogs = hogsArr.filter( hog => {
        return hog.greased === false
      })
      this.setState({
        hogs: nonGreasedHogs
      })
    } else {
      this.setState({
        hogs: this.props.data
      })
    }
  }

  handleNameChange = (e) => {
    if (e.target.value === "desc") {
      const hogsArr = [...this.state.hogs]
      const descHogsArr = hogsArr.sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      this.setState({
        hogs: descHogsArr,
        checkedName: "desc"
      })
    } else {
      const hogsArr = [...this.state.hogs]
      const ascHogsArr = hogsArr.sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      })
      this.setState({
        hogs: ascHogsArr,
        checkedName: "asc"
      })
    }

  }

  handleWeightChange = (e) => {
    const hogsArr = [...this.state.hogs]
    if (e.target.value === "asc") {
      hogsArr.sort(function(a, b) {
        return a.weight - b.weight
      })
      this.setState({
        checkedWeight: "asc"
      })
    } else {
      hogsArr.sort(function(a, b) {
        return b.weight - a.weight
      })
      this.setState({
        checkedWeight: "desc"
      })
    }
    this.setState({
      hogs: hogsArr
    })
  }

  render(){
    // console.log("render: ", this.state)
    return(
      <div>
        <h1>Welcome to the HogContainer!</h1>
        <h5>Sort by name</h5>
          <form>
            <input type="radio" name="desc" value="desc" onChange={this.handleNameChange} checked={this.state.checkedName === "desc" ? true : false} /> Desc <br/>
            <input type="radio" name="asc" value="asc" onChange={this.handleNameChange} checked={this.state.checkedName === "asc" ? true : false} /> Asc <br/>
          </form>
        <h5>Sort by weight</h5>
          <form>
            <input type="radio" name="desc" value="desc" onChange={this.handleWeightChange} checked={this.state.checkedWeight === "desc" ? true : false} /> Desc <br/>
            <input type="radio" name="asc" value="asc" onChange={this.handleWeightChange} checked={this.state.checkedWeight === "asc" ? true : false} /> Asc <br/>
          </form>
        <h5>Filter by Greased</h5>
        <form>
          <input type="radio" name="greased" value="all" onChange={this.handleGreaseChange} /> All <br/>
          <input type="radio" name="greased" value="true" onChange={this.handleGreaseChange} /> Greased <br/>
          <input type="radio" name="greased" value="false" onChange={this.handleGreaseChange} /> Non-greased <br/>
        </form>
        <HogList data={this.state.hogs} />
      </div>
    )
  }
}

export default HogContainer
