//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
//swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
import { FaUser } from "react-icons/fa";
import { testimonialData } from "@/app/constant/data";

const Testimonials = () => {
  return (
    <section className="padding-container max-container lg:py-16 mb-6 lg:mb-0 flex flex-col flexCenter md:flex-row md:gap-8 lg:gap-30 mt-24 lg:mt-24">
      {/*title*/}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:max-w-[30%]"
      >
        <div className="lg:pb-8 text-center">
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative  leading-normal uppercase">
            testimonial<span className="text-secondary">s</span>
            <span className="text-[45px] lg:text-[64px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              People say
            </span>
          </h3>
          <p className=" text-center py-2 mx-auto text-gray-10 text-[16px] lg:text-[18px] mt-10">
            Discover what clients are saying about my photography work:
          </p>
        </div>
      </motion.div>

      {/* swiper*/}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full sm:max-w-[60%] my-8 "
      >
        {
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000, // Adjust the delay as needed (in milliseconds)
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="h-[288px] lg:h-[320px]"
          >
            {testimonialData.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="relative bg-gray-700 p-2 rounded-lg flexCenter flex-col group">
                  <div className="flexCenter gap-2">
                    <FaUser className="rounded-full h-[50px] w-[50px]" />

                    <div>
                      <div>{testimonial.name}</div>
                      <div>{testimonial.position}</div>
                    </div>
                  </div>
                  <hr className="border-none bg-gray-50 h-[1px] w-[70%] my-4 mx-auto text-center" />
                  <p className="text-gray-20 text-center italic">
                    {testimonial.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </motion.div>
    </section>
  );
};

export default Testimonials;
