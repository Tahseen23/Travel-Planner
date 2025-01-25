import { useState } from 'react';
import './travelcss.css';

const Companion = ( data ) => {
  const [companion, setCompanion] = useState(data.data['Companion']);

  const onClick = (text) => {
    if (companion===text) {
      setCompanion(''); 
    } else {
      setCompanion(text);
      data.data['Companion']=text
    }
  };


  const options = ['Solo', 'Couple', 'Family', 'Friends']; 

  return (
    <div className="button">
      {options.map((option) => (
        <button 
          key={option}
          style={{
            color: companion===option ? 'white' : 'black',
            backgroundColor: companion===option ? 'purple' : 'transparent',
          }}
          onClick={() => onClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Companion;
