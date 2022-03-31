import React from "react";
import {useNavigate} from "react-router-dom"
import "./contact.css"; 
function Contact() {
    return (
        <><><div className="container">
        </div><><h2>Contact us</h2><><><div>JHB Institute</div>
            <div>Email: Info@jesushousebaltimore.org</div></><div>410-521-4783</div><div>Facebook: Jesus House Baltimore</div> <div>Twitter: @JesusHouseBalt</div></></></><button> <a href="http://localhost:3000/">Login Page </a> </button> <button> <a href="/signup">Signup </a> </button> <button> <a href="/resetpassword">Forgot Password?</a> </button> <button> <a href="/about">About Us</a> </button></>
    )
}
export default Contact;