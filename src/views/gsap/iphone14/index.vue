<template>
  <div>
    <div class="top-info">
      <div class="top-info-title">神技能爆满</div>
      <div class="top-info-right">
        <div id="color-text"></div>
        <div class="colors">
          <label>
            <span id="midnight" class="colors-item"></span>
          </label>
          <label>
            <span id="starlight" class="colors-item"></span>
          </label>
          <label>
            <span id="red" class="colors-item"></span>
          </label>
          <label>
            <span id="blue" class="colors-item"></span>
          </label>
          <label>
            <span id="purple" class="colors-item"></span>
          </label>
          <label>
            <span id="yellow" class="colors-item"></span>
          </label>
          <div class="new-style">新款</div>
        </div>
      </div>
    </div>
    <div class="iphone-images" data-active="">
      <figure class="midnight"></figure>
      <figure class="starlight"></figure>
      <figure class="red"></figure>
      <figure class="blue"></figure>
      <figure class="purple"></figure>
      <figure class="yellow"></figure>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const colorsMap = {
      midnight: "午夜色",
      starlight: "星光色",
      red: "红色",
      blue: "蓝色",
      purple: "紫色",
      yellow: "黄色",
    };

    window.addEventListener("load", async () => {
      // 页面加载完成后，逐一显示 iphone 图片
      for (let color in colorsMap) {
        console.log("start");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 50)
        // })
        await new Promise((r) => setTimeout(r, 50));
        console.log(color);
        document.querySelector(`.iphone-images .${color}`).style.opacity = "1";
      }
      await new Promise((r) => setTimeout(r, 500)); // 停留 0.5s
      document.querySelector("#yellow").click(); // focus 到黄色
      document.querySelector(".new-style").style.display = "block"; // 显示新款文案
    });

    // 当 colors 点击，如果是 span 元素
    // 现将所有的 label 上的 active 移除。在将其 parent 节点加上 active
    document.querySelector(".colors").addEventListener("click", (e) => {
      if (e.target.nodeName === "SPAN") {
        // 处理右上角颜色切换
        document.querySelectorAll(".colors label").forEach((item) => {
          item.classList.remove("active");
        });
        e.target.parentNode.classList.add("active");
        document.querySelector("#color-text").innerText =
          colorsMap[e.target.id];

        // 中间图片 active 处理
        document.querySelectorAll(".iphone-images figure").forEach((item) => {
          item.classList.remove("active");
        });
        let curImg = document.querySelector(`.iphone-images .${e.target.id}`);
        curImg.classList.add("active");
        // 给图片的父元素增加自定义属性值
        document.querySelector(`.iphone-images`).dataset.active = e.target.id;
      }
    });
  },
};
</script>

<style lang="scss">
body {
  padding-top: 90px;
  overflow: hidden;
}
.top-info {
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto 60px;
  color: #1d1d1f;
  .top-info-title {
    font-size: 46px;
    line-height: 1; // 让文字直接对其顶部
    font-weight: bold;
  }
  .top-info-right {
    position: relative;
    z-index: 2; // 防止旋转图片遮挡点击范围
    display: flex;
    margin-right: 10px;
    font-size: 17px;
    font-weight: bold;
  }
  .colors {
    position: relative;
    display: flex;
    margin-left: 10px;
    #midnight {
      background-color: #31353a;
    }
    #starlight {
      background-color: #f0ece8;
    }
    #red {
      background-color: #e11c2a;
    }
    #blue {
      background-color: #c0cfde;
    }
    #purple {
      background-color: #e7d7e9;
    }
    #yellow {
      background-color: #f5e488;
    }
    .colors-item {
      display: inline-flex;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      cursor: pointer;
    }
    & > label {
      margin-left: 0.24em;
      width: 28px;
      height: 28px;
      padding: 2px;
      border: 2px solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    label.active {
      border: 2px solid #0071e3;
    }
    .new-style {
      display: none;
      position: absolute;
      right: 1px;
      top: 30px;
      font-size: 12px;
      font-weight: normal;
      color: #bf4800;
    }
  }
}

