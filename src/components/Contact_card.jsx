import React from 'react'
import user from './../images/user.jpg'

const Contact_card = () => {
  return (
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
        <input type="number" placeholder='Contact number' id='ContactNumber' name='ContactNumber' />
        <label htmlFor="emailAdd">Email Address</label>
        <input type="email" placeholder='Email address' id='emailAdd' name='emailAdd' />
      </form>
    </div>
  )
}

export default Contact_card