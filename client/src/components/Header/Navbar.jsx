import React from 'react'
import "./Navbar.css"
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { FaUserAlt,FaSearch,FaPowerOff } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext);
  const { findUser } = useContext(UserContext);
  console.log(userName);
  return (
    <div className='navbar'>
      {/* <Avatar>{userName[0].name.substring(0, 2)}</Avatar> */}
      <div className="search"><input className='search-input' type="search"/><div className='search-logo'><FaSearch/></div></div>
      <div>
        <span className='profile-icon'  onClick={() => {
        navigate("/user")
      }}>{userName.name} <span style={{paddingLeft:"10px"}}><FaUserAlt></FaUserAlt></span></span>
        <FaPowerOff className="power-off" style={{marginLeft:"60px"}} onClick={
          () => {
            findUser();
            navigate("/");
          }
        }/>
      </div>
    </div>
  )
}

export default Navbar