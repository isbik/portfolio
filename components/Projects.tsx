import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdUKRCyzqpLFbx019MaTKwJzhRH06f3HJ-YZLXLGvGTc9-6ZZhRkN16dI1MWKJe6mx6Q&usqp=CAU",
  "https://scoutstatics.levelset.com/contractor-logos/5DEF115578AAE031608507.jpg",
  "https://t3.ftcdn.net/jpg/04/39/82/84/360_F_439828429_jYMsCVybpgpsEgbfcFWYEMTYkKjmO6cx.jpg",
  "https://thumbs.dreamstime.com/z/candy-shop-party-logo-design-vector-template-sweet-lollipops-bon-store-logotype-concept-icon-bright-colors-handwritten-176315192.jpg",
  "https://thumbs.dreamstime.com/z/candy-shop-party-logo-design-vector-template-sweet-lollipops-bon-store-logotype-concept-icon-bright-colors-handwritten-176315192.jpg",
  "https://thumbs.dreamstime.com/z/candy-shop-party-logo-design-vector-template-sweet-lollipops-bon-store-logotype-concept-icon-bright-colors-handwritten-176315192.jpg",
];

const Projects = () => {
  const [width, setWidth] = useState<any>();
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { scrollWidth, offsetWidth } = carousel.current as any;
    setWidth(scrollWidth - offsetWidth);
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col justify-center py-20 text-center bg-gradient-to-t to-sky-700 from-violet-700"
    >
      <h1 className="mb-16 text-6xl font-bold">
        <h2>Projects to view</h2>
      </h1>
      <div ref={carousel} className="p-4 overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: width, left: -width }}
          className="flex justify-center gap-4 cursor-grab"
        >
          {images.map((image, index) => (
            <div
              className="shadow-sm relative overflow-hidden group min-w-[200px] h-[200px]"
              key={index}
            >
              <img
                className="object-cover w-full h-full rounded-lg pointer-events-none aspect-square"
                src={image}
                alt=""
              />

              <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full text-xl font-bold text-teal-500 transition-all duration-500 rounded-lg opacity-0 bg-white/90 group-hover:opacity-100">
                Projeasdfct {index}
              </div>
              <h1>asdf</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
