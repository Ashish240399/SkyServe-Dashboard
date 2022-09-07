import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import logo from "../../Image/skyserveIMG.png"
import "./UserProfile.css";
import { Link } from 'react-router-dom';
import { FaUserAlt} from 'react-icons/fa'
import Footer from '../Footer/Footer';
const UserProfile = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
    <div className='login-mainPage'>
      <div className="profile-nav">
        <div>
          <Link to="/"><img src={ logo} /></Link>
        </div>
         <div style={{fontWeight: 'bold',fontSize:"20px"}}>{userName.name}<FaUserAlt style={{marginLeft: '10px'}}/></div>
      </div>
      <div style={{ width: "50%", margin: "auto", marginTop: "50px", display: "flex", border: "2px solid white", borderRadius: "30px", padding: "20px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
        <div style={{flex:1}} className="LeftSidePanel"></div>
        <div style={{flex:1}} className="RightSidePanel">
          <form style={{width:"80%"}}>
              <div style={{fontSize:"24px",color:"white",marginBottom:"20px"}}>Profile</div>
              <input name='name' type="text" required placeholder='First Name' />
              
              <input name='name' type="text" required placeholder='Last Name' />
              <input type="email" required placeholder="Company Email Address" />
            <input name='company-name' type="text" placeholder='Company Name' required />
            <input type="text" placeholder='Address' required/>
              <button style={{marginLeft:"50px"}}>Submit</button>
        </form>
        </div>
      </div>
      </div>
      </div>
  )
}

export default UserProfile