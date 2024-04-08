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
    component: () => import("../views/gsap/macbook-pro-animation/canvas-animation.vue"),}
];
