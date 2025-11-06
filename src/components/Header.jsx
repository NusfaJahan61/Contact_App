import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <p style={{ fontSize: "40px" }}>Contact Manager</p>
      <div>
        <NavLink to="/contacts" ><button>Go to Contacts</button></NavLink>
        <NavLink to="/" ><button style={{ marginLeft: "10px" }}>Add Contact</button></NavLink>
      </div>
    </div>
  )
}

export default Header