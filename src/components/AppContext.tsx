import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

export interface User{
    email?: string,
    password?: string,
    name?: string,
    balance?: number,
    id?: string
}

interface IAppContext {
    userInfo: User,
    setUserInfo: (user: User) => void;
}
  
export const AppContext = createContext({} as IAppContext);
  
export const AppContextProvider = ({ children }: any) => {
    const [ userInfo, setUserInfo] = useState<User>({});

    const storage = getAllLocalStorage();

    useEffect(() => {
      if(storage){
        const { user } = JSON.parse(storage);
        setUserInfo(user);
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ userInfo, setUserInfo }}>
        { children }
      </AppContext.Provider>
    )
}