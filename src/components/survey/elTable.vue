<!--
@Author: Dingjia
@Date:   2018-04-30T13:24:02+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-04-30T13:32:00+08:00
-->



<template lang="html">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="surveyTitle"
      label="问卷标题"
      width="">
    </el-table-column>
    <el-table-column
      prop="surveyIntro"
      label="问卷介绍"
      width="">
    </el-table-column>
    <el-table-column
      prop="startTime"
      label="起始时间">
    </el-table-column>
    <el-table-column
      prop="endTime"
      label="结束时间">
    </el-table-column>
    <el-table-column
label="操作"
width="200">
<template slot-scope="scope">
<el-button type="primary" icon="el-icon-edit" size="mini" circle @click="handleClickEdit(scope.row)"></el-button>
<el-button type="danger" icon="el-icon-delete" size="mini" circle></el-button>
<el-button type="success" icon="el-icon-more" size="mini" circle></el-button>
</template>
</el-table-column>
  </el-table>
</template>

<script>
export default {
  props:{
    tableData:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
    handleClickEdit(row) {
      this.$emit("handle-edit",row)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
