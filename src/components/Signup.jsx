import React, { useState } from 'react'
import './css/signup.css'
import {auth} from '../firebaseconfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async(e) => {
    e.preventDefault();
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully!');
    } catch(error){
      console.error('Error creating user with email and password:', error);
      alert('Failed to create user');
    }
  }
  return (
    <div id='signupbody'>
<div id="signupcontent">
  <h1>Sign Up</h1>
  <form onSubmit={handlesubmit}>
    <input type="text" id="name" name="name" placeholder='User Name'/>
    <input type="text" id="email" name="email" placeholder='Email' 
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" id="password" name="password" placeholder='Password' 
    onChange={(e) => setPassword(e.target.value)}/> <br />
    <button type="submit" value="Submit">submit</button>
    <p>Already have an account? <a href="/">Login</a></p>
  </form>
  </div>    
  </div>
  )
}

export default Signup
