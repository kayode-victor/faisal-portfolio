import Image from "next/image";

const Logo = () => {
  return (
    <div
      className="fixed bottom-24 left-1 lg:left-2 lg:bottom-10 lg:p-x4 px-2 py-4 z-20 
    "
    >
      {/* Logo for large screens */}
      <div className="hidden lg:flex items-center">
        <Image src={"/logo4.png"} alt="img-logo" height={130} width={130} />
        <div>
          <h2 className="bold-40 font-bold">DASH-MEDIA</h2>
          <p className="text-secondary medium-20">Capturing Life Creatively</p>
        </div>
      </div>

      {/* Logo for smaller screens */}
      <span className="lg:hidden text-sm bold-16 font-bold">
        <Image src={"/logo4.png"} alt="img-logo" height={100} width={100} />
      </span>
    </div>
  );
};

export default Logo;
