<!--
@Author: Dingjia
@Date:   2018-04-29T15:26:12+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-05-01T23:55:20+08:00
-->



<template lang="html">
  <div class="survey-config">
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
      <el-row :gutter="20">
        <el-col :md="8">
          <el-form-item label="问卷标题">
            <el-input v-model="formLabelAlign.name" size="small"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="8">
          <el-form-item label="问卷介绍">
            <el-input v-model="formLabelAlign.region" size="small"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="8">
          <el-form-item label="问卷编号">
            <el-input v-model="formLabelAlign.region" size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :md="8">
          <el-form-item label="时间段">
            <el-date-picker size="small"
              v-model="value5"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="上线时间"
              end-placeholder="下线时间"
              align="right">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :md="8">
          <el-form-item label="次数限制">
            <el-input v-model="formLabelAlign.numberLimit" size="small"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="2">
          <el-form-item label="背景色">
            <el-color-picker
              v-model="color5"
              show-alpha
              :predefine="bgColors">
            </el-color-picker>

          </el-form-item>
        </el-col>
        <el-col :md="2">
          <el-form-item label="字体色">
            <el-color-picker
              v-model="color6"
              show-alpha
              :predefine="fontColors">
            </el-color-picker>

          </el-form-item>
        </el-col>
      </el-row>

<!-- 此处要放三个cropper -->

</el-form>

<div class="question-wrapper">
  <div class="type-btns-wrapper">
    <el-button type="primary" size="small" v-for="btn in questionType" :key="btn" @click="handleQuestionTypeModal(btn,1)">{{btn}}</el-button>
  </div>
  <div class="question-list">
    <p class="tip" v-show="!questionList.length">一点东西都没有，赶快点击上方按钮添加题目吧！</p>
    <question-item v-for="(questionItem,index) in questionList"
                   :key="index"
                   :item="questionItem"
                   :index="index"
                   @del-questionItem="handleDelQuestionItem(questionList,index)">
          <ul v-if="questionItem.type == '用户满意度'">
            <li>
              <el-rate disabled></el-rate>
              <h3>满意的子问题</h3>
              <question-item v-for="(item1,idx1) in dialogRate.children.satisfy.optionList"
                            :key="idx1"
                            :item="item1"
                            :index="idx1"
                            @del-questionItem="handleDelQuestionItem(dialogRate.children.satisfy.optionList,idx1)">
              </question-item>
              <h3>不满意的子问题</h3>
              <question-item v-for="(item2,idx2) in dialogRate.children.unsatisfy.optionList"
                            :key="idx2"
                            :item="item2"
                            :index="idx2"
                            @del-questionItem="handleDelQuestionItem(dialogRate.children.unsatisfy.optionList,idx2)">
              </question-item>
            </li>
          </ul>
          <!-- 用户评分 -->
          <ul v-if="questionItem.type == '用户评分'">
            <li>
              <el-button-group>
                <el-button type="primary" v-for="(i,index) in 11" :key="index" size="mini" disabled>{{index}}</el-button>
              </el-button-group>
            </li>
          </ul>
    </question-item>
  </div>
</div>


<!-- 弹窗 -->

<!-- 单选 多线 -->
<s-dialog :dialogVisible="dialogVisible_1"
          :title="dialogTitle_1"
          @on-submit-dialog="submitQuestionItem"
          @on-close-modal="handleCloseModal">
          <div class="">
            <el-form label-position="right" label-width="80px" :model="dialogSingle">
              <el-form-item label="题目">
                <el-input v-model="dialogSingle.name" size="small"></el-input>
              </el-form-item>
              <div class="option-wrapper">
                <option-item v-for="(optionItem,index) in dialogSingle.optionList"
                             :item="optionItem"
                             :index="index"
                             :key="index"
                             @add-option="handleAddSelect"
                             @del-option="handleDelSelect"
                             @show-tagModal="handleShowTagModal">
                </option-item>
              </div>
            </el-form>
          </div>
</s-dialog>

