// 模拟数据接口

// 评论接口
var commentObj = [
    {"c_num":10,"c_userIcon":"../../images/test_avatar/person1.jpeg","c_userName":"扭转乾坤","c_Info":"大部分的赌徒都是赌久必输,大部分的赌徒都是赌久必输"},
    {"c_num":13,"c_userIcon":"../../images/test_avatar/person2.jpeg","c_userName":"我是南湖粉丝","c_Info":"交易简单来看，不外乎上涨下跌，赌博不外乎输赢，交易员是赌博吗?"},
    {"c_num":100,"c_userIcon":"../../images/test_avatar/person3.jpeg","c_userName":"皮皮虾出场","c_Info":"如果你觉得我好的话，就来点击关注评论吧"},
    {"c_num":2333,"c_userIcon":"../../images/test_avatar/person4.jpeg","c_userName":"皮皮虾出场","c_Info":"如果你觉得我好的话，就来点击关注评论吧"},
    {"c_num":101,"c_userIcon":"../../images/test_avatar/person1.jpeg","c_userName":"扭转乾坤","c_Info":"大部分的赌徒都是赌久必输,大部分的赌徒都是赌久必输"},
    {"c_num":33313,"c_userIcon":"../../images/test_avatar/person2.jpeg","c_userName":"我是南湖粉丝","c_Info":"交易简单来看，不外乎上涨下跌，赌博不外乎输赢，交易员是赌博吗?"}

]

// 视频接口
var videoObj = [
    {"id":1,"url":"http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4"},  //驯龙高手
    {"id":2,"url":"http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4"},  //玩具总动员
    {"id":3,"url":"http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4"},  //《叶问4》先行预告甄子丹过招美
    {"id":4,"url":"https://www.runoob.com/try/demo_source/mov_bbb.mp4"} 
    
]

// 登录接口
function login(){
    alert("此接口还没开发")
}

//注册接口
function register(){
    alert("此接口还没开发")

}

// 回复接口

function reback(){
    alert("此接口还没开发")

}

// 点赞接口
function good(index){
    var n = $("#number")[0];
    
    console.log(n)
    console.log(index)
}