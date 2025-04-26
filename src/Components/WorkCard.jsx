import React from "react";
export default function WorkCard({ image, category, title, description }) {
  return (
    <article className="flex flex-col grow pb-6 w-full rounded-3xl bg-neutral-900 max-md:mt-8 max-md:max-w-full">
      <img
        src={image}
        alt={title}
        className="object-contain w-full aspect-[1.87] max-md:max-w-full"
      />
      <div className="flex flex-col items-start self-start mt-7 ml-6 max-md:ml-2.5">
        <span className="text-sm leading-none text-blue-500">{category}</span>
        <h3 className="mt-2 text-2xl font-bold leading-none text-white">
          {title}
        </h3>
        <p className="self-stretch mt-2 text-base text-zinc-500">
          {description}
        </p>
      </div>
    </article>
  );
}
