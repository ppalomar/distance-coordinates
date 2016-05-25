import React from "react";
import Core from "../core/core.js"

export default class Layout extends React.Component {
  constructor() {
    super();
    let c = new Core();
    this.cityNames = c.execute();
  }

  render() {
    return (
      <div>
        { this.cityNames }
      </div>
    );
  }
}