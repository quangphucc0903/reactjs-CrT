import React, { useEffect, useState } from "react";

function Timeout() {
  const [countDown, setCountDown] = useState(3);
  const [time, setTime] = useState(false);

  useEffect(() => {
//     const timerId = setInterval(() => {
//         setCountDown(countDown - 1);
//         if (countDown === 0) {
//             setTime(true)
//         }
//     }, 1000)
//     return () => {
//         clearInterval(timerId)
//     }
// }, [countDown])

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
        {time && <h1>happy new year</h1>}
      </div>
    </>
  );
}

export default Timeout;
