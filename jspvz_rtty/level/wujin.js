let ea=oS.Init({
        PName: [oPeashooter],
        ZName: [oZombie,oFootballZombie,oImp],
        PicArr: function() {
                var a = oSunFlower.prototype,
                        b = a.PicArr;
                return ["images/interface/SodRollCap.png", "images/interface/SodRoll.png", "images/interface/sod1row.png", "images/interface/background1unsodded.jpg", b[a.CardGif], b[a.NormalGif]]
        }(),
        SunNum: 175,
        backgroundImage: "images/interface/background1unsodded.jpg",
        LF: [0, 0, 0, 1, 0, 0],
        CanSelectCard: 0,
        LevelName: "关卡 1-1",
        LvlEName: 1,
        AudioArr: ["dirt_rise"],
        InitLawnMower: function() {
                CustomSpecial(oLawnCleaner, 3, -1)
        },
        StartGame: function() {
                StopMusic();
                PlayMusic(oS.LoadMusic = oS.StartGameMusic);
                NewEle("sod1row", "div", "position:absolute;left:132px;top:280px;height:117px;width:0;z-index:1;background:url(images/interface/sod1row.png);over-flow:hidden", 0, EDPZ);
                NewImg("SodRoll", "images/interface/SodRoll.png", "left:112px;top:244px;z-index:1", EDPZ);
                NewImg("SodRollCap", "images/interface/SodRollCap.png", "left:17px;top:322px;z-index:1", EDPZ);
                PlayAudio("dirt_rise", true);
                (function(e, g, a, d, c, f, b) {
                        e += 15;
                        g += 16;
                        d += 16;
                        $("sod1row").style.width = e + "px";
                        SetStyle($("SodRoll"), {
                                left: g + "px",
                                width: --a + "px",
                                height: "141px"
                        });
                        SetStyle($("SodRollCap"), {
                                left: d + "px",
                                width: --c + "px",
                                height: --f + "px",
                                top: ++b + "px"
                        });
                        e < 755 ? oSym.addTask(3, arguments.callee, [e, g, a, d, c, f, b]) : (StopAudio("dirt_rise", true), ClearChild($("SodRoll"), $("SodRollCap")), (function() {
                                NewEle("DivTeach", "div", 0, 0, EDAll);
                                oS.InitLawnMower();
                                oP.Monitor({
                                        ar: [0],
                                        f: function(k) {
                                                var l = oS.C + 1,
                                                        i = oS.Chose;
                                                switch (k) {
                                                        case 0:
                                                                innerText($("DivTeach"), "点击卡片选择豌豆射手！");
                                                                NewImg("PointerUD", "images/interface/PointerUP.gif", "top:60px;left:50px", EDAll);
                                                                oSym.addTask(10, arguments.callee, [++k]);
                                                                break;
                                                        case 1:
                                                                i > 0 && (innerText($("DivTeach"), "点击草地种下豌豆射手，最好种在靠左边！"), EditImg($("PointerUD"), "", "images/interface/PointerDown.gif", {
                                                                        left: "170px",
                                                                        top: "270px"
                                                                }), ++k);
                                                                oSym.addTask(10, arguments.callee, [k]);
                                                                break;
                                                        case 2:
                                                                var h = oGd.$;
                                                                while (--l) {
                                                                        if (h["3_" + l + "_1"]) {
                                                                                SetHidden($("PointerUD"));
                                                                                innerText($("DivTeach"), "你拥有了第一个植物，点击收集掉落的阳光！");
                                                                                AutoProduceSun(25);
                                                                                oSym.addTask(10, arguments.callee, [++k]);
                                                                                return
                                                                        }
                                                                }!i && (ClearChild($("PointerUD")), k = 0);
                                                                oSym.addTask(10, arguments.callee, [k]);
                                                                break;
                                                        case 3:
                                                                oS.SunNum > 99 && (innerText($("DivTeach"), "你拥有了足够的阳光来种植另一个豌豆射手！"), EditImg($("PointerUD"), "", "images/interface/PointerUP.gif", {
                                                                        left: "50px",
                                                                        top: "60px",
                                                                        visibility: "visible"
                                                                }), ++k);
                                                                oSym.addTask(10, arguments.callee, [k]);
                                                                break;
                                                        default:
                                                                var j = 0,
                                                                        h = oGd.$;
                                                                while (--l) {
                                                                        h["3_" + l + "_1"] && (++j)
                                                                }
                                                                j > 0 ? (SetHidden($("PointerUD")), innerText($("DivTeach"), "别让僵尸靠近你的房子！"), oP.AddZombiesFlag(), oSym.addTask(500, SetNone, [$("DivTeach")])) : oSym.addTask(10, arguments.callee, [4])
                                                }
                                        }
                                });
                                BeginCool();
                                SetVisible($("dFlagMeter"), $("dTop"))
                        })())
                })(35, 122, 68, 117, 73, 71, 322)
        }
},
        {
        AZ: [
                [oZombie, 5, 1],
                [oFootballZombie, 3,1]

        ],
        FlagNum: 4,
        FlagToSumNum: {
                a1: [2,3],
                a2: [1, 2,9]
        },
        FlagToMonitor: {
                3: [ShowFinalWave, 0]
        },
        FlagToEnd: function() {
                NewImg("imgSF", "images/Card/Plants/SunFlower.png", "left:667px;top:330px;clip:rect(auto,auto,60px,auto)", EDAll, {
                        onclick: function() {
                                GetNewCard(this, oSunFlower, 2)
                        }
                });
                EditImg($("PointerUD"), 0, "images/interface/PointerDown.gif", {
                        left: "676px",
                        top: "295px",
                        visibility: "visible"
                })
        }
});


