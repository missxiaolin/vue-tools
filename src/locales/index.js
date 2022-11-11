// 引入必要的库
import Vue from "vue";
import VueI18n from "vue-i18n";
// 引入element ui国际化文件
import elen from "element-ui/lib/locale/lang/en";
import elcn from "element-ui/lib/locale/lang/zh-CN";

// 引入项目中需要用到的中英文文案配置js
import en from "./en";
import zh from "./zh";

// 使用vue-i18n库
Vue.use(VueI18n);

// 获取localStorage
export const getStorage = function (key) {
  const str = window.localStorage.getItem(key);
  return str;
};
// 获取当前语言（初始化时localStorage里没有存语言，默认为浏览器当前的语言）
const lang = getStorage("lang") || "zh-CN";

// 组合element ui 和 项目自身的文案文件
const messages = {
  "en-US": {
    ...elen,
    ...en,
  },
  "zh-CN": {
    ...elcn,
    ...zh,
  },
};
export const i18n = new VueI18n({
  locale: lang,
  messages,
});
