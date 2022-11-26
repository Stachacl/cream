import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="login">
        <h1> Login </h1>
        <div className="container">
          <div className="top">
            <i class="fab fa-google"/>
            <i class="fab fa-twitter"/>
            <p className="divider">or</p>
            <form>
              <label> E-mail </label>
              <input type='email' placeholder="Enter your email"/>
              <label> Password </label>
              <input type='password' placeholder="Enter yourPassword"/>
              <div className="remember-me">
                <input type='checkbox' checked='checked'/>
                <p> Remember Me </p>
              </div>
              <button>Log In</button>
            </form>
            <div className="bottom">
              <p>Forget your password?</p>
              <a href="/">Reset Password</a>
            </div>
            <a href="/" className="create-account"> Create Account</a>
          </div>
          <div className="theme-toggle">
            <h2> Light Theme</h2>
            <i class='fas fa-toggle-on'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
