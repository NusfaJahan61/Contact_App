import { useState } from "react"
import AddContact from "./components/AddContact"
import ContactCard from "./components/ContactCard"
import ContactList from "./components/ContactList"
import Header from "./components/Header"
import NoContactMsg from "./components/NoContactMsg"

function App() {
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }
  return (
    <>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactCard contacts={contacts} /> :
      <ContactList />
    </>
  )
}

export default App
