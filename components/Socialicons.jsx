import Link from "next/link";
import { RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
const Socialicons = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4">
      <Link
        href={"https://www.instagram.com/_dashmedia?igshid=OGQ5ZDc2ODk2ZA=="}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/gidado-faisal-55ba90a6/"}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>

      <Link
        href={"https://www.youtube.com/channel/UCXYGc7Cz1qgNrPatF_LamUA"}
        className="bg-[#aeaeae] p-2 rounded-full text-primary text-[20px] rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiYoutubeFill />
      </Link>
    </div>
  );
};

export default Socialicons;