let b = prompt("请输入特定的数字进入特定的无尽关卡");
if  (b === "1"){
oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock],
    ZName: [oConeheadZombie1, oZombie,oZombie3,oPoleVaultingZombie,oConeheadZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oZomboni,oJackinTheBoxZombie,oBalloonZombie,oPeaZombie,oDiggerZombie],
        PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1,
    SunNum: 50,
    CardCool: [],
    lastwavenow: 0,
    lastwaveTQ: [],
    LF: [0, 1, 1, 1, 1, 1],
    ZF: [0, 1, 1, 1, 1, 1],
    LevelName: "生存模式：白天（无限）",
    survival_times: 0,
    LvlEName: "survival_day",
    StartGameMusic: "UraniwaNi",
    LargeWaveFlag: {
        20: $("imgFlag1"),
        10: $("imgFlag3")
    },
    UserDefinedFlagFunc: function(a) {
            if(oP.FlagZombies == 11){
                    oS.survival_times++;
                        $('dFlagMeterTitleB').innerText = `生存模式：白天（无限） - ${oS.survival_times}面旗帜完成`;
                $('sFlagMeterTitleF').innerText = `生存模式：白天（无限） - ${oS.survival_times}面旗帜完成`;
            };
    }
}, {
    AZ: [[oZombie, 2, 1],[oZombie3, 2, 1], [oConeheadZombie, 2, 4], [oBucketheadZombie, 1, 7]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [   3, 6,  9, 10, 12, 14, 17, 19],
        a2: [1, 2, 3, 10,  4,  5,  6,  7, 15]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowLargeWave, 0]
    },
    FlagToEnd: function() {
            GotoNextWave(++oS.survival_times);//进入下一阶段 / 过关
    }
}, {
        LetsGO : function() {
            tGround.style.left = "-115px";//背景调整
            for(item in oP.FlagToMonitor){
                oP.FlagToMonitor[item][1] = 0;
            };//一大波僵尸标题归位
            for(item in oS.LargeWaveFlag){
                oS.LargeWaveFlag[item].style.top = "";
            };//旗帜归位
            var e = $("dCardList"),g = 0,k = e.childNodes.length,f,h,l,c,j,a,b = document.body;
        var zombietime = (oS.survival_times ? 500 : 1500);
        SetStyle($("dTop"), {left: "105px",top: 0});
            e.style.left = 0,SetVisible(e),ArCard = [];
            ! oS.BrainsNum && ! oS.survival_times && CustomSpecial(oBrains, oS.R - 1, -2);
            while (g < k) { 
                    (function(d) {
                    f = (j = e.childNodes[d]).id.substr(5);
                    l = (h = ArPCard[f].PName).prototype;
                    j.onclick = function(i) {ChosePlant(i, d)};
                    j.onmouseover = function() {SetVisible($("dTitle"));ViewPlantTitle(oS.MCID = d);};
                j.onmouseout = function() {SetHidden($("dTitle"))};
                    j.firstChild.style.top = "-60px"; (a = j.lastChild).id = "sSunNum" + d;
                    innerText(a, l.SunNum);
                    ArCard.push({DID: j.id,CDReady: 0,SunReady: 0,PName: h});
                })(g++)
            }
            b.onkeydown = function(d) {GroundOnkeydown(d)};
            b.onmousedown = function(d) {GroundOnmousedown(d)};
            b.onmousemove = function(d) {GroundOnmousemove(d)};
            SetVisible(e); 
            (function() {
                AllAudioStop();
                PlayMusic(oS.LoadMusic = oS.StartGameMusic);
                SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
            !oS.survival_times && oS.InitLawnMower();
            PrepareGrowPlants(function() {
                reload_last_view();//还原上次场地与times
                oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);//出旗，鼓号队奏乐
                LoadNowCardCoolTime();//此函数内代码顺序千万别变，任意调换顺序会导致出怪时间异常
                oS.DKind && AutoProduceSun(25);//掉落阳光
                oSym.addTask(zombietime,function() {
                    oP.AddZombiesFlag();
                    SetVisible($("dFlagMeterContent"));
                    },[])
                })
            })();
            oS.StartTime = oSym.Now;
        },
        reload_last_view : function(){
            oSym.Now = oS.lastwavenow || oSym.Now;
            for(i in oS.lastwaveTQ){
                oSym.TQ.push(oS.lastwaveTQ[i]);
            }
        },
        PauseGames : function() {
            oSym.Timer && (AllAudioStop(), oSym.Stop());
        },
        RePauseGames : function(){
            !oSym.Timer && (oSym.Start())
        },
        FindClearoSymTQ : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].f.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        FindClearoSymAr : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].ar.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        SaveNowCardCoolTime : function(){
            for(i in ArCard){
                PENames = ArCard[i].PName.prototype.EName;
                oS.CardCool[PENames] = ($("dCD1"+i) && $("dCD1"+i).innerText) || 0;
            }
        },
        LoadNowCardCoolTime : function(){
            for(i in ArCard){
                    ArCard[i].CDReady = 0,PENames = ArCard[i].PName.prototype.EName,cooltime = oS.CardCool[PENames],$("dCard" + PENames).firstChild.style.top = "-60px";
            cooltime == undefined && (cooltime = (ArCard[i].PName.prototype.coolTime <= 7.5 ? 0 : ArCard[i].PName.prototype.coolTime - 7.5));
            DoCoolTimer(i,cooltime);
        }   
    },
