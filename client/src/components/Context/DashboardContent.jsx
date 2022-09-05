import { useState } from "react";
import { createContext } from "react";

export const DashboardContext = createContext();
export const DashboardContextProvider = ({children}) => {
    const [dashboardContent, setDashboardContent] = useState("summary");
    const findContent = (data) => {
        setDashboardContent(data)
    }
    console.log(dashboardContent);
    return (
        <DashboardContext.Provider value={{dashboardContent,findContent}}>{children}</DashboardContext.Provider>
    )
}