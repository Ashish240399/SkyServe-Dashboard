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
const Body = () => {
    const { dashboardContent } = useContext(DashboardContext);
    const [leftWidth, setLeftWidth] = useState("left");
    const changeWidth = () => {
        if (leftWidth == "left") {
            setLeftWidth("min-left")
        }
        else {
            setLeftWidth("left")
        }
    }
  return (
      <div className="body">
          <div className={leftWidth}>
              <Left />
              <p className="dashboard-title" onClick={() => changeWidth()}>{leftWidth == "left" ? "minimize" : "maximize"}</p>
              <hr/>
          </div>
          <div className='right'>
              {dashboardContent=="summary"?<Summary/>:dashboardContent=="api"?<API/>:dashboardContent=="errors"?<Errors/>:dashboardContent=="longest"&&<LongestRequests/>}
          </div>
    </div>
  )
}

export default Body