<!-- 自由回答(长文本) + 自由回答 + 日期 + 地区 -->
<s-dialog class="none-dialog"
          :dialogVisible="dialogVisible_2"
          :title="dialogTitle_2"
          @on-submit-dialog="submitQuestionItem"
          @on-close-modal="handleCloseModal">
          <div class="">
            <el-form label-position="top" label-width="80px" :model="dialogNone">
              <el-form-item label="题目">
                <el-input v-model="dialogNone.name" size="small"></el-input>
              </el-form-item>

            </el-form>
            <!-- 用户标签 -->
            <div class="user-tags-wrapper" v-if="dialogTitle_2 == '添加用户标签'">
              <el-row :gutter="20">
                <el-col :span="10">
                  <span>标签类别</span>
                    <s-tree :options="options"
                            :tag-val="tagVal1"
                            @on-selectTag="handleSelectTag">
                    </s-tree>
                </el-col>
                <el-col :span="10">
                  <span>标签名称</span>
                  <s-tree :options="options"
                          :tag-val="tagVal2"
                          @on-selectTag="handleSelectTag">
                  </s-tree>
                </el-col>
                <el-col :span="4">
                  <span>&nbsp;</span>
                  <el-button type="primary" class="btn-add-tag" size="small" @click="handleAddTagForTAG">添加标签</el-button>
                </el-col>
              </el-row>
              <div class="tags-wrapper" v-show="dialogNone.tags.length">
                <p>已选择的标签：</p>
                <el-tag class="tag-item"
                  v-for="(tag,index) in dialogNone.tags"
                  closable
                  @close="closeTagItem(index)"
                  :key="index">
                  {{tag.name}}
                </el-tag>
              </div>
            </div>
          </div>
</s-dialog>

<!-- 选标签 -->
<s-dialog class="none-dialog"
          :dialogVisible="dialogVisible_4"
          :title="dialogTitle_4"
          @on-submit-dialog="submitQuestionItem"
          @on-close-modal="handleCloseModal">
          <div class="">
            <el-form label-position="top" label-width="80px" :model="dialogTags">
              <el-form-item label="题目">
                <el-input v-model="dialogTags.name" size="small"></el-input>
              </el-form-item>

            </el-form>
            <!-- 用户标签 -->
            <div class="user-tags-wrapper" v-if="dialogTitle_4 == '添加用户标签'">
              <el-row :gutter="20">
                <el-col :span="10">
                  <span>标签类别</span>
                  <s-tree :options="options"
                          :tag-val="tagVal1"
                          @on-selectTag="handleSelectTag">
                  </s-tree>
                </el-col>
                <el-col :span="10">
                  <span>标签名称</span>
                  <s-tree :options="options"
                          :tag-val="tagVal2"
                          @on-selectTag="handleSelectTag">
                  </s-tree>
                </el-col>
                <el-col :span="4">
                  <span>&nbsp;</span>
                  <el-button type="primary" class="btn-add-tag" size="small" @click="handleAddTagForTAG">添加标签</el-button>
                </el-col>
              </el-row>
              <div class="tags-wrapper" v-show="dialogTags.tags.length">
                <p>已选择的标签：</p>
                <el-tag class="tag-item"
                  v-for="(tag,index) in dialogTags.tags"
                  closable
                  @close="closeTagItem(index)"
                  :key="index">
                  {{tag.name}}
                </el-tag>
              </div>
            </div>
          </div>
</s-dialog>

