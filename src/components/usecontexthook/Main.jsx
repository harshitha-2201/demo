import React,{createcontext ,useState} from 'react'
export const MainContext = createcontext();

const Main = ({children}) => {
    const [userdetails , setUserdetails] = useState(true)
  return (
    <div>
 <MainContext.Provider values = {userdetails} >
    {children}
 </MainContext.Provider>
    </div>
  )
}

export default Main
