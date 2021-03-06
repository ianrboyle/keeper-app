import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Phone Number: {props.tel}</p>
      <img className="image" src={props.img} alt="alt_img" />
    </div>
  );
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
