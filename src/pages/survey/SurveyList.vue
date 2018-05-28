<!--
@Author: Dingjia
@Date:   2018-04-30T15:36:33+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-04-30T15:45:27+08:00
-->



<template lang="html">
  <div class="table-survey">
    <el-row :gutter="20" class="operate-wrapper">
    <el-col :md="6" class="search-wrapper">
      <el-input
        size="small"
        placeholder="请输入问卷标题"
        v-model="inputSearch">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="handleGetSurvey"></i>
      </el-input>
    </el-col>
    <el-col :md="3">
      <el-button type="primary" size="small" class="btn-to-config"><router-link :to="{ name: 'SurveyConfig', params: {code:1} }">新建问卷</router-link></el-button>
    </el-col>
  </el-row>
    <e-table :table-data="tableData" @handle-edit="handleClickEdit"></e-table>
    <el-pagination class="tb-pagination"
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
    <button @click="showNotify">show Notify</button>
    <!-- <notification/> -->
  </div>
</template>

<script>
import ETable from "@/components/survey/elTable"
import qs from 'qs'
import {getSurvey} from "@/util/mockData/surveyData"
export default {
  components: {
    ETable,

  },
  created() {
    // console.log(getSurvey)
  },
  mounted() {
    // console.log(this.$djNotify)

  },
  methods: {

    handleGetSurvey() {

      const params = {
        PublicAccountId: 19,
        Type: 1
      }
      console.log(qs.stringify(params))
      // this.$http.post('http://altest.kaytune.com/WechatCallbackApi/api/Survey/GetSurvey', qs.stringify(params))
      //   .then(res => {
      //     console.log(JSON.stringify(res.data));
      //   })

      // this.$http.post("http://altest.kaytune.com/WechatCallbackApi/api/Survey/GetSurveyDetail",qs.stringify({SurveyId:163}))
      //   .then(res=>{
      //     console.log(JSON.stringify(res.data))
      //   })
    },
    handleClickEdit(row) {
      console.log(row)
    },
    showNotify() {
      this.$djnotify({
        content: 'test $djnotify',
        btn: 'close'
      })
    }
  },
  data() {
    return {
      inputSearch: "",
      tableData: [{
        surveyTitle: '问卷标题1',
        surveyIntro: '问卷介绍1',
        startTime: '2016-05-02',
        endTime: '2016-05-02'
      }, {
        surveyTitle: '问卷标题1',
        surveyIntro: '问卷介绍1',
        startTime: '2016-05-02',
        endTime: '2016-05-02'
      }, {
        surveyTitle: '问卷标题1',
        surveyIntro: '问卷介绍1',
        startTime: '2016-05-02',
        endTime: '2016-05-02'
      }, {
        surveyTitle: '问卷标题1',
        surveyIntro: '问卷介绍1',
        startTime: '2016-05-02',
        endTime: '2016-05-02'
      }]
    };
  }
}
</script>

<style lang="less" scoped>
.operate-wrapper {
    margin-bottom: 15px;
}
.tb-pagination {
    margin-left: -10px;
    margin-top: 15px;
}
.table-survey {
    }
.btn-to-config {
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
