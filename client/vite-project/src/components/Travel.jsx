import './travelcss.css'
import { useState } from 'react'
const Travel = (data) => {

  const [prefernces, setprefernces] = useState(data.data['prefernces']);

  const onClick = (text) => {
    if (prefernces===text) {
      setprefernces(''); 
    } else {
      setprefernces(text);
      data.data['prefernces']=text
    }
  };


  const options = ['Relaxation', 'Exploration', 'Adventure','Romantic Getaway']; 

  return (
    <div className="button">
      {options.map((option) => (
        <button 
          key={option}
          style={{
            color: prefernces===option ? 'white' : 'black',
            backgroundColor: prefernces===option ? 'purple' : 'transparent',
          }}
          onClick={() => onClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );

}

export default Travel