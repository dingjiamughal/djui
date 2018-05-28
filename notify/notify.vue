<template lang="html">
    <div class="notify"
        :style="style"
        v-show="visible">
      <span>{{title}}</span>
      <p>{{message}}</p>
      <button @click="handleCloseNotify">关闭</button>
    </div>
</template>

<script>
export default {
  name:'Notification',
  props:{
    title:{
      type:String,
      default:""
    },
    message:{
      type:String,
      default:""
    },

  },
  computed:{
    style() {
      return {}
    }
  },
  data() {
    return {
      visible:true
    }
  },
  methods:{
    handleCloseNotify(e) {
      e.preventDefault()
      this.$emit("closeNotify")
    }
  }
}
</script>

<style lang="less" scoped>
.notify {
  position:fixed;
  bottom:20px;
  right:20px;
  width:200px;
  height:50px;
  border:1px solid;
}
</style>
