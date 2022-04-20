import React from "react";
import {useNavigate} from "react-router-dom"
import "./resetpassword.css"; 
function ResetPass() {
    const navigate = useNavigate();
    return (
        <><div className="grid grid-cols-2" /><>
            </><h2 className="font-sans-serif">Reset Password</h2><div>(This page is still a work in progress and does not work. Sorry!)</div><br /><label htmlFor="email">Email:</label><input type="email" name="email" id="email" />
            <br></br><label htmlFor="newpassword">New Password:</label><input type="password" name="newpassword" id="newpassword" />
            <br></br><button type="submit">Enter</button><br></br>
            <button onClick={() => navigate("/")}>Login Page</button>
            <button onClick={() => navigate("/signup")}>Signup Page</button>
            <button onClick={() => navigate("/about")}>About Page</button>
            <button onClick={() => navigate("/contactus")}>Contact Us Page</button>  
            </>
       
       )
}
export default ResetPass;