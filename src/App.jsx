import { useEffect, useState } from "react"
import AddContact from "./components/AddContact"
import ContactCard from "./components/ContactCard"
import ContactList from "./components/ContactList"
import Header from "./components/Header"
import NoContactMsg from "./components/NoContactMsg"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    const reloadData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (reloadData) {
      const retriveData = JSON.parse(reloadData)
      setContacts(retriveData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

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
