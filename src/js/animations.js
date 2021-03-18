gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 1180px)": function () {
    const $pageHeight = $(document).height();

    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: () => "+=" + $pageHeight * 0.7,
        // markers: true,
        scrub: 2,
      },
    });

    tl1.to("#plane-up", {
      y: -$pageHeight,
    });

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: () => "+=" + $pageHeight * 0.7,
        // markers: true,
        scrub: 2,
      },
    });

    tl2
      .to("#plane-down", {
        y: $pageHeight,
      })
      .to("#plane-down", {
        opacity: 0,
      });
  },
});
