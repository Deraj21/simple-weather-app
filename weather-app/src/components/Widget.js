import React from 'react';
import Hour from './Hour';

export default function Widget(props){

  return (
    <div className="Widget">
      <h2>Tomorrow's Weather:</h2>
      <Hour hour="4pm" temp={40}/>
      <Hour hour="4pm" temp={40}/>
      <Hour hour="4pm" temp={40}/>
    </div>
  );
}