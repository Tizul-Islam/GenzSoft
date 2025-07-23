import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const JobApplicationForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init("HIfXLcrL3TVIUpcU6"); // Your public key here
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_vs9j76s", // replace with your EmailJS service ID
        "template_4lhs54q", // replace with your EmailJS template ID
        form.current
      )
      .then(
        () => {
          alert("Application sent successfully!");
          setSending(false);
          form.current.reset();
        },
        (error) => {
          alert("Failed to send application. Please try again.");
          console.error(error.text);
          setSending(false);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-blue-700 text-center">
        Job Application Form
      </h2>

      <div>
        <label className="block font-semibold mb-1" htmlFor="applicant_name">
          Full Name
        </label>
        <input
          type="text"
          id="applicant_name"
          name="applicant_name"
          placeholder="John Doe"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="applicant_email">
          Email Address
        </label>
        <input
          type="email"
          id="applicant_email"
          name="applicant_email"
          placeholder="email@example.com"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="applicant_phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="applicant_phone"
          name="applicant_phone"
          placeholder="+1234567890"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="position">
          Position Applying For
        </label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Software Engineer"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="location">
          Location (optional)
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City, Country"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="cover_letter">
          Cover Letter
        </label>
        <textarea
          id="cover_letter"
          name="cover_letter"
          rows="6"
          placeholder="Write your cover letter here..."
          required
          className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="resume_url">
          Resume Link (Google Drive, Dropbox, etc.)
        </label>
        <input
          type="url"
          id="resume_url"
          name="resume_url"
          placeholder="https://drive.google.com/your-resume-link"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className={`w-full py-3 font-semibold text-white rounded-md ${
          sending ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        } transition`}
      >
        {sending ? "Sending..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JobApplicationForm;
