// 初始化游戏设置
oS.Init({
    PName: [oSunFlower, oPumpkinHead, oPotatoMine,oGarlic,oStarfruit,oPuffShroom,oWallNut,oSpikeweed,oSpiltPea,oSpikerock,oRepeater,oGloomShroom,oGatlingPea,oTorchwood], // 植物名称数组
    ZName: [oNewspaperZombie2,oZomboni], // 僵尸名称数组
    PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"], // 图片数组
    backgroundImage: "images/interface/background2.jpg", // 背景图片
    ShowScroll: false, // 是否显示滚动条
    SunNum: 2000, // 初始阳光数量
    BrainsNum: 5, // 初始大脑数量
    ProduceSun: false, // 是否产生阳光
    CardKind: 1, // 卡片种类
    DKind: 0, // D种类
    LevelName:'极速二爷测试', // 关卡名称
    LvlEName: "ImZombiee", // 关卡E名称
    LoadMusic: "Mountains", // 加载音乐
    StartGameMusic: "losemusic", // 开始游戏音乐
    ArP: { // ArP对象
        ArC: [1, 8], // ArC数组
        ArR: [1, 5], // ArR数组
        Auto: 1, // 是否自动
        P: [
          [9, 1, 1],//植物，列，行
          [9, 2, 1],
          [9 ,3 ,1],
        [9 ,4 ,1],
        [9 ,5 ,1],
        [9 ,6 ,1],
        [9 ,7 ,1],
        [10,8 ,1],
          [2, 1, 2],
          [11, 2, 2],
          [11 ,3 ,2],
          [11 ,4 ,2],
          [11 ,5 ,2],
          [11 ,6 ,2],
          [11 ,7 ,2],
          [11 ,8 ,2],
          [11 ,9 ,2],
          [11 ,9 ,2],
        [0, 1, 3],
        [7, 2, 3],
        [7 ,3 ,3],
        [12 ,4 ,3],
        [13 ,5 ,3],
        [9 ,6 ,3],
        [9,7 ,3],
        [9,8 ,3],
        [8, 9, 3],
        [8, 9, 3],       
        [4, 1, 4],
        [4, 2, 4],
        [4 ,3 ,4],
        [4 ,4 ,4],
        [4 ,5 ,4],
        [4 ,6 ,4],
        [4 ,7 ,4],
        [10 ,8 ,4],
        [10 ,8 ,4],
        [0, 1, 5],
        [0,2, 5],
        [0 ,3 ,5],
        [0,4 ,5],
        [0 ,5 ,5],
        [0 ,6 ,5],
        [0 ,7 ,5],
        [0 ,8 ,5],
        [0 ,8 ,5],
	] // P数组
    },
    // 自动增长谜题
    RiddleAutoGrow: function() {
        var k = oS.ArP, // 获取ArP对象
            f = k.ArC, // 获取ArC数组
            j = k.ArR, // 获取ArR数组
            e = k.P, // 获取P数组
            d = oS.PName, // 获取PName数组
            c, g = f[0], // 获取ArC数组的第一个元素
            b = f[1], // 获取ArC数组的第二个元素
            i = j[0], // 获取ArR数组的第一个元素
            h = j[1], // 获取ArR数组的第二个元素
            a;
        if (k.Auto) { // 如果自动增长
	    var x1 = 1;
            while (x1 <= h) { // 当i <= h时循环
                CustomSpecial(oBrains, x1, 0); // 自定义特殊处理
		x1++
            };
            for ( let x2 = 0;x2 < e.length;x2++ ) {
	 	var x3 = e[x2][0];//console.log(x3,e[x2][2],e[x2][1]);
		CustomSpecial(oS.PName[x3],e[x2][2],e[x2][1],1)
	    }
        };
	var y1 = f[1] + 1;
        NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(y1)[0] - 11) + "px;top:65px", EDAll) // 创建新图片
    },
    // 开始游戏
    StartGame: function() {
        oP.Monitor(); // 监视oP
        BeginCool(); // 开始冷却
        SetVisible($("dFlagMeter"), $("dTop")); // 设置可见性
        oS.RiddleAutoGrow(), oP.FlagToEnd = function() { // 调用RiddleAutoGrow方法和设置FlagToEnd函数
            NewImg("imgSF", "images/interface/trophy.png", "left:43.5%;top:220px", EDAll, { // 创建新图片
                onclick: function() {
                    SelectModal(0); // 选择模态框
                    PlayAudio("winmusic") // 播放音频
                }
            });
            NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:51%", EDAll) // 创建新图片
        }
    }
}, 0, {});
