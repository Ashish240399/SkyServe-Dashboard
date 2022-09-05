import React from 'react'
import "./Sidebar.css";
import Logo from "../../Image/skyserveIMG.png"
import { useContext } from 'react';
import { DashboardContext } from '../Context/DashboardContent';
const Sidebar = () => {
    const { dashboardContent } = useContext(DashboardContext);
    const { findContent } = useContext(DashboardContext);
  return (
    <div className='sidebar'>
          <div>
              <img className='logo' src={Logo} />
               <hr/>
          </div>
         
          <p onClick={()=>findContent("summary")} className={`${dashboardContent=="summary"?"dashboard-title active":"dashboard-title"}`}>Summary
               <hr/>
          </p>
          <p onClick={()=>findContent("api")} className={`${dashboardContent=="api"?"dashboard-title active":"dashboard-title"}`}>API Calls
               <hr/>
          </p>
          <p onClick={()=>findContent("errors")} className={`${dashboardContent=="errors"?"dashboard-title active":"dashboard-title"}`}>Errors
               <hr/>
          </p>
          <p onClick={()=>findContent("longest")} className={`${dashboardContent=="longest"?"dashboard-title active":"dashboard-title"}`}>Longest Requests
               <hr/>
          </p>
    </div>
  )
}

export default Sidebar