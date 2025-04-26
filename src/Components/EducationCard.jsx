import React from "react";
export default function EducationCard() {
  return (
    <div className="flex flex-col grow items-start py-8 pr-20 pl-8 mt-2 w-full text-base rounded-3xl bg-neutral-900 text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h3 className="text-2xl font-bold leading-none text-white">Education</h3>
      <div className="mt-8">
        <h4 className="text-xl font-semibold leading-snug text-white">
          Master of Human-Computer Interaction
        </h4>
        <p className="mt-1 text-blue-500">Carnegie Mellon University</p>
        <p className="mt-1 text-sm leading-none">2020-2022</p>
        <p className="mt-2">
          Focus on User Experience Design and Research Methods
        </p>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-semibold leading-snug text-white">
          Bachelor of Computer Science
        </h4>
        <p className="mt-1 text-blue-500">University of California, Berkeley</p>
        <p className="mt-1 text-sm leading-none">2016-2020</p>
        <p className="mt-2">
          Specialization in Software Engineering and UI Development
        </p>
      </div>
    </div>
  );
}
