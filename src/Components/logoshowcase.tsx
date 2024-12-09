import type { NextPage } from "next";
import Image from "next/image";

const CompanyLogo: NextPage = () => {
  const logos = [
    { src: "/Logo4.png", alt: "Logo 4", width: 85, height: 87 },
    { src: "/Logo1.png", alt: "Logo 1", width: 107, height: 109 },
    { src: "/Logo7.png", alt: "Logo 7", width: 135, height: 139 },
    { src: "/Logo2.png", alt: "Logo 2", width: 63, height: 65 },
    { src: "/Logo6.png", alt: "Logo 6", width: 98, height: 101 },
    { src: "/Logo3.png", alt: "Logo 3", width: 113, height: 115 },
    { src: "/Logo5.png", alt: "Logo 5", width: 84, height: 87 },
  ];

  return (
    <div className="w-full relative overflow-hidden flex flex-wrap items-center justify-evenly gap-4">
      {logos.map((logo, index) => (
        <Image
          key={index}
          className="object-cover"
          width={logo.width}
          height={logo.height}
          alt={logo.alt}
          src={logo.src}
        />
      ))}
    </div>
  );
};

export default CompanyLogo;
