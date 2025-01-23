import { useState } from "react"
import './travelcss.css'
const Style = (data) => {

  const [lux,setlux]=useState(false)
  const [mini,setMini]=useState(false)
  const [mod,setmod]=useState(false)

  const onClicklux=()=>{
    setlux(!lux)
    if(data.data['budget'].includes('Luxury')){
      data.data['budget']=data.data['budget'].filter(text=>text!='Luxury')
    }
    else{
      data.data['budget'].push('Luxury')
    }
  }

  const onClickmini=()=>{
    setMini(!mini)
    if(data.data['budget'].includes('Minimal')){
      data.data['budget']=data.data['budget'].filter(text=>text!='Minimal')
    }
    else{
      data.data['budget'].push('Minimal')
    }
  }

  const onClickMod=()=>{
    setmod(!mod)
    if(data.data['budget'].includes('Moderate')){
      data.data['budget']=data.data['budget'].filter(text=>text!='Moderate')
    }
    else{
      data.data['budget'].push('Moderate')
    }
  }


  console.log(data.data)

  return (
    <div className='button'>
      {
        lux?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClicklux}>Luxury</button>:<button onClick={onClicklux}>Luxury</button>
      }

      {
        mini?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClickmini}>Minimal</button>:<button  onClick={onClickmini}>Minimal</button>
      }

      {
        mod?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClickMod}>Moderate</button>:<button  onClick={onClickMod}>Moderate</button>
      }  
    </div>
  )

}

export default Style