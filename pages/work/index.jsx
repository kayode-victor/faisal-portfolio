import { worksData } from "@/app/constant/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
//swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Work = () => {
  return (
    <section className="padding-container max-container mt-24 lg:mt-24">
      {/*title*/}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pb-4 text-center "
      >
        <h3 className="text-[28px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
          port<span className="text-secondary">folio</span>
          <span className="text-[35px] lg:text-[58px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
            Explore My Albums
          </span>
        </h3>
        <p className=" lg:py-2  text-center mx-auto lg:mx-5 text-gray-10 text-[18px] lg:text-[23px] mt-12">
          Explore my photography portfolio, where each album is a collection of
          unforgettable moments, blending creativity and emotion into my
          creation.
        </p>
      </motion.div>
      {/* swiper*/}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full sm:max-w-[95%]"
      >
        {
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              880: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000, // Adjust the delay as needed (in milliseconds)
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="h-[288px]"
          >
            {worksData.map((work, i) => (
              <SwiperSlide key={i}>
                <Link href={work.link}>
                  <div className="bg-gray-800 px-8 py-12 rounded-lg h-max flex flex-col gap-4 relative hover:bg-secondary  w-[70%] sm:w-full mx-auto group">
                    <div className="text-secondary place-self-end text-5xl group-hover:text-gray-950">
                      {work.icon}
                    </div>
                    <h3 className="text-secondary bold-14 uppercase max-w-[2.5rem] group-hover:text-gray-950">
                      {work.title}
                    </h3>
                    {/* link*/}
                    <div className="font-extrabold text-secondary bg-primary border-secondary border-[3px] h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-20 transition-all duration-500 -rotate-45">
                      <FaArrowRight />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </motion.div>
    </section>
  );
};

export default Work;
