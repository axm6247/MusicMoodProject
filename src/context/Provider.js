import React, { useState, createContext } from 'react'

const Context= createContext({})
const Context2 = createContext({})
const Context3 = createContext({})
const Provider = ({ children }) => {
    const [controlsToggle, setControlsToggle] = useState(false);

    return (
        <Context.Provider value={[controlsToggle, setControlsToggle]}>
            {children}
        </Context.Provider>
    )
}

const Provider2 = ({ children2 }) => {
    // const [controlsToggle, setControlsToggle] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Context2.Provider2 value={[startDate, setStartDate]}>
            {children2}
        </Context2.Provider2>
    )
}

const Provider3 = ({ children3 }) => {
    // const [controlsToggle, setControlsToggle] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Context3.Provider3 value={[modalShow, setModalShow]}>
            {children3}
        </Context3.Provider3>
    )
}


export { Provider, Context , Provider2, Context2, Provider3, Context3}
