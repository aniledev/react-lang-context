//  In order to use context this will need to be a class component.
// this component will render the text in different languages based on language controls

import React, { Component } from "react";
import languageSpecificCopy from "../languageSpecificCopy";

class GreatGrandChild extends Component {
  render() {
    // We're using an "or an empty object" logic when creating the copy constant with the syntax || {}
    // similar to default props but the data file is not a prop that we can use
    // if we attempt to use a key that doesn't exist, it would equate to undefined and this would throw errors all over our app
    const copy = languageSpecificCopy["en-US"] || {};
    return (
      <section className="GreatGrandChild">
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    );
  }
}

export default GreatGrandChild;
