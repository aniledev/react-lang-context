// this component contains buttons to switch the current language
// Consumer allows us to use context in function components

import React from "react";
import LanguageContext from "./LanguageContext";

export default function LangControls(props) {
  return (
    //renderProp acts like a combination of a callback prop and a child prop
    // move the JSX we want to return into the return from the render
    <LanguageContext.Consumer>
      {(value) => {
        return (
          <>
            <button
              onClick={() => props.onSetLang("en-GB")}
              disabled={value.lang === "en-GB"}
            >
              {" "}
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("en-GB")}
              disabled={value.lang === "en-US"}
            >
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("en-GB")}
              disabled={value.lang === "ko"}
            >
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}
