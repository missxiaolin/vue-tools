<template>
    <div>
        111
        <button @click="a">ceshi</button>
    </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from 'vue'
import ceshi from '../utils/getData'
export default {
  setup() {
    const message = ref('Hello, World!')
    
    let { proxy } = getCurrentInstance()
    const a = () => {
        // console.log(proxy.$data)
        console.log(Object.keys(proxy))
        console.log(Object.values(proxy))
        ceshi(proxy)
    }
    return {
      message,
      a
    }
  }
}
</script>