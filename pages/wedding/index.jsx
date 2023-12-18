import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import { weddingData } from "@/app/constant/data";
import Image from "next/image";
import Link from "next/link";

export default function Wedding() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="padding-container max-container mt-16 mb-10  lg:mt-20 lg:mb-0">
      <div className="justify-center lg:px-12">
        <div className="lg:ml-10">
          <Link href={"/work"} className="  items-start">
            <p className="text-white font-medium">go back</p>
          </Link>
        </div>
        {/* display */}
        <div className="px-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            autoplay={{
              delay: 10000, // Adjust the delay as needed (in milliseconds)
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Autoplay, Thumbs]}
            className="h-96 w-full rounded-lg"
          >
            {weddingData.map((wedding, i) => (
              <SwiperSlide key={i}>
                <div className="flex w-full h-full items-center justify-center">
                  <Image
                    src={wedding.src}
                    alt={wedding.alt}
                    width={400}
                    height={400}
                    className="block h-full w-full object-contain rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail */}
        <div className="pt-2 pb-5">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={3}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs w-full"
          >
            {weddingData.map((wedding, i) => (
              <SwiperSlide key={i}>
                <div className="flex w-full h-full items-center justify-center">
                  <Image
                    src={wedding.src}
                    alt={wedding.alt}
                    width={400}
                    height={400}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
