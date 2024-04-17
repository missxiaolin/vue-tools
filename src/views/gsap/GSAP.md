### 基础动画

~~~
// "to" 至 (根据提供的值设置动画)
gsap.to(".selector", { // 选择器 text, Array, or object
  x: 100, // 任何属性（不限于CSS）
  backgroundColor: "red", // camelCase
  duration: 1, // 动画执行时间
  delay: 0.5, // 动画执行等待时间
  ease: "power2.inOut",
  stagger: 0.1, // 元素使多个间隔时间
  // stagger: {each: 0.1, amount: .5, from: 'center' ...}
  paused: true, // 默认是false，表示立即执行
  overwrite: "auto", // 默认是 false
  repeat: 2, // 重复次数 (-1 表示无限循环)
  repeatDelay: 1, // 每次重复建哥时间
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // 如果 true > A-B-B-A, 如果 false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
  immediateRender: false, // 是否即时渲染
  onComplete: myFunc, // 完成后回调
  // 其他回调: 
  // onStart, onUpdate, onRepeat, onReverseComplete
  // 每个回调都有一个params属性
  // i.e. onUpdateParams (Array)
});
 
 
// "from" 从 (根据提供的值设置动画)
gsap.from(".selector", {fromVars});
// "fromTo" 从-到 (根据提供的值设置动画)
gsap.fromTo(".selector", {fromVars}, {toVars});
// 特殊属性 (duration, ease, etc.) 放到 toVars 里
// 立即设置值（无动画）
gsap.set(".selector", {toVars});
~~~

### Timelines 动画

~~~
// 创建一个 timeline 动画
let tl = gsap.timeline({
  delay: 0.5, // 动画等待时间
  paused: true, // 默认是 false 立即播放
  repeat: 2, // 循环次数 (-1 表示无限循环)
  repeatDelay: 1, // 循环间隔等待时间
  repeatRefresh: true, // 循环刷新
  yoyo: true, // true > A-B-B-A, false > A-B-A-B
  defaults: { // 子项继承这些默认值
    duration: 1,
    ease: "none" 
  },
  smoothChildTiming: true,
  autoRemoveChildren: true,
  onComplete: myFunc,
  // other callbacks: 
  // onStart, onUpdate, onRepeat, onReverseComplete
  // Each callback has a params property as well
  // i.e. onUpdateParams (Array)
});
 
// 排列多个动画
tl.to(".selector", {duration: 1, x: 50, y: 0})
  .to("#id", {autoAlpha: 0})
  .to(elem, {duration: 1, backgroundColor: "red"})
  .to([elem, elem2], {duration: 3, x: 100});
 
 
// position 参数（控制放置）
tl.to(target, {toVars}, positionParameter);
 
0.7 // 正好进入时间线0.7秒（绝对值）
"-=0.7" // 与前一个重叠0.7秒
"myLabel" // 在“myLabel”位置插入
"myLabel+=0.2" // “myLabel”后0.2秒开始
"<" // 与最近添加的子项的开头对齐
"<0.2" // 上一个动画开始后0.2秒
"-=50%" // 重叠插入动画持续时间的一半
"<25%" // 上一个动画的25%处（从开始）
~~~

### 动画控制方法

~~~
// 稍后保留对控件的动画引用
let anim = gsap.to(...); // 或者 gsap.timeline(...);
// 大多数方法可以用作getter或setter
anim.play() // 向前播放
  .pause()
  .resume() // 暂停的方向继续向前
  .reverse()
  .restart()
  .timeScale(2) // 2=双倍速度，0.5=一半速度
  .seek(1.5) // 跳转到时间（以秒为单位）或标签
  .progress(0.5) // 跳到一半
  .totalProgress(0.8) // 包括重复
  // 用作setter时，返回动画（链接）
 
  // 其他有用的方法（tween和timeline）
  .kill() // 立即销毁
  .isActive() // true 是当前动画
  .then() // Promise
  .invalidate() // 清除记录 start/end 值
  .eventCallback() // get/set 时间回调
 
  // timeline 特殊 方法
  // add label, tween, timeline, 或 callback
  .add(thing, position)
  // calls function at given point
  .call(func, params, position)
  // 获取时间轴的子对象的数组
  .getChildren()
  // 清空时间线
  .clear()
  // 将播放头设置为线性位置
  .tweenTo(timeOrLabel, {vars})
  // ^^ 同时具有起始位置和结束位置
  .tweenFromTo(from, to, {vars})
~~~

### Eases（动画曲线）

~~~
// 访问 greensock.com/ease-visualizer
ease: "none" // 没有 ease (等同 as "linear")
 
// 基本内置 eases
"power1", "power2", "power3", "power4",
"circ", "expo", "sine"
// 每个都有 .in, .out, and .inOut extensions
// i.e. "power1.inOut"
 
// 比较夸张的 eases
"elastic", "back", "bounce", "steps(n)"
 
