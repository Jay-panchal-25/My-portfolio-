import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import React from "react";
export default function Contact() {
  return (
    <section className="self-center mt-24 w-full max-w-6xl max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:w-full">
          <ContactInfo />
        </div>
        <div className="w-6/12 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
