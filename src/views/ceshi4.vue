<template>
  <div class="rich-container">
    <div class="rich-editor document-editor">
      <div id="toolbar-container" class="document-editor__toolbar" />
      <div class="document-editor__editable-container">
        <div id="editor" class="document-editor__editable" />
      </div>
    </div>
    <div @click="getContent">获取内容</div>
  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn"; // 中文包
import button from './button.vue';
//   import UploadAdapter from './uploadAdapter.js'
export default {
  components: { button },
  data() {
    return {
      editor: null, // 编辑器实例
    };
  },
  mounted() {
    this.initCKEditor();
    document.querySelectorAll("oembed[url]").forEach((element) => {
      const videoLable = document.createElement("video");

      videoLable.setAttribute("src", element.getAttribute("url"));
      videoLable.setAttribute("controls", "controls");
      videoLable.setAttribute("style", " width: 100%;height: 100%; ");

      element.appendChild(videoLable);
    });
  },
  methods: {
    initCKEditor() {
      // 初始化编辑器
      DecoupledEditor.create(document.querySelector("#editor"), {
        language: "zh-cn", // 中文
        // removePlugins: ["MediaEmbed"], // 除去视频按钮
        mediaEmbed: {
          providers: [
            {
              name: "myprovider",
              url: [/^lizzy.*\.com.*\/media\/(\w+)/, /^www\.lizzy.*/, /^.*/],
              html: (match) => {
                //获取媒体url
                const input = match["input"];
                //console.log('input' + match['input']);
                return (
                  '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 70%;">' +
                  `<iframe src="https://${input}" ` +
                  'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                  'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
                  "</iframe>" +
                  "</div>"
                );
              },
            },
          ],
        },
      })
        .then((editor) => {
          //   editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
          //     return new UploadAdapter(loader)
          //   }
          const toolbarContainer = document.querySelector("#toolbar-container");
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor; // 将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getContent() {
      console.log(this.editor)
    }
  },
};
</script>

<style>
.document-editor__editable-container {
  border: solid 1px var(--ck-color-toolbar-border);

  /* Make it possible to scroll the "page" of the edited content. */
  overflow-y: scroll;
}
</style>
