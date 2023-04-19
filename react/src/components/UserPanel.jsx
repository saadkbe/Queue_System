import React from 'react';
import { useState } from 'react';


export default function UserPanel() {


    const [count, setCount] = useState(0);
  
    const  increment= () => {
      setCount(count + 1);
    };

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    const reset = () => {
      setCount(0);
    };

    const countString = count.toString().padStart(3, "0");

  return (
    <div className='panel'>
        <div className='container_file_attente animated fadeInDown'>
          <div className='queue'>
            <p className='number_in_queue'>{countString}</p>
          </div>
          <div>
          <div className='next_box' onClick={increment}>
              <p className='next_text'>suivant</p>
          </div><br />
          <div className='previous_box' onClick={decrement}>
              <p className='previous_text'>précedent</p>
          </div>
          </div>
          <div className='reset_queue' onClick={reset}>
            <p className='reset_text'>Redemarrer</p>
          </div>
        </div>

        </div>
        
  )

  }