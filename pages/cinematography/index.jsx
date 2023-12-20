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
    <section className="padding-container  max-container my-16 lg:my-24">
      <div className="justify-center lg:px-20">
        <div className="lg:ml-10 mb-4 lg:mb-4">
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
                  <YouTube
                    videoId={getYouTubeVideoId(cinematography.videoSrc)}
                    opts={{ width: "420", height: "350" }}
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

// Extract the YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );
  return match && match[1];
}
