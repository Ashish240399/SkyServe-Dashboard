import React from 'react'
import "./Sidebar.css";
import Logo from "../../Image/skyserveIMG.png"
import { useContext } from 'react';
import { DashboardContext } from '../Context/DashboardContent';
import { useNavigate } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa'
import {BsGrid3X2GapFill,BsFolderSymlinkFill} from "react-icons/bs";
import {MdRunningWithErrors} from "react-icons/md";
const Sidebar = () => {
    const { dashboardContent } = useContext(DashboardContext);
     const { findContent } = useContext(DashboardContext);
     const {sidebar}=useContext(DashboardContext);
     const navigate=useNavigate()
  return (
    <div className='sidebar'>
          <div onClick={()=>navigate("/")}>
              <img className='logo' src={Logo} />
               <hr/>
          </div>
         
            <div id={`${sidebar == "max" ? "maximum" : "minimum"}`} onClick={() => findContent("summary")} className={`${dashboardContent == "summary" ? "dashboard-title active" : "dashboard-title"}`}><div style={{display:"flex",alignItems:"bottom"} }><FaClipboardList/></div><div>Summary</div>
               
          </div>
          <hr/>
            <div id={`${sidebar == "max" ? "maximum" : "minimum"}`} onClick={() => findContent("api")} className={`${dashboardContent == "api" ? "dashboard-title active" : "dashboard-title"}`}><div style={{ display: "flex", alignItems: "bottom" }}><BsGrid3X2GapFill/></div><div>API Calls</div>
               
          </div>
          <hr/>
            <div id={`${sidebar == "max" ? "maximum" : "minimum"}`} onClick={() => findContent("errors")} className={`${dashboardContent == "errors" ? "dashboard-title active" : "dashboard-title"}`}><div style={{ display: "flex", alignItems: "bottom" }}><MdRunningWithErrors/></div><div>Errors</div>
               
          </div>
          <hr/>
            <div id={`${sidebar == "max" ? "maximum" : "minimum"}`} onClick={() => findContent("longest")} className={`${dashboardContent == "longest" ? "dashboard-title active" : "dashboard-title"}`}><div style={{ display: "flex", alignItems: "bottom" }}><BsFolderSymlinkFill/></div><div>Longest Requests</div>
               
          </div>
          <hr/>
    </div>
  )
}

export default Sidebar