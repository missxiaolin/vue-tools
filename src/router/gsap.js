export default [
  {
    path: "/gsap",
    name: "gsap",
    component: () =>
      import(/* webpackChunkName: "gsap" */ "../views/gsap/index.vue"),
  }, {
    path: "/gsap/scale/phone/scroll",
    name: "gsapScalePhoneScroll",
    component: () =>
      import(
        /* webpackChunkName: "gsapScalePhoneScroll" */ "../views/gsap/vivo-scroll-switch-phone-color/scale-phone-to-middle-when-scroll.vue"
      ),
  }, {
    path: "/gsap/swich/phone/scroll",
    name: "gsapScalePhoneScroll",
    component: () =>
      import(
        /* webpackChunkName: "gsapScalePhoneScroll" */ "../views/gsap/vivo-scroll-switch-phone-color/switch-phone-color-when-scroll.vue"
      ),
  }
];
