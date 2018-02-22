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

  sortWeights

  render() {
    let displayHogs = this.props.showGrease === "all" ? hogInfo : hogInfo.filter(hog => {return hog.greased === this.props.showGrease})
    let regularHogs = displayHogs

    let sortedHogs = this.props.sortType === "None" ? regularHogs : this.props.sortType === "Name" ? this.sortNames(displayHogs) : this.sortWeights(displayHogs)

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
