import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    function onScroll() {
      setPosition(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  console.log(position);

  return (
    <div className="home">
      <div className="box spring">spring</div>
      <div
        className="box summer"
        style={{ backgroundPositionY: position / -3 }}
      >
        summer
      </div>
      <div
        className="box autumn"
        style={{ backgroundPositionX: position / -2 }}
      >
        autumn
      </div>
      <div className="box winter" style={{ backgroundPositionX: position / 2 }}>
        winter
      </div>

      <p
        className="desc desc1"
        style={{
          opacity: (position - 100) / 100,
          transform: `translateX(-${position / 2}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        sapien sem, vel bibendum risus fringilla vel. Suspendisse interdum
        eleifend convallis. Aenean auctor ut orci nec cursus.
      </p>

      <p
        className="desc desc2"
        style={{
          opacity: (position - 200) / 100,
          transform: `translateX(${position / 2}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        sapien sem, vel bibendum risus fringilla vel. Suspendisse interdum
        eleifend convallis. Aenean auctor ut orci nec cursus. Fusce mattis
        bibendum erat eu rutrum. In volutpat est vel risus accumsan placerat.
        Donec quam massa, congue non erat quis, tincidunt aliquam nisi.
      </p>
    </div>
  );
};

export default Home;
