import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { SigninvalidationSchema } from '../utils/form-utils'
import { useNavigate } from "react-router-dom"
import "./signin.css";
import { Signin } from './services/auth';
function SigninPage({  }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [serverError, setServerError] = useState("")
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      Signin(values, onSuccess, onFailure)
    },
    validationSchema: SigninvalidationSchema
  })
  const onSuccess = () => {
  navigate ("/welcome");
  }
  const onFailure = (message) => {
    setServerError(message);
  }
  const signupHandler = () => {
    navigate("/signup")
  }
  const resetpasswordHandler = () => {
    navigate("/resetpassword")
  }
  const aboutHandler = () => {
    navigate("/about")
  }
 const Signup = () => {
   const navigate = useNavigate(); 
 }
  return (
    <><div className='App' onClick={signupHandler}>
    </div>
      <form onSubmit={formik.handleSubmit}>

        <div className="form-inner">
          <h1>Sign In</h1>
         
          <label htmlFor="name"> Email:</label>
          <input onChange={formik.handleChange} value={formik.values.email} type="text" name="email" id="email" placeholder="Enter Email Here" />
          {formik.errors.names}
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" placeholder="Enter Password" />
          <div>
           
            <button type="submit"  value="LOGIN">Login</button>
        
            <p>Click Signup below before logging in for first time</p><button onClick={()=>navigate("/signup")}>Signup Page</button>
          
          </div>
        </div>
        <div>{serverError}</div>
      </form></>
  )
}

export default SigninPage;
