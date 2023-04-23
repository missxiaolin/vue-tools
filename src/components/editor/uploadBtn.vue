<template>
  <el-button class="el-icon-plus btn_style" @click="imgDraw">
    <input
      type="file"
      accept="image/*"
      style="display:none"
      :id="inputId"
      @change="uploadFile"
    />
    {{ btnText }}
  </el-button>
</template>

<script>
import { uuid } from '../../utils/index'
export default {
  props: {
    btnText: ''
  },
  data() {
    return {
      inputId: uuid(),
    }
  },
  methods: {
    // 载入图片
    imgDraw() {
      document.getElementById(this.inputId).click();
    },
    // 上传图片
    uploadFile(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = e => {
        let data = e.target.result;
        this.$emit('imgSuccess', data)
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    },
  }
};
</script>