GrowPlant: function (l, d, c, e, b) { // 推荐换成如下种植函数，可以适配未重写关的 GrowPlant，还支持流星雨卡槽
        var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e], o = f.Kind, s = (k.name == "Plants");
        k.CanGrow(l, e, b) && (PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"), s ? (innerText(ESSunNum, oS.SunNum -= k.SunNum),(new h).Birth(d, c, e, b, l)) : asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"), function(n, m) {
                EDPZ.appendChild(n), m.Birth();
        }, a), o ? (delete ArCard[j], ClearChild($(j))) : (i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime))), oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {
                left: d - 30 + "px",
                top: c - 30 + "px",
                zIndex: 3 * e + 1,
                visibility: "visible"
        })]));
        CancelPlant()
},
    GotoNextWave : function(survival_times){
        (function(){
            $('dFlagMeterTitleB').innerText = `生存模式：白天（无限） - ${survival_times}面旗帜完成`;
            $('sFlagMeterTitleF').innerText = `生存模式：白天（无限） - ${survival_times}面旗帜完成`;
            FindClearoSymTQ(`innerText($("dCD1"`);
                CancelPlant();//防止场外种植
                CancelShovel();//铲子
                ArCard.forEach((item)=>{item.CDReady=0});//禁止快捷键选卡
        })();//显示波数
                PlayAudio("hugewave");//声音
                NewEle("DivTeach", "div", 0, {innerHTML: "更多的僵尸要来了！"}, EDAll);//文字
            setTimeout(function(){
                    ResetGame($("dMenu0"), 1);
            AllAudioPauseCanceled();
            SetNextWaveZombies(survival_times + 1);//策划下一波的僵尸
            SaveNowCardCoolTime();//保存卡槽冷却时间
            FindClearoSymTQ('PlayAudio(["groan1"');//删除僵尸叫声的任务
            FindClearoSymTQ('AppearSun(GetX(Math.floor(1');//删除自动掉阳光的任务
            FindClearoSymTQ('oZ.traversalOf();');//删除僵尸走动的任务
            FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
                    setTimeout(GotoNextStartGame,5000);//过现实5秒后进行下一部分
            },1);
        },
        GotoNextStartGame : function(h){
                FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
        FindClearoSymTQ('PlayAudio(["groan1"');
        FindClearoSymTQ('AppearSun(GetX(Math.floor(1');
        FindClearoSymTQ('oZ.traversalOf();');
        oS.lastwavenow = oSym.Now , oS.lastwaveTQ = oSym.TQ , oSym.TQ = [];//保存TQ、清除TQ
        ClearChild($("DivTeach"));//清除一波结束的html文字
                for(item in ArSun){
                try{
                    $(item).style.visibility = "hidden";
            }catch(why){
                console.error('阳光'+item+'无法隐藏，原因：\n'+why);
            };
        };//隐藏在场阳光，防止二次收集
        var flaghtml=$('dFlagMeterContent').childNodes;
            dFlagMeterContent.style.visibility = "hidden";
            $("imgFlagHead").style.left = "139px";
        $("imgFlagMeterFull").style.clip = "rect(0,auto,auto,157px)";
            for(item in flaghtml){
                if(flaghtml[item].style){
                    flaghtml[item].style.visibility = "";
                }
            };//旗帜部分隐藏，关卡进程归位
                var a = tGround.style,i = oS,g = $User.Visitor;
        oS.MCID = 0,a.left = "0px",oP.FlagZombies = 0,ArPCard.SelNum = 0;//僵尸波数、选卡数量归位
        StopMusic(),PlayMusic("Look up at the Sky");//播放选卡音乐

        InitPCard();//重新初始化选卡界面
        oSym.addTask(h == undefined ? 200 : h,
            function(j) {
                dCardList.style.left = "";//选卡css复位
                dCardList.innerHTML = "";//选卡清除
                ClearChild($('DivA'));//清除板子
                        SetVisible($('dZombie'));//显示僵尸预览
                ClearChild(j);
                i.ScrollScreen();
            },[
            NewEle("DivTeach", "div", "line-height:50px", {
                innerHTML: (Math.floor(g.UserAuthority) == "255" ? '<span style="color:#0F0;font-weight:bold">&lt;' + g.UserName + "&gt;</span>": "&lt;" + g.UserName + "&gt;") + "的房子"
            },EDAll)
        ]); //i.ShowScroll已被删除，防止报错
    },
    SetNextWaveZombies : function(survival_times) {
        let AZ = [],FlagToSumNum = {};
        switch(survival_times){case 3:AZ=[[oZombie,2,1],[oZombie3,2,1],[oConeheadZombie,2,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[10,11,12,13,25,13,14,15,17,30]};break;
                case 5:AZ=[[oZombie,2,1],[oZombie3,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,2,4],[oDancingZombie,1,6],[oBalloonZombie,1,10]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[18,20,22,23,35,23,25,26,28,40]};break;
                case 7:AZ=[[oZombie,2,1],[oZombie3,1,1],[oFootballZombie,1,6],[oPoleVaultingZombie,1,6],[oBalloonZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[30,32,33,34,55,36,37,38,39,60]};break;
                case 9:AZ=[[oZombie,2,1],[oZombie3,1,1],[oFootballZombie,1,4],[oZomboni,1,6],[oJackinTheBoxZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[39,40,41,43,65,45,46,47,49,70]};break;
                case 11:AZ=[[oZombie,2,1],[oZombie3,1,1],[oBucketheadZombie,1,2],[oScreenDoorZombie,1,3],[oJackinTheBoxZombie,1,2]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[50,51,52,53,70,55,56,57,59,75]};break;
                case 13:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[60,61,62,63,80,65,66,67,69,85]};break;
                case 15:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[70,71,72,73,90,75,76,77,79,95]};break;
                case 17:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[80,83,85,89,100,90,93,95,97,110]};break;
                default:rn=Math.floor(Math.random()*100);if(rn<=3){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[80,100,110,90,100,120]};}
                else if(rn<=4){AZ=[[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[150,160,190,150,160,190]};}
                else if(rn<=5){choseZombie=oS.ZName[Math.floor(Math.random()*(oS.ZName.length-1)+1)],lvl=choseZombie.prototype.Lvl;AZ=[[choseZombie,5,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[lvl*35,lvl*45,lvl*50,lvl*35,lvl*45,lvl*50]};}else if(rn<=20){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else if(rn<=30){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}
                else{AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}break;};
        oP.Init({
            AZ: AZ,
            FlagToSumNum: FlagToSumNum,
            FlagToEnd: oP.FlagToEnd,
            FlagNum: 20,
        });
    },
})} else if(b === "2"){
oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock],
    ZName: [oConeheadZombie1, oZombie,oZombie3, oPoleVaultingZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oScreenDoorZombie, oFootballZombie, oDancingZombie, oJackinTheBoxZombie, oBalloonZombie,oPeaZombie,oDiggerZombie],
        PicArr: ["images/interface/background2.jpg"],
    backgroundImage: "images/interface/background2.jpg",
    CanSelectCard: 1,
    SunNum: 50,
    DKind:0,
    CardCool: [],
    lastwavenow: 0,
    lastwaveTQ: [],
    LF: [0, 1, 1, 1, 1, 1],
    ZF: [0, 1, 1, 1, 1, 1],
    LevelName: "生存模式：夜晚（无限）",
    survival_times: 0,
    LvlEName: "survival_day",
    StartGameMusic: "Ultimate Battle",
    LargeWaveFlag: {
        20: $("imgFlag1"),
        10: $("imgFlag3")
    },
        Monitor: {
                f: AppearTombstones,
                ar: [7, 9, 5]
        },
    UserDefinedFlagFunc: function(a) {
                oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie]);
            if(oP.FlagZombies == 11){
                    oS.survival_times++;
                        $('dFlagMeterTitleB').innerText = `生存模式：夜晚（无限） - ${oS.survival_times}面旗帜完成`;
                $('sFlagMeterTitleF').innerText = `生存模式：夜晚（无限） - ${oS.survival_times}面旗帜完成`;
            };
    }
}, {
    AZ: [[oZombie, 2, 1],[oZombie3, 2, 1], [oConeheadZombie, 2, 4], [oBucketheadZombie, 1, 7]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [   3, 6,  9, 10, 12, 14, 17, 19],
        a2: [1, 2, 3, 10,  4,  5,  6,  7, 15]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowLargeWave, 0]
    },
    FlagToEnd: function() {
            GotoNextWave(++oS.survival_times);//进入下一阶段 / 过关
    }
}, {
        LetsGO : function() {
            tGround.style.left = "-115px";//背景调整
            for(item in oP.FlagToMonitor){
                oP.FlagToMonitor[item][1] = 0;
            };//一大波僵尸标题归位
            for(item in oS.LargeWaveFlag){
                oS.LargeWaveFlag[item].style.top = "";
            };//旗帜归位
            var e = $("dCardList"),g = 0,k = e.childNodes.length,f,h,l,c,j,a,b = document.body;
        var zombietime = (oS.survival_times ? 500 : 1500);
        SetStyle($("dTop"), {left: "105px",top: 0});
            e.style.left = 0,SetVisible(e),ArCard = [];
            ! oS.BrainsNum && ! oS.survival_times && CustomSpecial(oBrains, oS.R - 1, -2);
            while (g < k) { 
                    (function(d) {
                    f = (j = e.childNodes[d]).id.substr(5);
                    l = (h = ArPCard[f].PName).prototype;
                    j.onclick = function(i) {ChosePlant(i, d)};
                    j.onmouseover = function() {SetVisible($("dTitle"));ViewPlantTitle(oS.MCID = d);};
                j.onmouseout = function() {SetHidden($("dTitle"))};
                    j.firstChild.style.top = "-60px"; (a = j.lastChild).id = "sSunNum" + d;
                    innerText(a, l.SunNum);
                    ArCard.push({DID: j.id,CDReady: 0,SunReady: 0,PName: h});
                })(g++)
            }
            b.onkeydown = function(d) {GroundOnkeydown(d)};
            b.onmousedown = function(d) {GroundOnmousedown(d)};
            b.onmousemove = function(d) {GroundOnmousemove(d)};
            SetVisible(e); 
            (function() {
                AllAudioStop();
                PlayMusic(oS.LoadMusic = oS.StartGameMusic);
                SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
            !oS.survival_times && oS.InitLawnMower();
            PrepareGrowPlants(function() {
                reload_last_view();//还原上次场地与times
                oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);//出旗，鼓号队奏乐
                LoadNowCardCoolTime();//此函数内代码顺序千万别变，任意调换顺序会导致出怪时间异常
                oS.DKind && AutoProduceSun(25);//掉落阳光
                oSym.addTask(zombietime,function() {
                    oP.AddZombiesFlag();
                    SetVisible($("dFlagMeterContent"));
                    },[])
                })
            })();
            oS.StartTime = oSym.Now;
        },
        reload_last_view : function(){
            oSym.Now = oS.lastwavenow || oSym.Now;
            for(i in oS.lastwaveTQ){
                oSym.TQ.push(oS.lastwaveTQ[i]);
            }
        },
        PauseGames : function() {
            oSym.Timer && (AllAudioStop(), oSym.Stop());
        },
        RePauseGames : function(){
            !oSym.Timer && (oSym.Start())
        },
        FindClearoSymTQ : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].f.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        FindClearoSymAr : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].ar.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        SaveNowCardCoolTime : function(){
            for(i in ArCard){
                PENames = ArCard[i].PName.prototype.EName;
                oS.CardCool[PENames] = ($("dCD1"+i) && $("dCD1"+i).innerText) || 0;
            }
        },
        LoadNowCardCoolTime : function(){
            for(i in ArCard){
                    ArCard[i].CDReady = 0,PENames = ArCard[i].PName.prototype.EName,cooltime = oS.CardCool[PENames],$("dCard" + PENames).firstChild.style.top = "-60px";
            cooltime == undefined && (cooltime = (ArCard[i].PName.prototype.coolTime <= 7.5 ? 0 : ArCard[i].PName.prototype.coolTime - 7.5));
            DoCoolTimer(i,cooltime);
        }   
    },
