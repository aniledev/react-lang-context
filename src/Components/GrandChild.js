// this component simply renders the GreatGrandChild component

import React from "react";
import GreatGrandChild from "../Components/GreatGrandChild";

export default function GrandChild() {
  return (
    <div className="GrandChild">
      <GreatGrandChild />
    </div>
  );
}
