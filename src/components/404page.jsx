import { useNavigate } from "react-router-dom"

function NotFound() {
  const goToHome = useNavigate()
  return (
    <div style={{ marginTop: "15%", marginLeft: "40%" }}>
      <h1>404 | Page not found!</h1>
      <button onClick={() => goToHome('/')} style={{ marginLeft: "10%" }}>Go to Home</button>
    </div >
  )
}
export default NotFound