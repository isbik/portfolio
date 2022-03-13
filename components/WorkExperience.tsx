import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const WorkExperience = (props: Props) => {
  const items = [
    {
      from: "August 2021",
      to: "Now",
      companyName: "Deeplay",
      role: "Fullstack developer (mostly frontend)",
      description: "Make frontend for automatization game systems",
    },
    {
      from: "January 2021",
      to: "March 2022",
      companyName: "ShopParty",
      role: "React JS developer",
      description: "Part time developer in e-commerce site",
    },
    {
      from: "March 2020",
      to: "June 2021",
      companyName: "PFDO",
      role: "Vue & React developer",
      description: "Make big automatization systems",
    },
    {
      from: "September 2019",
      to: "March 2020",
      companyName: "Freelance",
      role: "HTML & CSS Developer",
      description: "Make simple layouts",
    },
  ];

  return (
    <div
      id="work"
      className="flex justify-center px-4 py-20 bg-gradient-to-t to-blue-900 from-sky-700"
    >
      <div className="max-w-lg">
        <h1 className="mb-20 text-6xl font-bold">
          <h2>Work experience</h2>
        </h1>

        <div>
          {items.map((item, index) => (
            <motion.div
              key={item.companyName}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.div
                variants={{
                  offscreen: {
                    y: 300,
                  },
                  onscreen: {
                    y: 0,
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
                className={clsx("relative pb-8", {
                  "before:block before:absolute before:left-2 before:w-1 before:top-[21px] before:-bottom-[3px] before:bg-teal-500":
                    index !== items.length - 1,
                })}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-teal-500 rounded-full"></div>
                  <div className="">
                    {item.from} - {item.to}
                  </div>
                </div>
                <div className="pl-7">
                  <p className="text-xl">
                    {item.companyName} •{" "}
                    <span className="font-bold text-slate-100">
                      {item.role}
                    </span>
                  </p>

                  <p>{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
