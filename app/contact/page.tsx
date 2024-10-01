"use client";
import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    try {
      const response = await fetch("/api/sendmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(result.error || "Error sending message.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="mt-1 p-2 w-full h-32 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        {/* Status Message */}
        {status && (
          <div
            className={`mt-4 text-sm ${
              status === "Message sent successfully!"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
