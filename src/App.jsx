import { useState } from "react"
import AddContact from "./components/AddContact"
import ContactCard from "./components/ContactCard"
import ContactList from "./components/ContactList"
import Header from "./components/Header"
import NoContactMsg from "./components/NoContactMsg"

function App() {
  const [contacts, setContacts] = useState([])
  return (
    <>
      <Header />
      <AddContact />
      <ContactList />
      {
        contacts == " " ?
          <ContactCard contacts={contacts} /> :
          <NoContactMsg />
      }

    </>
  )
}

export default App
