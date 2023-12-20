import { useState } from "react";
import { portraitData } from "@/app/constant/data";
import Image from "next/image";
import Link from "next/link";
import { IoClose, IoArrowForward, IoArrowBack } from "react-icons/io5";

export default function Portraits() {
  const [model, setModel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tempSrc, setTempSrc] = useState("");

  const openModal = (index) => {
    setCurrentIndex(index);
    setTempSrc(portraitData[index].src);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % portraitData.length;
    setCurrentIndex(nextIndex);
    setTempSrc(portraitData[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + portraitData.length) % portraitData.length;
    setCurrentIndex(prevIndex);
    setTempSrc(portraitData[prevIndex].src);
  };

  return (
    <section className="padding-container max-container  mt-16 mb-10  lg:mt-20 lg:mb-0">
      <div className="justify-center px-10 lg:px-16 ">
        <div className="text-center py-3">
          <p className="text-white text-[16px] lg:text-[20px]">
            <Link
              href={"/work"}
              className="hover:text-secondary hover:underline font-medium"
            >
              Album
            </Link>
            <span> / Portrait Photos</span>
          </p>
        </div>
        {/* Images */}
        <div className={model ? "modal open" : "modal"} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={tempSrc}
              alt="Art by Faisal G"
              layout="responsive"
              width={800}
              height={800}
            />
            <IoClose onClick={closeModal} className="close-icon" />
            <IoArrowBack onClick={prevImage} className="nav-icon prev" />
            <IoArrowForward onClick={nextImage} className="nav-icon next" />
          </div>
        </div>
        <div className="gallery mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portraitData.map((portrait, i) => (
            <div
              key={i}
              className="pics cursor-pointer group relative rounded-3xl overflow-hidden hover:opacity-60 transition-opacity aspect-w-4 aspect-h-3"
              onClick={() => openModal(i)}
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
