import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

let router =  new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      meta:{
        isShow:true
      },
      component:()=>import ("@/pages/Index.vue")
    },
    {
      path: '/looksfa',
      name: 'looksfa',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/looksfa.vue"),
    },
    {
      path: '/lookser',
      name: 'LooksEr',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/lookser.vue")
    },
    {
      path: '/looksxin',
      name: 'LooksXin',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/looksxin.vue")
    },
    {
      path: '/lookszu',
      name: 'LooksZu',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/lookszu.vue")
    },
    {
      path: '/message',
      name: 'Message',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/Message/message.vue")
    },
    {
      path: '/my',
      name: 'My',
      meta:{
        isShow:true
      },
      component:()=> import ("@/pages/My.vue")
    },
    {
      path: '/user',
      name: 'User',
      meta:{
        isShow:false
      },
      component:()=> import ("@/pages/Users.vue")
    },
    {
      path: '/login',
      name: 'Login',
      meta:{
        isShow:false
      },
      component:()=> import ("@/pages/Login.vue")
    },
    {
      path: '/rejeict',
      name: 'Rejeict',
      meta:{
        isShow:false
      },
      component:()=> import ("@/pages/rejeict.vue")
    },
    {
      path: '/fadetails',
      name: 'Fadetail',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/looksfadetail.vue")
    },
    {
      path: '/zuerdetails',
      name: 'ZuErdetail',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/looksZuErDetails.vue")
    },
    {
      path: '/xindetails',
      name: 'Xindetail',
      meta:{
        isShow:true
      },
      component:()=> import ("@/components/looks/looksxindetail.vue")
    },
    {
      path: '/messageContent',
      name: 'MessageContent',
      meta:{
        isShow:false
      },
      component:()=> import ("@/components/Message/messageWindow.vue")
    },
    {
      path: '/ermessage',
      name: 'ErMessage',
      meta:{
        isShow:false
      },
      component:()=> import ("@/components/looks/ErMessage.vue")
    },
    {
      path: '/xinmessage',
      name: 'XinMessage',
      meta:{
        isShow:false
      },
      component:()=> import ("@/components/looks/XinMessage.vue")
    }
  ]
})
export default router;