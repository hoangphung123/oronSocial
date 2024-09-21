import React from "react";
import "../css/Form.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {
  return (
    <div className="form-container">
      <div className="background-image"></div>
      <div className="form-box">
        <form>
          <h2 className="title-login">Login to continue</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="remember-block">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>
          <button className="button-login" type="submit">
            Sign in
          </button>
          <div className="social-login">
            <a href="/">
              <i class="fa-brands fa-facebook" style={{ color: "#3398e6" }}></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-google" style={{color: '#e26e6e'}}></i>
            </a>
          </div>
          <p className="acount">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
