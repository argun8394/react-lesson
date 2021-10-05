import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import {useState} from "react";


function App() {
const [isVisible,setVisible] =useState(true);

  return (
    <div className="App">
      <button onClick={()=>setVisible(!isVisible)}> Toggle </button>
      {isVisible && <ClassComponent/>}// görünürlüğü manipüle ederiz
      {/* <ClassComponent/> */}
      <FunctionalComponent/>
      
    </div>
  );
}

export default App;
