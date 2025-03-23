import React from 'react'
import {Link} from 'react-router-dom'

const REGISTER = () => {
  return (
    <div>
      <div className='container'>
      <h2>Register</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/><br/>
      <button>Register</button><br/><br/>
      <p>Already have an Account..?<br/><Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default REGISTER
