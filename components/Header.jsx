import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const Header = () => {
  const handleScroll = () => {
    const isTop = window.scrollY < 30;
    const header = document.querySelector(".sticky-header");

    if (isTop) {
      header.classList.remove("scrolled");
    } else {
      header.classList.add("scrolled");
    }
  };

  if (typeof window !== "undefined") {
    // Check if window is defined (to avoid issues during server-side rendering)
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <header className="sticky-header padding-container max-container flex gap-4 flexBetween py-3">
      <Link href="/">
        <div className="logoContainer">
          <Image
            src="/dashLogo.png"
            alt="logo"
            width={120}
            height={30}
            className="logoImage"
          />
        </div>{" "}
      </Link>
      <Link
        href="/contact"
        className="btn_dark_rounded px-4 py-2 rounded-full flexCenter gap-1 font-semibold"
      >
        <span>Contact Me</span>
        <span className="h-5 w-5 rounded-full flexCenter">
          <HiArrowRight />
        </span>
      </Link>
    </header>
  );
};

export default Header;
