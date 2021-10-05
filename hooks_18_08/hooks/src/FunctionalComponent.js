import React,{useState, useEffect} from 'react';

const FunctionalComponent=()=> {
    const [counter,setCounter]=useState(0);

useEffect(() => {
    console.log("useEffect");
    return()=>{ console.log("Func. Comp. willUnmount") }//funcComponent için willUnmount işlemi useEffect içindeki return ile yapılır
},[counter]);//useEffect bağımlılık verme boşsa ComponentDidMount- doluysa ComponentDidupdate şeklinde çalışır 

    const increase = () => {
        setCounter(counter+1);
    }


    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter :{counter} </p>
            <button onClick={()=>increase()}Increase>Increase</button>
        </div>
    )
};
export default FunctionalComponent;

