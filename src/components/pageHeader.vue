<!--
@Author: Dingjia
@Date:   2018-04-29T16:06:01+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-04-29T16:10:18+08:00
-->



<template lang="html">
  <header class="bd_nav">
      <h2>{{title}}</h2>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.bd_nav {
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    padding-bottom: 10px;
    h2 {
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
        font-style: normal;
        display: inline;
    }
}
</style>
