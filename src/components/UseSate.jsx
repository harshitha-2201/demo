import React, { useState } from 'react'; /*  */

const UseStateComponent = () => {
  
  const [count, setCount] = useState(3);/* counter explme */

  const [name , setName] = useState('')/*input exaple  */

  const [lighton , setLighton] = useState("false")/* toggle example like ternary opertion */

  function IncreaseCounter () {
    setCount((prevCount) => prevCount +1 );

  }
  function DecreaseCounter () {
    setCount((prevCount) => prevCount -1 );



  }
  function ChangeHandler (e){   /* input exple */
    setName(e.target.value);

  }

  return (
    <div>
      <button onClick={IncreaseCounter}>Increase</button>
      <input type = 'text' value = {name} onChange = {ChangeHandler} /> 
      <h1> {name} has clicked by button  {count} tims</h1>
      <button onClick={DecreaseCounter}>Decrese</button>

      <diV>
        <p>The light {lighton ? "on" : "off"}</p>
        <button onClick = {() =>setLighton(!lighton)}>Lights</button>
      </diV>
    </div>
  )
}
export default UseStateComponent;
