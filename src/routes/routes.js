import { Route } from "react-router"
import { Routes } from "react-router"
import SigninPage from '../components/SigninPage';
import About from '../components/about';
import Settings from '../components/settings';
import Signup from '../components/signup';
import Contact from '../components/contact';
import ResetPass from '../components/resetpassword';
import NotFound from '../components/notfound';
import Home from "../components/secure/home";
import RequireAuth from "../components/services/requireauth"
import Welcome from "../components/welcome";
const MyRoutes =()=>{
 return (
    <Routes>
    <Route path="/" element= {<SigninPage />}/>
      <Route path="/about" element={<About />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/contactus" element={<Contact />}></Route>
      <Route path ="/resetpassword" element={<ResetPass/>}></Route> 
      <Route path = "/welcome" element={<Welcome/>}></Route>
      <Route path="/Home" element= {
        // <RequireAuth>
        <Home />
      // </RequireAuth>
    }/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
 )   
}
export default MyRoutes