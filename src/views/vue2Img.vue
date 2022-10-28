<template>
    <div>
        <authImg :imgUrl="logo" authToken="sdasdsadsadsadsa"></authImg>
    </div>
</template>

<script>
import authImg from '../components/authImg.vue'
import logo from '../assets/logo.png'

export default {
    components: {
        authImg
    },
    data() {
        return {
            logo
        }
    }
}
</script>