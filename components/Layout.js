import React from "react";
import Core from "../core/core.js";
import DataLoader from '../core/data.js';
import Distance from '../core/distance.js';

export default class Layout extends React.Component {
  constructor() {
    super();
    let data = new DataLoader(); //Injectable - Not enough time to do it
    let dist = new Distance(); //Injectable - Not enough time to do it
    this.core = new Core(data, dist); //Injectable - Not enough time to do it
    
    this.state = {
      cityNames: "",
    };
    
    this.setCityNames();
  }
  
  async setCityNames(){
    let cityNames = await this.core.execute();
    cityNames = cityNames.join(', ');
    this.setState({cityNames});
  }

  render() {
    return (
        <div class='main-div'>
         { this.state.cityNames }
        </div>
    );
  }
}