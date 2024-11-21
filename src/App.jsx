import { BrowserRouter as Router } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import Public	 from "./Routes/Public"

import NavBar from "./components/Navbar"

function App() {
  

  return (
    <Router>
      <AuthProvider>
      <NavBar/>
      <Public/>
   
      </AuthProvider>

    </Router>
  )
}

export default App
