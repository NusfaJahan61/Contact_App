import React from 'react'
import user from './../images/user.jpg'

class AddContact extends React.Component {
  // state = {
  //   name: '',
  //   contact: '',
  //   email: '',
  // }
  // add = () => {

  // }
  render() {
    return (
      <>
        <div className="contactCard" >
          <form action="">
            <img style={{
              height: "150px",
              width: "150px",
              borderRadius: "100px",
              marginLeft: "45%"
            }} src={user} alt="user" />
            <label htmlFor="contactName">Contact Name</label>
            <input type="text" placeholder='Contact name' id='contactName' name='contactName' />
            <label htmlFor="ContactNumber">Contact</label>
            <input type="text" placeholder='Contact number' id='ContactNumber' name='ContactNumber' />
            <label htmlFor="emailAdd">Email Address</label>
            <input type="email" placeholder='Email address' id='emailAdd' name='emailAdd' />
            <button>Add</button>
          </form>
        </div>
      </>
    )
  }
}
export default AddContact