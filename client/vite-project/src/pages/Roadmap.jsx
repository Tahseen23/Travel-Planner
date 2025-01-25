import log from '../images/log.jpg'
import { useNavigate } from 'react-router'
import { OrbitProgress } from "react-loading-indicators"
import {  useEffect } from 'react'
import useFetch from '../fetchApi/fetch'

import { useSelector } from 'react-redux';

// import {callOpenAIAPI} from '../fetchApi/fetch.jsx'

const Roadmap = () => {
  const navigate = useNavigate()
  const inputValue=useSelector(state=>state.sliceData.data)
  useFetch()



  const onClick = () => {
    navigate('/')
  }

  return (

    <div className='header'>
      <img src={log} alt="logo" onClick={onClick} />
      <h1>Plan Your Travel in best Way!</h1>
    </div>
  )

}

export default Roadmap