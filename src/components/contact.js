import React from "react";
import { useNavigate } from "react-router-dom"
import "./contact.css";

function Contact() {
    const navigate = useNavigate();
    return (
        <><><div className="container">
        </div><><h2>Contact us</h2><><><div>JHB Institute</div>
            <div>Email: Info@jesushousebaltimore.org</div></><div>410-521-4783</div><div>Facebook: Jesus House Baltimore</div> <div>Twitter: @JesusHouseBalt</div> <div>Address: 7710 Windsor Mill Rd, Windsor Mill, MD 21244</div></></></>
            <button onClick={() => navigate("/")}>Login Page</button>
            <button onClick={() => navigate("/signup")}>Signup Page</button>
            <button onClick={() => navigate("/resetpassword")}>Reset Password Page</button>
            <button onClick={() => navigate("/about")}>About Page</button>
            
        </> 


    )
}
export default Contact;