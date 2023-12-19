import { aboutData } from "@/app/constant/data";
import { useState } from "react";
import CountUp from "react-countup";

import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="padding-container max-container lg:page flex flex-col flexCenter lg:flex-row lg:gap-10 mt-16 lg:mt-0">
      {/*left*/}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-1 flex-col flexCenter text-center lg:text-start lg:justify-start mt-10 lg:mt-0"
      >
        <div>
          <div>
            <h2 className="h2  lg:py-2">
              Photographer & <span className="text-secondary">Film</span>Maker
            </h2>
            <p className="text-start text-[14px] lg:text-[18px] px-2 my-5 lg:py-2 lg:text-start lg:px-3 lg:mb-5">
              Hi, I am Faisal Gidado, the creative force behind Dash Media in
              Lagos. With a degree in Screen Production, I use photography to
              capture moments uniquely. Since 2017, Dash Media has been
              delivering premium Photography, Cinematography, and Editing
              services, both locally and globally.
            </p>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex py-4 lg:py-2 lg:flex flex-1 px-2 gap-2">
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={195} end={200} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                Happy clients
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={15} end={20} duration={5} delay={1} />
                K+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                Social-Media following
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-2xl">
                <CountUp start={0} end={5} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">
                year experience
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/*right*/}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col  w-full xl:max-w-[47%] h-[488px]"
      >
        {/*Expertise*/}
        <div className="mb-2 lg:mb-10 flex flex-col gap-2 mx-auto min-w-[90%] xl:ml-0 lg:mt-10">
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Camera Operation</span>
              <span>100%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[100%] bg-[#d21502] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Exposure and Lighting Control </span>
              <span>100%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[100%] bg-[#b80f0a] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Focusing </span>
              <span>100%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[100%] bg-[#990f02] rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Digital Imaging </span>
              <span>95%</span>
            </div>
            <div className="relative bg-gray-700 h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[95%] bg-[#670c07] rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
        {/*tabs */}
        <div className="flex justify-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 sm:mt-0 mt-8">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "after:w-[100%] after:!bg-secondary after:transition-all after:duration-500"
              } capitalize medium-16 relative after:absolute after:h-[2px] after:w-9 after:bg-white after:left-0 after:-bottom-1 cursor-pointer`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {/*tab data*/}
        <div className="py-2 xl:py-4 flex flex-row gap-1 items-center xl:items-start"></div>
        {aboutData[index].info.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="text-center md:flex-row  py-2 items-center"
          >
            <div className="text-white">{item.title}</div>
            <div className="flex flexCenter gap-4 text-[14px] text-secondary">
              <div>{item.other}</div>
              <div>{item.year}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
