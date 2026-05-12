"use client";

import { useEffect, useState } from "react";

export default function TypewriterText() {
  const text = "On-Demand.";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {displayed}
      {/*<span className="animate-pulse">|</span>*/}
    </span>
  );
}