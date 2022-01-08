import React, { useState } from "react";
import Input from "./Input";
function Login(props) {
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const [name, setName] = useState("");
  // const handleNameChange = (event) => setName(event.target.value);
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <div className="container">
        <form className="form">
          <h1>Hello {name}</h1>
          <input type="text" onChange={handleChange} value={name} placeholder="Your Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          {props.isRegistered === false && <Input type="password" placeholder="Confirm Password" />}
          <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ backgroundColor: isMousedOver ? "rgb(155, 223, 151)" : "rgb(237, 227, 149)" }}
            type="submit"
          >
            {props.isRegistered ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
