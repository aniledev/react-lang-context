import React, { Component } from "react";
import "../Styles/AppLang.css";
import Child from "./Child";
import LangControls from "./LangControls";

export default class AppLang extends Component {
  render() {
    return (
      <div className="AppLang">
        <LangControls />
        <Child />
      </div>
    );
  }
}
