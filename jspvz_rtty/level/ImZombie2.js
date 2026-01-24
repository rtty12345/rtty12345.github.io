oS.Init({
  PName: [oPeashooter, oSunFlower, oSnowPea, oSpikeweed, oGloomShroom, oStarfruit, oGatlingPea, oTorchwood, oRepeater, oPotatoMine, oWallNut, oSpikerock, oThreepeater, oGarlic, oCactus, oChomper, oSquash, oScaredyShroom, oTallNut, oBlover, oHypnoShroom],
  ZName: [oNewspaperZombie, oJalapenoZombie,oZombie3, oFlagZombie, oNewspaperZombie2,oZomboni, oConeheadZombie, oScreenDoorZombie, oPeaZombie, oPoleVaultingZombie,
          oJackinTheBoxZombie,oFootballZombie1,oPoleVaultingZombie1,oDiggerZombie,oDolphinRiderZombie,oSnorkelZombie,oBucketheadZombie,oDancingZmbie2],
  PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
  backgroundImage: "images/interface/background2.jpg",
  SunNum: 2000,
  BrainsNum: 5,
  ProduceSun: false,
  CardKind: 1,
  DKind: 0,
  CanSelectCard:1,
  LevelName: "解谜模式：最终决战!",
  LvlEName: "ImZombie2",
  LoadMusic: "Mountains",
  StartGameMusic: "Mountains",
  ArP: {
    ArC: [1, 7],
    ArR: [1, 5],
    Auto: 1,
    P: [0, 1, 1, 1, 20, 2, 3, 3, 4, 4, 5, 5, 6, 6, 19, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 15, 16, 16, 17, 17, 18]
  },
  LvlClearFunc: function() {
    oS.ScrollScreen=oS.LvlVar.ScrollScreen
    delete oS.LvlVar.ScrollScreen
  },
    LoadAccess: function(i) {
       ! oS.LvlVar ? oS.LvlVar = {
            ScrollScreen: oS.ScrollScreen
        }: oS.LvlVar.ScrollScreen = oS.ScrollScreen;
            $("tGround").style.left = "-115px";
            oS.RiddleAutoGrow();
            SetStyle($("dTop"), {
                left: "105px",
                top: 0,
                visibility: "visible"
            });
            innerText(ESSunNum, oS.SunNum);
            oS.ScrollScreen = function() {
                $("tGround").style.left = 0;
                ClearChild($("dButton1"), $("dButton2"));
                (function() {
                    (EDAll.scrollLeft += 25) < 500 ? oSym.addTask(2, arguments.callee, []) : SetVisible($("dMenu"), $("dSelectCard"), $("dCardList"));
                })();
            };
        NewEle("dButton1", "button", "position:absolute;left:650px;top:510px;width:100px;height:35px;z-index:255", {
                innerHTML: "开始挑战",
                onclick: function() {
                  i(0);
                }
            }, EDAll);
            NewEle("dButton2", "button", "position:absolute;left:760px;top:510px;width:100px;height:35px;z-index:255", {
                innerHTML: "不玩这个",
                onclick: function() {
                    SelectModal(0);
                }
            }, EDAll);
        },
  RiddleAutoGrow: function() {
    var k = oS.ArP,
      f = k.ArC,
      j = k.ArR,
      e = k.P,
      d = oS.PName,
      c, g = f[0],
      b = f[1],
      i = j[0],
      h = j[1],
      a;
    if (k.Auto) {
      while (i <= h) {
        CustomSpecial(oBrains, i, 0);
        for (a = g; a <= b; a++) {
          CustomSpecial(d[e[c = Math.floor(Math.random() * e.length)]], i, a);
          e.splice(c, 1)
        }++i
      }
    }
    NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(8)[0] - 11) + "px;top:65px", EDAll)
  },
  StartGame: function() {
    oP.Monitor();
    BeginCool();
    SetVisible($("dFlagMeter"), $("dFlagMeterContent"));
  }
});
