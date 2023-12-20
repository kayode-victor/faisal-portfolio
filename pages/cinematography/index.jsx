import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { cinematographyData } from "@/app/constant/data";
import Link from "next/link";
import YouTube from "react-youtube"; // Import the YouTube component

export default function Cinematography() {
  return (
    <section className="padding-container  max-container  mt-16 mb-10  lg:mt-20 lg:mb-10">
      <div className="justify-center px-10 lg:px-16">
        <div className="text-center py-3">
          <p className="text-white text-[16px] lg:text-[20px]">
            <Link
              href={"/work"}
              className="hover:text-secondary hover:underline font-medium"
            >
              Album
            </Link>
            <span> / All Videos</span>
          </p>
        </div>
        {/* Display Videos */}
        <div className="">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="h-full w-full rounded-lg"
          >
            {cinematographyData.map((cinematography, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center">
                  <div className="video-container mt-12 mb-28 lg:mt-0 lg:mb-0  lg:mx-20">
                    <YouTube
                      videoId={getYouTubeVideoId(cinematography.videoSrc)}
                      opts={{ width: "100%", height: "70%" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// Extract the YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );
  return match && match[1];
}
