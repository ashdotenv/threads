import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Protected/Home"
import Search from "./Pages/Protected/Search"
import Error from "./Pages/Error"
import Register from "./Pages/Register"
import ProtectedLayout from "./Pages/Protected/ProtectedLayout"

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProtectedLayout />} >
          <Route path="" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
