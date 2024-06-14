import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import TextArea from './components/textArea';
import About from './components/about';
import {
  Route,
  BrowserRouter as Router,
  Routes,
 
} from "react-router-dom"
function App() {
  const [mode,setMode]=useState("Light")
  const [colorMode,setColor]=useState("black")
  const toggleMode=()=>{
    if(mode==="Dark"){
      setMode("Light")
      document.body.style.backgroundColor="white"
      setColor("black")
    }
    else{
      setMode("Dark")
      document.body.style.backgroundColor="black"
      setColor("white")

    }
  }
  return (
    <Router>
    < > 
    <NavBar title="TextUtils" text="About" mode={mode} toggleMode={toggleMode}/>
    <Routes>
      <Route path="/" element={<TextArea mode={mode} colorMode={colorMode}/>}>
           

      </Route>
      <Route path="/about" element={<About mode={mode}/>}>
            
      </Route>
    </Routes>
    </>

    </Router>
  );
}

export default App;
