import React ,{useReducer} from 'react'



var intialState = {count  : 0}

function reducer(state , action){
    switch(action.type){
        case "INCREMENT":
            return{count : state.count +1}
        case "DCREMENT" :
            return {count : state.count-1}
        default:
            throw new Error();
    }
}

const Usereducer = () => {
    const[state , dispatch] = useReducer(reducer , intialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button  onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick = {() => dispatch({type : "DCREMENT"})}>-</button>
    </div>
  )
}

export default Usereducer
