import { useEffect, useState } from "react"
import AddContact from "./components/AddContact"
import ContactCard from "./components/ContactCard"
import ContactList from "./components/ContactList"
import NoContactMsg from "./components/NoContactMsg"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from "react-router-dom"
import RootLayout from "./layout/RootLayout"

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


  // ____________ROUTER:

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/contacts" element={<ContactCard contacts={contacts} />} />
      </Route>
    )
  )



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