[data-active="yellow"].iphone-images {
  transform: rotate(-24deg) scale(1.142) translate(-661px, -170px);
}
[data-active="purple"].iphone-images {
  transform: scale(1.38) translate(-462px, 95px) rotate(-9deg);
}
[data-active="blue"].iphone-images {
  transform: scale(1.619) rotate(10deg) translate(-302px, 173px);
}
[data-active="red"].iphone-images {
  transform: scale(1.811) rotate(24deg) translate(-120px, 241px);
}
[data-active="starlight"].iphone-images {
  transform: matrix(1.50347, 1.10184, -1.10184, 1.50347, -224.817, 414.932);
}
[data-active="midnight"].iphone-images {
  transform: matrix(1.24651, 1.43395, -1.43395, 1.24651, -109.06, 498.232);
}
.iphone-images {
  position: relative;
  width: 1144px;
  height: 574px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: 50% 50%;
  // transform: matrix(1.04327, -0.464493, 0.464493, 1.04327, -768.586, 130.872);
  // transition: 1s ease-in-out;
  transition: transform 1s cubic-bezier(0.65, 0.05, 0.36, 1);
  figure {
    opacity: 0;
    transform-origin: 0 0;
    position: absolute;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .midnight {
    left: 8px;
    top: 233px;
    width: 532px;
    height: 562px;
    background-size: 532px 562px;
    background-repeat: no-repeat;
    background-image: url(./images/hero_midnight.jpg);
    // 解决图片有白色空白，遮挡其他图片的问题
    mask-image: url(./images/midnight_mask.png);
    -webkit-mask-image: url(./images/midnight_mask.png);
    transform: scale(0.51);
    &.active {
      transform: translate(-2.9681683365%, -1.8547174248%) scale(0.527) !important;
    }
  }
  .starlight {
    left: 111px;
    top: 118px;
    width: 518px;
    height: 582px;
    background-size: 518px 582px;
    background-repeat: no-repeat;
    background-image: url(./images/hero_starlight.jpg);
    mask-image: url(./images/starlight_mask.png);
    -webkit-mask-image: url(./images/starlight_mask.png);
    transform: scale(0.52);
    &.active {
      transform: translate(-2.2962066015%, -2.6414835308%) scale(0.54) !important;
    }
  }
  .red {
    left: 259px;
    top: 49px;
    width: 450px;
    height: 568px;
    background-size: 450px 568px;
    background-repeat: no-repeat;
    background-image: url(./images/hero_red.jpg);
    mask-image: url(./images/red_mask.png);
    -webkit-mask-image: url(./images/red_mask.png);
    transform: scale(0.54);
    &.active {
      transform: translate(-2.2497566339%, -2.6811555509%) scale(0.54) !important;
    }
  }
  .blue {
    left: 437px;
    top: 22px;
    width: 366px;
    height: 578px;
    background-size: 366px 578px;
    background-repeat: no-repeat;
    background-image: url(./images/hero_blue.jpg);
    mask-image: url(./images/blue_mask.png);
    -webkit-mask-image: url(./images/blue_mask.png);
    transform: scale(0.573);
    &.active {
      transform: translate(-0.4871058534%, -3.4659382406%) scale(0.59) !important;
    }
  }
  .purple {
    left: 629px;
    top: 18px;
    width: 336px;
    height: 620px;
    background-size: 336px 620px;
    background-repeat: no-repeat;
    background-image: url(./images/hero_purple.jpg);
    mask-image: url(./images/purple_mask.png);
    -webkit-mask-image: url(./images/purple_mask.png);
    transform: scale(0.67);
    &.active {
      transform: translate(-0.4871058534%, -3.4659382406%) scale(0.683) !important;
    }
  }
  .yellow {
    left: 781px;
    top: 68px;
    width: 428px;
    height: 616px;
    background-size: 428px 616px;
    background-repeat: no-repeat;
    background-image: url(./images/hero_yellow.jpg);
    mask-image: url(./images/yellow_mask.png);
    -webkit-mask-image: url(./images/yellow_mask.png);
    transform: scale(0.86);
    // transform: matrix(0.86, 0, 0, 0.86, 0, 0);
    &.active {
      transform: translate(0.6077686218%, -3.4468271355%) scale(0.88) !important;
    }
  }
}
</style>
