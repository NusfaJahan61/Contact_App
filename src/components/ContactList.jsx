import React from 'react'
import user from './../images/user.jpg'

const ContactList = ({ contacts }) => {
  return (
    <>
      <hr />
      <center>
        <p style={{ fontSize: "40px" }}>Contact List</p>
      </center>
      {contacts.map((contactInfo, Id) => {
        return (
          <div key={Id} className='contactList'>
            <img src={user} alt="" style={{
              height: "100px",
              width: "100px",
              borderRadius: "100px",
              marginLeft: "10"
            }} />
            <div style={{ marginLeft: "20px", marginTop: "5px" }}>
              <p>{contactInfo.name}</p>
              <p>{contactInfo.contactNum}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ContactList