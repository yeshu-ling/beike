import Mock from "mockjs";
let falist=[{
    id:1,
    img:require("@/assets/img/fax01.png"),
    imgfa:require("@/assets/img/fax01-2.png"),
    title:"南京楼市",
    desc:"这里有你在报纸，网站上看不到...",
    time:"2天前",
    innertitle:"刚刚在南京爆出2大重磅利好！地铁口网红盘马上开盘，总价约100万！",
    innerdesc:"这几天，南京第二大商圈--百家湖商圈连续迎来2大重磅福利好，让...",
    hot:"热度 486",
    wid:"0"
},
{
    id:2,
    img:require("@/assets/img/fax02.png"),
    imgfa:require("@/assets/img/fax02-2.png"),
    title:"楼市新政",
    desc:"提供新居住领域全面、及时、专...",
    time:"9小时前",
    innertitle:"贝壳研究 | 快评：6月LPR继续“按兵不动”，7月下调概率有多大？",
    innerdesc:"6月22日，央行公布最新LPR，1年期LPR为3.85%，5年期以上LPR为4.65%",
    hot:"热度 10万＋",
    wid:"0"

},
{
    id:3,
    img:require("@/assets/img/fax03.png"),
    imgfa:require("@/assets/img/fax03-2.png"),
    title:"南京楼市观察",
    desc:"坐标南京、观察楼市",
    time:"7小时前",
    innertitle:"全国第六！莉亚杭州、成都、南京、获央视点赞！",
    innerdesc:"《2019中国城市营商环境报告》发布南京强势排在第六位上！上下滑动查看详情...",
    hot:"热度 508",
    wid:"0"
},
{
    id:4,
    img:require("@/assets/img/fax04.png"),
    imgfa:require("@/assets/img/fax102.png"),
    title:"六朝汇楼市",
    desc:"南京最具前瞻性的房产研究咨询",
    time:"5小时前",
    innertitle:"猝不及防！南京这里又被新规划砸中，业主赚大了",
    innerdesc:"来源：铁北楼市新玄武产业爆出新动作！4幅重量级地块正在招商推介！01玄武",
    hot:"热度 481",
    wid:"0"
},
{
    id:5,
    img:require("@/assets/img/fax05.png"),
    imgfa:require("@/assets/img/fax05-2.png"),
    title:"江北楼市",
    desc:"南京江北新区更权威、更便携的...",
    time:"7小时前",
    innertitle:"江北第三季度商品住宅拟上市计划表曝光，这些楼盘来了！",
    innerdesc:"就在今天，南京房产微政务公众号发布了《2020年全市第三季度商品拟住宅上》",
    hot:"热度 444",
    wid:"0"
},
{
    id:6,
    img:require("@/assets/img/fax06.png"),
    imgfa:require("@/assets/img/fax06-2.png"),
    title:"楼市飞说",
    desc:"房掌柜南京站旗下咨询公众号——...",
    time:"7小时前",
    innertitle:"官宣！河西、鼓楼、玄武湖......等不到的纯新盘真的就要来了!",
    innerdesc:"重磅！就在刚刚，南京第三季度商品房上市计划出炉！118个项目即将开盘！亮...",
    hot:"热度 377",
    wid:"0"
},
{
    id:7,
    img:require("@/assets/img/fax07.png"),
    imgfa:require("@/assets/img/fax07-2.png"),
    title:"哥们买房",
    desc:"地产十八般武器、样样精通；楼...",
    time:"6小时前",
    innertitle:"再现万人摇！南京江北核心区4大神盘报名人数曝光！",
    innerdesc:"本文码字工：哥们发稿平台 | 哥们买房仅上周五当天，南京共有13盘领取销许，...",
    hot:"热度 477",
    wid:"0"
},
{
    id:8,
    img:require("@/assets/img/fax08.png"),
    imgfa:require("@/assets/img/fax08-2.png"),
    title:"易房楼市",
    desc:"我们是有态度的房产平台——...",
    time:"7小时前",
    innertitle:"118项！全市三季度拟上市商品房都在这里",
    innerdesc:"根据《2020南京市人才购买商品住房办法（试行）》...",
    hot:"热度 321",
    wid:"0"
},
{
    id:9,
    img:require("@/assets/img/fax09.png"),
    imgfa:require("@/assets/img/fax09-2.png"),
    title:"乐居南京",
    desc:"最新地产咨询，覆盖江苏，精准...",
    time:"1天前",
    innertitle:"南京地铁7号线通车倒计时！尧化门最新房价已冲上3.2万/㎡!",
    innerdesc:"终于，南京又一高价地铁即将入市了，该盘即将为尧化门地王项目——栖霞...",
    hot:"热度 367",
    wid:"0"
},
{
    id:10,
    img:require("@/assets/img/fax10.png"),
    imgfa:require("@/assets/img/fax102.png"),
    title:"不执著财经",
    desc:"对社会焦点、热点、原创财经时...",
    time:"2020-06-18",
    innertitle:"如果农民养老金每月提高至800元，你会支持吗？",
    innerdesc:"农民养老问题成为了今年两会热门话题。全国两会政协委",
    hot:"热度 9773",
    wid:"0"
},
{
    id:11,
    img:require("@/assets/img/fa06.jpeg"),
    imgfa:require("@/assets/img/fa04.jpeg"), 
    title:"南京有贝壳",
    desc:"南京地区房产资讯、房产百科、...",
    time:"6小时前",
    innertitle:"腾讯、华为南京基地正式启动，摸底周边10小区真实成交价>>>",
    innerdesc:"重磅消息！河西总部经济再添新势力！全国首个腾讯云产业基地开园！...",
    hot:"热度 3198",
    wid:"0"
}]
let erlistTop=[
    {
        id:1,
        imgone:require("@/assets/img/zu31-01.jpg"),
        imgtwo:require("@/assets/img/zu31-02.jpg"),
        imgthree:require("@/assets/img/zu31-03.jpg"),
        title:"名城世纪园",
        area:"3室1厅/99.19㎡",
        price:"480万",
        desc:"全新装修，品牌家电，拎包入住，得房率高，中间楼层，采光好，户型南北通透，全明格局，民厨民卫，品质好...",
        peopleimg:require("@/assets/img/zu32-ren.jpg"),
        peoplename:"刘凯强",
        wid:1
    },
    {
        id:2,
        imgone:require("@/assets/img/zu32-01.jpg"),
        imgtwo:require("@/assets/img/zu32-02.jpg"),
        imgthree:require("@/assets/img/zu32-03.jpg"),
        title:"华阳家园华名苑",
        area:"3室2厅/101.8㎡",
        price:"475万",
        desc:"满五年不唯一，小区中间位置，中间楼层，东边户三室两厅。户型南北通透，全明格局，民厨民卫...",
        peopleimg:require("@/assets/img/zu33-ren.jpg"),
        peoplename:"王近友",
        wid:2
    },
    {
        id:3,
        imgone:require("@/assets/img/zu33-01.jpg"),
        imgtwo:require("@/assets/img/zu33-02.jpg"),
        imgthree:require("@/assets/img/zu33-03.jpg"),
        title:"凤凰西街186号",
        area:"3室2厅/93.45㎡",
        price:"408万",
        desc:"政法委房改房，双南双阳台，边户明厅，独梯独户。户型南北通透，全明格局，卧室带阳台，方便储物...",
        peopleimg:require("@/assets/img/zu34-ren.jpg"),
        peoplename:"殷苏宁",
        wid:3
    }
]
let erlistbtn=[
    {
        id:4,
        imgone:require("@/assets/img/zu34-01.jpg"),
        imgtwo:require("@/assets/img/zu34-02.jpg"),
        imgthree:require("@/assets/img/zu34-03.jpg"),
        title:"华阳佳园华明苑",
        area:"3室2厅/107㎡",
        price:"526万",
        desc:"南北通透，户型方正，小区中间位置不临街，环境优雅，交通方便。户型南北通透，全明格局，民厨民卫....",
        peopleimg:require("@/assets/img/zu35-ren.jpg"),
        peoplename:"汪文涛",
        wid:4
    },
    {
        id:5,
        imgone:require("@/assets/img/zu35-01.jpg"),
        imgtwo:require("@/assets/img/zu35-02.jpg"),
        imgthree:require("@/assets/img/zu35-03.jpg"),
        title:"名城世纪园",
        area:"2室1厅/78.8㎡",
        price:"400万",
        desc:"此房难五年不唯一，格局通透，楼层好，采访不档，小区品质好，绿化率高。",
        peopleimg:require("@/assets/img/zu36-ren.jpg"),
        peoplename:"刘晓伟",
        wid:5
    },
    {
        id:6,
        imgone:require("@/assets/img/zu36-01.jpg"),
        imgtwo:require("@/assets/img/zu36-02.jpg"),
        imgthree:require("@/assets/img/zu36-03.jpg"),
        title:"新河一村",
        area:"2室1厅/50.08㎡",
        price:"395万",
        desc:"此房满两年，中间楼层，两个房间差不大双卧朝南。户型全明格局，全南户型，民厨民卫。",
        peopleimg:require("@/assets/img/zu37-ren.jpg"),
        peoplename:"张祖磊",
        wid:6
    },
]
let xinlist = [
    {
        id:1,
        personimg:require("@/assets/img/jiangtao.png"),
        personname:"姜涛",
        desc:"升龙讲道时代处于江心洲，位于夹江大桥与葡园路交汇口处，在售H地块2、5号楼办公类产品，均价约35000元/m,...",
        imgone:require("@/assets/img/you01.png"),
        imgtwo:require("@/assets/img/you02.png"),
        imgthree:require("@/assets/img/you03.png"),
        name:"升龙江岛时代",
        position:"建邺 | 江心洲",
        price:"35000元/平",
        lookone:"贴心物业",
        looktwo:"近主干道",
        lookthree:"人车分流",
        wid:0
    },
    {
        id:2,
        personimg:require("@/assets/img/pengzhong.png"),
        personname:"彭忠",
        desc:"蔚来尚寓楼位于溧水区永阳新城核心区域，项目北至润丽璐，南至建通东路，东至润阳路，距离禄口机场约24公里...",
        imgone:require("@/assets/img/you02-01.png"),
        imgtwo:require("@/assets/img/you02-02.png"),
        imgthree:require("@/assets/img/you02-03.png"),
        name:"垠坤蔚来尚寓楼",
        position:"溧水 | 溧水城中 | 建面 70㎡",
        price:"7800元/平",
        lookone:"VR看房",
        looktwo:"近主干道",
        lookthree:"人车分流",
        wid:0
    },
    {
        id:3,
        personimg:require("@/assets/img/chenmin.png"),
        personname:"陈铭",
        desc:"自然资源：青龙山和黄龙山平行延伸，双龙湖、天云湖、龙尚湖、三湖环绕、两山相依。小区环境：背靠青龙山，依托800亩的天云湖...",
        imgone:require("@/assets/img/you03-01.png"),
        imgtwo:require("@/assets/img/you03-02.png"),
        imgthree:require("@/assets/img/you03-03.png"),
        name:"鸿信云深处",
        position:"江宁 | 江宁其他 | 建面 502㎡",
        price:"2200万/套",
        lookone:"贴心物业",
        looktwo:"入户花园",
        lookthree:"环线房",
        wid:0
    },
    {
        id:4,
        personimg:require("@/assets/img/ren08.jpg"),
        personname:"孙乾杨",
        desc:"山水云房地处南京未来CLD(中央生活区)核心地段，项目由奥琳地产开发，打造花园洋房、高层、联排别墅和公寓，共1300多户",
        imgone:require("@/assets/img/you04-01.png"),
        imgtwo:require("@/assets/img/you04-02.png"),
        imgthree:require("@/assets/img/you04-03.png"),
        name:"山水云房花园",
        position:"浦口 | 桥北 | 建面95-128㎡",
        price:"23000元/平",
        lookone:"休闲会所",
        looktwo:"自持商业",
        lookthree:"环线房",
        wid:0
    },
    {
        id:5,
        personimg:require("@/assets/img/ren07.jpg"),
        personname:"丁尼琴",
        desc:"融侨官邸位于浦口区亚青路与白马路交汇处，位于城市主干道花卉花园西侧，比较靠近祁路隧道口，可直达河西主城区。目前在售面积：108㎡",
        imgone:require("@/assets/img/you05-01.png"),
        imgtwo:require("@/assets/img/you05-02.png"),
        imgthree:require("@/assets/img/you05-03.png"),
        name:"融侨官邸",
        position:"浦口 | 江浦街道 | 建面88-148 ㎡",
        price:"25500元/平",
        lookone:"品牌房企",
        looktwo:"VR看房",
        lookthree:"地铁沿线",
        wid:0
    },
    {

        id:6,
        personimg:require("@/assets/img/ren08.jpg"),
        personname:"孙乾杨",
        desc:"项目位于江宁区谷里街道悦湖路16号，目前在售少量类独栋房源，面积283、318、475、511、610mi,销许均价27316-38393元/m,毛坯交付",
        imgone:require("@/assets/img/you06-01.png"),
        imgtwo:require("@/assets/img/you06-02.png"),
        imgthree:require("@/assets/img/you06-03.png"),
        name:"碧桂园湖光山色",
        position:"江宁 | 江宁其他 | 建面 208-511㎡",
        price:"23000元/平",
        lookone:"品牌房企",
        looktwo:"贴心物业",
        lookthree:"地铁沿线",
        wid:0
    },
    {
        id:7,
        personimg:require("@/assets/img/ren05.jpg"),
        personname:"陶金贵",
        desc:"诚园南区位置在江宁区双龙大道3000号，目前已无房源，等待后期加推。交通方面：附近有地铁三号线，距离最接近的站点秣周东路大概200米，且项目...",
        imgone:require("@/assets/img/you07-01.png"),
        imgtwo:require("@/assets/img/you07-02.png"),
        imgthree:require("@/assets/img/you07-03.png"),
        name:"诚南园区(帝景天誉)",
        position:"江宁 | 江宁其他 | 建面 265-496㎡",
        price:"31300元/平",
        lookone:"贴心物业",
        looktwo:"私属庭院",
        lookthree:"地铁沿线",
        wid:0
    },
]
let zulist = [								
    {
        id:1,
        nameimg:require("@/assets/img/ren01.jpg"),
        name:"黄在明",
        descp:"户型全明，功能全部有窗户，有利于采光和通风，卧室较大。一梯两户，不浪费面积...",
        img01:require("@/assets/img/zu01-2.jpg"),
        img02:require("@/assets/img/zu01-1.jpg"),
        img03:require("@/assets/img/zu01-3.jpg"),
        tiele:"整租·曹后村9号小区 2室1厅1卫",
        area:"红山/51m/暂无",
        price:"2700元/月",
        wid:7
    },
    {
        id:2,
        nameimg:require("@/assets/img/ren02.jpg"),
        name:"孙甜甜",
        descp:"小区1986年建成。民水民电。距离最近公交站84米，可乘坐41路出行。新上房源。精装修",
        img01:require("@/assets/img/zu02-1.jpg"),
        img02:require("@/assets/img/zu02-2.jpg"),
        img03:require("@/assets/img/zu02-3.jpg"),
        tiele:"合租·金轮第一城 4居室 南卧",
        area:"百家湖/21㎡/据3号线-胜肽西路站506米",
        price:"1490元/月",
        wid:8
    },
    {
        id:3,
        nameimg:require("@/assets/img/ren03.jpg"),
        name:"龚安",
        descp:"有电梯，适合老人的家庭居住。距离最近的地铁站夫子庙站(3号线)319米。朝南。新上房源。小区绿化率36.0%，适宜居住。可以随时看房。",
        img01:require("@/assets/img/zu03-1.jpg"),
        img02:require("@/assets/img/zu03-2.jpg"),
        img03:require("@/assets/img/zu03-3.jpg"),
        tiele:"整租·儒林雅居 3室2厅2卫",
        area:"建康路/131㎡/据3号线-夫子庙站812米",
        price:"7500元/月",
        wid:9
    },
    {
        id:4,
        nameimg:require("@/assets/img/ren07.jpg"),
        name:"陈婷婷",
        descp:"小区2002年建成。距离最近的公交站85米，可乘坐768路出行，民水民电。距离最近的地铁站夫子庙站(3号线)319米，朝南，距离最近公交站180米。",
        img01:require("@/assets/img/zu04.jpg"),
        img02:require("@/assets/img/zu04-02.jpg"),
        img03:require("@/assets/img/zu04-03.jpg"),
        tiele:"整租·金轮第一城 1室1厅1卫",
        area:"百家湖/105㎡/据3号线-胜肽西路站625米",
        price:"2800元/月",
        wid:10
    },
    {
        id:5,
        nameimg:require("@/assets/img/ren05.jpg"),
        name:"付垚佳",
        descp:"新上房源，离最近的公交站85米，可乘坐768路出行，小区绿化率40.0%，适宜居住，民水民电。精装修。",
        img01:require("@/assets/img/zu05.jpg"),
        img02:require("@/assets/img/zu05-01.jpg"),
        img03:require("@/assets/img/zu05-02.jpg"),
        tiele:"整租·金轮第一城 2室1厅1卫",
        area:"百家湖/116㎡/据3号线-胜肽西路站700米",
        price:"3900元/月",
        wid:11
    },
    {
        id:6,
        nameimg:require("@/assets/img/ren06.jpg"),
        name:"程思学",
        descp:"房子在夫子庙地铁口500米处的儒林雅居小区 有电梯，楼层采光好 带独立的大阳台。",
        img01:require("@/assets/img/zu06.jpg"),
        img02:require("@/assets/img/zu06-01.jpg"),
        img03:require("@/assets/img/zu06-02.jpg"),
        tiele:"整租·儒林雅居 3室1厅2卫",
        area:"建康路/135㎡/据3号线-夫子庙站553米",
        price:"6300元/月",
        wid:12
    },
    {
        id:7,
        nameimg:require("@/assets/img/ren04.jpg"),
        name:"马俊杰",
        descp:"民水民电。朝南。小区绿化率36.0%，适宜居住。小区2004年建成。新上房源。有电梯，适合老人的家庭居住。精装修。距离最近地铁站夫子庙站553米。",
        img01:require("@/assets/img/zu07.jpg"),
        img02:require("@/assets/img/zu07-01.jpg"),
        img03:require("@/assets/img/zu07-02.jpg"),
        tiele:"整租·儒林雅居 3室1厅2卫",
        area:"建康路/135㎡/据3号线-夫子庙站553米",
        price:"6500元/月",
        wid:13
    },
]
let fadetails = [
    {				
        id:1,
        title:"刚刚在南京爆出2大重磅利好！地铁口网红盘马上开盘，总价约100万！",
        falogo:require("@/assets/img/fax01.png"),
        fatitle:"南京楼市",
        fatime:"2天前",
        faimg:require("@/assets/img/fax01-2.png"),
        fatext:"这几天，南京第二大商圈--百家湖商圈连续迎来2大重磅福利好，让..."
    },
    {								
        id:2,
        title:"贝壳研究 | 快评：6月LPR继续“按兵不动”，7月下调概率有多大？",
        falogo:require("@/assets/img/fax02.png"),
        fatitle:"楼市新政",
        fatime:"9小时前",
        faimg:require("@/assets/img/fax02-2.png"),
        fatext:"6月22日，央行公布最新LPR，1年期LPR为3.85%，5年期以上LPR为4.65%"
    },
    {											
        id:3,
        title:"全国第六！莉亚杭州、成都、南京、获央视点赞！",
        falogo:require("@/assets/img/fax03.png"),
        fatitle:"南京楼市观察",
        fatime:"7小时前",
        faimg:require("@/assets/img/fax03-2.png"),
        fatext:"《2019中国城市营商环境报告》发布南京强势排在第六位上！上下滑动查看详情..."
    },
    {																
        id:4,
        title:"猝不及防！南京这里又被新规划砸中，业主赚大了",
        falogo:require("@/assets/img/fax04.png"),
        fatitle:"六朝汇楼市",
        fatime:"5小时前",
        faimg:require("@/assets/img/fax102.png"),
        fatext:"来源：铁北楼市新玄武产业爆出新动作！4幅重量级地块正在招商推介！01玄武"
    },
    {																		
        id:5,
        title:"江北第三季度商品住宅拟上市计划表曝光，这些楼盘来了！",
        falogo:require("@/assets/img/fax05.png"),
        fatitle:"江北楼市",
        fatime:"7小时前",
        faimg:require("@/assets/img/fax05-2.png"),
        fatext:"就在今天，南京房产微政务公众号发布了《2020年全市第三季度商品拟住宅上》"
    },
    {																							
        id:6,
        title:"官宣！河西、鼓楼、玄武湖......等不到的纯新盘真的就要来了！",
        falogo:require("@/assets/img/fax06.png"),
        fatitle:"楼市飞说",
        fatime:"7小时前",
        faimg:require("@/assets/img/fax06-2.png"),
        fatext:"重磅！就在刚刚，南京第三季度商品房上市计划出炉！118个项目即将开盘！亮.."
    },
    {																						
        id:7,
        title:"再现万人摇！南京江北核",
        falogo:require("@/assets/img/fax07.png"),
        fatitle:"哥们买房",
        fatime:"6小时前",
        faimg:require("@/assets/img/fax07-2.png"),
        fatext:"本文码字工：哥们发稿平台 | 哥们买房仅上周五当天，南京共有13盘领取销许，..."
    },
    {																					
        id:8,
        title:"118项！全市三季度拟上市商品房都在这里",
        falogo:require("@/assets/img/fax08.png"),
        fatitle:"易房楼市",
        fatime:"7小时前",
        faimg:require("@/assets/img/fax08-2.png"),
        fatext:"根据《2020南京市人才购买商品住房办法（试行）》..."
    },
    {																								
        id:9,
        title:"南京地铁7号线通车倒计时！尧化门最新房价已冲上3.2万/㎡！",
        falogo:require("@/assets/img/fax09.png"),
        fatitle:"乐居南京",
        fatime:"1天前",
        faimg:require("@/assets/img/fax09-2.png"),
        fatext:"终于，南京又一高价地铁即将入市了，该盘即将为尧化门地王项目——栖霞..."
    },
    {																													
        id:10,
        title:"如果农民养老金每月提高至800元，你会支持吗？",
        falogo:require("@/assets/img/fax10.png"),
        fatitle:"不执著财经",
        fatime:"2020-06-18",
        faimg:require("@/assets/img/fax102.png"),
        fatext:"农民养老问题成为了今年两会热门话题。全国两会政协委"
    },
    {																														
        id:11,
        title:"腾讯、华为南京基地正式启动，摸底周边10小区真实成交价>>>",
        falogo:require("@/assets/img/fa06.jpeg"),
        fatitle:"南京有贝壳",
        fatime:"6小时前",
        faimg:require("@/assets/img/fa04.jpeg"),
        fatext:"重磅消息！河西总部经济再添新势力！全国首个腾讯云产业基地开园！...重磅消息！河西总部经济再添新势力"
    },

]
let zuErdetails = [
    {
        id:1,
        lunbo01:require("@/assets/img/zu31-01.jpg"),
        lunbo02:require("@/assets/img/zu31-02.jpg"),
        lunbo03:require("@/assets/img/zu31-03.jpg"),
        title:"名城世纪园 3室1厅",
        price:"480万",
        huxing:"3室1厅",
        area:"99.19㎡",
        position:"名城世纪园",
        pricenum:"480",
        personimg:require("@/assets/img/zu32-ren.jpg"),
        percend:"76.8%",
        tid:1
    },
    {
        id:2,
        lunbo01:require("@/assets/img/zu32-01.jpg"),
        lunbo02:require("@/assets/img/zu32-02.jpg"),
        lunbo03:require("@/assets/img/zu32-03.jpg"),
        title:"华阳家园华名苑 3室2厅",
        price:"475万",
        huxing:"3室2厅",
        area:"101.8㎡",
        position:"华阳家园华名苑",
        pricenum:"475",
        personimg:require("@/assets/img/zu33-ren.jpg"),
        percend:"45.6%",
        tid:2
    },
    {
        id:3,
        lunbo01:require("@/assets/img/zu33-01.jpg"),
        lunbo02:require("@/assets/img/zu33-02.jpg"),
        lunbo03:require("@/assets/img/zu33-03.jpg"),
        title:"凤凰西街186号 3室2厅",
        price:"408万",
        huxing:"3室2厅",
        area:"93.45㎡",
        position:"凤凰西街186号",
        pricenum:"408",
        personimg:require("@/assets/img/zu34-ren.jpg"),
        percend:"83.5%",
        tid:3
    },
    {
        id:4,
        lunbo01:require("@/assets/img/zu34-01.jpg"),
        lunbo02:require("@/assets/img/zu34-02.jpg"),
        lunbo03:require("@/assets/img/zu34-03.jpg"),
        title:"华阳佳园华明苑 3室2厅",
        price:"526万",
        huxing:"3室2厅",
        area:"107㎡",
        position:"华阳佳园华明苑",
        pricenum:"526",
        personimg:require("@/assets/img/zu35-ren.jpg"),
        percend:"89.8%",
        tid:4
    },
    {
        id:5,
        lunbo01:require("@/assets/img/zu35-01.jpg"),
        lunbo02:require("@/assets/img/zu35-02.jpg"),
        lunbo03:require("@/assets/img/zu35-03.jpg"),
        title:"名城世纪园 2室1厅",
        price:"400万",
        huxing:"2室1厅",
        area:"78.8㎡",
        position:"名城世纪园",
        pricenum:"400",
        personimg:require("@/assets/img/zu36-ren.jpg"),
        percend:"87.4%",
        tid:5
    },
    {
        id:6,
        lunbo01:require("@/assets/img/zu36-01.jpg"),
        lunbo02:require("@/assets/img/zu36-02.jpg"),
        lunbo03:require("@/assets/img/zu36-03.jpg"),
        title:"新河一村 2室1厅",
        price:"395万",
        huxing:"2室1厅",
        area:"50.08㎡",
        position:"新河一村",
        pricenum:"395",
        personimg:require("@/assets/img/zu37-ren.jpg"),
        percend:"89.3%",
        tid:6
    },
    {
        id:7,
        lunbo01:require("@/assets/img/zu01-2.jpg"),
        lunbo02:require("@/assets/img/zu01-1.jpg"),
        lunbo03:require("@/assets/img/zu01-3.jpg"),
        title:"整租·曹后村9号小区 2室1厅1卫",
        price:"2700元/月",
        huxing:"2室1厅1卫",
        area:"51㎡",
        position:"红山",
        pricenum:"2700",
        personimg:require("@/assets/img/ren01.jpg"),
        percend:"78.9%",
        tid:7
    },
    {
        id:8,
        lunbo01:require("@/assets/img/zu02-3.jpg"),
        lunbo02:require("@/assets/img/zu02-1.jpg"),
        lunbo03:require("@/assets/img/zu02-2.jpg"),
        title:"合租·金轮第一城 4居室 南卧",
        price:"1490元/月",
        huxing:"1居室",
        area:"21㎡",
        position:"百家湖",
        pricenum:"1490",
        personimg:require("@/assets/img/ren02.jpg"),
        percend:"89.8%",
        tid:8
    },
    {
        id:9,
        lunbo01:require("@/assets/img/zu03-3.jpg"),
        lunbo02:require("@/assets/img/zu03-2.jpg"),
        lunbo03:require("@/assets/img/zu03-1.jpg"),
        title:"整租·儒林雅居 3室2厅2卫",
        price:"7500元/月",
        huxing:"3室2厅",
        area:"131㎡",
        position:"建康路",
        pricenum:"7500",
        personimg:require("@/assets/img/ren03.jpg"),
        percend:"89.3%",
        tid:9
    },
    {
        id:10,
        lunbo01:require("@/assets/img/zu04-03.jpg"),
        lunbo02:require("@/assets/img/zu04-02.jpg"),
        lunbo03:require("@/assets/img/zu04.jpg"),
        title:"整租·金轮第一城 1室1厅1卫",
        price:"2800元/月",
        huxing:"1室1厅",
        area:"105㎡",
        position:"百家湖",
        pricenum:"2800",
        personimg:require("@/assets/img/ren07.jpg"),
        percend:"88.6%",
        tid:10
    },
    {
        id:11,
        lunbo01:require("@/assets/img/zu05-02.jpg"),
        lunbo02:require("@/assets/img/zu05.jpg"),
        lunbo03:require("@/assets/img/zu05-01.jpg"),
        title:"整租·金轮第一城 2室1厅1卫",
        price:"3900元/月",
        huxing:"2室1厅",
        area:"115㎡",
        position:"百家湖",
        pricenum:"3900",
        personimg:require("@/assets/img/ren05.jpg"),
        percend:"82.3%",
        tid:11
    },
    {
        id:12,
        lunbo01:require("@/assets/img/zu06-02.jpg"),
        lunbo02:require("@/assets/img/zu06-01.jpg"),
        lunbo03:require("@/assets/img/zu06.jpg"),
        title:"整租·儒林雅居 3室1厅2卫",
        price:"6300元/月",
        huxing:"3室1厅",
        area:"135㎡",
        position:"建康路",
        pricenum:"6300",
        personimg:require("@/assets/img/ren06.jpg"),
        percend:"75.4%",
        tid:12
    },
    {
        id:13,
        lunbo01:require("@/assets/img/zu07-02.jpg"),
        lunbo02:require("@/assets/img/zu07-01.jpg"),
        lunbo03:require("@/assets/img/zu07.jpg"),
        title:"整租·儒林雅居 3室1厅2卫",
        price:"6500元/月",
        huxing:"3室1厅",
        area:"135㎡",
        position:"建康路",
        pricenum:"6500",
        personimg:require("@/assets/img/ren04.jpg"),
        percend:"89.4%",
        tid:13
    },
]
let xindetails = [
    {									
        id:1,
        lunbo1:require("@/assets/img/you01.png"),
        lunbo2:require("@/assets/img/you02.png"),
        lunbo3:require("@/assets/img/you03.png"),
        title:"升龙江岛时代",
        price:"35000元/平",
        huxing:"3室2厅",
        area:"103㎡",
        position:"建邺 | 江心洲",
        junprice:"32568元/平",
        personimg:require("@/assets/img/jiangtao.png")
    },
    {											
        id:2,
        lunbo1:require("@/assets/img/you02-01.png"),
        lunbo2:require("@/assets/img/you02-02.png"),
        lunbo3:require("@/assets/img/you02-03.png"),
        title:"垠坤蔚来尚寓楼",
        price:"7800元/平",
        huxing:"3室2厅",
        area:"70㎡",
        position:"溧水 | 溧水城",
        junprice:"7800元/平",
        personimg:require("@/assets/img/pengzhong.png")
    },
    {													
        id:3,
        lunbo1:require("@/assets/img/you03-01.png"),
        lunbo2:require("@/assets/img/you03-02.png"),
        lunbo3:require("@/assets/img/you03-03.png"),
        title:"鸿信云深处",
        price:"2200万/套",
        huxing:"3室2厅",
        area:"502㎡",
        position:"江宁 | 江宁其他",
        junprice:"2200万/套",
        personimg:require("@/assets/img/shiyimin.jpg")
    },
    {													
        id:4,
        lunbo1:require("@/assets/img/you04-01.png"),
        lunbo2:require("@/assets/img/you04-02.png"),
        lunbo3:require("@/assets/img/you04-03.png"),
        title:"山水云房花园",
        price:"23000元/平",
        huxing:"3室2厅",
        area:"95-128㎡",
        position:"浦口 | 桥北",
        junprice:"23000元/平",
        personimg:require("@/assets/img/ren08.jpg")
    },
    {														
        id:5,
        lunbo1:require("@/assets/img/you05-01.png"),
        lunbo2:require("@/assets/img/you05-02.png"),
        lunbo3:require("@/assets/img/you05-03.png"),
        title:"融侨官邸",
        price:"25500元/平",
        huxing:"3室2厅",
        area:"88-248㎡",
        position:"浦口 | 江浦街道",
        junprice:"25500元/平",
        personimg:require("@/assets/img/ren07.jpg")
    },
    {												
        id:6,
        lunbo1:require("@/assets/img/you06-01.png"),
        lunbo2:require("@/assets/img/you06-02.png"),
        lunbo3:require("@/assets/img/you06-03.png"),
        title:"碧桂园湖光山色",
        price:"23000元/平",
        huxing:"3室2厅",
        area:"205-511㎡",
        position:"江宁 | 江宁其他",
        junprice:"23000元/平",
        personimg:require("@/assets/img/ren08.jpg")
    },
    {										
        id:7,
        lunbo1:require("@/assets/img/you07-01.png"),
        lunbo2:require("@/assets/img/you07-02.png"),
        lunbo3:require("@/assets/img/you07-03.png"),
        title:"诚南园区(帝景天誉)",
        price:"31300元/平",
        huxing:"3室2厅",
        area:"265-496㎡",
        position:"江宁 | 江宁其他",
        junprice:"31300元/平",
        personimg:require("@/assets/img/ren05.jpg")
    },
    
]
let users = [
    {			
      id:1,
      username:"admin",
      userimg:require("@/assets/img/user1.jpg"),
      password:112233,
      application:1242534538,
      emails:"145698@qq.com",
      phone:18856227221,
    },
    {	
      id:2,
      username:"user2",
      userimg:require("@/assets/img/user2.jpg"),
      password:112233,
      application:5431653757,
      emails:"245698@qq.com",
      phone:18856227222,
    },
    {
      id:3,
      username:"user3",
      userimg:require("@/assets/img/user3.jpg"),
      password:1234321,
      application:4123535688,
      emails:"345698@qq.com",
      phone:18856227223,
    }
]