<!-- 用户评分 + 用户满意度 -->
<s-dialog :dialogVisible="dialogVisible_3"
          :title="dialogTitle_3"
          dialogWidth="660px"
          @on-submit-dialog="submitQuestionItem"
          @on-close-modal="handleCloseModal">
          <div class="">
            <el-form label-position="right" label-width="80px" :model="dialogRate">
              <el-form-item label="题目">
                <el-input v-model="dialogRate.name" size="small"></el-input>
              </el-form-item>

            </el-form>
            <div class="satisfy-wrapper">
              <p>满意子问题</p>
              <div class="type-btns-wrapper" style="text-align:left;">
                <el-button type="primary" size="small" v-for="btn in questionType_pre" :key="btn" @click="handleQuestionTypeModal(btn,2,true)">{{btn}}</el-button>
              </div>
              <div class="question-list">
                <p class="tip" v-show="!dialogRate.children.satisfy.optionList.length">一点东西都没有，赶快点击上方按钮添加题目吧！</p>
                <question-item v-for="(item1,idx1) in dialogRate.children.satisfy.optionList"
                              :key="idx1"
                              :item="item1"
                              :index="idx1">
                </question-item>
              </div>
            </div>
            <div class="unsatisfy-wrapper">
              <p>不满意子问题</p>
              <div class="type-btns-wrapper" style="text-align:left;">
                <el-button type="primary" size="small" v-for="btn in questionType_pre" :key="btn" @click="handleQuestionTypeModal(btn,2,false)">{{btn}}</el-button>
              </div>
              <div class="question-list">
                <p class="tip" v-show="!dialogRate.children.unsatisfy.optionList.length">一点东西都没有，赶快点击上方按钮添加题目吧！</p>
                <question-item v-for="(item1,idx1) in dialogRate.children.unsatisfy.optionList"
                              :key="idx1"
                              :item="item1"
                              :index="idx1">
                </question-item>
              </div>
            </div>
          </div>
</s-dialog>

<s-dialog :dialogVisible="isShowTagModal"
          title="添加标签"
          @on-submit-dialog="addTag"
          @on-close-modal="handleCloseTagModal">
          <div class="">
            <span>标签类别</span>
            <s-tree :options="options"
                    :tag-val="tagVal1"
                    @on-selectTag="handleSelectTag">
            </s-tree>
          </div>
          <div class="">
            <span>标签名称</span>
            <s-tree :options="options"
                    :tag-val="tagVal2"
                    @on-selectTag="handleSelectTag">
            </s-tree>
          </div>
</s-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import vueCropper from 'vue-cropper'
import SDialog from '@/components/main/dialog'
import STree from '@/components/main/tree'
import questionItem from '@/components/survey/questionListItem'
import optionItem from "@/components/survey/optionItem"

