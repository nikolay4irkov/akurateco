gsap.registerPlugin(ScrollTrigger);
const $offset = 0;

const $pageHeight = $(document).height();

console.log($pageHeight);
const $pageHeightIncreased = $pageHeight + $offset;

gsap.to("#plane-up", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=3500",
    ease: "circ.out",
    scrub: 1,
  },
  y: -$pageHeight,
});

gsap.to("#plane-down", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=3500",
    ease: "circ.out",
    scrub: 1,
    // markers: true,
  },
  y: $pageHeightIncreased,
});
