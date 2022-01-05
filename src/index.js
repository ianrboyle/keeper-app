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
    <Card
      name="Me"
      tel="123-456-7890"
      img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravelsandliving.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fadorable-smiling-dogs-21.jpg&f=1&nofb=1"
    />
    <Card
      name="Ian"
      tel="123-123-1234"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2014%2F10%2Fanimal%2FCute_Golden_Dog.jpg&f=1&nofb=1"
    />
  </div>,
  document.getElementById("root")
);
