import { navData } from "@/app/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed h-max bottom-0 mt-auto gap-y-4 flex flex-col items-center top-0 w-full xl:justify-center xl:right-[2%] xl:w-16 xl:h-screen z-30">
      <ul className="flexBetween gap-4 w-full bg-white/10 backdrop-blur-3xl px-4 py-3 xl:flex-col xl:flexCenter xl:rounded-full xl:gap-y-8 xl:p-8">
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-secondary"
            } flexCenter hover:text-tertiary p-2 group relative`}
          >
            <div className="bg-white text-black absolute right-16 border rounded p-1 items-center hidden xl:group-hover:flex">
              <div className="text-[16px] px-4 py-2 font-semibold text-gray-50 capitalize leading-none">
                {link.name}
              </div>
              <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 top-1"></div>
            </div>
            <div className="text-2xl">{link.icon}</div>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
