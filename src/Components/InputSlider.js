 import React from 'react'
 
 export default function InputSlider({bpm,handlechange,disableslider,focus}) {
     return (
         <div className="inputcontainer">
             <h2 className="inputtext">SET YOUR BPM</h2>
             <h2 className="inputtext">{bpm}</h2>
             <input className='slider'  disabled={disableslider} type="range" id="quantity" name="quantity" min="1" onChange={(e)=>{handlechange(e)}} max="350" ></input>
             
         </div>
     )
 }
 