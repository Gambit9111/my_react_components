import React from "react";
import "./style.css";

function Component() {
  return (
    <div className="login-forms-one">
      <span className="borderLine"></span>
      <form>
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" required />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Component;
