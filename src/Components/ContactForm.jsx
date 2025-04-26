import { useState } from "react";
import React from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col grow p-8 mt-2 w-full text-base rounded-3xl bg-neutral-900 text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <label htmlFor="name" className="self-start">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="flex shrink-0 mt-2 h-14 rounded-xl bg-zinc-900 max-md:max-w-full w-full px-4"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label htmlFor="email" className="self-start mt-6">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="flex shrink-0 mt-2 h-14 rounded-xl bg-zinc-900 max-md:max-w-full w-full px-4"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <label htmlFor="message" className="self-start mt-6">
        Message
      </label>
      <textarea
        id="message"
        className="flex shrink-0 mt-2 rounded-xl bg-zinc-900 h-[150px] max-md:max-w-full w-full p-4"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button
        type="submit"
        className="px-16 py-4 mt-11 text-lg font-semibold leading-loose text-center text-white rounded-[26843500px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        Send Message
      </button>
    </form>
  );
}
