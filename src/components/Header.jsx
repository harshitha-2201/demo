import React , {useState} from 'react'

const Header = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false); // State to track submission status



  const onSubmitHandler = (e) =>{
    e.preventDefault()
    console.log(username, email)

    if (username === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Password validation - at least 5 characters and 2 numbers
    if (password.length < 5 || !password.match(/\d.*\d/)) {
      alert('Password must be at least 5 characters and  2 numbers');
      return;
    }
  
  
    setUsername('');
    setEmail('');
    setPassword('');

    setSubmitted(true)

  }

  const passwordhandle = (e) =>{
    setPassword(e.target.value)

  }


  const userhandle = (e) =>{
    setUsername(e.target.value)

  }

  const emailHandle = (e) =>{
    setEmail(e.target.value)
  }



  return (
    <div>
       <form>
        <h1>FORM VALIDATION</h1>
        <label htmlFor='name'>USERNAME : </label>
        <input type = "text"placeholder = "name" id = 'name' value = {username}  onChange = {userhandle}/> <br/>
        <label htmlFor='email'>EMAIL : </label>
        <input type = "email" placeholder = "email" id = 'email' value = {email}  onChange = {emailHandle}/>
        <br/>
        <label htmlFor='password'>EMAIL : </label>
        <input type = "password" placeholder = "password" id = 'password' value = {password}  onChange = {passwordhandle}/>
        <br/>
        <button onClick = {onSubmitHandler}>Submit</button>
       </form>
       {submitted && <p>Form submitted succesfully</p>}
    </div>
  )
}

export default Header
