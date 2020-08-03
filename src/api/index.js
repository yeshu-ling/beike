import myajax from "./myajax"
// 用mock测试显示发现部分数据
export const reqFaList = ()=>myajax("/looksfa");
// 二手上部分数据
export const reqErListTop = ()=>myajax("/looksertop");
// 二手下部分数据
export const reqErListBtn = ()=>myajax("/lookserbtn");
// 新房数据
export const reqXinList = ()=>myajax("/looksxin");
// 租房数据
export const reqZulist = () =>myajax("/lookszu");
// 发现部分详情数据
export const Fadetails =(id)=>myajax("/fadetail",{id})
// 租房二手房详情部分数据
export const ZuErdetails = (id) => myajax("/zuerdetail",{id})
// 新房详情数据
export const Xindetails = (id) => myajax("/xindetail",{id})
// 登录userlogin
export const Login = (name,password) =>myajax("/userlogin",{name,password},"POST")
// 注册 
export const rejeict = (name,password,emails) =>myajax("/rejeict",{name,password,emails},"POST")