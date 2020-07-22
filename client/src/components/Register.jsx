import React from 'react'
import '../App.css'

export default function Register(props) {
  return (
    <div>
      <div className="register">
        <form onSubmit={props.handleRegister} />
        <form>
          <div className="pair">
            <label htmlFor='username'>Username</label>
            <input name="username" type="text" class="button" value={props.userData.username} onChange={props.handleChange} />
          </div>
          <div className="pair">
            <label htmlFor='password'>Password</label>
            <input name="password" type='password' class="button" value={props.userData.password} onChange={props.handleChange} />
          </div>
          <input type='submit' value='Register' />
        </form>
      </div>
    </div>
  )
}