GrowPlant: function (l, d, c, e, b) { // 推荐换成如下种植函数，可以适配未重写关的 GrowPlant，还支持流星雨卡槽
        var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e], o = f.Kind, s = (k.name == "Plants");
        k.CanGrow(l, e, b) && (PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"), s ? (innerText(ESSunNum, oS.SunNum -= k.SunNum),(new h).Birth(d, c, e, b, l)) : asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"), function(n, m) {
                EDPZ.appendChild(n), m.Birth();
        }, a), o ? (delete ArCard[j], ClearChild($(j))) : (i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime))), oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {
                left: d - 30 + "px",
                top: c - 30 + "px",
                zIndex: 3 * e + 1,
                visibility: "visible"
        })]));
        CancelPlant()
},
    GotoNextWave : function(survival_times){
        (function(){
            $('dFlagMeterTitleB').innerText = `生存模式：夜晚（无限） - ${survival_times}面旗帜完成`;
            $('sFlagMeterTitleF').innerText = `生存模式：夜晚（无限） - ${survival_times}面旗帜完成`;
            FindClearoSymTQ(`innerText($("dCD1"`);
                CancelPlant();//防止场外种植
                CancelShovel();//铲子
                ArCard.forEach((item)=>{item.CDReady=0});//禁止快捷键选卡
        })();//显示波数
                PlayAudio("hugewave");//声音
                NewEle("DivTeach", "div", 0, {innerHTML: "更多的僵尸要来了！"}, EDAll);//文字
            setTimeout(function(){
                    ResetGame($("dMenu0"), 1);
            AllAudioPauseCanceled();
            SetNextWaveZombies(survival_times + 1);//策划下一波的僵尸
            SaveNowCardCoolTime();//保存卡槽冷却时间
            FindClearoSymTQ('PlayAudio(["groan1"');//删除僵尸叫声的任务
            FindClearoSymTQ('AppearSun(GetX(Math.floor(1');//删除自动掉阳光的任务
            FindClearoSymTQ('oZ.traversalOf();');//删除僵尸走动的任务
            FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
                    setTimeout(GotoNextStartGame,5000);//过现实5秒后进行下一部分
            },1);
        },
        GotoNextStartGame : function(h){
                FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
        FindClearoSymTQ('PlayAudio(["groan1"');
        FindClearoSymTQ('AppearSun(GetX(Math.floor(1');
        FindClearoSymTQ('oZ.traversalOf();');
        oS.lastwavenow = oSym.Now , oS.lastwaveTQ = oSym.TQ , oSym.TQ = [];//保存TQ、清除TQ
        ClearChild($("DivTeach"));//清除一波结束的html文字
                for(item in ArSun){
                try{
                    $(item).style.visibility = "hidden";
            }catch(why){
                console.error('阳光'+item+'无法隐藏，原因：\n'+why);
            };
        };//隐藏在场阳光，防止二次收集
        var flaghtml=$('dFlagMeterContent').childNodes;
            dFlagMeterContent.style.visibility = "hidden";
            $("imgFlagHead").style.left = "139px";
        $("imgFlagMeterFull").style.clip = "rect(0,auto,auto,157px)";
            for(item in flaghtml){
                if(flaghtml[item].style){
                    flaghtml[item].style.visibility = "";
                }
            };//旗帜部分隐藏，关卡进程归位
                var a = tGround.style,i = oS,g = $User.Visitor;
        oS.MCID = 0,a.left = "0px",oP.FlagZombies = 0,ArPCard.SelNum = 0;//僵尸波数、选卡数量归位
        StopMusic(),PlayMusic("Look up at the Sky");//播放选卡音乐

        InitPCard();//重新初始化选卡界面
        oSym.addTask(h == undefined ? 200 : h,
            function(j) {
                dCardList.style.left = "";//选卡css复位
                dCardList.innerHTML = "";//选卡清除
                ClearChild($('DivA'));//清除板子
                        SetVisible($('dZombie'));//显示僵尸预览
                ClearChild(j);
                i.ScrollScreen();
            },[
            NewEle("DivTeach", "div", "line-height:50px", {
                innerHTML: (Math.floor(g.UserAuthority) == "255" ? '<span style="color:#0F0;font-weight:bold">&lt;' + g.UserName + "&gt;</span>": "&lt;" + g.UserName + "&gt;") + "的房子"
            },EDAll)
        ]); //i.ShowScroll已被删除，防止报错
    },
    SetNextWaveZombies : function(survival_times) {
        let AZ = [],FlagToSumNum = {};
        switch(survival_times){case 3:AZ=[[oZombie,2,1],[oZombie3,2,1],[oConeheadZombie,2,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[10,11,12,13,25,13,14,15,17,30]};break;
                case 5:AZ=[[oZombie,2,1],[oZombie3,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,2,4],[oDancingZombie,1,6],[oBalloonZombie,1,10]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[18,20,22,23,35,23,25,26,28,40]};break;
                case 7:AZ=[[oZombie,2,1],[oZombie3,1,1],[oFootballZombie,1,6],[oPoleVaultingZombie,1,6],[oBalloonZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[30,32,33,34,55,36,37,38,39,60]};break;
                case 9:AZ=[[oZombie,2,1],[oZombie3,1,1],[oFootballZombie,1,4],[oJackinTheBoxZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[39,40,41,43,65,45,46,47,49,70]};break;
                case 11:AZ=[[oZombie,2,1],[oZombie3,1,1],[oBucketheadZombie,1,2],[oScreenDoorZombie,1,3],[oJackinTheBoxZombie,1,2]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[50,51,52,53,70,55,56,57,59,75]};break;
                case 13:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[60,61,62,63,80,65,66,67,69,85]};break;
                case 15:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[70,71,72,73,90,75,76,77,79,95]};break;
                case 17:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[80,83,85,89,100,90,93,95,97,110]};break;
                default:rn=Math.floor(Math.random()*100);if(rn<=3){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[80,100,110,90,100,120]};
                }else if(rn<=4){AZ=[[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[150,160,190,150,160,190]};}else if(rn<=5){choseZombie=oS.ZName[Math.floor(Math.random()*(oS.ZName.length-1)+1)],lvl=choseZombie.prototype.Lvl;AZ=[[choseZombie,5,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[lvl*35,lvl*45,lvl*50,lvl*35,lvl*45,lvl*50]};}
                else if(rn<=20){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oJackinTheBoxZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else if(rn<=30){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else{AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}break;};
        oP.Init({
            AZ: AZ,
            FlagToSumNum: FlagToSumNum,
            FlagToEnd: oP.FlagToEnd,
            FlagNum: 20,
        });
    },
})} else if(b === "3"){
oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock],
    ZName: [oConeheadZombie1, oZombie,oZombie3, oPoleVaultingZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oScreenDoorZombie, oFootballZombie, oDancingZombie, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDolphinRiderZombie, oSnorkelZombie, oZomboni, oJackinTheBoxZombie, oBalloonZombie,oPeaZombie,oDiggerZombie],
        PicArr: ["images/interface/background3.jpg"],
    backgroundImage: "images/interface/background3.jpg",
    CanSelectCard: 1,
    SunNum: 50,
    CardCool: [],
    lastwavenow: 0,
    lastwaveTQ: [],
    Coord: 2,
    LF: [0, 1, 1, 2, 2, 1 ,1],
    ZF: [0, 1, 1, 2, 2, 1 ,1],
    LevelName: "生存模式：泳池（无限）",
    survival_times: 0,
    LvlEName: "survival_day",
    StartGameMusic: "Kitanai Sekai",
    LargeWaveFlag: {
        20: $("imgFlag1"),
        10: $("imgFlag3")
    },
    UserDefinedFlagFunc: function(a) {
            if(oP.FlagZombies == 11){
                    oS.survival_times++;
                        $('dFlagMeterTitleB').innerText = `生存模式：泳池（无限） - ${oS.survival_times}面旗帜完成`;
                $('sFlagMeterTitleF').innerText = `生存模式：泳池（无限） - ${oS.survival_times}面旗帜完成`;
            };
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3]);
    }
}, {
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 2, 4], [oBucketheadZombie, 1, 7], [oDuckyTubeZombie1, 1, 5], [oDuckyTubeZombie2, 0, 6], [oDuckyTubeZombie3, 0, 9]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [   3, 6,  9, 10, 12, 14, 17, 19],
        a2: [1, 2, 3, 10,  4,  5,  6,  7, 15]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowLargeWave, 0]
    },
    FlagToEnd: function() {
            GotoNextWave(++oS.survival_times);//进入下一阶段 / 过关
    }
}, {
        LetsGO : function() {
            tGround.style.left = "-115px";//背景调整
            for(item in oP.FlagToMonitor){
                oP.FlagToMonitor[item][1] = 0;
            };//一大波僵尸标题归位
            for(item in oS.LargeWaveFlag){
                oS.LargeWaveFlag[item].style.top = "";
            };//旗帜归位
            var e = $("dCardList"),g = 0,k = e.childNodes.length,f,h,l,c,j,a,b = document.body;
        var zombietime = (oS.survival_times ? 500 : 1500);
        SetStyle($("dTop"), {left: "105px",top: 0});
            e.style.left = 0,SetVisible(e),ArCard = [];
            ! oS.BrainsNum && ! oS.survival_times && CustomSpecial(oBrains, oS.R - 1, -2);
            while (g < k) { 
                    (function(d) {
                    f = (j = e.childNodes[d]).id.substr(5);
                    l = (h = ArPCard[f].PName).prototype;
                    j.onclick = function(i) {ChosePlant(i, d)};
                    j.onmouseover = function() {SetVisible($("dTitle"));ViewPlantTitle(oS.MCID = d);};
                j.onmouseout = function() {SetHidden($("dTitle"))};
                    j.firstChild.style.top = "-60px"; (a = j.lastChild).id = "sSunNum" + d;
                    innerText(a, l.SunNum);
                    ArCard.push({DID: j.id,CDReady: 0,SunReady: 0,PName: h});
                })(g++)
            }
            b.onkeydown = function(d) {GroundOnkeydown(d)};
            b.onmousedown = function(d) {GroundOnmousedown(d)};
            b.onmousemove = function(d) {GroundOnmousemove(d)};
            SetVisible(e); 
            (function() {
                AllAudioStop();
                PlayMusic(oS.LoadMusic = oS.StartGameMusic);
                SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
            !oS.survival_times && oS.InitLawnMower();
            PrepareGrowPlants(function() {
                reload_last_view();//还原上次场地与times
                oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);//出旗，鼓号队奏乐
                LoadNowCardCoolTime();//此函数内代码顺序千万别变，任意调换顺序会导致出怪时间异常
                oS.DKind && AutoProduceSun(25);//掉落阳光
                oSym.addTask(zombietime,function() {
                    oP.AddZombiesFlag();
                    SetVisible($("dFlagMeterContent"));
                    },[])
                })
            })();
            oS.StartTime = oSym.Now;
        },
        reload_last_view : function(){
            oSym.Now = oS.lastwavenow || oSym.Now;
            for(i in oS.lastwaveTQ){
                oSym.TQ.push(oS.lastwaveTQ[i]);
            }
        },
        PauseGames : function() {
            oSym.Timer && (AllAudioStop(), oSym.Stop());
        },
        RePauseGames : function(){
            !oSym.Timer && (oSym.Start())
        },
        FindClearoSymTQ : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].f.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        FindClearoSymAr : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].ar.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        SaveNowCardCoolTime : function(){
            for(i in ArCard){
                PENames = ArCard[i].PName.prototype.EName;
                oS.CardCool[PENames] = ($("dCD1"+i) && $("dCD1"+i).innerText) || 0;
            }
        },
        LoadNowCardCoolTime : function(){
            for(i in ArCard){
                    ArCard[i].CDReady = 0,PENames = ArCard[i].PName.prototype.EName,cooltime = oS.CardCool[PENames],$("dCard" + PENames).firstChild.style.top = "-60px";
            cooltime == undefined && (cooltime = (ArCard[i].PName.prototype.coolTime <= 7.5 ? 0 : ArCard[i].PName.prototype.coolTime - 7.5));
            DoCoolTimer(i,cooltime);
        }   
    },
