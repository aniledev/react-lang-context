// this component simply renders the GrandChild component

import React from "react";
import GrandChild from "../Components/GrandChild";

export default function Child() {
  return (
    <main role="main" className="Child">
      <GrandChild />
    </main>
  );
}
