import React from "react";
export default function Hero() {
  return (
    <section className="flex flex-col items-center pr-4 pb-56 w-full max-md:pb-24 max-md:max-w-full">
      <div className="mt-40 text-xl leading-snug text-center text-blue-500 max-md:mt-10">
        Hello, I'm Jay Panchal from India
      </div>
      <h2 className="mt-3 text-7xl font-bold text-center text-white leading-[90px] w-[937px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
        UI/UX Designer & Frontend Developer
      </h2>
      <p className="mt-9 text-xl leading-7 text-center text-zinc-500 w-[582px] max-md:max-w-full">
        Passionate about creating exceptional digital experiences through
        intuitive design and clean code.
      </p>
      <div className="flex flex-wrap gap-5 justify-between mt-12 mb-0 max-w-full text-base text-center text-white w-[574px] max-md:mt-10 max-md:mb-2.5">
        <button className="px-8 py-5 rounded-[26843500px] max-md:px-5">
          View Projects
        </button>
        <button className="px-9 py-5 border-2 border-white border-solid rounded-[26843500px] max-md:px-5">
          Contact Me
        </button>
        <button className="flex gap-2 px-8 py-5 bg-neutral-900 rounded-[26843500px] max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8fc5914bc6514e68b11478942741a9f4/2daa49716b05516815b448020634a224b56ba843?placeholderIfAbsent=true"
            alt="Download icon"
            className="object-contain shrink-0 my-auto w-5 aspect-square"
          />
          <span>Download Resume</span>
        </button>
      </div>
    </section>
  );
}
