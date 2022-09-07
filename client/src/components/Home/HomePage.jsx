import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Body from '../Body/Body'
import { UserContext } from '../Context/UserContext';
import logo from "../../Image/skyserveIMG.png"
import "./Homepage.css";
import Footer from '../Footer/Footer';
const HomePage = () => {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext);
  
  const goToDashboard = () => {
    if (userName == undefined) {
      alert("Login first!");
    }
    else {
      navigate("/dashboard");
    }
  }
  return (
      <div className='homepage'>
      {/* <h1>It is Homepage</h1> */}
      <div className='homepage-header'>
        <div><img src={logo} /></div>
        <div style={{display: 'flex'}}>
          {userName==undefined?<button className='login-btn' onClick={() => navigate("/login")}>Login</button >:<p>You have Logged in</p>}
          <button className='dashboard-btn' onClick={() => {
            goToDashboard();
          }}>Dashboard</button>
        </div>
        
      </div>
      <div style={{color:"white"}}>weugdiue</div>
      {/* <Footer/> */}
      {/* <button disabled={userName ? true : false} onClick={() => navigate("/login")}>{ userName?"You have already loggedin":"Login"}</button> */}
    </div>
  )
}

export default HomePage