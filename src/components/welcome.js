import React from "react";
import "./contact.css"; 
import { useNavigate } from "react-router-dom" 
function Welcome() {
   const navigate = useNavigate()
    return (
        <><div>Welcome Friend! Thank you for Joining Us! Click below to start your test now! Please do this test only once.</div><br></br><button onClick={()=>{navigate("/home")} }>Start Test</button></>
        )
}
export default Welcome;