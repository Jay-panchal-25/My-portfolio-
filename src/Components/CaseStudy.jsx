import React from "react";
export default function CaseStudy({
  title,
  duration,
  role,
  challenge,
  solution,
  impact,
  tools,
}) {
  return (
    <article className="flex flex-col items-start w-full text-base text-white max-md:mt-10 max-md:max-w-full">
      <h3 className="text-3xl font-bold leading-tight">{title}</h3>
      <div className="flex gap-6 mt-7 text-blue-500">
        <span className="px-4 py-2 bg-neutral-900 rounded-[26843500px]">
          {duration}
        </span>
        <span className="px-4 py-2 bg-neutral-900 rounded-[26843500px]">
          {role}
        </span>
      </div>
      <h4 className="mt-8 text-xl font-semibold leading-snug">Challenge</h4>
      <p className="mt-2 text-zinc-500">{challenge}</p>
      <h4 className="mt-6 text-xl font-semibold leading-snug">Solution</h4>
      <p className="mt-2 text-zinc-500">{solution}</p>
      <h4 className="mt-6 text-xl font-semibold leading-snug">Impact</h4>
      <ul className="flex flex-col items-start mt-2 ml-6 text-zinc-500 max-md:ml-2.5">
        {impact.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-6 text-sm leading-none">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-neutral-900 rounded-[26843500px]"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}
