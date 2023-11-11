import React, { useEffect, useState } from "react";
import "../Style/login.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../Store/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login({ onClose, setModalPage }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    appType: "ott",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if (isAuthenticated) {
  //   navigate("/");
  // } else {
  //   navigate("/myspace");
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = (e) => {
    dispatch(logInUser(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const newErrors = {
      email: "",
      password: "",
    };
    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }
    // Perform your validation here
    if (!email && !password) {
      newErrors.email = "Email is required";
      newErrors.password = "Password is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    } else if (password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }
    // Update the errors state with the new error messages
    setErrors(newErrors);
    // If there are no errors, you can proceed with form submission
    if (!newErrors.email && !newErrors.password) {
      // Dispatch login action or perform other actions
      dispatch(logInUser(formData));
    }
  };

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modalOverlay" onClick={handleClick}>
      <div className="mainLoginPage">
        <div className="miniLoginPage">
          <div className="cross" onClick={onClose}>
            <AiOutlineClose className="close" />
          </div>
          <div className="leftImageSlider">
            <img src="/images/login-background.jpg" alt="login" />
          </div>
          <div className="rightSideInfo">
            <h1>Log in or sign up to continue</h1>
            <form className="loginDetails" onSubmit={handleSubmit}>
              <div className="wrapInputError">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="wrapInputError">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <button className="loginBtn" onClick={handleButtonClick}>
                Login
              </button>

              <p className="privacyPara">
                By proceeding you confirm that you are above 18 years of age and
                agree to the <span>Privacy Policy</span> &{" "}
                <span>Terms of Use.</span>
              </p>
            </form>
          </div>
          <div className="getHelp">
            <p className="para2">
              Dont have an account?
              <span
                onClick={() => {
                  setModalPage(true);
                }}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
