import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import UserCard from "./components/userCard"

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      {/* <h1 className="text-4xl text-black bg-amber-800 ">Skill share</h1> */}
      <UserCard />
    </>
  )
}

export default App
