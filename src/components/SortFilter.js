import React from 'react'

const SortFilter = (props) => {

  return (
    <div> Sort By: &nbsp;
      <select onChange={props.handleSort}>
        <option value="None">None</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
    </div>

  )
}

export default SortFilter
