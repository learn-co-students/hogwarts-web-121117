import React from "react";
import Hog from "./Hog";

class HogDetails extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Specialty: {this.props.specialty}</p>
        <p>Medal: {this.props.medal.charAt(0).toUpperCase()+ this.props.medal.slice(1)}</p>
        <p>Weight ratio compared to French Door Refrigerator: {this.props.description}</p>
        <p>Greased: {this.props.greased ? "Yes" : "No"}</p>
      </div>
    );
  }
}
 HogDetails.defaultProps = {name: null, specialty: null}
export default HogDetails;
