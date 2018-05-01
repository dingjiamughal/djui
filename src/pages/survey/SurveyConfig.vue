<!--
@Author: Dingjia
@Date:   2018-04-29T15:26:12+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-05-01T23:55:20+08:00
-->



<template lang="html">
  <div class="survey-config">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
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
    <el-button type="primary" size="small" v-for="btn in questionType" :key="btn" @click="handleQuestionTypeModal(btn)">{{btn}}</el-button>
  </div>
  <div class="question-list">
    <p class="tip">一点东西都没有，赶快点击上方按钮添加题目吧！</p>

  </div>
</div>

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
                <el-form-item :label="'选项'+(index+1)" v-for="(item,index) in dialogSingle.optionList" :key="index">

                    <el-col :span="18">
                      <el-input v-model="item.name" size="small">
                        <template slot="append" class="btn-add-tags"><span @click="handleShowTagModal(index)">点击添加标签</span></template>
                      </el-input>
                    </el-col>
                    <el-col :span="6" class="option-operate-btn">
                      <el-button type="success" icon="el-icon-plus" size="mini" @click="handleAddSelect"></el-button>
                      <el-button type="warning" icon="el-icon-close" size="mini" @click="handleDelSelect(index)"></el-button>
                    </el-col>
                    <el-col :span="12">
                      <treeselect size="small"
                        :multiple="false"
                        :clearable="false"
                        :searchable="true"
                        :options="options"
                        :show-count="true"
                        :max-height="200"
                        v-model="item.tag"
                        placeholder="请选择标签类别"
                        @select="handleSelectTag"
                        />
                      <pre class="result">{{ item.tag }}</pre>
                    </el-col>
                    <el-col :span="12">

                    </el-col>

                </el-form-item>
              </div>
            </el-form>
          </div>
</s-dialog>
<s-dialog :dialogVisible="isShowTagModal"
          title="添加标签"
          @on-submit-dialog="addTag"
          @on-close-modal="handleCloseTagModal">
          <div class="">
            biaoqian
          </div>
</s-dialog>
  </div>
</template>

<script>
import vueCropper from 'vue-cropper'
import SDialog from '@/components/main/dialog'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Treeselect from '@riophae/vue-treeselect'
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
export default {
  components: {
    SDialog,
    Treeselect,
    vueCropper
  },
  data() {
    return {
      isShowTagModal:false,
      questionType: ['单选', '多选', '自由回答(长文本)', '自由回答', '日期', '地区', '用户满意度', '用户评分', '用户标签'],
      dialogVisible_1: false, //单选 + 多选
      dialogTitle_1: "", //单选 + 多选
      labelPosition: 'right',
      dialogSingle: {
        name: '',
        optionList: [{
          name: '',
          tag: null
        }]
      },
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
      }]
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    handleQuestionTypeModal(btn) {
      console.log(btn)
      this.renderModal()
      switch (btn) {
        case "单选":
          this.dialogVisible_1 = true
          this.dialogTitle_1 = QT.SINGLE
          break
        case "多选":
          this.dialogVisible_1 = true
          this.dialogTitle_1 = QT.MULTIPLE
          break
      }
    },
    submitQuestionItem(type) {
      switch (type) {
        case QT.SINGLE:
          console.log("单选题目提交成功")
          console.log(this.dialogSingle)
          this.dialogVisible_1 = false
          break
        case QT.MULTIPLE:
          console.log("多选题目提交成功")
          this.dialogVisible_1 = false
          break
      }
    },
    handleCloseModal() {
      this.dialogVisible_1 = false

    },
    handleCloseTagModal() {
      this.isShowTagModal = false
    },
    addTag() {
      this.isShowTagModal = false
    },
    handleShowTagModal() {
      this.isShowTagModal = true
    },
    handleAddSelect() {
      this.dialogSingle.optionList.push({
        name: '',
        tag: ''
      })
    },
    handleDelSelect(index) {
      this.dialogSingle.optionList.splice(index, 1)
    },
    handleSelectTag(node,id){
      console.log(node)
    },
    renderModal() {
      this.dialogSingle = {
        name: '',
        optionList: [{
          name: '',
          tag: ''
        }]
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
.vue-treeselect {
  .vue-treeselect__control {
    display: block;
    height:32px;
  }
  input {
    margin-top:6px;
  }
  .vue-treeselect__arrow {
    position:relative;
    top:-4px;
  }
}
.btn-add-tags {

}
</style>
<style lang="less" scoped>
.type-btns-wrapper {
    text-align: center;
}

.question-list {
    padding: 30px 0;

    p {
        color: #606266;
    }
}
.option-operate-btn {
    button {
        padding: 7px;
        margin-left: 5px;
    }
}

</style>
