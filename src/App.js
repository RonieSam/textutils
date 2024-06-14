import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import TextArea from './components/textArea';
// import About from './components/abou';
function App() {
  const [mode,setMode]=useState("Light")
  const toggleMode=()=>{
    if(mode==="Dark"){
      setMode("Light")
      document.body.style.backgroundColor="white"
    }
    else{
      setMode("Dark")
      document.body.style.backgroundColor="black"

    }
  }
  return (
    < >
      <NavBar title="TextUtils" text="Home" mode={mode} toggleMode={toggleMode}/>
      <div className='container'><TextArea mode={mode}/></div>
      {/* <About/> */}
    </>
  );
}

export default App;
