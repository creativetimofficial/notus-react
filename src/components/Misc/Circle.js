import React from "react";

export default function Circle({ number}){
  let designation = "";
  if (number && number <= 2) {
    designation = "circle-bad";
  } else if (number > 2 && number < 4) {
    designation = "circle-okay";
  } else if (number >= 4){
    designation = "circle-good";
  }
  return (
    <div className={number ? 'fade-in' : 'pre-fade'}>
      <div className={"inline-block text-center circle " + designation}>
        {number}
      </div>
    </div>
  )
}
