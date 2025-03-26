import React, { useState } from "react";
import "./css/login.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider, facebookProvider } from "../firebaseconfig";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import googlepic from './images/google.png'
import facebookepic from './images/facebook.png'
import githubpic from './images/github.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User login successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error creating user with email and password:", error);
      alert("Failed to login user");
    }
    var validerror = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validerror.email = "invalid email address";
      // setErrors( "Invalid email address");
    }
    if (password.length < 6) {
      validerror.password = "password must contains 6 charecters";
    }
    setErrors(validerror);
    console.log(email);
    console.log(password);
  };

  const handleGooglesubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("user signed with google");
      navigate("/home");
    } catch (error) {
      console.log("Error signing in with google:", error);
    }
  };
  const handleFacebooksubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log("user signed with facebook");
      navigate("/home");
    } catch (error) {
      console.log("Error signing in with facebook:", error);
    }
  };
  const handleGithubsubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, githubProvider);
      console.log("user signed with github");
      navigate("/home");
    } catch (error) {
      console.log("Error signing in with github:", error);
    }
  };

  return (
    <div id="login-body">
      <div id="formback">
        <form>
          <section id="sectone" className="sect">
            <h1> LOGIN </h1>
          </section>
          <section id="secttwo" className="sect">
            <div id="sect2input1" className="inputsdiv">
              <input
                type="email"
                className="inputs"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="errors">{errors.email}</p>}
            </div>
          </section>
          <section id="sectthree" className="sect">
            <div id="sect3input1" className="inputsdiv">
              <input
                type="password"
                className="inputs"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="errors">{errors.password}</p>}
            </div>
          </section>
          <section id="createuser">
            not a user! <a href="/signup">signup</a>
          </section>
          <section id="sectfour" className="sect">
            {/* <input type="submit" id='submitbut' onClick={} /> */}
            <div>
              <button
                className="submitbut"
                type="submit"
                onClick={handleSubmit}
              >
                submit
              </button>
            </div> or..
            <div id="buttons">
              <button onClick={handleGooglesubmit}><img src={googlepic}  className="googleimg" /></button>
              <button onClick={handleFacebooksubmit}> <img src={facebookepic}  className="googleimg" /></button>
              <button onClick={handleGithubsubmit}><img src={githubpic} className="googleimg" alt="" /></button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
export default Login;
