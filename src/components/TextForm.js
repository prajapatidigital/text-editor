import { useState } from "react"
import React  from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClear = () =>{
        let newText = ''
        setText(newText)
    }

    const handleCopy = () =>{
        var text = document.getElementById('mybox1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) =>{
setText(event.target.value)
    }
    const [text,setText] = useState('')
  return (
    <>
    <div className="container">


<div className="mb-3 my-3">
<h1>{props.heading}</h1>
<textarea className="form-control" value={text} onChange={handleOnChange} id="mybox1" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
 <button className="btn btn-primary mx-2" onClick={handleLowClick}>LOWERCASE</button>
 <button className="btn btn-primary mx-2" onClick={handleClear}>CLEAR TEXT</button>
 <button className="btn btn-primary mx-2" onClick={handleCopy}>COPY TEXT</button>
    </div>
<div className="container my-3">
    <h1>your text summary</h1>
    <p>{text.split(' ').length-1} words and {text.length} characters</p>

    <h2>preview</h2>
    <p>{text}</p>
</div>
    </>
  )
}
