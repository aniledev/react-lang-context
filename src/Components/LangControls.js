// this component contains buttons to switch the current language

import React from "react";
import LanguageContext from "./LanguageContext";

export default function LangControls(props) {
  return (
    //renderProp acts like a combination of a callback prop and a child prop
    // move the JSX we want to return into the return from the render
    <LanguageContext.Consumer>
      {(value) => {
        console.log(value);
        return (
          <>
            <button>
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button>
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button>
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
