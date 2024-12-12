import { NextPage } from "next";
import Image from "next/image";

const NewsletterInstagram: NextPage = () => {
  return (
    <div className="relative bg-gray-100 w-full flex flex-col items-center justify-start py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-40 gap-8 md:gap-12 lg:gap-16 text-center text-base text-gray-500 font-roboto">
      {/* Newsletter Section */}
      <div className="relative w-full max-w-[760px] px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 lg:mb-10">
          Or subscribe to the newsletter
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4">
          <div className="relative flex-grow">
            <input
              type="email"
              placeholder="Email address..."
              className="w-full py-2 px-3 text-lg border-b-2 border-black focus:outline-none bg-transparent"
            />
          </div>
          <button className="bg-transparent text-[#1e2832] border-b-2 border-[#1e2832] py-2 px-4 text-lg font-medium hover:bg-[#1e2832] hover:text-white transition-colors duration-300">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="w-full max-w-[1324px] text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 lg:mb-10">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          <Image className="w-full max-w-[186px] h-auto rounded-lg object-cover" width={186} height={186} alt="Instagram 1" src="/img6.png" />
          <Image className="w-full max-w-[186px] h-auto rounded-lg object-cover" width={186} height={186} alt="Instagram 2" src="/img5.png" />
          <Image className="w-full max-w-[200px] h-auto rounded-lg object-cover" width={200} height={200} alt="Instagram 3" src="/img2.png" />
          <Image className="w-full max-w-[200px] h-auto rounded-lg object-cover" width={200} height={200} alt="Instagram 4" src="/img1.png" />
          <Image className="w-full max-w-[200px] h-auto rounded-lg object-cover" width={200} height={200} alt="Instagram 5" src="/img3.png" />
          <Image className="w-full max-w-[196px] h-auto rounded-lg object-cover" width={196} height={196} alt="Instagram 6" src="/img7.png" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterInstagram;