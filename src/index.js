import React from "react";
import ReactDOM from "react-dom";

const yourName = "Rubesh KR";
const CurretYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {CurretYear}</p>
  </div>,
  document.getElementById("root")
);