Mock.mock("/looksfa",falist)
Mock.mock("/looksertop",erlistTop)
Mock.mock("/lookserbtn",erlistbtn)
Mock.mock("/looksxin",xinlist)
Mock.mock("/lookszu",zulist)
// 根据id将发现部分数据展示在界面上
Mock.mock(RegExp("/fadetail" + ".*"),"get",(options) => {
    let id1 = options.url.split("?")[1].split("=")[1];
    let result = fadetails.filter(item => item.id == id1)[0];
    console.log("result",result);
    return result;
})
// 将租房二手房详情信息展示在界面上
Mock.mock(RegExp("/zuerdetail" + ".*"),"get",(options) => {
    let id1 = options.url.split("?")[1].split("=")[1];
    let result = zuErdetails.filter(item => item.id == id1)[0];
    console.log("result",result);
    return result;
})
// 新房 xindetails
Mock.mock(RegExp("/xindetail" + ".*"),"get",(options) => {
    let id1 = options.url.split("?")[1].split("=")[1];
    console.log("id1",id1);
    let result = xindetails.filter(item => item.id == id1)[0];
    console.log("result",result);
    return result;
})
// 登录
Mock.mock("/userlogin","post",(options) =>{
    let name = JSON.parse(options.body).name;
    let password = JSON.parse(options.body).password;
    let result = users.filter(item => item.username == name && item.password == password)[0]
    console.log("result",result);
    if(result){
        let data={
            result,
            errNum:0,
            msg:"登录成功"
        }
        return data
    }else{
        let data ={
            result,
            errNum:-1,
            msg:"登录失败"
        }
        return data
    }
})
// 注册 
Mock.mock("/rejeict","post",(newuser) =>{
    let idMax = users[users.length -1].id+1;
    console.log("newid",idMax);
    let newUser = JSON.parse(newuser.body);
    let name = newUser.name;
    let password = newUser.password;
    let emails =  newUser.emails;
    console.log("newUser",newUser);
    users.push({
        id:idMax,
        username:name,
        userimg:require("@/assets/img/user3.jpg"),
        password:password,
        application:1242534538,
        emails:emails,
        phone:18856227229,
    })
    console.log("users",users)
    return {
        msg:"注册成功"
    }
})
