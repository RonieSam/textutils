import React from 'react'
import { useState } from "react";

export default function TextArea(props) {
  const [wordCount,setWordCount]=useState(0)
  const [text,setText]=useState("this is the state")
  const handleOnChange=(event)=>{
    setText(event.target.value)
    const wordArr=text.split(" ")
    let wordArrWOSpc=wordArr.filter((ele)=>ele!==" ")
    setWordCount(wordArrWOSpc.length?wordArrWOSpc.length:0)
 }
  
  const handleOnClickUC=()=>{
    setText(text.toUpperCase())
  }
  const handleOnClickCT=()=>{
    setText("")
    console.log(text.length)
  }
  
  return (
    <>
<div className="mb-3 my-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label my-4">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}/>
  <button className="btn btn-primary my-4" onClick={handleOnClickUC}>Submit</button>
  <button className="btn btn-dark my-4" onClick={handleOnClickCT}>Clear Text</button>

  <p>Words-{wordCount} Character-{text.length}</p>
</div>
    </>
  )
}
