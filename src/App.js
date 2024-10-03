
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home'
import NoPage from './components/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
   
    <BrowserRouter>
    
    <Navbar mode={mode} toggleMode={toggleMode} />
   
  
      <Routes>
        <Route path="/" element={<TextForm heading="enter the text for edit" />}> </Route>
        <Route index element={<TextForm heading="enter the text for edit" />} />
        
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
