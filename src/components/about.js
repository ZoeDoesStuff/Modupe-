import React from "react";
import { useNavigate } from "react-router-dom"
import "./about.css";
function About() {
    const navigate = useNavigate();    
    return (
    
        <><><><><><h2>JHB Computer Programming Assessment</h2><p>This is the test that will allow to show your skills when it comes to things such as common knowledge, your skill in math, etc.<br></br> It will show your instructors if you are a good choice to be a part of our class for a very informative ten weeks. Good Luck!<br></br></p></>
       <button onClick={() => navigate("/")}>Login Page</button>
       <button onClick={() => navigate("/signup")}>Signup Page</button> 
       <button onClick={() => navigate("/contactus")}>Contact Us Page </button>  
       <button onClick={() => navigate("/resetpassword")}>Reset Password Page</button></></><></></></>

    )
}
export default About;

