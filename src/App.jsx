import { useEffect, useState } from "react"
import AddContact from "./components/AddContact"
import ContactCard from "./components/ContactCard"
import ContactList from "./components/ContactList"
import Header from "./components/Header"
import NoContactMsg from "./components/NoContactMsg"
import { Route, Routes } from "react-router-dom"

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
      <Routes>
        <Route path="/" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/contacts" element={<ContactCard contacts={contacts} />} />
      </Routes>
      <ContactList />
    </>
  )
}

export default App
