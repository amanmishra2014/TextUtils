import React, { useState } from "react";

export default function TextForm(props) {
  const upclicked = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }

  const loclicked = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const clearclicked = ()=>{
    let newText="";
    setText(newText)
  }
  const handleCopy =()=> {
    console.log("i ama copy");
    
    navigator.clipboard.writeText(text);
  }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  const onchange = (event)=>{
   setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <div style={{color: props.mode==='light'?'black':'white'}}>
      <div className="container mt-5">
      <h1>Enter Text To Analyze</h1>
        <div className="form-group">
          <textarea
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white'}}
            placeholder="Enter Text Here"
            className="form-control"
            id="exampleTextarea"
            rows="8"
            onChange={onchange}
            value={text}
          > </textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={upclicked}>Conver To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={loclicked}>Conver To lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clearclicked}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleReverse}>handleReverse </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" id="myBox" onClick={handleCopy}>Copy Text </button>
      </div>
      <div className="container">
        <h1>your summary
        </h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words And {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview It here"}</p>
      </div>
    </div>
  );
}
