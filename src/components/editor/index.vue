<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-menu style="margin-top: 20px;" mode="horizontal">
        <el-form inline="inline" style="padding-bottom: 10px;">
          <el-button class="el-icon-plus btn_style" @click="addTextHandle()">
            添加文本框
          </el-button>
          <uploadBtn
            btnText="上传图片"
            @imgSuccess="imgAddSuccess"
          />
          <el-button
            class="btn-delete btn_style el-icon-delete"
            @click="deleteText"
          >
            删除控件
          </el-button>
          <uploadBtn
            btnText="组合logo"
            @imgSuccess="imgAddCombinationSuccess"
          />
          <el-button class="btn-delete btn_style" @click="bringToFront">
            置顶
          </el-button>
          <el-button class="btn-delete btn_style" @click="sendToBack">
            置底
          </el-button>
          <el-button class="btn-delete btn_style" @click="bringForward">
            前移
          </el-button>
          <el-button class="btn-delete btn_style" @click="sendBackwards">
            后移
          </el-button>
          <el-button class="btn-delete btn_style" @click="downLoadImage">
            预览图片
          </el-button>
          <el-button class="btn-delete btn_style" @click="downLoad">
            导出图片
          </el-button>
        </el-form>
      </el-menu>
    </el-header>
    <el-container class="content-box">
      <!-- 背景图片选择 -->
      <el-aside width="200px;">
        <ul
          v-for="(item, index) in imagesList"
          :key="index"
          class="img-list-ul"
        >
          <li
            :class="index == imgIndex ? 'active' : ''"
            @click="clickLi(index)"
          >
            <img class="img-bg" :src="item.backgroungImg" alt="" />
          </li>
        </ul>
      </el-aside>
      <!-- 中部canvans位置 -->
      <el-main style="height: 800px">
        <div class="content-show">
          <div class="canvas" id="canvas-box">
            <canvas ref="canvas" id="editorCanvas"></canvas>
          </div>
        </div>
      </el-main>
      <!-- 右侧属性设置 -->
      <el-aside width="300px" v-if="selectType" class="right-box">
        <i
          class="el-icon-circle-close icon-delete"
          @click="selectType = ''"
        ></i>
        <div class="text-edit">
          <el-form ref="form" v-if="selectType == 'text'">
            <el-form-item label="字体颜色：">
              <el-select
                v-model="fontColor.value"
                placeholder="请选择字体颜色"
                @change="changeFontColor"
              >
                <el-option
                  v-for="item in fontColor"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="字体粗细：">
              <el-select
                v-model="fontWeight.value"
                placeholder="请选择字体粗细"
                @change="changefontWeight"
              >
                <el-option
                  v-for="item in fontWeight"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="字体大小：">
              <el-select
                v-model="fontSizes.value"
                placeholder="选择字体大小"
                @change="changeFontSize"
              >
                <el-option
                  v-for="item in fontSizes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-form ref="form" v-if="selectType == 'img'">
            <uploadBtn
              btnText="更换图片"
              @imgSuccess="imgUpdateSuccess"
            />
          </el-form>
          <el-form ref="form" v-if="selectType == 'imgGroup'">
            <uploadBtn
              btnText="更换图片"
              @imgSuccess="imgUpdateGroupSuccess"
            />
            <el-button class="btn-delete btn_style" @click="exchangePosition">
              调换位置
            </el-button>
          </el-form>
        </div>
      </el-aside>
    </el-container>
    <el-dialog
      title="预览"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-image style="width: 100%" :src="imageBase64"> </el-image>
    </el-dialog>
  </el-container>
</template>

<script>
import {
  fontFamilies,
  fontSizes,
  fontColor,
  fontStyle,
  fontWeight,
  backgroundColor,
  textAlign
} from "./formData";

import { fabric } from "fabric";
let editorCanvas = "";
import uploadBtn from "./uploadBtn.vue";

fabric.Object.prototype.set({
  cornerStrokeColor: "#66b0ef",
  cornerColor: "#60abec",
  cornerStyle: "rectangele",
  cornerSize: 8,
  borderScaleFactor: 2,
  transparentCorners: false,
  borderColor: "#61abe8"
});
import img from "../../assets/rights.png";

