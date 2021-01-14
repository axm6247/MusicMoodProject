import React, { useState, createContext } from 'react'

const Context= createContext({})

const Provider = ({ children }) => {
    const [controlsToggle, setControlsToggle] = useState({});

    return (
        <Context.Provider value={[controlsToggle, setControlsToggle]}>
            {children}
        </Context.Provider>
    )
}

export { Provider, Context }