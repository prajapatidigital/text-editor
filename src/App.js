
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode,setMode]=useState('light');

  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743'
        document.body.style.color ='white'
    }
    else{
      setMode('light')
       document.body.style.backgroundColor ='white'
         document.body.style.color ='#042743'
    }
  }
  return (
    <div className="App">
    <Navbar mode={mode} toggleMode={toggleMode} />

    <div className="container">
    <TextForm heading="enter the text for edit"/>
    {/* <About/> */}
    </div>
   
 



    </div>
  );
}

export default App;
