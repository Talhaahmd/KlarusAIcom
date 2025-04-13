"use client";

import React from "react";
import { HeroParallax } from "@/src/components/ui/hero-parallax";
import { NavBody, NavItems, Navbar, NavbarButton, NavbarLogo } from "@/src/components/ui/resizable-navbar";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import { TypewriterEffectSmoothDemo } from "@/src/components/ui/typewriter-effect";
import SignupFormDemo from "@/src/components/ui/signup-form-demo";

export const products = [
  {
    title: "Travel.IO",
    link: "https://example.com/creative-spark",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485582/homepage-seen-computer-screen_23-2149416723_qf0mou.avif",
  },
  {
    title: "Titan Appliances",
    link: "https://example.com/inspire-hub",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743750191/bu6bcluwez7jqthwpap1.webp",
  },
  {
    title: "Stellar.DS",
    link: "https://example.com/design-nest",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485582/macbook-mockup-front-view_1332-60629_ucvbzb.avif",
  },
  {
    title: "Herbivore Botanicals",
    link: "https://example.com/pixel-wave",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485583/JAAL0203_jkdk4o.jpg",
  },
  {
    title: "FactFocus",
    link: "https://example.com/tech-horizon",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485623/tshDnRIQoN1_ldm1ki.png",
  },
  {
    title: "Plunge",
    link: "https://example.com/visionary-lab",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485592/plunge_project_tile-small_wfdtyd.png",
  },
  {
    title: "Kinetika",
    link: "https://example.com/skyline-works",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485586/c7ad7b47483177.587c3be84aaa5_aj7cm1.jpg",
  },
  {
    title: "MNMLST",
    link: "https://example.com/nova-studio",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485613/12216601_4905662_pa9akd.jpg",
  },
  {
    title: "TravelInPeace",
    link: "https://example.com/element-forge",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485613/7741012_3613439_nnj2px.jpg",
  },
  {
    title: "Creatos.Hub",
    link: "https://example.com/pulse-agency",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485583/JAAL0203_jkdk4o.jpg",
  },
  {
    title: "Burger Week",
    link: "https://example.com/alpha-creatives",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485612/7335301_3606208_jzbk88.jpg",
  },
  {
    title: "Sushi Parlor",
    link: "https://example.com/brightside-media",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485610/2149416724_sdppdo.jpg",
  },
  {
    title: "NeverEnding",
    link: "https://example.com/edge-innovations",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485607/138123_m78htw.jpg",
  },
  {
    title: "Tour Logo",
    link: "https://example.com/epic-ventures",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485607/20548064_6317757_pftuxo.jpg",
  },
  {
    title: "Dimensions Studio",
    link: "https://example.com/quantum-solutions",
    thumbnail: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1744485606/6990735_3458722_p1oykz.jpg",
  },
];

const hoverEffectItems = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description: "A technology company focused on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and AI.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description: "A technology company developing and supporting software, electronics, and related services.",
    link: "https://microsoft.com",
  },
];

export default function Page() {
  return (
    <>
      <Navbar>
        <NavBody visible={true}>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Home", link: "/" },
              { name: "About", link: "#about" },
              { name: "Services", link: "#services" },
            ]}
          />
          <NavbarButton href="#contact">Contact Us</NavbarButton>
        </NavBody>
      </Navbar>

      <HeroParallax products={products} />

      <div className="container mx-auto px-4">
        <HoverEffect items={hoverEffectItems} />

        <div className="mt-12">
          <TypewriterEffectSmoothDemo
            words={[
              { text: "The road to freedom starts from here", className: "text-neutral-600 dark:text-neutral-200" },
              { text: "Build awesome apps with Klarus AI.", className: "text-blue-500 dark:text-blue-500" },
            ]}
          />
        </div>

        {/* ✅ Signup Form Section */}
        <div className="mt-20">
          <SignupFormDemo />
        </div>
      </div>
    </>
  );
}