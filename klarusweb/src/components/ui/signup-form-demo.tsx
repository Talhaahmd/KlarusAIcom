"use client";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "./input";
import React, { useState } from "react";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ✅ Fullscreen video background */}
      <video
        src="https://res.cloudinary.com/dt3ufcdjs/video/upload/v1744489927/Untitled_video_-_Made_with_Clipchamp_1_p6sbbq.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-500",
          isHovered && "blur-md"
        )}
      />

      {/* ✅ Optional dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ✅ Form container */}
      <div className="relative z-20 w-full max-w-xl p-8 md:p-12 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-4">
          Get in Touch with Klarus AI
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8">
          Fill out the form below and let's start building something amazing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" type="text" />
          </LabelInputContainer>

          {/* Email */}
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="you@example.com" type="email" />
          </LabelInputContainer>

          {/* Phone Number */}
          <LabelInputContainer>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+1 234 567 8901" type="tel" />
          </LabelInputContainer>

          {/* Message */}
          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Tell us about your project or inquiry..."
              className="w-full rounded-md border border-neutral-300 bg-white dark:bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500"
              rows={4}
            ></textarea>
          </LabelInputContainer>

          {/* Submit Button */}
          <button
            className="group/btn relative block w-full h-12 rounded-md bg-gradient-to-br from-black to-neutral-700 font-medium text-white shadow hover:from-neutral-800 hover:to-neutral-600 transition"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
