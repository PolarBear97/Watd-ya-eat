import React, { Component } from 'react'
import '../App.css'

export default function LogoutBtn(props) {


  return (
    <>
      <button onClick={props.handleLogout}>Logout</button>
    </>
  )

}