import { useState } from "react";
import { createContext } from "react";

export const DashboardContext = createContext();
export const DashboardContextProvider = ({children}) => {
    const [dashboardContent, setDashboardContent] = useState("summary");
    const [sidebar, setSidebar] = useState("max");
    const findContent = (data) => {
        setDashboardContent(data)
    }
    const sidebarWidth = (data) => {
        setSidebar(data);
    }
    console.log(sidebar);
    console.log(dashboardContent);
    return (
        <DashboardContext.Provider value={{dashboardContent,findContent,sidebar,sidebarWidth}}>{children}</DashboardContext.Provider>
    )
}