// 自定义 (不是内置)
"rough", "slow", "expoScale(1, 2)"
 
// 仅会员能用的插件
CustomEase, CustomWiggle, CustomBounce
~~~

### ScrollTrigger

~~~
scrollTrigger: {
  trigger: ".selector", // 选择元素
/**
start: "top(1) center(2)"
1、元素的位置top/center/bottom
2、窗口的位置,与1重合后触发的效果的位置（说不明白，得试啊）
*/
  start: "top center",  // [trigger] [scroller] 位置
  end: "20px 80%", // [trigger] [scroller] 位置
  // 可以用相对值: "+=500"
  scrub: true, // 动画贴合触发
  pin: true, // 触发时候当前窗口是否不动了
  markers: true, // 开发中的开始、结束标签 设置id后看的更清楚
  // 四个事件: onEnter onLeave onEnterBack onLeaveBack
  toggleActions: "play pause resume reset",
  // 其他选项: complete reverse none
  toggleClass: "active",
  fastScrollEnd: true, // 或速度值
  containerAnimation: tween, // 线性动画
  id: "my-id",
  anticipatePin: 1, // 可能有助于避免跳跃
  snap: {
    snapTo: 1 / 10, // 进度增量
    // or "labels" or function or Array
    duration: 0.5,
    directional: true,
    ease: "power3",
    onComplete: callback,
    // 其他回调: onStart, onInterrupt
  },
  pinReparent: true, // moves to documentElement during pin
  pinSpacing: false,
  pinType: "transform" // or "fixed"
  pinnedContainer: ".selector",
  preventOverlaps: true, // 或任意字符串
  once: true,
  endTrigger: ".selector", // selector or element
  horizontal: true, // 横向或竖向切换
  invalidateOnRefresh: true, // 刷新时清除起始值
  refreshPriority: 1, // 影响刷新顺序
  onEnter: callback
  // 其他回调: 
  // onLeave, onEnterBack, onLeaveBack, onUpdate,
  // onToggle, onRefresh, onRefreshInit, onScrubComplete
}
~~~

### 其他插件

~~~
// 在使用GSAP插件之前注册（一次）
gsap.registerPlugin(Draggable, TextPlugin);
 
// 可用插件
Draggable, DrawSVGPlugin*, EaselPlugin, Flip,
GSDevTools*, InertiaPlugin*, MorphSVGPlugin*,
MotionPathPlugin, MotionPathHelper*, Physics2DPlugin*,
PhysicsPropsPlugin*, PixiPlugin, ScrambleTextPlugin*,
ScrollToPlugin, ScrollTrigger, SplitText*, TextPlugin
// * 可供俱乐部GSAP会员使用. greensock.com/club
~~~

### 安装

~~~
// Import and register GSAP (ES Modules)
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
 
// Import and register GSAP (UMD/CommonJS)
import { gsap } from "gsap/dist/gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
~~~

### 实用方法

~~~
// accessible through gsap.utils.foo()
checkPrefix() // get relevant browser prefix for property
clamp() // clamp value to range
distribute() // distribute value among and array
getUnit() // get unit of string
interpolate() // interpolate between values
mapRange() // map one range to another
normalize() // map a range to the 0-1 range
pipe() // sequence function calls
random() // generates a random value
selector() // get a scoped selector function
shuffle() // shuffles an array in-place
snap() // snap a value to either increment or array
splitColor() // splits color into RGB array
toArray() // convert array-like thing to array
unitize() // adds specified unit to function results
wrap() // place number in range, wrapping to start
wrapYoyo() // place number in range, wrapping in reverse
~~~

### 嵌套 Timelines

~~~
function scene1() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 1
  return tl;
}
 
function scene2() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 2
  return tl;
}
 
let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0.5") // overlap slightly
~~~

### 各种技巧

~~~
// 获取属性的当前值
gsap.getProperty("#id", "x");       // 20 
gsap.getProperty("#id", "x", "px"); // "20px"
// 设置GSAP的全局tween默认值
gsap.defaults({ease: "power2.in", duration: 1});
// 配置GSAP的不常用的相关设置
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});
 
 
// 注册效果以供重复使用
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration, 
      opacity: 0
    });
  },
  defaults: {duration: 2},
  extendTimeline: true
});
 
// 现在我们可以这样使用它
gsap.effects.fade(".box");
// 或者直接在时间表上
tl.fade(".box", {duration: 3})
 
 
 
// 添加侦听器
gsap.ticker.add(myFunction);
function myFunction(time, deltaTime, frame) {
  // 在之后的每个刻度执行
  // 核心引擎更新
}
// 稍后删除侦听器...
gsap.ticker.remove(myFunction);
// 重复设置属性的速度比 .set()
const setX = gsap.quickSetter("#id", "x", "px");
document.addEventListener("pointermove", e => setX(e.clientX) );
~~~