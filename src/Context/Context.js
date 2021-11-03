import React,{useState} from 'react'

const stateContext = React.createContext()
export  function Context({children}) {
    const [bucket,SetBucket]=useState([])
    return (
        <stateContext.Provider value={{bucket,SetBucket}}>
            {children}
        </stateContext.Provider>
    )
}
export default stateContext ;
