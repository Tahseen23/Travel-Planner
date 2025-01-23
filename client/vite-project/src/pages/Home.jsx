import './HomeCss.css'
import log from '../images/log.jpg'
import { useNavigate } from "react-router"
import { useState } from 'react';
import { OrbitProgress } from "react-loading-indicators"
import Travel from '../components/Travel';
import Style from '../components/Style';
import Companion from '../components/Companion';



import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  const naviagte = useNavigate()
  const [loading, setloading] = useState(false)
  const [data,setdata]=useState({
    travel:'',
    current:'',
    onGoingDate:'',
    returnDate:'',
    prefernces:[],
    budget:[],
    Companion:[]
  })

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
        <h1>Plan Your Travel in best Way!</h1>
      </div>
      <div className='line'></div>
      <div className='main'>
        <div className='rectangle'>
          <h3>Where you want to go?</h3>
          <input type="text" />
          <h3>Current City</h3>
          <input type="text" />
          <div className='date'>
            <div>
              <h3>Date of travel</h3>
              <input type="date" />
            </div>
            <div>
              <h3>Return Date</h3>
              <input type="date" />
            </div>
          </div>
          <h3>Travel Purpose</h3>
          <div className='button'>
            <Travel data={data}></Travel>
          </div>
          <h3>Travel Style</h3>
          <Style data={data}> </Style>
          <h3>Companion</h3>
          <Companion data={data}></Companion>

        </div>
      </div>
    </div>
  )
}


export default Home