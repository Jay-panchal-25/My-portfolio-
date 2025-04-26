import CaseStudy from "./CaseStudy";
import React from "react";
export default function CaseStudies() {
  return (
    <section className="mt-24 max-md:mt-10">
      <h2 className="self-center text-5xl font-bold leading-none text-center text-white max-md:text-4xl">
        Case Studies
      </h2>
      <div className="self-center mt-16 w-full max-w-[1155px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex shrink-0 rounded-3xl h-[460px] max-md:max-w-full" />
              <div className="flex shrink-0 mt-24 rounded-3xl h-[460px] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
          <div className="w-6/12 max-md:w-full">
            <CaseStudy
              title="Fintech App Redesign"
              duration="3 months"
              role="Lead UI/UX Designer"
              challenge="Complex financial data visualization and improving user engagement"
              solution="Implemented intuitive charts and personalized dashboard"
              impact={[
                "40% increase in daily active users",
                "65% improvement in task completion rate",
                "90% positive user feedback",
              ]}
              tools={["Figma", "Maze", "React"]}
            />
            <div className="mt-24 max-md:mt-10">
              <CaseStudy
                title="E-learning Platform"
                duration="4 months"
                role="Frontend Developer & UX Designer"
                challenge="Creating engaging learning experience and improving course completion rates"
                solution="Gamification elements and progress tracking system"
                impact={[
                  "75% increase in course completion",
                  "50% better student engagement",
                  "85% satisfaction rate",
                ]}
                tools={["Vue.js", "Figma", "Adobe XD"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
