import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='container'>
      <h2>Login</h2>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/><br/>
      <button>Login</button><br/><br/>
      <p>New User..?<br/><Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
export default Login
