import React, { Component } from "react";
import "../Styles/AppLang.css";
import Child from "./Child";
import LangControls from "./LangControls";
import LanguageContext from "./LanguageContext";

// wrap the subtree that needs the updated context values in the LanguageContext.Provider
export default class AppLang extends Component {
  state = {
    lang: window.navigator.language,
  };

  handleSetLang = (lang) => {
    this.setState({ lang });
  };

  render() {
    const contextValue = {
      lang: this.state.lang,
    };

    return (
      <LanguageContext.Provider value={contextValue}>
        <div className="AppLang">
          <LangControls />
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}
