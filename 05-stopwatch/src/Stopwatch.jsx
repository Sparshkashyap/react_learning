import { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(
          (prev) => prev + 1
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <>
      <h2>{seconds}</h2>

      <button
        onClick={() =>
          setIsRunning(true)
        }
      >
        Start
      </button>

      <button
        onClick={() =>
          setIsRunning(false)
        }
      >
        Stop
      </button>

      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Stopwatch;