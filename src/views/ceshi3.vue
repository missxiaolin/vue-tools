<template>
  <div class="ue">
    <vue-ueditor-wrap
      ref="uEditor"
      v-model="data"
      :config="myConfig"
      :destroy="true"
      @ready="ready"
      @beforeInit="addCustomButtom"
    ></vue-ueditor-wrap>
    
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
      editorInstance: "",
      data: "",
      myConfig: {
        serverUrl: "", //图片上传的地址
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
        toolbars: [
          [
            "anchor", //锚点
            "undo", //撤销
            "redo", //重做
            "bold", //加粗
            "indent", //首行缩进
            "snapscreen", //截图
            "italic", //斜体
            "underline", //下划线
            "strikethrough", //删除线
            "subscript", //下标
            "fontborder", //字符边框
            "superscript", //上标
            "formatmatch", //格式刷
            "source", //源代码
            "blockquote", //引用
            "pasteplain", //纯文本粘贴模式
            "selectall", //全选
            "print", //打印
            "preview", //预览
            "horizontal", //分隔线
            "removeformat", //清除格式
            "time", //时间
            "date", //日期
            "unlink", //取消链接
            "insertrow", //前插入行
            "insertcol", //前插入列
            "mergeright", //右合并单元格
            "mergedown", //下合并单元格
            "deleterow", //删除行
            "deletecol", //删除列
            "splittorows", //拆分成行
            "splittocols", //拆分成列
            "splittocells", //完全拆分单元格
            "deletecaption", //删除表格标题
            "inserttitle", //插入标题
            "mergecells", //合并多个单元格
            "deletetable", //删除表格
            "cleardoc", //清空文档
            "insertparagraphbeforetable", //"表格前插入行"
            "insertcode", //代码语言
            "fontfamily", //字体
            "fontsize", //字号
            "paragraph", //段落格式
            // "simpleupload", //单图上传
            // "insertimage", //多图上传
            "edittable", //表格属性
            "edittd", //单元格属性
            "link", //超链接
            "emotion", //表情
            "spechars", //特殊字符
            "searchreplace", //查询替换
            // "map", //Baidu地图
            // "gmap", //Google地图
            "insertvideo", //视频
            // "help", //帮助
            "justifyleft", //居左对齐
            "justifyright", //居右对齐
            "justifycenter", //居中对齐
            "justifyjustify", //两端对齐
            "forecolor", //字体颜色
            // "backcolor", //背景色
            "insertorderedlist", //有序列表
            "insertunorderedlist", //无序列表
            // "fullscreen", //全屏
            "directionalityltr", //从左向右输入
            "directionalityrtl", //从右向左输入
            "rowspacingtop", //段前距
            "rowspacingbottom", //段后距
            // "pagebreak", //分页
            "insertframe", //插入Iframe
            "imagenone", //默认
            "imageleft", //左浮动
            "imageright", //右浮动
            // "attachment", //附件
            "imagecenter", //居中
            "wordimage", //图片转存
            "lineheight", //行间距
            "edittip ", //编辑提示
            "customstyle", //自定义标题
            "autotypeset", //自动排版
            // "webapp", //百度应用
            "touppercase", //字母大写
            "tolowercase", //字母小写
            // "background", //背景
            // "template", //模板
            // "scrawl", //涂鸦
            // "music", //音乐
            "inserttable", //插入表格
            // "drafts", // 从草稿箱加载
            // "charts", // 图表
          ],
        ],
        // 隐藏上传视频 Tab 的配置项
        videoConfig: {
          disableUpload: false,
          uploadVideoUrl: "",
          uploadVideoExt: "",
        },
      },
    };
  },
  methods: {
    ready(n) {
      this.editorInstance = n;
      this.addBtn()
    },
    addBtn() {
      let edui2 = document.getElementById('edui2')
      let content = `
        <div id='ueditor-update-file'><img style="margin-top: 4px;" src="https://cdn.enmonster.com/update_20230608.png" width="15" height="15" alt=""></div>
      `
      let div = document.createElement("div");
      div.className = "edui-box edui-splitbutton edui-for-inserttable edui-default"
      div.innerHTML = content
      edui2.appendChild(div)
      let updateBtn = document.getElementById('ueditor-update-file')
      updateBtn.addEventListener("click", () => {
        // 这里做自定义上传图片
        this.editorInstance.execCommand("inserthtml", '<img src="' + 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281' + '"/>');
      })
      
    },
    addCustomButtom(editorId) {
      console.log(this.editorInstance)
      // 注册插件
      window.UE.registerUI("upload-image", function (editor, uiName) {
        // 创建一个按钮
        var uploadImageBtn = new window.UE.ui.Button({
          name: "上传图片",
          title: "上传图片",
          cssRules: "background-position: -380px -0px",
          onclick: function () {
            // 在这里打开图片上传的对话框
            // ...
          },
        });

        // 点击按钮时触发
        return uploadImageBtn;
      });

      // window.UE.registerUI(
      //   "test-button",
      //   function (editor, uiName) {
      //     console.log("测试");
      //     console.log(uiName);
      //     // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
      //     editor.registerCommand(uiName, {
      //       execCommand: function () {
      //         editor.execCommand("inserthtml", ``);
      //       },
      //     });

      //     // 创建一个 button
      //     let btn = new window.UE.ui.Button({
      //       // 按钮的名字
      //       name: uiName,
      //       // 提示
      //       title: "上传图片",
      //       // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
      //       cssRules: "background-position: -380px 0px;",
      //       // 点击时执行的命令
      //       onclick: function () {
      //         alert(11);
      //         // 这里是我自己封装的上传图片功能可以忽略, 重点插入图片 editor.execCommand('inserthtml', '<img src="'+url+'"/>');
      //         window.qiniuChange(".ueUpload #pickfiles", function (url) {
      //           // console.log(url);
      //           editor.execCommand("inserthtml", '<img src="' + url + '"/>');
      //           document.getElementById("pickfiles").value = "";
      //         });
      //         // console.log('自定义button')
      //       },
      //     });

      //     // 当点到编辑内容上时，按钮要做的状态反射
      //     editor.addListener("selectionchange", function () {
      //       // var state = editor.queryCommandState(uiName);
      //       // if (state === -1) {
      //       //   btn.setDisabled(true);
      //       //   btn.setChecked(false);
      //       // } else {
      //       //   btn.setDisabled(false);
      //       //   btn.setChecked(state);
      //       // }
      //     });

      //     // 因为你是添加 button，所以需要返回这个 button
      //     return btn;
      //   }
      //   // 1 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
      //   // editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      // );
    },
  },
};
</script>
