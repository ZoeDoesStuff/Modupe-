import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { signup } from "./services/auth.js";
import { signUpvalidationSchema } from "../utils/form-utils.js";
import SigninPage from "./SigninPage.js";
import "./signup.css";
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Signup() {
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
    const signupHandler = () => {
        navigate("http://localhost:3000/")
    }
    const formik = useFormik({
        initialValues: {
            names: "",
            email: "",
            password: "",
            phonenumber: "",
            address: "",
        },
        onSubmit: (values) => {
            setProcessing(true)
            console.log(values)
            //call firebase to signup
            signup(values)
            setProcessing(false)

        },
        validationSchema: signUpvalidationSchema, 
    })


    return (
        <><div>
            <button> <a href="http://localhost:3000/">Login Page </a> </button> <button> <a href="/contactus">Contact Us </a> </button> <button> <a href="/resetpassword">Forgot Password?</a> </button> <button> <a href="/about">About Us</a> </button>

            <h1>Signup</h1>

            <form onSubmit={formik.handleSubmit}>
                <label> Names (first and last):</label>
                <input onChange={formik.handleChange} value={formik.values.names} type="text" name="names" id="names" placeholder="Enter Names Here" />
                {formik.errors.names}

                <div className="text-red-500 text-xs"></div>
                <label>Email:</label>
                <input onChange={formik.handleChange} value={formik.values.email} type="text" name="email" id="email" placeholder="Enter Email Here" />

                <div className="text-red-500 text-xs"></div>
                {formik.errors.email}

                <div>
                    <label>New Password:</label>
                    <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" placeholder="Enter New Password" />
                </div>
                <div className="text-red-500 text-xs">
                    {formik.errors.password}
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input onChange={formik.handleChange} value={formik.values.phonenumber} type="text" name="phonenumber" id="phonenumber" placeholder="Enter Phone Number Here" />
                </div>
                <div className="text-red-500 text-xs">
                    {formik.errors.phonenumber}
                </div>
                <div>
                    <label> Home Address:</label>
                    <input onChange={formik.handleChange} value={formik.values.address} type="password" name="address" id="address" placeholder="Enter Home Address Here" />

                    <div className="text-red-500 text-xs">
                        {formik.errors.address}
                    </div>

                    <br></br><button type="submit" >Signup</button>
                    <br></br>
                    <br></br>
                    {processing && <FaSpinner icon="spinner" className="spinner animate-spin" color="red" size={35} />}
                </div>
            </form>
        </div><div className="bg-image"></div></>
    )
}
export default Signup;

