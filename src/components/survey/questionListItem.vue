<!--
@Author: Dingjia
@Date:   2018-05-03T21:01:59+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-05-03T23:11:48+08:00
-->



<template lang="html">
  <div class="question-item">
    <div class="left">
      <h2>Q{{index+1}}：</h2>
      <div class="icon-wrapper">
        <i class="el-icon-edit"></i>
        <i class="el-icon-delete" @click="handleDelQuestionItem(index)"></i>
      </div>
    </div>
    <div class="right">
      <h3>【{{item.type}}】{{item.name}}<span class="limit-tip" v-if="item.type=='多选'">(最多可选数：<span class="num">{{item.limitNum ? item.limitNum : '无限制'}}</span>)</span></h3>
      <div class="content">
        <!-- 单选 -->
        <ul v-if="item.type=='单选'">
          <li v-for="li in item.optionList">
            <el-radio disabled label="禁用">{{li.name}}</el-radio>
            <el-tag type="success" v-show="li.tag">{{li.tag}}</el-tag>
          </li>

        </ul>
        <!-- 多选 -->
        <ul v-if="item.type=='多选'">
          <li v-for="li in item.optionList">
            <el-checkbox disabled label="禁用">{{li.name}}</el-checkbox>
          </li>
        </ul>
        <!-- 自由问答（长文本） -->
        <ul v-if="item.type=='自由回答(长文本)'">
          <li class="no-list">
            <el-input
              type="textarea"
              disabled
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入自由问答（长文本）"
              >
            </el-input>
          </li>
        </ul>
        <!-- 自由问答 -->
        <ul v-if="item.type=='自由回答'">
          <li class="no-list">
            <el-input
              type="textarea"
              disabled
              placeholder="请输入自由问答"
              >
            </el-input>
          </li>
        </ul>
        <!-- 日期 -->
        <ul v-if="item.type=='日期'">
          <li class="no-list">
            <el-date-picker
              disabled
              type="date"
              placeholder="选择日期"
              size="small">
            </el-date-picker>
          </li>
        </ul>
        <!-- 地区 -->
        <ul v-if="item.type=='地区'">
          <el-select placeholder="请选择地区" value="请选择地区" size="small" disabled>
            <el-option value="请选择地区"></el-option>
          </el-select>
        </ul>
        <!-- 用户标签 -->
        <ul v-if="item.type=='用户标签'">
          <li>
            <el-tag class="tag-item"
              v-for="(tag,index) in item.tags"
              :key="index">
              {{tag.name}}
            </el-tag>
          </li>
        </ul>
        <!-- 两种评分插槽 -->
        <slot></slot>
      </div>
    </div>
  </div>

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
    handleDelQuestionItem() {
      this.$emit("del-questionItem")
    }
  }
}
</script>

<style lang="less" scoped>
.question-list {
  &>.question-item {
    padding-right: 60px !important;
  }
}
.question-item:hover .icon-wrapper {
    display: block !important;
}
.question-list {
    padding: 30px 0;

    p {
        color: #606266;
    }
    .question-item {
        display: flex;
        min-height: 132px;
        border-radius: 5px;
        padding: 20px 0;
        color: #657180;
        &:hover {
            background: #f7f7f7;

        }
        .left {
            flex: 60px 0 0;
            h2 {
                text-align: center;
                font-weight: 700;
                font-size: 16px;
                margin-bottom: 8px;
                line-height: 1.3;
            }
            .icon-wrapper {
                display: none;

                text-align: center;
                i {
                    display: block;
                    font-size: 20px;
                    cursor: pointer;
                    margin-bottom: 10px;
                }
            }
        }
        .right {
            flex: 1;
            h3 {
                font-weight: 700;
                margin-bottom: 8px;
                .limit-tip {
                  margin-left: 8px;
                  .num {
                    color:#F56C6C;
                    // font-size: 18px;
                  }
                }
            }
            li {
                margin-bottom: 3px;
                &.no-list {
                    width: 420px;
                }
            }
        }
    }
}
.tag-item {
    margin: 0 8px 8px 0;
    min-width: 40px;
    text-align: center;
}
</style>