GrowPlant: function (l, d, c, e, b) { // 推荐换成如下种植函数，可以适配未重写关的 GrowPlant，还支持流星雨卡槽
        var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e], o = f.Kind, s = (k.name == "Plants");
        k.CanGrow(l, e, b) && (PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"), s ? (innerText(ESSunNum, oS.SunNum -= k.SunNum),(new h).Birth(d, c, e, b, l)) : asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"), function(n, m) {
                EDPZ.appendChild(n), m.Birth();
        }, a), o ? (delete ArCard[j], ClearChild($(j))) : (i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime))), oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {
                left: d - 30 + "px",
                top: c - 30 + "px",
                zIndex: 3 * e + 1,
                visibility: "visible"
        })]));
        CancelPlant()
},
    GotoNextWave : function(survival_times){
        (function(){
            $('dFlagMeterTitleB').innerText = `生存模式：泳池（无限） - ${survival_times}面旗帜完成`;
            $('sFlagMeterTitleF').innerText = `生存模式：泳池（无限） - ${survival_times}面旗帜完成`;
            FindClearoSymTQ(`innerText($("dCD1"`);
                CancelPlant();//防止场外种植
                CancelShovel();//铲子
                ArCard.forEach((item)=>{item.CDReady=0});//禁止快捷键选卡
        })();//显示波数
                PlayAudio("hugewave");//声音
                NewEle("DivTeach", "div", 0, {innerHTML: "更多的僵尸要来了！"}, EDAll);//文字
            setTimeout(function(){
                    ResetGame($("dMenu0"), 1);
            AllAudioPauseCanceled();
            SetNextWaveZombies(survival_times + 1);//策划下一波的僵尸
            SaveNowCardCoolTime();//保存卡槽冷却时间
            FindClearoSymTQ('PlayAudio(["groan1"');//删除僵尸叫声的任务
            FindClearoSymTQ('AppearSun(GetX(Math.floor(1');//删除自动掉阳光的任务
            FindClearoSymTQ('oZ.traversalOf();');//删除僵尸走动的任务
            FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
                    setTimeout(GotoNextStartGame,5000);//过现实5秒后进行下一部分
            },1);
        },
        GotoNextStartGame : function(h){
                FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
        FindClearoSymTQ('PlayAudio(["groan1"');
        FindClearoSymTQ('AppearSun(GetX(Math.floor(1');
        FindClearoSymTQ('oZ.traversalOf();');
        oS.lastwavenow = oSym.Now , oS.lastwaveTQ = oSym.TQ , oSym.TQ = [];//保存TQ、清除TQ
        ClearChild($("DivTeach"));//清除一波结束的html文字
                for(item in ArSun){
                try{
                    $(item).style.visibility = "hidden";
            }catch(why){
                console.error('阳光'+item+'无法隐藏，原因：\n'+why);
            };
        };//隐藏在场阳光，防止二次收集
        var flaghtml=$('dFlagMeterContent').childNodes;
            dFlagMeterContent.style.visibility = "hidden";
            $("imgFlagHead").style.left = "139px";
        $("imgFlagMeterFull").style.clip = "rect(0,auto,auto,157px)";
            for(item in flaghtml){
                if(flaghtml[item].style){
                    flaghtml[item].style.visibility = "";
                }
            };//旗帜部分隐藏，关卡进程归位
                var a = tGround.style,i = oS,g = $User.Visitor;
        oS.MCID = 0,a.left = "0px",oP.FlagZombies = 0,ArPCard.SelNum = 0;//僵尸波数、选卡数量归位
        StopMusic(),PlayMusic("Look up at the Sky");//播放选卡音乐
        InitPCard();//重新初始化选卡界面
        oSym.addTask(h == undefined ? 200 : h,
            function(j) {
                dCardList.style.left = "";//选卡css复位
                dCardList.innerHTML = "";//选卡清除
                ClearChild($('DivA'));//清除板子
                        SetVisible($('dZombie'));//显示僵尸预览
                ClearChild(j);
                i.ScrollScreen();
            },[
            NewEle("DivTeach", "div", "line-height:50px", {
                innerHTML: (Math.floor(g.UserAuthority) == "255" ? '<span style="color:#0F0;font-weight:bold">&lt;' + g.UserName + "&gt;</span>": "&lt;" + g.UserName + "&gt;") + "的房子"
            },EDAll)
        ]); //i.ShowScroll已被删除，防止报错
    },
    SetNextWaveZombies : function(survival_times) {
        let AZ = [],FlagToSumNum = {};
        SetNextWaveZombies : function(survival_times) {
        let AZ = [],FlagToSumNum = {};
        switch(survival_times){case 3:AZ=[[oZombie,2,1],[oZombie3,2,1],[oConeheadZombie,2,1],[oDolphinRiderZombie,1,8],[oDuckyTubeZombie1,1,3],[oDuckyTubeZombie2,0,3],[oDuckyTubeZombie3,0,4]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[10,11,12,13,25,13,14,15,17,30]};break;case 5:AZ=[[oZombie,2,1],[oZombie3,1,1],[oNewspaperZombie,1,1],[oDuckyTubeZombie1,1,2],[oDuckyTubeZombie2,0,2],[oDuckyTubeZombie3,0,2],[oScreenDoorZombie,2,4],[oDancingZombie,1,6],[oBalloonZombie,1,10]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[18,20,22,23,35,23,25,26,28,40]};break;case 7:AZ=[[oZombie,2,1],[oZombie3,1,1],[oFootballZombie,1,6],[oDuckyTubeZombie1,1,3],[oDuckyTubeZombie2,0,3],[oDuckyTubeZombie3,0,3],[oPoleVaultingZombie,1,6],[oBalloonZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[30,32,33,34,55,36,37,38,39,60]};break;case 9:AZ=[[oZombie,2,1],[oZombie3,1,1],[oFootballZombie,1,4],[oDuckyTubeZombie1,1,3],[oDuckyTubeZombie2,0,3],[oDuckyTubeZombie3,0,3],[oZomboni,1,6],[oJackinTheBoxZombie,1,11],[oSnorkelZombie,1,14]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[39,40,41,43,65,45,46,47,49,70]};break;case 11:AZ=[[oZombie,2,1],[oZombie3,1,1],[oBucketheadZombie,1,2],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oScreenDoorZombie,1,3],[oJackinTheBoxZombie,1,2],[oSnorkelZombie,1,2]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[50,51,52,53,70,55,56,57,59,75]};break;case 13:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[60,61,62,63,80,65,66,67,69,85]};break;case 15:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[70,71,72,73,90,75,76,77,79,95]};break;case 17:AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[80,83,85,89,100,90,93,95,97,110]};break;
        default:rn=Math.floor(Math.random()*100);if(rn<=3){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1]];
        FlagToSumNum={a1:[4,9,10,14,19],a2:[80,100,110,90,100,120]};}else if(rn<=4){AZ=[[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[150,160,190,150,160,190]};}
        else if(rn<=5){choseZombie=oS.ZName[Math.floor(Math.random()*(oS.ZName.length-1)+1)],lvl=choseZombie.prototype.Lvl;AZ=[[choseZombie,5,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[lvl*35,lvl*45,lvl*50,lvl*35,lvl*45,lvl*50]};}
        else if(rn<=20){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}
        else if(rn<=30){AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}
        else{AZ=[[oZombie,1,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}break;};
        oP.Init({
            AZ: AZ,
            FlagToSumNum: FlagToSumNum,
            FlagToEnd: oP.FlagToEnd,
            FlagNum: 20,
        });
    },
})} else if(b === "4"){
oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock],
    ZName:[oZombie,oZombie3,oPeaZombie,oPoleVaultingZombie,oConeheadZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oDolphinRiderZombie,oSnorkelZombie,oZomboni,oJackinTheBoxZombie,oBalloonZombie,oDiggerZombie,oBackupDancer1],
