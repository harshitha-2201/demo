import React ,{useContext} from 'react'
import {Maincontext} from './Main'


const Subchildren = () => {
    const mains=   useContext(Maincontext)
    console.log(mains)
    return (
      <h1>Hllo</h1>
   
  )
}

export default Subchildren
