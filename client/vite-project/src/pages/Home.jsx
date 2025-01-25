import './HomeCss.css'
import log from '../images/log.jpg'
import { useNavigate } from "react-router"
import { useContext, useState } from 'react';
import Travel from '../components/Travel';
import Style from '../components/Style';
import Companion from '../components/Companion';
import { useDispatch } from 'react-redux';
import { setData } from '../app/slice.js';




const Home = () => {
  const naviagte = useNavigate()
  const dispatch=useDispatch()
  const [data,setdata]=useState({
    travel:'',
    current:'',
    onGoingDate:'',
    returnDate:'',
    prefernces:'',
    budget:'',
    Companion:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    const copyInfo={...data}
    copyInfo[name]=value
    setdata(copyInfo)
  }

  const onClick = () => {
    naviagte('/')
  }

  const handleButton = () => {
    console.log(data,setData)
    dispatch(setData(data))
    naviagte('/roadmap')
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
          <input type="text" placeholder='Enter City name' name='travel' value={data.travel} onChange={handleChange} />
          <h3>Current City</h3>
          <input type="text" placeholder='Enter City name' value={data.current} name='current'  onChange={handleChange}/>
          <div className='date'>
            <div>
              <h3>Date of travel</h3>
              <input type="date" value={data.onGoingDate} onChange={handleChange} name='onGoingDate' />
            </div>
            <div>
              <h3>Return Date</h3>
              <input type="date" value={data.returnDate} onChange={handleChange} name='returnDate' />
            </div>
          </div>
          <h3>Travel Purpose</h3>
          <div className='button'>
            <Travel data={data}></Travel>
          </div>
          <h3>Travel Style</h3>
          <Style data={data}></Style>
          <h3>Companion</h3>
          <Companion data={data}></Companion>

        </div>
        <button className='last' onClick={handleButton}>Get Plan</button>
        
      </div>
    </div>
  )
}


export default Home