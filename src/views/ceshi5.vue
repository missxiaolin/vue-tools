<template>
  <div class="components-container">
    <tinymce v-model="content" :height="300" />
  </div>
</template>

<script>
import Tinymce from '../components/tinymce'
import { str } from "../utils/ud";

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content: str
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>