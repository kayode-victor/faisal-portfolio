import { useState } from "react";
import { cinematographyData } from "@/app/constant/data";
import Link from "next/link";
import YouTube from "react-youtube";
import Image from "next/image";
import {
  IoClose,
  IoArrowForward,
  IoArrowBack,
  IoVideocamOutline,
} from "react-icons/io5";

export default function Cinematography() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextVideo = () => {
    const nextIndex = (currentIndex + 1) % cinematographyData.length;
    setCurrentIndex(nextIndex);
  };

  const prevVideo = () => {
    const prevIndex =
      (currentIndex - 1 + cinematographyData.length) %
      cinematographyData.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="padding-container max-container mt-16 mb-10 lg:mt-20 lg:mb-44">
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
        {/* Display Video Thumbnails */}
        <div className="gallery mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cinematographyData.map((video, i) => (
            <div
              className="pics cursor-pointer group relative rounded-3xl overflow-hidden hover:opacity-60 transition-opacity aspect-w-4 aspect-h-3"
              key={i}
              onClick={() => openModal(i)}
            >
              <Image
                src={video.thumbNail}
                alt={video.alt}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                width={400} // Adjusted to 400x400 pixels
                height={400} // Adjusted to 400x400 pixels
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <IoVideocamOutline className="text-gray-400 text-8xl" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {video.title}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {modalOpen && (
          <div className="modal open" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <YouTube
                videoId={getYouTubeVideoId(
                  cinematographyData[currentIndex].videoSrc
                )}
                opts={{
                  suggestedQuality: "hd1080", // or the desired quality
                }}
              />

              <IoClose onClick={closeModal} className="close-icon" />
              <IoArrowBack onClick={prevVideo} className="nav-icon prev" />
              <IoArrowForward onClick={nextVideo} className="nav-icon next" />
            </div>
          </div>
        )}
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
