<template>
    <div id="container">
        <canvas id="canvas" width="308" height="308"></canvas>
        <canvas id="canvas-max" width="308" height="308"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {
        // 参考：滚动条控制播放的canvas逐帧动画
        // https://www.cnblogs.com/acttan/p/16334229.html
        let count = 0
        const sources = {}
        const sourcesMax = {}
        let imgIndex = 0
        const canvasWidth = '308'
        const canvasHeight = '308'
        let ctx = document.querySelector('#canvas')?.getContext('2d')
        let ctxMax = document.querySelector('#canvas-max')?.getContext('2d')

        const renderImg = () => {
            if (sources[imgIndex]) {
                console.log('ctx', sources[imgIndex], canvasWidth, canvasHeight)
                ctx.clearRect(0, 0, canvasWidth, canvasHeight)
                ctx.drawImage(sources[imgIndex], 0, 0)
                ctxMax.clearRect(0, 0, canvasWidth, canvasHeight)
                ctxMax.drawImage(sourcesMax[imgIndex], 0, 0)
            }
        }

        const loadImages = () => {
            let images = {}
            let imagesMax = {}
            for (let i = 0; i <= 52; i++) {
                images[i] = new Image()
                let n = i < 10 ? `0${i}` : `${i}`
                images[i].src = require(`./images/m2_pro/medium_00${n}.jpg`)
                images[i].onload = () => {                  
                    count++
                    if (i === 0) {
                        renderImg()
                    }
                }
                sources[i] = images[i]

                imagesMax[i] = new Image()
                imagesMax[i].src = require(`./images/m2_max/medium_00${n}.jpg`)
                imagesMax[i].onload = () => {                  
                    if (i === 0) {
                        renderImg()
                    }
                }
                sourcesMax[i] = imagesMax[i]
            }
        }

        let flag = false
        // document.documentElement.scrollTop
        let scrollX = document.body.clientHeight - document.documentElement.clientHeight
        console.log(scrollX)
        const scrollHandler = () => {
            if (flag) {
                return
            }
            requestAnimationFrame(() => {
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                // 根据总滚动高度，以及帧动画图片数量，计算是否是向下滚动
                // const topNum = Math.round(top / (scrollX / count)) // 1000px 6;  500px 2
                const topNum = Math.round(top / 10) // 1000px 6;  500px 2
                let n = topNum - imgIndex
                console.log('>>', n, top, topNum, imgIndex)
                if (n > 0) {
                    // 向下滚动
                    for (let i = 0; i < n; i++) {
                        imgIndex++
                        renderImg()
                    }
                } else {
                    for (let i = 0; i < -n; i++) {
                        imgIndex--
                        renderImg()
                    }
                }
                flag = false
            })
            flag = true
        }

        loadImages()
        window.addEventListener('scroll', scrollHandler)

        // 滚动时固定位置
        gsap.registerPlugin(ScrollTrigger);
        // pin 为 true 时，触发动画的元素 在滚动时可以保持不向上滚动，让整个容器在滚动时固定
        gsap.to("#container", {
            opacity: 1,
            scrollTrigger: {
                trigger: "#container",
                duration: 2,
                start: "top 15px",
                scrub: true, // 表示动画可以重复执行改成false表示只执行一次
                //   markers: true, //  绘制开始位置和结束位置的线条
                pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
            },
        });
    }
};
</script>

<style>
body {
    height: 3000px;
}
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 700px;
  padding: 5%;
  background-image: url("./images/m2_bg__e4dkdscoyaaa_medium.jpeg");
}
#container canvas {
  margin-bottom: 20px;
}
</style>
