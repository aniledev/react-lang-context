// use this component to creat context for the language
// context should be in its own file so it can be imported into any other file

import React from "react";

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  // add empty updater function
  setLang: () => {},
});

export default LanguageContext;
