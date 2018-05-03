<template lang="html">
  <el-form-item :label="'选项'+(index+1)">
      <el-col :span="17">
        <el-input v-model="item.name" size="small"></el-input>
      </el-col>
      <el-col :span="7" class="option-operate-btn">
        <el-button type="success" icon="el-icon-plus" size="mini" @click="handleAddSelect"></el-button>
        <el-button type="warning" icon="el-icon-close" size="mini" @click="handleDelSelect(index)"></el-button>
        <el-tooltip :content="item.tag ? item.tag : '请配置标签'" placement="right">
          <el-button type="primary" icon="el-icon-edit-outline" size="mini" @click="handleShowTagModal(index)"></el-button>
        </el-tooltip>
      </el-col>
  </el-form-item>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      default:()=>{}
    },
    index:{
      type:Number,
      default:0
    }
  },
  methods:{
    handleAddSelect() {
      this.$emit("add-option")
    },
    handleDelSelect(index) {
      this.$emit("del-option",index)
    },
    handleShowTagModal(index) {
      this.$emit("show-tagModal",index)
    }
  }
}
</script>

<style lang="less" scoped>
.option-operate-btn {
    button {
        padding: 7px;
        margin-left: 5px;
    }
}
</style>
