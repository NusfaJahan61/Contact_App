import React from 'react'
import user from './../images/user.jpg'

const ContactCard = ({ contacts }) => {
  return (
    <>
      <hr />
      <center>
        <p style={{ fontSize: "40px" }}>Contact List</p>
      </center>
      {
        contacts.map((contactInfo, Id) => {
          return (
            <div key={Id} className='contactList'>
              <img src={user} alt="" style={{
                height: "100px",
                width: "100px",
                borderRadius: "100px",
                marginLeft: "10"
              }} />
              <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                <p style={{ fontSize: "22px" }}>{contactInfo.name}</p>
                <p>{contactInfo.contactNum}</p>
                <p>{contactInfo.email}</p>
              </div>
              <button style={{ marginLeft: "70%", marginTop: "35px" }}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default ContactCard