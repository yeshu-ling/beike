import {fALIST,ERLISTTOP,ERLISTBTN,XINLIST,ZULIST,FADETAILS,ZUERDETAILS,XINDETAILS} from "./mutation-type"
import {reqFaList,reqErListTop,reqErListBtn,reqXinList,reqZulist} from "../api/index"
export default{
    // 异步 发现部分数据
    async getFalist(context){
        const list = await reqFaList();
        context.commit(fALIST,list);
    },
    // 二手部分数据
    async getErlistTop(context){
        const list = await reqErListTop();
        context.commit(ERLISTTOP,list)
    },
    async getErlistBtn(context){
        const list = await reqErListBtn();
        context.commit(ERLISTBTN,list)
    },
    // 新房部分数据
    async getXinlist(context){
        const list = await reqXinList();
        context.commit(XINLIST,list);
    },
    // 租房部分数据
    async getZulist(context){
        const list = await reqZulist();
        context.commit(ZULIST,list);
    },
    // 发现部分详情数据
    getfaDetails(context,one){
        context.commit(FADETAILS,one);
    },
    // 租房二手房部分详情数据
    getZuErDetails(context,one){
        context.commit(ZUERDETAILS,one);
    },
    // 新房部分数据
    getXinDetails(context,one){
        context.commit(XINDETAILS,one);
    }
}