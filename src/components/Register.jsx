import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = formData;


    const submithandler = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        if (!username  || !email || !password || !confirmPassword) {
            alert("Please fill in all input fields");
            return;
        }

        if (password.length < 5 || !password.match(/\d.*\d/)) {
            alert('Password must be at least 5 characters and  2 numbers');
            return;
          }    

          if(password !== confirmPassword){
            alert('Passwords do not match');
          }

    };

    const handlechanges = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Register</h1>
            <form onClick={submithandler}>
                <label htmlFor='username'>Name: </label>
                <input type="text" name="username" id='username' placeholder='name' value={formData.username} onChange={handlechanges} /><br />

                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id='email' placeholder='email' value={formData.email} onChange={handlechanges} /><br />

                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id='password' placeholder='password' value={formData.password} onChange={handlechanges} /><br />

                <label htmlFor='cnpassword'>Confirm Password: </label>
                <input type="password" id='cnpassword' name="confirmPassword" placeholder='confirm password' value={formData.confirmPassword} onChange={handlechanges} /><br />

                    <button type="submit" >
                          Register
                   </button>
            </form>
        </div>
    );
};

export default Register;
