import React, { useState } from 'react';
import SigninPage from './components/SigninPage';
import { useNavigate } from "react-router-dom"
import {initializeApp} from "firebase/app";
import firebaseConfig from './components/firebaseconfig';


function App() {
  const navigate = useNavigate()
  const signupHandler = () => {
    navigate("/Signin")
  }

  const adminUser = {
    email: "person@person.com",
    password: "person123"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password == adminUser.password) {
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };


  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <>
    
  <div>
    <form>
      <div className="form-inner">
        <h2>Sign In</h2>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <label htmlFor="name"> Names:</label>
        <input type="text" name="name" id="Names" />
      </div>
      <div className="form-group">
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <div>
          <input type="submit" value="LOGIN" />
        </div>
      </div>

    </form></div>
    {/* <div className="App">
    </div>
    <SigninPage Login={Login} error={error} /><div onClick={signupHandler}></div> */}
    </>

  );
}


export default App; 
