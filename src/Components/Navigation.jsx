import React from "react";
export default function Navigation() {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch px-14 py-4 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <h1 className="my-auto text-2xl font-bold leading-none text-black">
        Jay panchal
      </h1>
      <nav className="flex flex-wrap gap-8 items-center text-base text-white">
        <a href="#home" className="self-stretch my-auto text-blue-500">
          Home
        </a>
        <a href="#work" className="self-stretch my-auto">
          Work
        </a>
        <a href="#case-studies" className="self-stretch my-auto">
          Case Studies
        </a>
        <a href="#about" className="self-stretch my-auto">
          About
        </a>
        <a href="#contact" className="self-stretch my-auto">
          Contact
        </a>
        <button className="flex gap-2 self-stretch px-6 py-2 text-center whitespace-nowrap bg-neutral-900 rounded-[26843500px] max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8fc5914bc6514e68b11478942741a9f4/2daa49716b05516815b448020634a224b56ba843?placeholderIfAbsent=true"
            alt="Resume icon"
            className="object-contain shrink-0 my-auto w-5 aspect-square"
          />
          <span>Resume</span>
        </button>
      </nav>
    </header>
  );
}
