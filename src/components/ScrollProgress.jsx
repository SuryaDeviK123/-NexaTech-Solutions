import { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        (window.scrollY / total) * 100;

      setScroll(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div
      className="progress-bar"
      style={{
        width: `${scroll}%`,
      }}
    ></div>

  );
}

export default ScrollProgress;