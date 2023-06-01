import React,{useState} from "react"
import CardFlip from "./components/CardFlip"
import CartInput from "./components/CardInput"
import {Routes, Route } from "react-router-dom"
function App() {

   const [inputAdd, setInputAdd] = useState([])

  return (
    <div>
      <Routes>
        <Route path="/" element={<CardFlip  inputAdd={inputAdd} setInputAdd={setInputAdd}/>}/>
        <Route path="/cartinput" element={<CartInput inputAdd={inputAdd} setInputAdd={setInputAdd} />}/>
      </Routes>
    </div>
  )
}

export default App
