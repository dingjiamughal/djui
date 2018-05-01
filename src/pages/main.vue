<!--
@Author: Dingjia
@Date:   2018-04-29T12:33:05+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-04-29T16:14:12+08:00
-->



<template lang="html">
  <div class="main-page">
    <main-header></main-header>
    <div class="content">
      <div class="left-slider">

      </div>
      <div class="content-container">
        <router-view></router-view>
      </div>

    </div>


  </div>

</template>

<script>
import MainHeader from "@/components/main/header"
export default {
  components:{
    MainHeader
  }

}
</script>

<style lang="less" scoped>
.main-page {
  height:100%;
}
.content-container {
  height:100%;
    padding:65px 15px 0 15px;
}
.content {
  display: flex;
  .left-slider {
    flex:50px 0 0;
    height:500px;
    border-right:1px solid;
  }
  .content-container {
    flex:1;
  }
}
</style>
