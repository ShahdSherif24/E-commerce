import { createContext, useState } from "react";

export let UserTokenContext = createContext(null);

export default function UserTokenContextProvider({ children }) {
    let [token, setToken] = useState(null);
    <UserTokenContext.Provider value={{ token, setToken }} >

        {children}

    </UserTokenContext.Provider >
}