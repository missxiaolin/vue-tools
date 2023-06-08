<template>
  <div>
    <div
      style="border: 1px solid #ccc; margin-top: 10px"
      :class="{
        'editor-is-edit': readOnlys
      }"
    >
      <!-- 工具栏 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        mode="highest"
      />
      <!-- 编辑器 -->
      <Editor
        ref="editor"
        style="height: 400px; overflow-y: hidden"
        :defaultConfig="editorConfig"
        v-model="html"
        @onChange="onChange"
        @onCreated="onCreated"
        mode="highest"
      />
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  components: { Editor, Toolbar },
  props: {
    content: {
      type: String,
      default: ""
    },
    readOnlys: {
      // 只读
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mode: "highest",
      editor: null,
      html: "",
      toolbarConfig: {
        /* 显示哪些菜单，如何排序、分组 */
        toolbarKeys: [
          "headerSelect",
          // '|',
          "bold",
          "underline",
          "italic",
          "color",
          "bgColor",
          // '|',
          "indent", // 增加缩进
          "delIndent", // 减少缩进
          "justifyLeft", // 左对齐
          "justifyRight", // 右对齐
          "justifyCenter", // 居中
          "justifyJustify", // 两端对齐
          // '|',
          "fontSize",
          "fontFamily",
          "lineHeight",
          // '|',
          "bulletedList",
          "numberedList",
          "todo",
          "insertLink",
          "insertTable",
          // '|',
          "codeBlock",
          "divider",
          "uploadImage",
          "insertVideo",
          "undo",
          "redo"
        ]
        // excludeKeys: [ ], /* 隐藏哪些菜单 */
      },
      editorConfig: {
        maxLength: 20000,
        placeholder: "请输入内容",
        readOnly: false, // 只读、不可编辑
        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {
          // 配置上传图片
          uploadImage: {
            customUpload: this.uploaadImg
          }
        }
      }
    };
  },
  watch: {
    readOnlys: {
      handler(newV) {
        if (newV) {
          this.editor.disable(); // 只读模式
        }
      }
    },
    content: {
      handler(v) {
        if (v) {
          const editor = this.$refs.editor;
          editor.editor && editor.editor.dangerouslyInsertHtml(v);
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      console.log("this.content", this.content);
      const editor = this.$refs.editor;
      editor.editor && editor.editor.dangerouslyInsertHtml(this.content);
    }, 100);
  },
  methods: {
    async uploaadImg(file, insertFn) {
      if (file.size > 1024 * 1024 * 5) {
        this.$message.error("图片大小不能超过5兆");
        return;
      }
      let formdata = new FormData();
      formdata.append("file", file);
      formdata.append("securityLevel", 1);
      formdata.append("systemCode", "CSS");
      const res = await this.axiosPost(`/opb/api/file/upload`, formdata, {
        timeout: 20000
      });
      if (res.success) {
        insertFn(res.model.fileUrl);
      } else {
        this.$message.error(res.errorMessage);
      }
    },
    onCreated(editor) {
      this.editor = Object.seal(editor);
    },
    onChange(editor) {
      let data = {
        html: this.html,
        editor: this.$refs.editor
      };
      this.$emit("changeData", data);
    }
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁 editor
  }
};
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>

<style lang="scss">
.editor-is-edit {
  background: #ecf0f5;
  .w-e-toolbar {
    background: #f5f7fa !important;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 9;
    }
    &:hover {
      cursor: no-drop;
    }
  }
  .w-e-scroll {
    background: #f5f7fa !important;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 9;
    }
    &:hover {
      cursor: no-drop;
    }
  }
}

</style>

<style lang="scss" scoped>
::v-deep .w-e-text-container strong span {
  font-weight: 700 !important;
}
</style>
