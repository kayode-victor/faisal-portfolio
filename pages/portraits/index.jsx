import { useState } from "react";
import { portraitData } from "@/app/constant/data";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function Portraits() {
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const getImg = (src) => {
    setTempSrc(src);
    setModel(true);
  };
  const closeModal = () => {
    setModel(false);
  };
  return (
    <section className="padding-container max-container  mt-16 mb-10  lg:mt-20 lg:mb-0">
      <div className="justify-center px-10 lg:px-16">
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
        {/*Images*/}
        <div className={model ? "modal open" : "modal"} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={tempSrc}
              alt="Art by Faisal G"
              layout="responsive"
              width={800}
              height={800}
            />
            <IoClose onClick={() => setModel(false)} />
          </div>
        </div>
        <div className="gallery mb-4">
          {portraitData.map((portrait, i) => {
            return (
              <div
                className="pics"
                key={i}
                onClick={() => getImg(portrait.src)}
              >
                <Image
                  className="rounded-lg"
                  src={portrait.src}
                  alt={portrait.alt}
                  layout="responsive" // Important for responsive behavior
                  width={1000} // Set an appropriate width (adjust as needed)
                  height={600} // Set an appropriate height (adjust as needed)
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
