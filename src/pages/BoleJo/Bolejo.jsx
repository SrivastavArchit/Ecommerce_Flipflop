import React from 'react';
import './bolejo.css';
import moye2 from './moye2.mp4';
import moye3 from './moye3.mp4';
const Bolejo = () => {
  return (
    <div className='thala'>
      <h2>Congratulations, you are eligble for...</h2>
      <div className='autoplay'>
      <video loop autoPlay >
        <source src={moye2} type="video/mp4" />
      
      </video>
     
      </div>
      <div className='actual'>
        <h3>Actual Moye Moye</h3>
      <video  controls>
        <source src={moye3} type="video/mp4" />
       
      </video>
      </div>
     
    </div>
  );
}

export default Bolejo;
