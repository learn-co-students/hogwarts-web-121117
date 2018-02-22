import React from 'react'
import Hog from './Hog'
import hogInfo from '../porkers_data.js'
export default class HogContainer extends React.Component {

  sortNames = (hogs) => {
    return hogs.sort(function(a,b) {
      return a.name.localeCompare(b.name)
    })
  }

  sortWeights = (hogs) => {
    return hogs.sort(function(a,b) {
      return a.weight - b.weight
    })
  }

  sortHogs = (hogs) => {
    switch(this.props.sortType) {
      case ("Name Ascending"): return this.sortNames(hogs)
      break
      case("Name Descending"): return this.sortNames(hogs).reverse()
      break
      case("Weight"): return this.sortWeights(hogs)
      break
    }
  }


  render() {
    let displayHogs = this.props.showGrease === "all" ? hogInfo : hogInfo.filter(hog => {return hog.greased === this.props.showGrease})
    let newHogs = [...displayHogs]
    let sortedHogs = this.props.sortType === "None" ? displayHogs : this.sortHogs(newHogs)

    let piggies = sortedHogs.map((pig, index) => {
      let hogPic = require(`../hog-imgs/${pig.name.toLowerCase().split(" ").join("_")}.jpg`)
      return <Hog key={index} pic={hogPic} name={pig.name} specialty={pig.specialty} greased={pig.greased} weight={pig.weight} medal={pig.medal}/>
      }
    )
    return (
      <div className="ui grid container">
        {piggies}
      </div>
    )
  }
}
