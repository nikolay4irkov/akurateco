import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
// import "swiper/swiper.scss";

const indexFirst = new Swiper(".swiper-container--index-1", {
  speed: 1000,
  slidesPerView: 1.2,
  spaceBetween: 48,
  slidesOffsetAfter: 70,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesOffsetAfter: 0,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  },
});

const indexSecond = new Swiper(".swiper-container--index-2", {
  speed: 1000,
  slidesPerView: 1.3,
  spaceBetween: -30,
  slidesOffsetAfter: 70,

  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
      slidesOffsetAfter: 0,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  },
});

const indexThird = new Swiper(".swiper-container--index-3", {
  speed: 1000,
  slidesPerView: 1.4,
  spaceBetween: 38,
  slidesOffsetAfter: 70,

  breakpoints: {
    1200: {
      slidesPerView: 5,
      // spaceBetween: 25,
      slidesOffsetAfter: 0,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  },
});

const whiteLabelIntegration = new Swiper(
  ".swiper-container--white-label-integration",
  {
    speed: 1500,
    slidesPerView: 1.1,
    spaceBetween: 32,
    slidesOffsetAfter: 70,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
      1200: {
        slidesPerView: 2.1,
        // spaceBetween: 25,
      },
    },
  }
);

const whiteLabelPayment = new Swiper(".swiper-container--white-label-payment", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 32,
  effect: "fade",

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    1200: {
      // slidesPerView: 2.1,
      // spaceBetween: 25,
    },
  },
});

const connectorsIntegration = new Swiper(
  ".swiper-container--connectors-integration",
  {
    speed: 1000,
    slidesPerView: 1.2,
    spaceBetween: 24,
    slidesOffsetAfter: 70,

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 48,
        slidesOffsetAfter: 0,
        allowSlideNext: false,
        allowSlidePrev: false,
      },
    },
  }
);

const aboutServices = new Swiper(".swiper-container--about-services", {
  speed: 1000,
  slidesPerView: 1.2,
  spaceBetween: 24,
  slidesOffsetAfter: 70,

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 48,
      slidesOffsetAfter: 0,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  },
});

(function () {
  "use strict";

  // breakpoint where swiper will be destroyed
  const breakpoint = window.matchMedia("(min-width:1024px)");

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    let slider = new Swiper(".swiper-container--related-news", {
      slidesPerView: 1.2,
      // loop: false,
      // freeMode: false,
      spaceBetween: 24,
      observer: true,
      observeParents: true,
      speed: 1000,
      updateOnWindowResize: true,
      slidesOffsetAfter: 70,

      // breakpoints: {
      //   1200: {
      //     slidesPerView: 4,
      //   },
      // },
    });
  };

  // keep an eye on viewport size changes
  /*breakpoint.addEventListener(breakpointChecker);*/

  // kickstart
  breakpointChecker();
})(); /* IIFE end */

const indexHero = new Swiper(".swiper-container--index-hero", {
  speed: 1000,
  slidesPerView: 1,
  effect: "fade",
  // autoHeight: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    1200: {
      // autoHeight: false,
    },
  },
});
