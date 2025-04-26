import React from "react";
export default function SkillsCard({ title, skills }) {
  return (
    <div className="flex flex-col grow items-start py-6 pr-14 pl-6 w-full text-base rounded-3xl bg-neutral-900 text-zinc-500 max-md:px-5 max-md:mt-6">
      <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>
      {skills.map((skill, index) => (
        <p key={index} className="mt-4">
          {skill}
        </p>
      ))}
    </div>
  );
}
