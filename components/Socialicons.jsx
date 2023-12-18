import Link from "next/link";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiPinterestFill,
} from "react-icons/ri";
const Socialicons = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4">
      <Link
        href={""}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiFacebookFill />
      </Link>

      <Link
        href={""}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>

      <Link
        href={""}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={""}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiPinterestFill />
      </Link>
    </div>
  );
};

export default Socialicons;
