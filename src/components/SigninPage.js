import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { SigninvalidationSchema } from '../utils/form-utils'
import { useNavigate } from "react-router-dom"
import "./signin.css";
import { Signin } from './services/auth';
function SigninPage({  }) {
  const [names, setNames] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [serverError, setServerError] = useState("")
  const formik = useFormik({
    initialValues: {
      names: "",
      password: "",
    },
    onSubmit: (values) => {
      Signin(values, onSuccess, onFailure)
    },
    validationSchema: SigninvalidationSchema
  })
  const onSuccess = () => {

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
  const handleNames = (e) => { setNames(e.target.value) }
  const handlePassword = (e) => { setPassword(e.target.value) }
  const handleSignin = () => {
    console.log(names)
    console.log(password)
  }
  console.log(formik.values)
  return (
    <><div className='App' onClick={signupHandler}>
    </div>
      <form onSubmit={formik.handleSubmit}>

        <div className="form-inner">
          <h1>Sign In</h1>
         
          <label htmlFor="name"> Names:</label>
          <input onChange={formik.handleChange} value={formik.values.names} type="text" name="names" id="names" placeholder="Enter Names Here" />
          {formik.errors.names}
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" placeholder="Enter Password" />
          <div>
            <input type="submit" value="LOGIN" /><br></br>
            
            <a href="/signup">Signup</a>
          
          </div>
        </div>
        <div>{serverError}</div>
      </form></>
  )
}

export default SigninPage;
