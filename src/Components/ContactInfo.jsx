import React from "react";
export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start w-full text-base text-white max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
        Let's Work Together
      </h2>
      <p className="self-stretch mt-10 text-lg leading-loose text-zinc-500 max-md:max-w-full">
        Have a project in mind? Let's create something amazing together.
      </p>
      <h3 className="mt-12 text-2xl font-bold leading-none max-md:mt-10">
        Contact Details
      </h3>
      <a
        href="mailto:john.doe@email.com"
        className="mt-6 text-zinc-500 hover:text-blue-500"
      >
        john.doe@email.com
      </a>
      <a
        href="tel:+911234567890"
        className="mt-4 text-zinc-500 hover:text-blue-500"
      >
        +91 123 456 7890
      </a>
      <address className="mt-4 text-zinc-500 not-italic">Mumbai, India</address>
      <h3 className="mt-12 text-2xl font-bold leading-none max-md:mt-10">
        Social Links
      </h3>
      <div className="flex gap-6 mt-6 whitespace-nowrap">
        <a
          href="#linkedin"
          className="p-4 bg-neutral-900 rounded-[26843500px] hover:bg-neutral-800"
        >
          LinkedIn
        </a>
        <a
          href="#dribbble"
          className="p-4 bg-neutral-900 rounded-[26843500px] hover:bg-neutral-800"
        >
          Dribbble
        </a>
        <a
          href="#github"
          className="p-4 bg-neutral-900 rounded-[26843500px] hover:bg-neutral-800"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
