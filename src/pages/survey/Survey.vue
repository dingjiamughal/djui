<!--
@Author: Dingjia
@Date:   2018-04-29T12:31:48+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-04-30T15:39:42+08:00
-->


<template lang="html">
  <div class="survey">
    <p-header title="Survey Management"></p-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PHeader from "@/components/pageHeader"
export default {
  components: {
    PHeader
  },
  created() {

  },
  methods: {

  }
}
</script>
<style media="screen" lang="less">
.search-wrapper {
  .el-input--suffix {
     .el-input__suffix {
         cursor: pointer;
         border-left: 1px solid #ccc;
     }
 }
}

</style>

<style lang="less" scoped>

</style>
