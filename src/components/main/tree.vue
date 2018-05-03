<template lang="html">
  <treeselect size="small"
    :multiple="false"
    :clearable="false"
    :searchable="true"
    :options="options"
    :show-count="true"
    :max-height="200"
    v-model="tagVal"
    placeholder="请选择标签类别"
    @select="handleSelectTag(tagVal)"
    />
</template>

<script>
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Treeselect from '@riophae/vue-treeselect'
export default {
  components:{
    Treeselect,
  },
  props:{
    options:{
      type:Array,
      default:()=>[]
    },
    tagVal:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
    handleSelectTag(tagVal) {
      this.$emit("on-selectTag",tagVal)
    }
  }
}
</script>

<style lang="less">
.vue-treeselect {
    .vue-treeselect__control {
        display: block;
        height: 32px;
    }
    input {
        margin-top: 6px;
    }
    .vue-treeselect__arrow {
        position: relative;
        top: 4px;
    }
}
</style>
