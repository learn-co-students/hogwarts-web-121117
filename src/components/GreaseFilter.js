import React from 'react'

const GreaseFilter = (props) => {

  return (
    <form >
      <input type="radio" name="greased" value="all" onChange={props.handleGrease} ></input>All
      <input type="radio" name="greased" value="greased" onChange={props.handleGrease} ></input>Greased
      <input type="radio" name="greased" value="not-greased" onChange={props.handleGrease}></input>Not Greased
    </form>
  )
}

export default GreaseFilter
