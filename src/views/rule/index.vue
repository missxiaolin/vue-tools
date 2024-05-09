<template>
  <div>
    <vue-ruler-tool
      :is-scale-revise="true"
    >
      <div class="test">ss</div>
    </vue-ruler-tool>
  </div>
</template>

<script>
import VueRulerTool from "vue-ruler-tool";

export default {
  components: {
    VueRulerTool,
  },
  data () {
    return {
      presetLine: [{ type: 'l', site: 100 }, { type: 'v', site: 200 }]
    }
  }
};
</script>
