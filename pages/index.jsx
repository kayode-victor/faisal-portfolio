import Socialicons from "@/components/Socialicons";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";

const Home = () => {
  return (
    <section className="padding-container max-container page flex flex-col flexCenter lg:flex-row lg:gap-10 mt-16 lg:mt-0">
      {/*left*/}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" flex-1 flexCenter flex-col lg:items-start  mt-5 lg:mt-0"
      >
        <h2 className="h2 font-bold">
          Hi,
          <span className="text-secondary font-semibold">
            <Typewriter
              words={[
                " I'm a Photographer.",
                " I'm a Film Maker.",
                " I create Art.",
              ]}
              loop={true}
              cursor
              cursorStyle={"|"}
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </h2>

        <p className="py-3 text-[20px]  font-medium text-center">
          &apos;&apos; Life is a blank canvas and I&apos;m filling it with
          creativity &apos;&apos;
        </p>
        <p className="py-1 text-[24px]">
          <span className="font-light text-white"> Quebec, </span>
          <span className="font-medium text-secondary">Canada</span>
        </p>
        {/*social media links*/}
        <div className="flex items-center justify-center">
          <Socialicons />
        </div>
      </motion.div>

      {/*Right*/}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-l relative lg:mt-16"
      >
        <Image
          src={"/hero1.png"}
          alt="heroImg"
          width={600}
          height={600}
          className="w-[275px] h-auto lg:w-full lg:right-8 lg:top-12 relative"
        />
        <motion.span
          className="bg-secondary blur-lg h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] absolute  rounded-br-none rounded-full -z-10 lg:top-10 lg:right-10"
          animate={{
            backgroundColor: ["#dc143c", "#db274b"],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        ></motion.span>
      </motion.div>
    </section>
  );
};

export default Home;
