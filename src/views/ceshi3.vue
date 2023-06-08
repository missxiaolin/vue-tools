<template>
    <div class="ue">
        <vue-ueditor-wrap v-model="data" :config="myConfig"></vue-ueditor-wrap>
    </div>
</template>


<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  components: {
    VueUeditorWrap,
  },
  data() {
    return {
      data: "dome",
      myConfig: {
        // 设置编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 320,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 可以放后台存放路径
        serverUrl: "",
        // UEditor 是文件的存放路径，
        UEDITOR_HOME_URL: "/UEditor/",
      },
    };
  },
};
</script>