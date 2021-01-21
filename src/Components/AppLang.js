import React, { Component } from "react";
import "../Components/App.css";
import Child from "./Child";

export default class AppLang extends Component {
  render() {
    return (
      <div className="AppLang">
        <Child />
      </div>
    );
  }
}
