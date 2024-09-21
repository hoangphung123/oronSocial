import React from "react";
import "../css/Register.css";
import Background from "./Rectangle 28.png";

function Register() {
  return (
    <div className="register-container">
      <div className="register-background"></div>
      <div className="register-title">
        <h1 className="title-content">ORON Social</h1>
        <div className="register-content">
          <div className="register-form-box">
            <h2 className="title-content">Create new account</h2>
            <form className="form-res">
              <div className="input-group">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />

              <div className="input-group">
                <select>
                  <option value="">Day</option>
                  {/* Add day options */}
                </select>
                <select>
                  <option value="">Month</option>
                  {/* Add month options */}
                </select>
                <select>
                  <option value="">Year</option>
                  {/* Add year options */}
                </select>
              </div>
              <p className="title-sex">Sex</p>
              <div className="gender-group">
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="unknown" /> Unknown
                </label>
              </div>

              <button type="submit">Sign up</button>
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </div>
          <div className="register-image">
            {/* Thay đổi đường dẫn tới hình ảnh của bạn */}
            <img
              src={Background}
              alt="Decorative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
