import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import rocket from "./assets/images/rocket.png";

const App = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("September 30, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // side effects
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="container">
      {/* LOGO */}
      <div>
        <h2 className="logo">TechAsync.</h2>
      </div>

      {/* Content */}
      <div className="content">
        <p>Website Is Under Maintenance</p>
        <h2>
          We're <span>Launching</span> Soon
        </h2>

        {/* Countdown timer */}
        <div className="launch-time">
          <div>
            <p>{timerDays}</p>
            <span>Days</span>
          </div>

          <div>
            <p>{timerHours}</p>
            <span>Hours</span>
          </div>

          <div>
            <p>{timerMinutes}</p>
            <span>Minutes</span>
          </div>

          <div>
            <p>{timerSeconds}</p>
            <span>Seconds</span>
          </div>
        </div>

        <button>Learn More</button>
      </div>

      <img src={rocket} className="rocket" alt="rocket" />
    </div>
  );
};

export default App;
