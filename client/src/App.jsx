import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Protected/Home"
import Search from "./Pages/Protected/Search"
import Error from "./Pages/Error"
import Register from "./Pages/Register"
import ProtectedLayout from "./Pages/Protected/ProtectedLayout"
import ProfileLayout from "./Pages/Protected/Profile/ProfileLayout"
import Threads from "./Pages/Protected/Profile/Threads"
import Replies from "./Pages/Protected/Profile/Replies"
import Repost from "./Pages/Protected/Profile/Repost"
import SinglePost from "./Pages/Protected/SinglePost"
import Login from "./Pages/Login"

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProtectedLayout />} >
          <Route path="" element={<Home />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="search" element={<Search />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route exact path="profile" element={<ProfileLayout />} >
            <Route exact path="threads/:id" element={<Threads />} />
            <Route exact path="replies/:id" element={<Replies />} />
            <Route exact path="repost/:id" element={<Repost />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
