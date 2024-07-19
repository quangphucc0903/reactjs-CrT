import React, { useEffect, useState } from "react";
import 'antd/dist/reset.css';

export const Timeout = () => {
  const [countDown, setCountDown] = useState(3);
  const [time, setTime] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prevCount => {
        if (prevCount === 1) {
          clearInterval(timerId);
          setTime(true);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <div className="App" style={{ padding: 20, textAlign: 'center' }}>
        {!time && <h1>{countDown}</h1>}
        {time && <h1 font-bold >happy new year</h1>}
      </div>
    </>
  );
}
