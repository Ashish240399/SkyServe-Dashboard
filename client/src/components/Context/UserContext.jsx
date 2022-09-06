import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState();
    const findUser = (name) => {
        setUserName(name);
    }
    return (
        <UserContext.Provider value={{findUser,userName}}>{ children}</UserContext.Provider>
    )
}