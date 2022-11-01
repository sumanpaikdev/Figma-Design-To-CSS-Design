import React from "react"
import "./App.css"
import Card from "./components/Card.js"

import Data from "./Data.js"
// images 
import firstImg from "./images/Business.png"

export default function App() {
  const details = Data.map(dataElements);
  function dataElements(elementItems) {
    return{
      <Card 
      itemdata = {elementItems}
      />
    };
  }
  return(
    <div className="app--container">
      {/* <Card pic={firstImg}/> */}
      {details}
    </div>
  );
}

