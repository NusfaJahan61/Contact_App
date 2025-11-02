import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import Header from "./components/Header"

function App() {
  const contacts = [
    {
      id: 1,
      name: "Ikra",
      contactNum: "+8912 1212 2112",
      email: "ikra@gmail.com"
    }, {
      id: 2,
      name: "Nusfa",
      contactNum: "+8912 1212 2112",
      email: "nusfa@gmail.com"
    }
  ]
  return (
    <>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </>
  )
}

export default App
