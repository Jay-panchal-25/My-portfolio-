import SkillCard from "./SkillCard";
import EducationCard from "./EducationCard";
import React from "react";
export default function About() {
  return (
    <section className="px-16 py-24 mt-24 w-full bg-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-5xl font-bold leading-none text-white max-md:text-4xl">
              About Me
            </h2>
            <p className="mt-11 text-lg leading-7 text-zinc-500 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Passionate about creating user-centered digital experiences that
              combine aesthetic excellence with technical innovation.
            </p>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:w-full">
                  <SkillCard
                    title="Design Skills"
                    skills={[
                      "User Interface Design",
                      "User Experience Design",
                      "Prototyping",
                      "Design Systems",
                    ]}
                  />
                </div>
                <div className="w-6/12 max-md:w-full">
                  <SkillCard
                    title="Development Skills"
                    skills={[
                      "React / Vue.js",
                      "JavaScript / TypeScript",
                      "HTML5 / CSS3",
                      "Responsive Design",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 max-md:w-full">
          <EducationCard />
        </div>
      </div>
    </section>
  );
}