import {
  mapState
} from "vuex"
const QT = {
  SINGLE: "添加单选题",
  MULTIPLE: "添加多选题",
  FREEANSWER: "添加自由问答",
  FREEANSWER_L: "添加自由回答(长文本)",
  DATE: "添加日期",
  REGION: "添加地区",
  SATISFY: "添加用户满意度",
  RATE: "添加用户评分",
  TAG: "添加用户标签"
}
console.log(_)
export default {
  components: {
    SDialog,
    vueCropper,
    questionItem,
    optionItem,
    STree
  },
  data() {
    return {
      isShowTagModal: false,
      questionType: ['单选', '多选', '自由回答(长文本)', '自由回答', '日期', '地区', '用户满意度', '用户评分', '用户标签'],
      questionType_pre: ['单选', '多选', '自由回答(长文本)', '自由回答', '日期', '地区', '用户标签'],
      dialogVisible_1: false, //单选 + 多选
      dialogTitle_1: "", //单选 + 多选
      dialogVisible_2: false, //自由回答(长文本) + 自由回答 + 日期 + 地区
      dialogTitle_2: "", //自由回答(长文本) + 自由回答 + 日期 + 地区
      dialogVisible_3: false, //用户满意度 + 用户评分
      dialogTitle_3: "", //用户满意度 + 用户评分
      dialogVisible_4: false, //选标签
      dialogTitle_4: "", //选标签
      addNewItemType: "",
      tagNowIndex: null,
      dialogType: null, //选中的btn评分 or not
      isSatisfy: null, //是否满意
      dialogSingle: { //单选 + 多选
        name: '',
        type: '',
        optionList: [{
          name: '',
          tag: null
        }]
      },
      dialogNone: { //自由回答(长文本) + 自由回答 + 日期 + 地区
        name: '',
        type: ''
      },
      dialogTags: { //选标签
        name:'',
        type:'',
        tags:[]
      },
      dialogRate: {
        name: '',
        children: {
          satisfy: {
            name: '满意的题目',
            type: '满意',
            optionList: []
          },
          unsatisfy: {
            name: '不满意的题目',
            type: '不满意',
            optionList: []
          }
        }
      },
      questionList: [],
      activeNames: [1],
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        numberLimit: ''
      },
      pickerOptions2: {},
      value5: '',
      color5: 'rgba(255, 69, 0, 0.68)',
      color6: 'rgba(0, 0, 0)',
      bgColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      fontColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      // tree data
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        }],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      }],
      optionsSecond: [{
        id: 'a',
        label: 'a'
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      }],
      tagVal1: [],
      tagVal2: []
    }
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    // console.log(this.userInfo)
    // console.log(this.$route)
  },
  methods: {
    // type:1 第一层
    // type:2 第二层

    //isSatisfy 第二层中btns true满意 false不满意
    handleQuestionTypeModal(btn, type, isSatisfy) { // 点了按钮组  弹层
      this.renderModal()
      this.dialogType = type
      if (isSatisfy) {
        this.isSatisfy = true
      } else {
        this.isSatisfy = false
      }
      // console.log(type)
      switch (btn) {
        case "单选":
          this.dialogVisible_1 = true
          this.dialogTitle_1 = QT.SINGLE
          this.dialogSingle.type = btn
          break
        case "多选":
          this.dialogVisible_1 = true
          this.dialogTitle_1 = QT.MULTIPLE
          this.dialogSingle.type = btn
          break
          // ---------------------------------------------------------------------------
        case "自由回答(长文本)":
          this.dialogVisible_2 = true
          this.dialogTitle_2 = QT.FREEANSWER_L
          this.dialogNone.type = btn
          break
        case "自由回答":
          this.dialogVisible_2 = true
          this.dialogTitle_2 = QT.FREEANSWER
          this.dialogNone.type = btn
          break
        case "日期":
          this.dialogVisible_2 = true
          this.dialogTitle_2 = QT.DATE
          this.dialogNone.type = btn
          break
        case "地区":
          this.dialogVisible_2 = true
          this.dialogTitle_2 = QT.REGION
          this.dialogNone.type = btn
          break
          // ---------------------------------------------------------------------------
        case "用户标签":
          this.dialogVisible_4 = true
          this.dialogTitle_4 = QT.TAG
          this.dialogTags.type = btn
          break
          // ---------------------------------------------------------------------------
        case "用户满意度":
          this.dialogVisible_3 = true
          this.dialogTitle_3 = QT.SATISFY
          this.dialogRate.type = btn
          break
        case "用户评分":
          this.dialogVisible_3 = true
          this.dialogTitle_3 = QT.RATE
          this.dialogRate.type = btn
          break
      }
      // console.log(this.dialogNone)
    },
    submitQuestionItem(type) { // 弹层点了提交
      let index = null
      if (this.isSatisfy) {
        index = "satisfy"
      } else {
        index = "unsatisfy"
      }
      if (this.dialogType == 1) {//第一层
        switch (type) {
          case QT.SINGLE:
            this.dialogVisible_1 = false
            this.questionList.push(this.dialogSingle)
            break
          case QT.MULTIPLE:
            this.dialogVisible_1 = false
            this.questionList.push(this.dialogSingle)
            break
          case QT.FREEANSWER_L:
            this.dialogVisible_2 = false
            this.questionList.push(this.dialogNone)
            break
          case QT.FREEANSWER:
            this.dialogVisible_2 = false
            this.questionList.push(this.dialogNone)
            break
          case QT.DATE:
            this.dialogVisible_2 = false
            this.questionList.push(this.dialogNone)
            break
          case QT.REGION:
            this.dialogVisible_2 = false
            this.questionList.push(this.dialogNone)
            break
          case QT.TAG:
            this.dialogVisible_4 = false
            this.questionList.push(this.dialogTags)
            break
          case QT.SATISFY:
            this.dialogVisible_3 = false
            this.questionList.push(this.dialogRate)
            break
          case QT.RATE:
            this.dialogVisible_3 = false
            this.questionList.push(this.dialogRate)
            break
        }
      } else if (this.dialogType == 2) { //第二层
        switch (type) {
          case QT.SINGLE:
            this.dialogVisible_1 = false
            this.dialogRate.children[index].optionList.push(this.dialogSingle)
            break
          case QT.MULTIPLE:
            this.dialogVisible_1 = false
            this.dialogRate.children[index].optionList.push(this.dialogSingle)
            break
          case QT.FREEANSWER_L:
            this.dialogVisible_2 = false
            this.dialogRate.children[index].optionList.push(this.dialogNone)
            break
          case QT.FREEANSWER:
            this.dialogVisible_2 = false
            this.dialogRate.children[index].optionList.push(this.dialogNone)
            break
          case QT.DATE:
            this.dialogVisible_2 = false
            this.dialogRate.children[index].optionList.push(this.dialogNone)
            break
          case QT.REGION:
            this.dialogVisible_2 = false
            this.dialogRate.children[index].optionList.push(this.dialogNone)
            break
          case QT.TAG:
            this.dialogVisible_4 = false
            this.dialogRate.children[index].optionList.push(this.dialogTags)
            break
        }

      }
      console.log(this.dialogRate)
      this.dialogType = 1
    },
    handleCloseModal() {
      if (this.dialogType == 2) {
        this.dialogVisible_1 = false
        this.dialogVisible_2 = false
        this.dialogVisible_4 = false
      } else {
        this.dialogVisible_1 = false
        this.dialogVisible_2 = false
        this.dialogVisible_3 = false
        this.dialogVisible_4 = false
      }
      this.dialogType = 1
    },
    handleCloseTagModal() {
      this.isShowTagModal = false
    },
    handleDelQuestionItem(list,index) {
      list.splice(index,1)
    },
    addTag() { // 选好标签之后 点击保存标签跳到第一层弹窗
      const tagNowIndex = this.tagNowIndex
      this.dialogSingle.optionList[tagNowIndex].tag = this.tagVal2
      this.isShowTagModal = false
    },
    handleShowTagModal(index) { //点击标签图表 显示标签配置弹层
      this.tagNowIndex = index
      this.tagVal1 = this.dialogSingle.optionList[index].tag //标签类别 赋值
      this.tagVal2 = this.dialogSingle.optionList[index].tag //标签名称
      this.isShowTagModal = true
    },
    handleAddSelect() {
      this.dialogSingle.optionList.push({
        name: '',
        tag: ''
      })
    },
    handleAddTagForTAG() {
      if (this.tagVal2) {
        this.dialogTags.tags.push({
          name: this.tagVal2
        })
      }
      // console.log(this.dialogNone)
    },
    closeTagItem(index) {
      this.dialogTags.tags.splice(index, 1)
    },
    handleDelSelect(index) {
      let length = this.dialogSingle.optionList.length
      if(length>1) {
        this.dialogSingle.optionList.splice(index, 1)
      } else {
        this.$message({
          message: '最后一个啦，不要删除哦',
          type: 'warning'
        });
      }

    },
    handleSelectTag(node, id) {
      // console.log(node)
    },
    renderModal() {
      this.dialogSingle = {
          name: '',
          optionList: [{
            name: '',
            tag: ''
          }]
        },
        this.dialogNone = {
          name: '',
          type: ''
        }
        this.dialogTags= {
          name: '',
          type: '',
          tags:[]
        }
    }

  },
  watch: {
    multiple(newValue) {
      console.log(newValue)
      if (newValue) {
        this.value = this.value ? [this.value] : []
      } else {
        this.value = this.value[0]
      }
    },
  }
}
</script>

<style media="screen" lang="less">
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
    width: 100%;
}
.el-date-editor .el-range-separator {
    min-width: 20px;
}

.none-dialog {
    .el-form-item__label {
        line-height: 1.4;
        padding: 0;
    }
}
</style>
<style lang="less" scoped>

.type-btns-wrapper {
    text-align: center;
}

.question-list {
  margin-top:20px;
  .tip {
    text-align: center;
    color:#606266;
  }
}
.option-wrapper {
    .el-form-item {
        margin-bottom: 6px;
    }
}
.tags-wrapper {
    margin-top: 22px;
}
.tag-item {
    margin: 0 8px 8px 0;
    min-width: 40px;
    text-align: center;
}
.btn-add-tag {
    padding: 9px 7px;
}
</style>
