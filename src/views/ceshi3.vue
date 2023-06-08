<template>
  <div class="ue">
    <vue-ueditor-wrap v-model="data" :config="myConfig"></vue-ueditor-wrap>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
import { str } from "../utils/ud";
export default {
  components: {
    VueUeditorWrap,
  },
  data() {
    return {
      data: str,
      myConfig: {
        // 相对路径
        UEDITOR_HOME_URL: "/UEditor/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 320,
        // 初始容器宽度
        initialFrameWidth: "100%",
        maximumWords: 20000,
        // 可以放后台存放路径
        serverUrl: "",
        // toolbars: [
        //   [
        //     "fullscreen",
        //     "source",
        //     "|",
        //     "undo",
        //     "redo",
        //     "|",
        //     "bold",
        //     "italic",
        //     "underline",
        //     "fontborder",
        //     "strikethrough",
        //     "superscript",
        //     "subscript",
        //     "removeformat",
        //     "formatmatch",
        //     "blockquote",
        //     "pasteplain",
        //     "|",
        //     "forecolor",
        //     "backcolor",
        //     "insertorderedlist",
        //     "insertunorderedlist",
        //     "selectall",
        //     "cleardoc",
        //     "|",
        //     "rowspacingtop",
        //     "rowspacingbottom",
        //     "lineheight",
        //     "|",
        //     "customstyle",
        //     "paragraph",
        //     "fontfamily",
        //     "fontsize",
        //     "|",
        //     "directionalityltr",
        //     "directionalityrtl",
        //     "indent",
        //     "|",
        //     "justifyleft",
        //     "justifycenter",
        //     "justifyright",
        //     "justifyjustify",
        //     "|",
        //     "touppercase",
        //     "tolowercase",
        //     "|",
        //     "link",
        //     "unlink",
        //     "anchor",
        //     "|",
        //     "imagenone",
        //     "imageleft",
        //     "imageright",
        //     "imagecenter",
        //     "|",
        //     "simpleupload",
        //     "insertimage",
        //     "|",
        //     "horizontal",
        //     "date",
        //     "time",
        //     "spechars",
        //     "snapscreen",
        //     "|",
        //     "inserttable",
        //     "deletetable",
        //     "insertparagraphbeforetable",
        //     "insertrow",
        //     "deleterow",
        //     "insertcol",
        //     "deletecol",
        //     "mergecells",
        //     "mergeright",
        //     "mergedown",
        //     "splittocells",
        //     "splittorows",
        //     "splittocols",
        //     "charts",
        //   ],
        // ],
      },
    };
  },
};
</script>
