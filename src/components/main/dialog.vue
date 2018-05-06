<!--
@Author: Dingjia
@Date:   2018-04-30T22:09:30+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-05-04T23:03:42+08:00
-->



<template lang="html">
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="dialogWidth"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :before-close="handleClose">
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose" size="small">取 消</el-button>
      <el-button type="primary" @click="handleSubmitDialog" size="small">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"提示"
    },
    dialogVisible:{
      type:Boolean,
      default:false
    },
    dialogWidth:{
      type:String,
      default:"520px"
    }
  },
  methods:{
    handleClose(done) { //关闭弹窗
      // this.$confirm('确认清空编辑内容并关闭？')
      //   .then(_ => {
      //     console.log(done)
      //     this.$emit("on-close-modal")
      //   })
      //   .catch(_ => {});
      this.$emit("on-close-modal")
    },
    handleSubmitDialog() { //保存按钮
      this.$emit("on-submit-dialog",this.title)
    }
  }
}
</script>

<style lang="less">
</style>
