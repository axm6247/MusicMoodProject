import React, { useState } from 'react'
import Context from './Context'

const Provider = ({ children }) => {
    const [controlsToggle, setControlsToggle] = useState(false);

    return (
        <Context.Provider value={[controlsToggle, setControlsToggle]}>
        </Context.Provider>
    )
}

export default Provider
