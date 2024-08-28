import './App.css';
import {useState} from "react"
const App=()=>{ 
  const[speed, setSpeed]=useState(0) 
  const increase=()=>{
    if(speed>200){
      setSpeed(200)
    }else{
      setSpeed((prev)=>(prev+10))
    }
  } 
  const Decrease=()=>{
    if(speed>0){
      setSpeed((prev)=>(prev-10))
    }else{
      setSpeed(0)
    }
  }

return(
    <div className="backgroundsetting"> 
    <h1 className="heading">SPEEDOMETER</h1> 
    <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className="photo"/> 
    <h3 className="speedCount">speed is {speed}mph</h3> 
    <p className="instructions">Minmum Limit 0mph; Maximium Limit 200mph</p> 
    <div>
      <button type="button" className="accelerateButton" onClick={increase}>Accelarate</button> 
      <button type="button" className="applyBrakes" onClick={Decrease}>Apply Brakes</button>
    </div>

    </div>
  )
}

export default App;
