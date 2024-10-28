import { createContext, useState } from "react";



//create context
export let CounterContext = createContext(0)
export default function CounterContextProvider(props) {

    let [Counter, setCounter] = useState(20);
    let [username, setUsername] = useState("Route")
    return <CounterContext.Provider value={{ Counter, setCounter }}>
        {props.children}
    </CounterContext.Provider>
}



