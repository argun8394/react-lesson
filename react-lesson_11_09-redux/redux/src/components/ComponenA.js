//componentA.js
import React from 'react'
import '../App.css';
import {useSelector, useDispatch} from "react-redux";
//işlem yapabilmek için useSelector ile state çekeceğiz
//action u gerçekleştirebilmek için useDispatch  import ettik
import {arttır, eksilt, reset} from "../redux/Actions" 
//alternatif yöntemi import ettik (Actions.js)

const ComponentA = () => {

    const myCounter = useSelector((state)=> state.counter)
    const dispatch = useDispatch();
    return (
        <div className="App" style={{backgroundColor:"yellow", height:"35vh"}}>
          <h2>ComponentA</h2>
          <h2>Count: {myCounter}</h2>
          <button type="button" onClick={()=>dispatch({type:"INCREASE_COUNTER"})}>ARTTIR</button>
          <button type="button" onClick={()=>dispatch({type:"DECREASE_COUNTER"})}>EKSİLT</button>
          <button type="button" onClick={()=>dispatch({type:"RESET", payload:0})}>SIFIRLA</button>
          {/*dispatch({type:"INCREASE_COUNTER"}) diyerek reducer daki function u çalıştırmış olduk*/}
          {/*Actions.js teki yöntemi kullanamak isteseydik onClick={()=>dispatch(arttır())} diyecektik (aynı şekilde diğer butonlar için de reset(), eksilt())*/}
        </div>
    )
}

export default ComponentA