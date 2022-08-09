import { useState } from 'react';
import styled from 'styled-components';
import './App.css';



function App() {
  const [color,setColor] = useState(false)
  

  function colorChange (){
    setColor(!color)
  }

  return (
    <div >

    <Div style={{backgroundColor: color ? 'black' : 'white' } } >
    <h1 style={{color: color ? "white" : 'black'}}>Shamil</h1>
    <button onClick={colorChange}>Click</button>
     
    </Div>
    </div>
  );
}

export default App;


const Div = styled.div`
background-color: black;
color: white;
margin: auto;
width: 400px;
height: 400px;
border-radius: 50px;
text-align: center;
border: 3px solid red;
  button{
    border-radius: 10px;
    border:2px solid aqua;
  }

`