export default {
  components: {
    uploadBtn
  },
  data() {
    return {
      logo: 'https://cdn.enmonster.com/programImg/usercenter/user_img_default_bg.png',
      dialogVisible: false,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      selectType: "",
      imgIndex: 0,
      imagesList: [
        {
          backgroungImg: img,
          width: 1017,
          height: 450,
          jsonData: []
        },
        {
          backgroungImg:
            "https://static.enmonster.com/arm-ms/2023/04/18/0cf588c962",
          width: 400,
          height: 450,
          jsonData: []
        }
      ],
      fontFamilies,
      fontSizes,
      fontColor,
      fontStyle,
      fontWeight,
      textAlign,
      backgroundColor,
      predefineColors: [
        "#ffffff",
        "#FF0000",
        "#000000",
        "#FFF800",
        "#00FF0A",
        "#FD00FF",
        "#0095FF"
      ],
      checked: true,
      // 模板图片保存数组
      imageBase64: "",
      done: false,
      // 文本控件属性
      textStyleData: {
        type: "i-text",
        text: "双击编辑文字",
        top: 50,
        left: 50,
        width: 100,
        opacity: 1,
        stroke: "#ffffff",
        strokeWidth: 0,
        textAlign: "left",
        lineHeight: 1,
        charSpacing: 1,
        fontFamily: "hyzktjjkt",
        fontSize: 40,
        fontWeight: "normal",
        fontStyle: "normal",
        fill: "#000000",
        textBackgroundColor: "rgba(0,0,0,0)",
        selectable: true
      },
      src: "",
      msg: "",
      canvas: null,
      title: "文本设置"
    };
  },
  mounted() {
    this.initeditorCanvas();
  },
  methods: {
    clickLi(index) {
      let oldIndex = this.imgIndex;
      this.imgIndex = index;
      // 切换的时候需要保存之前的数据
      let data = editorCanvas.toJSON();
      // console.log('拿到的json 数据', data)
      this.imagesList[oldIndex].jsonData = JSON.parse(JSON.stringify(data));
      this.initeditorCanvas();
    },
    // 初始化
    initeditorCanvas() {
      let imagesList = this.imagesList;
      editorCanvas = "";
      // 为了让每次切换编辑的时候没有缓存所有要先删除再添加
      document.getElementById("editorCanvas").remove();
      document
        .getElementById("canvas-box")
        .insertAdjacentHTML(
          "afterend",
          '<canvas ref="canvas" id="editorCanvas"></canvas>'
        );
      editorCanvas = new fabric.Canvas("editorCanvas", {
        width: this.imagesList[this.imgIndex].width,
        height: this.imagesList[this.imgIndex].height,
        originX: "center",
        originY: "center",
        backgroundColor: "#ffffff"
      });

      editorCanvas.preserveObjectStacking = true;
      this.setBgImg();
      this.initD();

      // 如果在有配置的情况需要重新渲染到画布上
      let jsonData = imagesList[this.imgIndex].jsonData;
      if (!!jsonData && !!jsonData.objects && jsonData.objects.length > 0) {
        // dom 元素在创建后执行
        setTimeout(() => {
          editorCanvas.clear();
          editorCanvas.loadFromJSON(
            jsonData,
            editorCanvas.renderAll.bind(editorCanvas)
          );
          editorCanvas.requestRenderAll();
        }, 0);
      }
    },

    // 初始化点击
    initD() {
      // 监听鼠标按下
      const obj = editorCanvas.getActiveObject();
      editorCanvas.on("mouse:down", options => {
        if (options.target) {
          options.target.evented = true;
          options.target.on("mousedown", e => {
            // console.log("type", e);
            // console.log('type', e.target._element.localName)
            if (e && e.target.type == "i-text") {
              this.selectType = "text";
              return;
            }
            if (
              e &&
              e.target._element &&
              e.target._element.localName == "img"
            ) {
              this.selectType = "img";
              return;
            }
            if (e && e.target._objects.length > 1) {
              this.selectType = "imgGroup";
              return;
            }
          });
        }
      });
    },
    // 设置背景
    setBgImg() {
      const obj = editorCanvas;
      if (obj) {
        // 设置背景图片
        obj.setBackgroundImage(
          this.imagesList[this.imgIndex].backgroungImg,
          obj.renderAll.bind(obj)
        );
      }
    },
    // 添加文本框
    addTextHandle() {
      let textBox;
      let currentOptionCss;
      currentOptionCss = this.textStyleData;
      textBox = new fabric.Textbox(
        currentOptionCss.text || "",
        currentOptionCss
      );
      editorCanvas.add(textBox).setActiveObject(textBox);
    },

    // 顶部按钮上传图片成功
    imgAddSuccess(data) {
      fabric.Image.fromURL(data, img => {
        editorCanvas.add(img).renderAll();
      });
    },

    // 更换图片
    imgReplaceDraw() {
      document.getElementById("uploadfileReplace").click();
    },

    // 更换图片
    imgUpdateSuccess(data) {
      const obj = editorCanvas.getActiveObject();
      // 使用 setSrc 方法更改图片，第二个参数是回调函数，在回调函数里刷新一下 canvas 即可
      obj.setSrc(data, () => {
        editorCanvas.renderAll();
      });
    },

    // 添加组合logo
    imgAddCombinationSuccess(data) {
      this.groupLogo(data, this.logo)
    },

    // 更换组合logo
    imgUpdateGroupSuccess(data) {
      const activeObject = editorCanvas.getActiveObject();
      if (!activeObject) {
        this.$alert('请先选中组合logo')
        return
      }
      let scaleX = activeObject.scaleX || ''
      let scaleY = activeObject.scaleY || ''
      let top = activeObject.top;
      let left = activeObject.left;
      let items = activeObject._objects;
      activeObject._restoreObjectsState();
      editorCanvas.remove(activeObject);
      let img1 = items[0]._element.currentSrc == this.logo ? items[0]._element.currentSrc : data
      let img2 = items[1]._element.currentSrc == this.logo ? items[1]._element.currentSrc : data
      this.groupLogo(img1, img2, left, top, scaleX, scaleY)
    },

    // 组合组件
    groupLogo(oneImg, twoImg, left = '', top = '', scaleX = '', scaleY = '') {
      //进行组合
      fabric.Image.fromURL(oneImg, img1 => {
        let aImg = img1;
        aImg.left = 0;
        aImg.top = 0;
        fabric.Image.fromURL(twoImg, img2 => {
          let bImg = img2;
          // 用来做第一次高度添加
          let oldHeight = img2._element.currentSrc == this.logo ? img2.height : img1.height
          bImg.left = aImg.width;
          bImg.top = 0;
          let group = new fabric.Group([aImg, bImg], {
            left: left || 0,
            top: top || 0,
            width: aImg.width + bImg.width,
            height: oldHeight,
            scaleX: scaleX || 1,
            scaleY: scaleY || 1
          });
          editorCanvas.add(group);
        });
      });
    },

    // 更换位置
    exchangePosition() {
      const activeObject = editorCanvas.getActiveObject();
      if (!activeObject) {
        this.$alert('请先选中组合logo')
        return
      }
      let scaleX = activeObject.scaleX || ''
      let scaleY = activeObject.scaleY || ''
      let top = activeObject.top;
      let left = activeObject.left;
      let items = activeObject._objects;
      activeObject._restoreObjectsState();
      editorCanvas.remove(activeObject);
      this.groupLogo(items[1]._element.currentSrc, items[0]._element.currentSrc, left, top, scaleX, scaleY)
    },

    // 删除当前鼠标活动控件
    deleteText() {
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        editorCanvas.remove(obj);
      }
      editorCanvas.renderAll();
    },

    // 属性设置
    // 字体颜色
    changeFontColor(value) {
      let mfontColor = value;
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        obj.set({
          fill: mfontColor
        });
        editorCanvas.renderAll();
      }
    },

    // 字体粗细
    changefontWeight(value) {
      let mfontWeight = value;
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        obj.set("fontWeight", mfontWeight);
        editorCanvas.renderAll();
      }
    },

    // 更改字体大小
    changeFontSize(value) {
      let mfontSize = value;
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        obj.set({
          fontSize: mfontSize
        });
        editorCanvas.renderAll();
      }
    },

    saveTemplates() {
      let base64URl = editorCanvas.toDataURL({
        formart: "jpg",
        multiplier: 1
      });
    },

    // 预览图片
    downLoadImage() {
      let base64URl = editorCanvas.toDataURL({
        formart: "png",
        multiplier: 1
      });
      this.imageBase64 = base64URl;
      this.dialogVisible = true;
    },

    handleClose() {
      this.dialogVisible = false;
    },

    // 层级移动
    // 置顶
    bringToFront() {
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        editorCanvas.bringToFront(obj);
      }
    },
    // 置底
    sendToBack() {
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        editorCanvas.sendToBack(obj);
      }
    },
    // 前移
    bringForward() {
      const obj = editorCanvas.getActiveObject();
      if (obj) {
        editorCanvas.bringForward(obj);
      }
    },
    // 后移
    sendBackwards() {
      const obj = editorCanvas.getActiveObject();
      console.log(obj);
      if (obj) {
        editorCanvas.sendBackwards(obj);
      }
    },

    // 下载图片 (下载图片必须图片是允许跨域)
    downLoad() {
      const dataURL = editorCanvas.toDataURL({
        width: editorCanvas.width,
        height: editorCanvas.height,
        left: 0,
        top: 0,
        format: "png"
      });
      const link = document.createElement("a");
      link.download = "图片.png";
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style scoped>
.el-header {
  box-sizing: border-box;
}
.content-box {
  margin-top: 20px;
}
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  width: 200px;
}
.img-list-ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
}

.img-list-ul li {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.img-list-ul .active {
  background: #eeeeee;
}

.img-list-ul li:hover {
  background: #eeeeee;
  cursor: pointer;
}

.img-list-ul li .img-bg {
  width: 200px;
}

.el-main {
  background-color: #eeeeee;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-main .content-show {
  display: flex;
  flex-direction: column;
}
.canvas {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.right-box {
  position: relative;
  padding-top: 50px;
}

.icon-delete {
  position: absolute;
  right: 15px;
  top: 0;
}
</style>