PicArr: ["images/interface/background4.jpg"],
    backgroundImage: "images/interface/background4.jpg",
    CanSelectCard: 1,
    SunNum: 50,
    CardCool: [],
    lastwavenow: 0,
    lastwaveTQ: [],
    Coord: 2,
    DKind:0,
        HaveFog:6,
    LF: [0, 1, 1, 2, 2, 1 ,1],
    ZF: [0, 1, 1, 2, 2, 1 ,1],
    LevelName: "生存模式：浓雾（无限）",
    survival_times: 0,
    LvlEName: "survival_day",
    StartGameMusic: "Rigor Mormist",
    LargeWaveFlag: {
        20: $("imgFlag1"),
        10: $("imgFlag3")
    },
    UserDefinedFlagFunc: function(a) {
            if(oP.FlagZombies == 11){
                    oS.survival_times++;
                        $('dFlagMeterTitleB').innerText = `生存模式：浓雾（无限） - ${oS.survival_times}面旗帜完成`;
                $('sFlagMeterTitleF').innerText = `生存模式：浓雾（无限） - ${oS.survival_times}面旗帜完成`;
            };
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3]);
    }
}, {
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 2, 4], [oBucketheadZombie, 1, 7], [oDuckyTubeZombie1, 1, 5], [oDuckyTubeZombie2, 0, 6], [oDuckyTubeZombie3, 0, 9]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [   3, 6,  9, 10, 12, 14, 17, 19],
        a2: [1, 2, 3, 10,  4,  5,  6,  7, 15]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowLargeWave, 0]
    },
    FlagToEnd: function() {
            GotoNextWave(++oS.survival_times);//进入下一阶段 / 过关
    }
}, {
        LetsGO : function() {
            tGround.style.left = "-115px";//背景调整
            for(item in oP.FlagToMonitor){
                oP.FlagToMonitor[item][1] = 0;
            };//一大波僵尸标题归位
            for(item in oS.LargeWaveFlag){
                oS.LargeWaveFlag[item].style.top = "";
            };//旗帜归位
            var e = $("dCardList"),g = 0,k = e.childNodes.length,f,h,l,c,j,a,b = document.body;
        var zombietime = (oS.survival_times ? 500 : 1500);
        SetStyle($("dTop"), {left: "105px",top: 0});
            e.style.left = 0,SetVisible(e),ArCard = [];
            ! oS.BrainsNum && ! oS.survival_times && CustomSpecial(oBrains, oS.R - 1, -2);
            while (g < k) { 
                    (function(d) {
                    f = (j = e.childNodes[d]).id.substr(5);
                    l = (h = ArPCard[f].PName).prototype;
                    j.onclick = function(i) {ChosePlant(i, d)};
                    j.onmouseover = function() {SetVisible($("dTitle"));ViewPlantTitle(oS.MCID = d);};
                j.onmouseout = function() {SetHidden($("dTitle"))};
                    j.firstChild.style.top = "-60px"; (a = j.lastChild).id = "sSunNum" + d;
                    innerText(a, l.SunNum);
                    ArCard.push({DID: j.id,CDReady: 0,SunReady: 0,PName: h});
                })(g++)
            }
            b.onkeydown = function(d) {GroundOnkeydown(d)};
            b.onmousedown = function(d) {GroundOnmousedown(d)};
            b.onmousemove = function(d) {GroundOnmousemove(d)};
            SetVisible(e); 
            (function() {
                AllAudioStop();
                PlayMusic(oS.LoadMusic = oS.StartGameMusic);
                SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
            !oS.survival_times && oS.InitLawnMower();
            PrepareGrowPlants(function() {
                reload_last_view();//还原上次场地与times
                oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);//出旗，鼓号队奏乐
                LoadNowCardCoolTime();//此函数内代码顺序千万别变，任意调换顺序会导致出怪时间异常
                oS.DKind && AutoProduceSun(25);//掉落阳光
                oSym.addTask(zombietime,function() {
                    oP.AddZombiesFlag();
                    SetVisible($("dFlagMeterContent"));
                    },[])
                })
            })();
            oS.StartTime = oSym.Now;
        },
        reload_last_view : function(){
            oSym.Now = oS.lastwavenow || oSym.Now;
            for(i in oS.lastwaveTQ){
                oSym.TQ.push(oS.lastwaveTQ[i]);
            }
        },
        PauseGames : function() {
            oSym.Timer && (AllAudioStop(), oSym.Stop());
        },
        RePauseGames : function(){
            !oSym.Timer && (oSym.Start())
        },
        FindClearoSymTQ : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].f.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        FindClearoSymAr : function(str){
            let zombieaudio = [];
            for(item in oSym.TQ){
                if(oSym.TQ[item].ar.toString().indexOf(str) != -1){
                    zombieaudio.push(item);
                }
            }
            while(zombieaudio.length){
                oSym.removeTask(zombieaudio[zombieaudio.length-1]);
                zombieaudio.length--;
            }        
        },
        SaveNowCardCoolTime : function(){
            for(i in ArCard){
                PENames = ArCard[i].PName.prototype.EName;
                oS.CardCool[PENames] = ($("dCD1"+i) && $("dCD1"+i).innerText) || 0;
            }
        },
        LoadNowCardCoolTime : function(){
            for(i in ArCard){
                    ArCard[i].CDReady = 0,PENames = ArCard[i].PName.prototype.EName,cooltime = oS.CardCool[PENames],$("dCard" + PENames).firstChild.style.top = "-60px";
            cooltime == undefined && (cooltime = (ArCard[i].PName.prototype.coolTime <= 7.5 ? 0 : ArCard[i].PName.prototype.coolTime - 7.5));
            DoCoolTimer(i,cooltime);
        }   
    },
