import './travelcss.css'
import { useState } from 'react'
const Travel = (data) => {

  const [relax,setRelax]=useState(false)
  const [explore,setExplore]=useState(false)
  const [adv,setAdv]=useState(false)
  const [roman,setRoman]=useState(false)

  const onClickrelax=()=>{
    setRelax(!relax)
    if(data.data['prefernces'].includes('Relaxation')){
      data.data['prefernces']=data.data['prefernces'].filter(text=>text!='Relaxation')
    }
    else{
      data.data['prefernces'].push('Relaxation')
    }
  }

  const onClickexplore=()=>{
    setExplore(!explore)
    if(data.data['prefernces'].includes('Exploration')){
      data.data['prefernces']=data.data['prefernces'].filter(text=>text!='Exploration')
    }
    else{
      data.data['prefernces'].push('Exploration')
    }
  }

  const onClickAdv=()=>{
    setAdv(!adv)
    if(data.data['prefernces'].includes('Adventure')){
      data.data['prefernces']=data.data['prefernces'].filter(text=>text!='Adventure')
    }
    else{
      data.data['prefernces'].push('Adventure')
    }
  }

  const onClickRoman=()=>{
    setRoman(!roman)
    if(data.data['prefernces'].includes('Romantic Getaway')){
      data.data['prefernces']=data.data['prefernces'].filter(text=>text!='Romantic Getaway')
    }
    else{
      data.data['prefernces'].push('Romantic Getaway')
    }
  }

  console.log(data.data['prefernces'])

  return (
    <div className='button'>
      {
        relax?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClickrelax}>Relaxation</button>:<button onClick={onClickrelax}>Relaxation</button>
      }

      {
        explore?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClickexplore}>Exploration</button>:<button  onClick={onClickexplore}>Exploration</button>
      }

      {
        adv?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClickAdv}>Adventure</button>:<button  onClick={onClickAdv}>Adventure</button>
      }

      {
        roman?<button style={{color:'white',backgroundColor:'purple'}} onClick={onClickRoman}>Romantic Getaway</button>:<button  onClick={onClickRoman}>Romantic Getaway</button>
      }
      
    </div>
  )

}

export default Travel