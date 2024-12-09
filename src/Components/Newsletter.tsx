import { NextPage } from "next";
import Image from "next/image";

const NewsletterInstagram: NextPage = () => {
  const instagramImages = [
    { src: "/img6.png", alt: "Instagram 1" },
    { src: "/img5.png", alt: "Instagram 2" },
    { src: "/img2.png", alt: "Instagram 3" },
    { src: "/img1.png", alt: "Instagram 4" },
    { src: "/img3.png", alt: "Instagram 5" },
    { src: "/img7.png", alt: "Instagram 6" }
  ];

  return (
    <div className="relative bg-gray-100 w-full flex flex-col items-center justify-start py-24 px-4 sm:px-12 md:px-20 lg:px-40 gap-16 text-center text-base text-gray-500 font-roboto">
      {/* Newsletter Section */}
      <div className="relative w-full md:w-[760px] h-[165px]">
        <div className="absolute top-0 left-0 w-full h-[32px] text-left">
          <div className="relative w-full h-full">
            <div className="absolute top-[120px] left-2.5 text-lg font-semibold">Email address...</div>
            <div className="absolute top-[150px] left-[-0.16%] right-[-0.16%] border-t-2 border-black box-border w-[80%]" />
          </div>
        </div>

        <div className="absolute top-[90px] left-[90%] transform -translate-x-[50%] flex flex-col items-center justify-center gap-2 text-[#1e2832] font-open-sans">
          <div className="flex items-center justify-center py-4 px-4 gap-4 border-b-2 border-[#1e2832] w-full">
            <div className="text-lg font-medium">SUBMIT</div>
          </div>
        </div>

        <div className="absolute top-0 left-6 text-5xl font-bold text-black">Or subscribe to the newsletter</div>
      </div>

      {/* Instagram Section */}
      <div className="relative w-full md:w-[1324px] h-auto text-5xl font-bold text-black">
        <div className="absolute top-0 left-8 sm:left-16 md:left-32">
          <div className="text-[50px]">Follow Products and Discounts on Instagram</div>
        </div>

        <div className="absolute top-[119px] left-0 w-full flex flex-wrap justify-center gap-6">
          {instagramImages.map((image, index) => (
            <Image
              key={index}
              className="w-[186px] h-[186px] rounded-lg object-cover"
              width={186}
              height={186}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterInstagram;
