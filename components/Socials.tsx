import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import React, { useEffect, useState } from "react";

const Socials = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight - 150]
  );

  return (
    <div className="fixed top-0 z-10 flex flex-col items-center gap-4 text-slate-100 left-2 sm:left-8">
      <motion.div
        className="w-[2px] bg-slate-200 rounded"
        style={{
          height: yRange,
        }}
      ></motion.div>
      <a href="https://t.me/is_bik" target={"_blank"} rel="noreferrer">
        <svg
          className="transition-all cursor-pointer hover:-translate-y-2 hover:text-teal-400"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </a>
      <a href="mailto:bikishovd@gmail.com">
        <svg
          className="transition-all cursor-pointer hover:-translate-y-2 hover:text-teal-400"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
      <a target={"_blank"} href="https://github.com/isbik" rel="noreferrer">
        <svg
          className="transition-all cursor-pointer hover:-translate-y-2 hover:text-teal-400"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </div>
  );
};

export default Socials;
