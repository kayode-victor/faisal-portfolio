import Image from "next/image";

const Logo = () => {
  return (
    <div
      className="fixed bottom-20 left-2 lg:bottom-10 p-4 z-50 
    "
    >
      {/* Logo for large screens */}
      <div className="hidden lg:flex items-center">
        <Image src={"/logo1.png"} alt="img-logo" height={130} width={130} />
        <div>
          <h2 className="bold-40 font-bold">DASH-MEDIA</h2>
          <p className="text-tertiary medium-20">Capturing Life Creatively</p>
        </div>
      </div>

      {/* Logo for smaller screens */}
      <span className="lg:hidden text-sm bold-16 font-bold">
        <Image src={"/logo1.png"} alt="img-logo" height={80} width={80} />
      </span>
    </div>
  );
};

export default Logo;
