import React from "react";
import Input from "./Input";
function Login() {
  return (
    <div>
      <header>
        <h1>Welcome</h1>
      </header>
      <div className="container">
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
