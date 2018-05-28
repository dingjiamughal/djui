<!--
@Author: Dingjia
@Date:   2018-05-06T17:37:36+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-05-06T17:41:00+08:00
-->



<template lang="html">
  <div class="modal-mask">
    <div class="model-show" @click="handleClickMask">
      <img :src="img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    }
  },
  methods:{
    handleClickMask() {
      this.$emit('on-mask')
    }
  }
}
</script>

<style lang="less" scoped>
.modal-mask {
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    .model-show {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        img {
            display: block;
            margin: auto;
            max-width: 80%;
            user-select: none;
            background-position: 0 0px, 10px 10px;
            background-size: 20px 20px;
            background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
        }
    }
}
</style>
