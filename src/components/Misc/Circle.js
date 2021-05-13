import React from "react";

export default function Circle({ number }){
  let designation = "circle-bad";
  if (!number) {
    number = 0;
  }
  if (number > 2 && number < 4) {
    designation = "circle-okay";
  } else if (number >= 4){
    designation = "circle-good";
  }
  return (
    <div className={number || number === 0 ? 'fade-in' : 'pre-fade'}>
      <div className={"inline-block text-center circle " + designation}>
        {number}
      </div>
    </div>
  )
}
