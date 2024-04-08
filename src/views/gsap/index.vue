<template>
  <div class="main magic-os">
    <!-- 第一屏 -->
    <section class="section-hero section-dark">
      <div class="section-wrapper"></div>
    </section>
    <!-- 第三屏 -->
    <section class="section-magic">
      <div class="section-wrapper"></div>
    </section>
    <!-- 省略其他屏... -->
  </div>
</template>

<style lang="scss">
.magic-os {
  background-color: #fff;
  section {
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .section-dark {
    color: #fff;
    background-color: #000;
  }
}
.section-hero {
}
.section-magic {
}
</style>
