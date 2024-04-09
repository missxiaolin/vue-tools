export default [
  {
    path: "/gsap",
    name: "gsap",
    component: () => import("../views/gsap/index.vue"),
  }, {
    path: "/gsap/scale/phone/scroll",
    name: "gsapScalePhoneScroll",
    component: () => import("../views/gsap/vivo-scroll-switch-phone-color/scale-phone-to-middle-when-scroll.vue"),
  }, {
    path: "/gsap/swich/phone/scroll",
    name: "gsapScalePhoneScroll",
    component: () => import("../views/gsap/vivo-scroll-switch-phone-color/switch-phone-color-when-scroll.vue"),
  }, {
    path: "/gsap/canvas/animation",
    name: "canvasAnimation",
    component: () => import("../views/gsap/macbook-pro-animation/canvas-animation.vue"),
  }, {
    path: "/gsap/mars/section5",
    name: "marsSection5",
    component: () => import("../views/gsap/mars/section-5-6.vue"),
  }, {
    path: "/gsap/mars/section3",
    name: "marsSection3",
    component: () => import("../views/gsap/mars/section-3.vue"),
  }
];
