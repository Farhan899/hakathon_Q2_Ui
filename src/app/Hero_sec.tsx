

import React from "react";



export default function Home() {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h2 className="text-4xl mb-5 pl-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <button className="w-full mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now
            </button>
          </div>
          <div className="flex items-center justify-center flex-wrap">
            <div className="flex flex-col">
              <span className="font-bold text-2xl">
                200+
              </span>
              <span className="text-xs text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <div className="ml-6 bg-black/10" />
            <div className="flex flex-col ml-6 ">
              <span className="font-bold text-2xl ">
                2000+
              </span>
              <span className="text-xs text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div className="hidden ml-6 bg-black/10" />
            <div className="flex flex-col w-full text-center mt-3">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                30,000+
              </span>
              <span className="text-xs text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        <section className="relative min-h-[448px] bg-cover bg-top bg-no-repeat bg-[url('/images/header-res-homepage.png')]">

        </section>
      </div>
    </header>
  );
}
