import React from 'react'
import '../App.css'

export default function LogoutBtn(props) {
  return (
    <>
      <button class="button" onClick={props.handleLogout}>Logout</button>
    </>
  )
}