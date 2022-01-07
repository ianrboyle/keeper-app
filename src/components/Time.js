import React, { useState } from "react";

function Time() {
  setInterval(getTime, 1000);
  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(time);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return <h1>{currentTime}</h1>;
}

export default Time;
