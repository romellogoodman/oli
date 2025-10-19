"use client";

import { useState } from "react";
import Image from "next/image";

// import logo1 from "@/oli-logos-round-2/logo-rev-2-1.svg";
// import logo2 from "@/oli-logos-round-2/logo-rev-2-2.svg";
import logo3 from "@/oli-logos-round-2/logo-rev-2-3.svg";
import logo4 from "@/oli-logos-round-2/logo-rev-2-4.svg";
import logo5 from "@/oli-logos-round-2/logo-rev-2-5.svg";
import logo6 from "@/oli-logos-round-2/logo-rev-2-6.svg";

const logos = [logo3, logo4, logo5, logo6];

export default function Header() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const handleLogoClick = () => {
    setCurrentLogoIndex(prev => (prev + 1) % logos.length);
  };

  return (
    <header>
      <div className="header-content">
        <button
          className="header-logo"
          onClick={handleLogoClick}
          aria-label="Cycle through logos"
        >
          <Image
            src={logos[currentLogoIndex]}
            alt="OLI Logo"
            width={40}
            height={40}
            priority
          />
        </button>
      </div>
    </header>
  );
}
