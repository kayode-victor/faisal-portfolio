import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
import Socialicons from "@/components/Socialicons";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };

    return () => {
      // Cleanup function to remove the event listener when the component is unmounted
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <section className="max-container paddoing-container py-12 mt-10 lg:mt-16">
      <div className="flex flex-col gap-4">
        {/* title */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="pb-8 text-center"
        >
          <h3 className="text-[28px] lg:text-[32px] font-extrabold relative leading-normal uppercase">
            Contact<span className="text-secondary"> Me.</span>
            <span className="text-[38px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              get in touch
            </span>
          </h3>
        </motion.div>
        {/* form */}
        <motion.form
          action="https://formspree.io/f/moqgawqj"
          method="POST"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col gap-4 px-2 w-full mx-auto max-w-[32rem]"
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              required
              name="name"
              placeholder="Enter Your Name"
              className="regular-16 placeholder:text-white rounded-full px-4 py-1 bg-gray-600 outline-none w-1/2"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="regular-16 placeholder:text-white rounded-full px-4 py-1 bg-gray-600 outline-none w-1/2"
            />
          </div>
          <input
            type="text"
            required
            name="subject"
            placeholder="Enter Your Subject"
            className="regular-16 placeholder:text-white rounded-full px-4 py-1 bg-gray-600 outline-none w-full"
          />
          <textarea
            id=""
            cols="10"
            rows="5"
            required
            name="message"
            placeholder="Enter message"
            className="regular-16 placeholder:text-white rounded-xl px-4 py-1 bg-gray-600 outline-none"
          ></textarea>
          <button
            type="submit"
            className="btn_dark_rounded px-4 py-2 rounded-full flexCenter gap-1 font-semibold "
          >
            Send Message
            <span>
              <HiArrowRight />
            </span>
          </button>
        </motion.form>
        <div className="flex items-center justify-center space-x-2">
          <hr className="border-none bg-gray-50 h-[1px] w-[40%] my-4 text-center" />
          <p className="mx-4 medium-14">or</p>
          <hr className="border-none bg-gray-50 h-[1px] w-[40%] my-4 text-center" />
        </div>
        {/* social media links */}
        <div className="flex items-center justify-center">
          <Socialicons />
        </div>
      </div>
    </section>
  );
};

export default Contact;
