import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState("")
const handleonchange=(event)=>{
    setText(event.target.value)
}
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
}
const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
}
const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text-copied","success");
}
const handleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
}
const handleClrClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Textbox cleared","success");
}
  return (
    <>
    <div className='Container' style={{color: props.mode==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <div class="mb-3">
            <textarea className='form-control' value={text} style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#3d4763' }} onChange={handleonchange} id="myBox" rows="5"></textarea>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Conver to Uppercase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Conver to Lowercase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleSpace}>Remove extra Spaces</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy to clipboard</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleClrClick}>Clear</button>
        </div>
    </div>
    <div className='Container my-3' style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text===''?'0':text.trim().split(/\s+/).length} words, {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
    </div>
    </>
  )
}
