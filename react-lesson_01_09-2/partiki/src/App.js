import React, {useState, useEffect } from 'react'
import Header from "./components/Header.js"
import List from "./components/List"
import fs from './assets/fs.png'
import aws from "./assets/aws.png"
import axios from "axios";

const App = () => {
  const [counter, setCounter] = useState(0)
  const [img, setImg] = useState()
  const [studentsList, setStudentsList] = useState([])


  useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setStudentsList(res.data));
    
  }, [])

  return (
    <div className="App">
      <Header img={img} />
      <p>counter: {counter}</p>

      <button onClick={()=> setCounter(counter +1)}>increase</button>
      <button onClick={()=> setImg(fs)}>FS</button>
      <button onClick={()=> setImg(aws)}>AWS</button>
      <button onClick={()=> setImg("")}>reset</button>
      <hr />
      <List students={studentsList} />
    </div>
  )
}

export default App