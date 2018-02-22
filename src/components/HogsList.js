import React from 'react';
import porkers_data from '../porkers_data.js'
import Hog from './Hog.js'

class HogsList extends React.Component{

  render(){
    let allHogs = porkers_data.map(hog => <Hog key={hog.name} name={hog.name} image={require(`../hog-imgs/${hog.name.toLowerCase().replace(/\s/g, '_')}.jpg`)} specialty={hog.specialty} greased={hog.greased} description={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} medal={hog['highest medal achieved']}/>)

    let showHogs = null;
    if (this.props.isGreased) {
     showHogs = allHogs.filter(hog => hog.props.greased)
   } else if (this.props.isNotGreased) {
     showHogs = allHogs.filter(hog => !hog.props.greased)
   } else {
     showHogs = allHogs
    }

    if (this.props.alphabetically){
      showHogs.sort((a,b) => a.key.localeCompare(b.key) )
    }

    if (this.props.lightest){
      showHogs.sort(function(a, b){
         if(a.props.description < b.props.description) return -1;
         if(a.props.description > b.props.description) return 1;
         return 0;
      })
    } else if (this.props.heaviest) {
      showHogs.sort(function(a, b){
         if(a.props.description < b.props.description) return 1;
         if(a.props.description > b.props.description) return -1;
         return 0;
       })
     }

    return(
        <div className='ui grid container'>
          {showHogs}
        </div>
    )
  }
}

export default HogsList


// porkers_data.map(hog => <Hog key={hog.name} name={hog.name} image={require(`../hog-imgs/${hog.name.toLowerCase().replace(/\s/g, '_')}.jpg`)} specialty={hog.specialty} greased={hog.greased}
// description={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
// medal={hog['highest medal achieved']}/>)
// .sort(function(a,b){
//
//   return a.key.localeCompare(b.key);
// }).filter(hog => !hog.props.greased)
