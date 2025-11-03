import React from 'react'
import user from './../images/user.jpg'

class AddContact extends React.Component {
  state = {
    name: '',
    contactNum: '',
    email: '',
  }
  add = (event) => {
    event.preventDefault()
    if (this.state.name === "" || this.state.contactNum === "" || this.state.email === "") {
      alert("Please fill all of the information!")
      return;
    }
    this.props.addContactHandler(this.state)
    this.setState({ name: "", contactNum: "", email: "" })
  }


  render() {
    return (
      <>
        <div className="contactCard" >
          <form action="" onSubmit={this.add}>
            <img style={{
              height: "150px",
              width: "150px",
              borderRadius: "100px",
              marginLeft: "45%"
            }} src={user} alt="user" />
            <label htmlFor="contactName">Contact Name</label>
            <input
              type="text"
              placeholder='Contact name'
              id='contactName'
              name='contactName'
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })} />
            <label htmlFor="ContactNumber">Contact</label>

            <input
              type="text"
              placeholder='Contact number'
              id='ContactNumber'
              name='ContactNumber'
              value={this.state.contactNum}
              onChange={(event) => this.setState({ contactNum: event.target.value })} />
            <label htmlFor="emailAdd">Email Address</label>

            <input
              type="email"
              placeholder='Email address'
              id='emailAdd'
              name='emailAdd'
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })} />
            <button>Add</button>
          </form>
        </div>
      </>
    )
  }
}
export default AddContact