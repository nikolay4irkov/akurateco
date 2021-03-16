gsap.registerPlugin(ScrollTrigger);

$(function () {
  if ($("body").is(".index")) {
    var Cont1 = { val: 0 },
      Cont2 = { val: 0 },
      Cont3 = { val: 0 },
      Cont4 = { val: 0 };

    var NewVal1 = Math.round(document.getElementById("number-1").innerHTML);
    var NewVal2 = Math.round(document.getElementById("number-2").innerHTML);
    var NewVal3 = Math.round(document.getElementById("number-3").innerHTML);
    var NewVal4 = Math.round(document.getElementById("number-4").innerHTML);

    const number1 = gsap.timeline();
    number1.to(Cont1, 2, {
      val: NewVal1,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("number-1").innerHTML = Cont1.val;
      },
    });

    const number2 = gsap.timeline();
    number2.to(Cont2, 2, {
      val: NewVal2,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("number-2").innerHTML = Cont2.val;
      },
    });

    const number3 = gsap.timeline();
    number3.to(Cont3, 2, {
      val: NewVal3,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("number-3").innerHTML = Cont3.val;
      },
    });

    const number4 = gsap.timeline();
    number4.to(Cont4, 2, {
      val: NewVal4,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("number-4").innerHTML = Cont4.val;
      },
    });

    ScrollTrigger.create({
      animation: number1,
      trigger: ".swiper-container--index-1",
      start: "top 91%",
      end: "+=100",
      //   markers: true,
    });

    ScrollTrigger.create({
      animation: number2,
      trigger: ".swiper-container--index-1",
      start: "top 91%",
      end: "+=100",
    });

    ScrollTrigger.create({
      animation: number3,
      trigger: ".swiper-container--index-1",
      start: "top 91%",
      end: "+=100",
    });

    ScrollTrigger.create({
      animation: number4,
      trigger: ".swiper-container--index-1",
      start: "top 91%",
      end: "+=100",
    });

    gsap.to(".circle-chart", {
      scrollTrigger: {
        trigger: ".swiper-container--index-1",
        start: "top 91%",
        toggleClass: {
          targets: ".circle-chart, .lines-chart",
          className: "is-active",
        },
        // markers: true,
      },
    });
  }
});
