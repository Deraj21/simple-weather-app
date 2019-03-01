import React from 'react';
import Hour from './Hour';

export default function Widget(props){

  let { data } = props;
  let hours = data.map(hour => 
    <Hour hour="4pm" temp={30} coldest={false} hottest={false}/>
  )

  return (
    <div className="Widget">
      <h2>Tomorrow's Weather:</h2>
      { hours }
    </div>
  );
}