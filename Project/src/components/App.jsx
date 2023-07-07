import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Login from "./Login"
import Register from "./Register"
import Clubs from './Clubs'
import Navbar  from "./Navbar"
function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Clubs" element={<Clubs/>}/>
      </Routes>
    </>
  )
}

export default App
