import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='header'>
      <p style={{ fontSize: "40px" }}>Contact Manager</p>
      <div>
        <button onClick={() => navigate('/contacts', { replace: true })}>Go to Contacts</button>
        <button onClick={() => navigate('/')} style={{ marginLeft: "10px" }}>Add Contact</button>
      </div>
    </div>
  )
}

export default Header