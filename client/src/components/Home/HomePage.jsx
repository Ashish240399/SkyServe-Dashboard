import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Body from '../Body/Body'
import { UserContext } from '../Context/UserContext';

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
      <div>
      <h1>It is Homepage</h1>
      
      {userName==undefined?<button onClick={() => navigate("/login")}>Login</button >:<h2>You have Logged in</h2>}
      <button onClick={() => {
        goToDashboard();
      }}>Dashboard</button>
      {/* <button disabled={userName ? true : false} onClick={() => navigate("/login")}>{ userName?"You have already loggedin":"Login"}</button> */}
    </div>
  )
}

export default HomePage