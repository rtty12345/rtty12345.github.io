oS.Init({
    PName: [oGloomShroom,oSunFlower,oGarlic,oPumpkinHead,oRepeater,oSpikeweed,oFumeShroom,oTorchwood,oPotatoMine,oGatlingPea,oSpikerock,oSplitPea,oSquash,oSnowPea], // 植物名称数组
    ZName: [oZomboni,oNewspaperZombie2,oNewspaperZombie,oPoleVaultingZombie1,oBucketheadZombie,oDiggerZombie,oPoleVaultingZombie2,oJalapenoZombie], // 僵尸名称数组
    PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"], // 图片数组
    backgroundImage: "images/interface/background2.jpg", // 背景图片
    ShowScroll: false, // 是否显示滚动条
    SunNum:9000, // 初始阳光数量
    BrainsNum: 5, // 初始大脑数量
    ProduceSun: false, // 是否产生阳光
    CardKind: 1, // 卡片种类
    DKind: 0, // D种类
    LevelName:'test', // 关卡名称
    LvlEName: "ImZombie", // 关卡E名称
    LoadMusic: "Mountains", // 加载音乐
    StartGameMusic: "Mountains", // 开始游戏音乐
    ArP: { // ArP对象
        ArC: [1, 1], // ArC数组
        ArR: [1, 5], // ArR数组
        Auto: 1, // 是否自动
        P: [
		[10, 1, 1],//植物，列，行
                [10, 2, 1],
		[10, 3, 1],
		[10,4, 1],
		[10, 5, 1],
		[10, 6, 1],
		[4, 7, 1],
		[3, 7, 1],
		[7, 8, 1],
		[11, 9, 1],
		[11, 10, 1],
		[12, 1, 2],
		[12, 2, 2],
		[12, 3, 2],
		[12, 4, 2],
		[12, 5, 2],
		[12, 6, 2],
		[12, 7, 2],
		[12, 8, 2],
		[10, 2, 3],
         	[12, 9, 2],
		[10, 3, 3],
		[9, 4, 3],
		[7, 5, 3],
		[5, 6, 3],
		[12, 8, 3],
                [0 ,7, 3],
		[11, 9, 3],
		[13, 1, 4],
		[1, 2, 4],
		[1, 3, 4],
		[1, 4, 4],
		[1, 5, 4],
		[3, 1, 5],
                [4, 1, 5],
		[3, 2, 5],
		[3, 3, 5],
		[3, 4, 5],
		[3, 5, 5],
		[3, 6, 5],
                [3,7, 5]
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
