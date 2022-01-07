import React from "react";
import Input from "./Input";
function Register() {
  return (
    <div>
      <header>
        <h1>Welcome</h1>
      </header>
      <div className="container">
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
