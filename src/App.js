import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App=() =>{

  let newTime= new Date().toLocaleTimeString();
// console.log(newTime);"
//console.log("khursheed")

const state=useState();

const[ctime,setTime]=useState(newTime);

const updateTime =()=>{
  newTime= new Date().toLocaleTimeString();
  setTime(newTime);
}

  return (
    <div className="App">
     <h1>{ctime}</h1>
     <button onClick={updateTime}>GATE TIME</button>
     
    </div>
  );
}

export default App;
