import React from 'react'
import Left from './Left/Left'
import Summary from './Right/Summary'
import "./Body.css";
import { useState } from 'react';
import { useContext } from 'react';
import { DashboardContext } from '../Context/DashboardContent';
import API from './Right/API';
import Errors from './Right/Errors';
import LongestRequests from './Right/LongestRequests';
import Navbar from '../Header/Navbar';
import {FaChevronCircleLeft,FaChevronCircleRight} from 'react-icons/fa'
const Body = () => {
    const { dashboardContent } = useContext(DashboardContext);
    const { sidebar } = useContext(DashboardContext);
    const { sidebarWidth } = useContext(DashboardContext);
    const [leftWidth, setLeftWidth] = useState("left");
    const changeWidth = () => {
        if (sidebar == "max") {
            sidebarWidth("min")
        }
        else {
            sidebarWidth("max");
        }
        if (leftWidth == "left") {
            setLeftWidth("min-left")
        }
        else {
            setLeftWidth("left")
        }
    }
  return (
      <div className="body">
          <div id="sidebar-fixed" className={leftWidth}>
              <div><Left /></div>
              <p style={{fontSize:"32px",textAlign:"center",position:"relative",top:"10px"}} className="dashboard-title" onClick={() => changeWidth()}>{leftWidth == "left" ? <FaChevronCircleLeft/> : <FaChevronCircleRight/>}</p>
              
          </div>
          <div className='right'>
              <Navbar/>
              {dashboardContent=="summary"?<Summary/>:dashboardContent=="api"?<API/>:dashboardContent=="errors"?<Errors/>:dashboardContent=="longest"&&<LongestRequests/>}
          </div>
    </div>
  )
}

export default Body