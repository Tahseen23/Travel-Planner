import './HomeCss.css'
import log from '../images/log.jpg'
import { useNavigate } from "react-router"
import { useState } from 'react';
import { OrbitProgress } from "react-loading-indicators"


import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  const naviagte = useNavigate()
  const [loading, setloading] = useState(false)

  const onClick = () => {
    naviagte('/')
  }

  const handleButton = () => {
    setloading(true)
  }

  return (
    <div>
      <div className='header'>
        <img src={log} alt="logo" onClick={onClick} />
      </div>

      <div className='main'>
        <div className='heading'>
          <h1>Where You Want to Travel?</h1>
        </div>
        <div className='input'>
          <input type="text" placeholder='From' />
          <input type="text" placeholder='To' />
          <input type="date" />
          <div>{
            !loading ?
              <button onClick={handleButton} className='arrow'> <FaArrowRight  /></button>

              :
              <OrbitProgress color="#32cd32" size="small" text="" textColor="" />
          }</div>
        </div>
      </div>
    </div>
  )
}


export default Home