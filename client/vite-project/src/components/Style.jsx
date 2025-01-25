import { useState } from "react"
import './travelcss.css'
const Style = (data) => {
  const [budget, setBudget] = useState(data.data['budget']);

  const onClick = (text) => {
    if (budget===text) {
      setBudget(''); 
    } else {
      setBudget(text);
      data.data['budget']=text
    }
  };


  const options = ['Luxury', 'Minimal', 'Moderate']; 

  return (
    <div className="button">
      {options.map((option) => (
        <button 
          key={option}
          style={{
            color: budget===option ? 'white' : 'black',
            backgroundColor: budget===option ? 'purple' : 'transparent',
          }}
          onClick={() => onClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );

}

export default Style