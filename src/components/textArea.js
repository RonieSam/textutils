import React from 'react'
import { useState } from "react";

export default function TextArea(props) {
  const [wordCount,setWordCount]=useState(0)
  const [text,setText]=useState("")
  const handleOnChange=(event)=>{
    setText(event.target.value)
    const wordArr=event.target.value.trim().split(/\s+/);
    console.log(wordArr)
     let wordArrWOSpc=wordArr.filter((ele)=>{
        return ele!==""})
    
    setWordCount(wordArrWOSpc.length)
 }
  
  const handleOnClickUC=()=>{
    setText(text.toUpperCase())
  }
  const handleOnClickCT=()=>{
    setText("")
    setWordCount(0)
  }
  const handleClickCopy=()=>{
    navigator.clipboard.writeText(text)

  }
 
  
  return (
    <>
<div className="mb-3 mx-5 my-4" data-bs-theme={props.mode.toLowerCase()}   >
  <label htmlFor="exampleFormControlTextarea1" className="form-label my-4">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{borderWidth:1,borderColor:props.colorMode}} />
  <button className={`btn btn-${props.mode.toLowerCase()} my-4 mx-2`}  onClick={handleOnClickUC} style={{borderWidth:0.5,borderColor:props.colorMode}}>Submit</button>
  <button className={`btn btn-${props.mode.toLowerCase()} my-4 mx-2`}  onClick={handleOnClickCT} style={{borderWidth:0.5,borderColor:props.colorMode}}>Clear Text</button>
  <button className={`btn btn-${props.mode.toLowerCase()} my-4 mx-2`}  onClick={handleClickCopy} style={{borderWidth:0.5,borderColor:props.colorMode}}>Copy Text</button>


  <p style={{color:props.colorMode}}>Words-{wordCount} Character-{text.length}</p>
</div>
    </>
  )
}

