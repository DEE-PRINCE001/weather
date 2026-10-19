import React, { useEffect, useState } from 'react'


const SetTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  },
        [running]);

    const hour = Math.floor(time/(60 * 60 * 1000));
    const minute = Math.floor((time/(60 * 1000)) % 60);
    const second = Math.floor((time/1000) % 60);
    const millisecond = Math.floor((time % 1000)/10);

  const format = (num, prec) => {
    return num.toString().padStart(prec, "0");
  }
    return (
    <div>
        <h4>SetTimer</h4>
        <div>
        {format(hour, 2)}:{format(minute, 2)}:{format(second, 2)}:{format(millisecond, 2)}
        </div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={ () =>{
            setRunning(false);
            setTime(0);}
        }>Reset</button>
    </div>
  )
}

export default SetTimer
