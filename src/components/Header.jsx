import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <p style={{ fontSize: "40px" }}>Contact Manager</p>
      <div>
        <Link to="/contacts" ><button>Go to Contacts</button></Link>
        <Link to="/" ><button style={{ marginLeft: "10px" }}>Add Contact</button></Link>
      </div>
    </div>
  )
}

export default Header