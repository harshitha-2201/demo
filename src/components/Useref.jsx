import React, { useRef , useEffect } from 'react';

const Useref = () => {
 const data = useRef(null)



  function submitHandler(e) {
    e.preventDefault();
    alert('Form Submitted');
    console.log(data.current.value);
  }
  /* thi is call autofousing it means focusing th curser om a inputfield */
  useEffect(() =>{
    data.current.focus();
  } , [])

  return (
    <div>
      <form onSubmit = {submitHandler}>
      <input type='text' ref = {data}/>
      <button>Click</button>
      </form>
    </div>
  );
};

export default Useref;
