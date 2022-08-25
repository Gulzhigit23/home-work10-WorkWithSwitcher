
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Toggle from './components/Toggle';



function App() {
const [toggled, setToggled] = useState(false)

  return (
    <Container toggled={toggled} >
  <Toggle onChange={(event) => setToggled(event.target.checked)}/>
    <p style={{color:'red', fontSize:'22px'}}>The swich is {toggled ? 'ON' : 'OFF'}</p>
    </Container>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100%;
background: ${(props) => (props.toggled ? 'white' : 'black')};
border: solid;
display: flex;
justify-content: center;

`

