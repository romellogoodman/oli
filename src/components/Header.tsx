"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const logoFiles = [
  "Group 74.svg",
  "Group 76.svg",
  // "Group 80.svg",
  // "Group 81.svg",
  "Group 82.svg",
  // "Group 89.svg",
  // "Group 88.svg",
  "Group 83.svg",
  "Group 93.svg",
  "Group 95.svg",
  "Group 94.svg",
  // "Group 92.svg",
  // "Group 95.svg",
  // "Group 93.svg",
  // "Group 94.svg",
  // "Group 89.svg",
  // "Group 90.svg",
  // "Group 91.svg",
  // "Group 92.svg",
  // "Group 86.svg",
  // "Group 87.svg",
  // "Group 88.svg",
  // "Group 83.svg",
  // "Group 84.svg",
  // "Group 85.svg",
  // "Group 81.svg",
  // "Group 82.svg",
  // "Group 80.svg",
  // "Group 79.svg",
  // "Group 78.svg",
  // "Group 74.svg",
  // "Group 75.svg",
  // "Group 76.svg",
  // "Group 77.svg",
  // "Group 69.svg",
  // "Group 70.svg",
  // "Group 71.svg",
  // "Group 72.svg",
  // "Group 73.svg",
];

export default function Header() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState<number>(0);

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * logoFiles.length);
  //   setCurrentLogoIndex(randomIndex);
  // }, []);

  const handleLogoClick = () => {
    setCurrentLogoIndex(prevIndex => (prevIndex + 1) % logoFiles.length);
  };

  return (
    <header>
      <div className="header-content">
        <div
          className="header-logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={`/oli-logos/${logoFiles[currentLogoIndex]}`}
            alt="OLI Logo"
            width={40}
            height={40}
          />
        </div>
        {/* <div className="header-links">
          <p>
            by{" "}
            <a
              href="https://romellogoodman.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Romello Goodman
            </a>
          </p>
        </div> */}
      </div>
    </header>
  );
}
