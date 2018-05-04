<template lang="html">
  <treeselect size="small"
    :multiple="false"
    :clearable="false"
    :searchable="true"
    :options="options"
    :show-count="true"
    :max-height="200"
    v-model="tagValue"
    placeholder="请选择标签类别"
    @select="handleSelectTag(tagValue)"
    />
</template>

<script>
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Treeselect from '@riophae/vue-treeselect'

export default {
  components:{
    Treeselect,
  },
  data() {
    return {
      tagValue:this.tagVal
    }
  },
  props:{
    options:{
      type:Array,
      default:()=>[]
    },
    tagVal:{
      type:String,
      default:""
    }
  },
  methods:{
    handleSelectTag(tagValue) {
      this.$emit("on-selectTag",tagValue)
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
