"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Vortex } from "@/components/ui/vortex";
export default function HeroParallaxDemo() {
  return (
    <div>
      <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Tryhard Competition (THC)
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Das beste teambasierte Kartenspiel der Welt
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Jetzt Kaufen{" "}
            </button>
          </div>
        </Vortex>
      </div>
      <HeroParallax products={products} />
      <Timeline data={data} />
      <AnimatedTestimonials testimonials={testimonials} />;
    </div>
  );
}

const data = [
  {
    title: "November 2025",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Entscheidung getroffen, das Spiel zu veröffentlichen und auf den Markt
          zu bringen.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Immer wieder Späße darüber gemacht eine Firma zu gründen.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Erste Orden veröffentlicht.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Erstes Deck veröffentlicht.
        </p>
      </div>
    ),
  },
];

export const products = [
  {
    title: "14 Phoenix",
    link: "",
    thumbnail: "/images/14_phoenix.png",
  },
  {
    title: "1395 Dragon",
    link: "",
    thumbnail: "/images/1395_dragon.png",
  },
  {
    title: "Ass Bomben 1",
    link: "",
    thumbnail: "/images/ass_bomben_1.png",
  },
  {
    title: "blindfolded",
    link: "",
    thumbnail: "/images/blindfolded-360-dog.png",
  },
  {
    title: "Destroyer",
    link: "",
    thumbnail: "/images/destroyer_s_09.png",
  },
  {
    title: "Dorftrottel",
    link: "",
    thumbnail: "/images/dorftrottel_s_02.png",
  },
  {
    title: "Gambler",
    link: "",
    thumbnail: "/images/gambler_g_09.png",
  },
  {
    title: "heelflip",
    link: "",
    thumbnail: "/images/heelflip_phoenix.png",
  },
  {
    title: "kickflip",
    link: "",
    thumbnail: "/images/kickflip_dragon.png",
  },
  {
    title: "treppe",
    link: "",
    thumbnail: "/images/lange_treppe_b_09.png",
  },
  {
    title: "olli",
    link: "",
    thumbnail: "/images/olli_mahjong.png",
  },
  {
    title: "pay2win",
    link: "",
    thumbnail: "/images/pay-to-win-s-A.png",
  },
  {
    title: "speed",
    link: "",
    thumbnail: "/images/speed_dog.png",
  },
  {
    title: "tornado",
    link: "",
    thumbnail: "/images/tornado_g_10.png",
  },
  {
    title: "Vulkan",
    link: "",
    thumbnail: "/images/vulkan_r_10.png",
  },
  {
    title: "wackelturm",
    link: "",
    thumbnail: "/images/wackelturm_r_09.png",
  },
];
const testimonials = [
  {
    quote:
      "Ich bin vielleicht voreingenomen, aber ich würde es 10/10 empfehlen.",
    name: "Mark",
    designation: "CEO",
    src: "testimonials/mark.png",
  },
  {
    quote:
      "Die Erfahrung war nahtlos und das Team war unglaublich unterstützend während des gesamten Prozesses.",
    name: "Tommy",
    designation: "Lead Product Developer",
    src: "testimonials/tommy.png",
  },
  {
    quote:
      "Als jemand, der normalerweise keine Bewertungen schreibt, fühlte ich mich gezwungen, meine positive Erfahrung zu teilen.",
    name: "Philipp",
    designation: "Buchhalter",
    src: "testimonials/philipp.png",
  },
  {
    quote:
      "Ich bin zwar sehr konservativ, aber dieses Produkt hat mich wirklich beeindruckt.",
    name: "Laura",
    designation: "Hobbyspieler",
    src: "testimonials/laura.png",
  },
];
