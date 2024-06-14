import './App.css';
import NavBar from './components/navbar';
import TextArea from './components/textArea';
function App() {
  return (
    < >
      <NavBar title="TextUtils" text="Home"/>
      <div className='container'><TextArea/></div>
      
    </>
  );
}

export default App;
