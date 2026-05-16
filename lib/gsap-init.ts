import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, CustomEase);

  CustomEase.create("cinematic", "0.16, 1, 0.3, 1");
  CustomEase.create("luxury", "0.25, 0.46, 0.45, 0.94");
  CustomEase.create("spring", "0.34, 1.56, 0.64, 1");

  gsap.defaults({
    ease: "cinematic",
    duration: 1,
  });
}

export { gsap, ScrollTrigger };

export const DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  cinematic: 1.6,
  epic: 2.4,
};

export const EASES = {
  cinematic: "cinematic",
  luxury: "luxury",
  spring: "spring",
  out: "power3.out",
  inOut: "power3.inOut",
};
