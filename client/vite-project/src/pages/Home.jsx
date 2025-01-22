import './HomeCss.css'
import log from '../images/log.jpg'
import { useNavigate } from "react-router"

const Home = () => {
  const naviagte=useNavigate()

  const onClick=()=>{
    naviagte('/')

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
      </div>


    </div>
  )

}
export default Home