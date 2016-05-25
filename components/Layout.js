import React from "react";
import Core from "../core/core.js";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.core = new Core();
    
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
        <div>
         { this.state.cityNames }
        </div>
    );
  }
}