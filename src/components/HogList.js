import React from 'react'
import Hog from './Hog'

const HogList = (props) => {

  const hogArr = props.data
  // console.log(hogArr) // works


  return (
    <div>
      <h1>Welcome to HogList!</h1>
        <div className="ui grid container">
          {
            hogArr.map(hog => {
              // console.log(hog)
              return <Hog hog={hog} key={hog.name} />
            })
          }
        </div>
    </div>
  )
}

export default HogList