GrowPlant: function (l, d, c, e, b) { // 推荐换成如下种植函数，可以适配未重写关的 GrowPlant，还支持流星雨卡槽
        var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e], o = f.Kind, s = (k.name == "Plants");
        k.CanGrow(l, e, b) && (PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"), s ? (innerText(ESSunNum, oS.SunNum -= k.SunNum),(new h).Birth(d, c, e, b, l)) : asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"), function(n, m) {
                EDPZ.appendChild(n), m.Birth();
        }, a), o ? (delete ArCard[j], ClearChild($(j))) : (i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime))), oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {
                left: d - 30 + "px",
                top: c - 30 + "px",
                zIndex: 3 * e + 1,
                visibility: "visible"
        })]));
        CancelPlant()
},
    GotoNextWave : function(survival_times){
        (function(){
            $('dFlagMeterTitleB').innerText = `生存模式：浓雾（无限） - ${survival_times}面旗帜完成`;
            $('sFlagMeterTitleF').innerText = `生存模式：浓雾（无限） - ${survival_times}面旗帜完成`;
            FindClearoSymTQ(`innerText($("dCD1"`);
                CancelPlant();//防止场外种植
                CancelShovel();//铲子
                ArCard.forEach((item)=>{item.CDReady=0});//禁止快捷键选卡
        })();//显示波数
                PlayAudio("hugewave");//声音
                NewEle("DivTeach", "div", 0, {innerHTML: "更多的僵尸要来了！"}, EDAll);//文字
            setTimeout(function(){
                    ResetGame($("dMenu0"), 1);
            AllAudioPauseCanceled();
            SetNextWaveZombies(survival_times + 1);//策划下一波的僵尸
            SaveNowCardCoolTime();//保存卡槽冷却时间
            FindClearoSymTQ('PlayAudio(["groan1"');//删除僵尸叫声的任务
            FindClearoSymTQ('AppearSun(GetX(Math.floor(1');//删除自动掉阳光的任务
            FindClearoSymTQ('oZ.traversalOf();');//删除僵尸走动的任务
            FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
                    setTimeout(GotoNextStartGame,5000);//过现实5秒后进行下一部分
            },1);
        },
        GotoNextStartGame : function(h){
                FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
        FindClearoSymTQ('PlayAudio(["groan1"');
        FindClearoSymTQ('AppearSun(GetX(Math.floor(1');
        FindClearoSymTQ('oZ.traversalOf();');
        oS.lastwavenow = oSym.Now , oS.lastwaveTQ = oSym.TQ , oSym.TQ = [];//保存TQ、清除TQ
        ClearChild($("DivTeach"));//清除一波结束的html文字
                for(item in ArSun){
                try{
                    $(item).style.visibility = "hidden";
            }catch(why){
                console.error('阳光'+item+'无法隐藏，原因：\n'+why);
            };
        };//隐藏在场阳光，防止二次收集
        var flaghtml=$('dFlagMeterContent').childNodes;
            dFlagMeterContent.style.visibility = "hidden";
            $("imgFlagHead").style.left = "139px";
        $("imgFlagMeterFull").style.clip = "rect(0,auto,auto,157px)";
            for(item in flaghtml){
                if(flaghtml[item].style){
                    flaghtml[item].style.visibility = "";
                }
            };//旗帜部分隐藏，关卡进程归位
                var a = tGround.style,i = oS,g = $User.Visitor;
        oS.MCID = 0,a.left = "0px",oP.FlagZombies = 0,ArPCard.SelNum = 0;//僵尸波数、选卡数量归位
        StopMusic(),PlayMusic("Look up at the Sky");//播放选卡音乐
        InitPCard();//重新初始化选卡界面
        oSym.addTask(h == undefined ? 200 : h,
            function(j) {
                dCardList.style.left = "";//选卡css复位
                dCardList.innerHTML = "";//选卡清除
                ClearChild($('DivA'));//清除板子
                        SetVisible($('dZombie'));//显示僵尸预览
                ClearChild(j);
                i.ScrollScreen();
            },[
            NewEle("DivTeach", "div", "line-height:50px", {
                innerHTML: (Math.floor(g.UserAuthority) == "255" ? '<span style="color:#0F0;font-weight:bold">&lt;' + g.UserName + "&gt;</span>": "&lt;" + g.UserName + "&gt;") + "的房子"
            },EDAll)
        ]); //i.ShowScroll已被删除，防止报错
    },
    SetNextWaveZombies : function(survival_times) {
        let AZ = [],FlagToSumNum = {};
        switch(survival_times){case 3:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,2,1],[oConeheadZombie,2,1],[oDolphinRiderZombie,1,8],[oDuckyTubeZombie1,1,3],[oDuckyTubeZombie2,0,3],[oDuckyTubeZombie3,0,4]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[10,11,12,13,25,13,14,15,17,30]};break;case 5:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oNewspaperZombie,1,1],[oDuckyTubeZombie1,1,2],[oDuckyTubeZombie2,0,2],[oDuckyTubeZombie3,0,2],[oScreenDoorZombie,2,4],[oDancingZombie,1,6],[oBalloonZombie,1,10]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[18,20,22,23,35,23,25,26,28,40]};break;case 7:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oFootballZombie,1,6],[oDuckyTubeZombie1,1,3],[oDuckyTubeZombie2,0,3],[oDuckyTubeZombie3,0,3],[oPoleVaultingZombie,1,6],[oBalloonZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[30,32,33,34,55,36,37,38,39,60]};break;case 9:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oFootballZombie,1,4],[oDuckyTubeZombie1,1,3],[oDuckyTubeZombie2,0,3],[oDuckyTubeZombie3,0,3],[oZomboni,1,6],[oJackinTheBoxZombie,1,11],[oSnorkelZombie,1,14]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[39,40,41,43,65,45,46,47,49,70]};break;case 11:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oBucketheadZombie,1,2],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oScreenDoorZombie,1,3],[oJackinTheBoxZombie,1,2],[oSnorkelZombie,1,2]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[50,51,52,53,70,55,56,57,59,75]};break;case 13:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[60,61,62,63,80,65,66,67,69,85]};break;case 15:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[70,71,72,73,90,75,76,77,79,95]};break;case 17:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[80,83,85,89,100,90,93,95,97,110]};break;default:rn=Math.floor(Math.random()*100);if(rn<=3){AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[80,100,110,90,100,120]};}else if(rn<=4){AZ=[[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[150,160,190,150,160,190]};}else if(rn<=5){choseZombie=oS.ZName[Math.floor(Math.random()*(oS.ZName.length-1)+1)],lvl=choseZombie.prototype.Lvl;AZ=[[choseZombie,5,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[lvl*35,lvl*45,lvl*50,lvl*35,lvl*45,lvl*50]};}else if(rn<=20){AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else if(rn<=30){AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else{AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oDuckyTubeZombie1,1,1],[oDuckyTubeZombie2,0,1],[oDuckyTubeZombie3,0,1],[oDolphinRiderZombie,1,1],[oSnorkelZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}break;};
        oP.Init({
            AZ: AZ,
            FlagToSumNum: FlagToSumNum,
            FlagToEnd: oP.FlagToEnd,
            FlagNum: 20,
        });
    },
})} else if (b === "红色") {
    alert("背景颜色已改变");
    document.body.style.backgroundColor = "red";ea;
} else if (b === "绿色") {
    alert("颜色已改变");
    document.body.style.backgroundColor = "green";ea;
} else if (b === "蓝色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor = "blue";ea;
} else if (b === "粉色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"pink";ea;
} else if (b === "紫色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"purple";ea;
} else if (b === "黑色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"black";ea;
} else if (b === "白色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"white";ea;
} else if (b === "橙色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"orange";ea;
} else if (b === "棕色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"brown";ea;
} else if (b === "黄色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"yellow";ea;
} else if (b === "金色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"gold";ea;
} else if (b === "灰色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"grey";ea;
} else if (b === "青色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"cyan";ea;
} else if (b === "洋红色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"magenta";ea;
} else if (b === "紫罗兰色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"violet";ea;
} else if (b === "靛蓝色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"indigo";ea;
} else if (b === "青绿色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"turquoise";ea;
} else if (b === "栗色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"maroon";ea;
} else if (b === "米色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"beige";ea;
} else if (b === "海军蓝"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"navy";
} else if (b === "水鸭色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"teal";ea;
} else if (b === "薰衣草色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"lavender";ea;
} else if (b === "银色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"silver";ea;
} else if (b === "橄榄色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"olive";ea;
} else if (b === "珊瑚色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"coral";ea;
} else if (b === "鲑鱼色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"salmon";ea;
} else if (b === "深红色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"crimson";ea;
} else if (b === "天蓝色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"azure";ea;
} else if (b === "亮绿色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"lightgreen";ea;
} else if (b === "亮黄色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"lightyellow";ea;
}  else if (b === "亮蓝色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"lightblue";ea;
} else if (b === "亮粉色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"lightpink";ea;
} else if (b === "亮灰色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"lightgrey";ea;
} else if (b === "暗绿色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"darkgreen";ea;
} else if (b === "暗蓝色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"darkblue";ea;
} else if (b === "暗红色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"darkred";ea;
} else if (b === "暗灰色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"darkgrey";ea;
} else if (b === "暗橙色"){
    alert("背景颜色已改变");
    document.body.style.backgroundColor =
"darkorange";ea;
} else if (b === "666"){
for (var x=0;x<=9999;x++){
alert("恭喜你触发隐藏“彩蛋”，您一共需要点击9999次，您已点击" + x + "次");
 }
} else if (b === "114514"){
for (var x=0;x<=2;){
alert("恭喜你触发死循环");ea;
 }
} else if (b == "Hello World"){
    alert("Hello World!");ea;
} else if (b === "rtty"){
alert("你好");ea;
}
else {
    alert("您输入的关卡不存在");ea;
 }
