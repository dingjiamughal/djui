/**
 * @Author: Dingjia
 * @Date:   2018-04-29T00:22:44+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-30T15:42:40+08:00
 */



import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Survey from '@/pages/survey/Survey'
import SurveyList from '@/pages/survey/SurveyList'
import SurveyConfig from '@/pages/survey/SurveyConfig'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/Survey',
          name: 'Survey',
          component: Survey,
          redirect:'/Survey/SurveyList',
          children:[
            {
              path: '/Survey/SurveyList',
              name: 'SurveyList',
              component: SurveyList
            },
            {
              path: '/Survey/SurveyConfig',
              name: 'SurveyConfig',
              component: SurveyConfig
            }
          ]
        }
      ]
    }
  ]
})
