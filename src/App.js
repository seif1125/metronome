import logo from './logo.svg';
import InputSlider from'./Components/InputSlider'
import ButtonPlayer from './Components/ButtonPlayer'
import audio from './audio/beat.wav'
import logoo from './logo.jpg'
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props) 
 
   this.state={ BPM:60,
    isplaying:false,
 
     disabled:false,
  }
 this.sound=new Audio(audio)
}

 handleBpmChange=(e)=>{

this.setState({BPM:e.target.value})

}

handleButtonClick=()=>{
this.state.isplaying? this.stopSound():this.playSound()
}
stopSound=()=>{
this.setState({isplaying:false,disabled:false,})
 clearInterval(this.timer)
  
  
}
playSound=()=>{ 
  this.setState({isplaying:true,disabled:true})
 this.sound.play()
    this.timer=setInterval(()=>{this.sound.play()
    
},(60*1000)/this.state.BPM)
 
}


  render() {
    return (
    
         <div className="App"><img src={logoo} alt="metronome logo"></img>
       <h1 className='titletext'>Metronome</h1>    
       
      <InputSlider handlechange={this.handleBpmChange} bpm={this.state.BPM} focus={this.state.focus}disableslider={this.state.disabled}/>
      <ButtonPlayer  clickplay={this.handleButtonClick} playstate={this.state.isplaying} />
    </div>
    
    );
  }
}



