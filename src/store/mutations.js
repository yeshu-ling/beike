import state from "./state";
import Vue from 'vue'
import {fALIST,ERLISTTOP,ERLISTBTN,XINLIST,ZULIST,FADETAILS,ZUERDETAILS,
    XINDETAILS,MESSAGEALL} from "./mutation-type"
export default{
    // 发现部分列表信息
    [fALIST](state,list){
        state.falist = list
    },
    // 二手部分数据
    [ERLISTTOP](state,list){
        state.erlistTop = list
    },
    [ERLISTBTN](state,list){
        state.erlistBtn = list
    },
    // 新房部分数据
    [XINLIST](state,list){
        state.xinlist = list
    },
    //租房部分数据
    [ZULIST](state,list){
        state.zulist = list
    },
    // 发现部分详情数据
    [FADETAILS](state,list){
        state.fadetails = list
    },
    // 租房二手房部分数据
    [ZUERDETAILS](state,list){
        state.zuerList = list
    },
    // 新房部分详情数据
    [XINDETAILS](state,list){
        state.xinDetail = list
    }
}