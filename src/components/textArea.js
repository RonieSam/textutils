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
<div className="mb-3 my-4" data-bs-theme={props.mode.toLowerCase()} >
  <label htmlFor="exampleFormControlTextarea1" className="form-label my-4">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{borderWidth:1,borderColor:(props.mode==="Light")?"black":"", margin:5}} />
  <button className={`btn btn-${props.mode.toLowerCase()} my-4 mx-2`}  onClick={handleOnClickUC} style={{borderWidth:1,borderColor:(props.mode==="Light")?"black":"", margin:5}}>Submit</button>
  <button className={`btn btn-${props.mode.toLowerCase()} my-4 mx-2`}  onClick={handleOnClickCT} style={{borderWidth:1,borderColor:(props.mode==="Light")?"black":""}}>Clear Text</button>

  <p style={{color:(props.mode==="Light")?"black":"white"}}>Words-{wordCount} Character-{text.length}</p>
</div>
    </>
  )
}
