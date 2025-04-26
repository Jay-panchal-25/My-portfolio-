import WorkCard from "./WorkCard";
import React from "react";
export default function SelectedWorks() {
  return (
    <section className="flex flex-col py-24 w-full bg-stone-950 max-md:max-w-full">
      <h2 className="self-center text-5xl font-bold leading-none text-center text-white max-md:text-4xl">
        Selected Works
      </h2>
      <div className="px-16 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <WorkCard
              image="https://cdn.builder.io/api/v1/image/assets/8fc5914bc6514e68b11478942741a9f4/614d29ebc4cfd75e730ff87775fb0a27cde3123c?placeholderIfAbsent=true"
              category="UI/UX Design"
              title="E-commerce Platform"
              description="Redesigned checkout flow increasing conversions by 40%"
            />
          </div>
          <div className="w-6/12 max-md:w-full">
            <WorkCard
              image="https://cdn.builder.io/api/v1/image/assets/8fc5914bc6514e68b11478942741a9f4/614d29ebc4cfd75e730ff87775fb0a27cde3123c?placeholderIfAbsent=true"
              category="Frontend Development"
              title="Health Dashboard"
              description="Real-time patient monitoring system"
            />
          </div>
        </div>
        <div className="w-[560px] mt-8">
          <WorkCard
            image="https://cdn.builder.io/api/v1/image/assets/8fc5914bc6514e68b11478942741a9f4/614d29ebc4cfd75e730ff87775fb0a27cde3123c?placeholderIfAbsent=true"
            category="UI/UX Design"
            title="Travel App"
            description="Booking experience with 95% satisfaction rate"
          />
        </div>
      </div>
    </section>
  );
}
