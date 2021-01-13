import { React, createContext, useState } from 'react'

const Context= createContext({})

const Provider = ({ children }) => {
    const [controlsToggle, setControlsToggle] = useState(false);

    return (
        <Context.Provider value={[controlsToggle, setControlsToggle]}>
        </Context.Provider>
    )
}

export default {Context, Provider}