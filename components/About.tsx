import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-800 to-blue-900"
    >
      <div className="max-w-lg px-4">
        <p className="text-teal-300">Hello, my name is</p>
        <motion.h1
          initial="hidden"
          animate="visible"
          className="flex mb-2 text-4xl font-bold sm:text-6xl"
        >
          <>
            {"Dmitry Bikishov.".split("").map((letter, index) => (
              <motion.span
                className={clsx("block", {
                  "mr-2 w-2": letter === " ",
                })}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    transition: {
                      delay: index * 0.05,
                    },
                    opacity: 1,
                    y: 0,
                  },
                }}
                key={index + "-" + letter}
              >
                {letter}
              </motion.span>
            ))}
          </>
        </motion.h1>

        <motion.span
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.4,
              },
            },
          }}
          className="text-3xl font-bold text-slate-400"
        >
          I like building things for the web.
        </motion.span>
        <p className="mb-4 text-slate-400">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-teal-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Touch me
        </button>
      </div>
    </div>
  );
};

export default About;
