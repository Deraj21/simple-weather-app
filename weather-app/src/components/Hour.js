import React from 'react';

export default function Hour(props){

  let { hr, tmp, coldest, hottest } = props;
  let color = 'white';

  if (coldest){
    color = 'rgba(0,143,254,.45)'
  } else if (hottest){
    color = 'rgba(254,0,76,.45)'
  }

  return (
    <div style={{ backgroundColor: color }}className="Hour">
      <p>{hr}:</p>
      <p>{tmp}°F</p>
    </div>
  );
}