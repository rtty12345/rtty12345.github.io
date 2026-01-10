oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oScreenDoorZombie, oPoleVaultingZombie,oNewspaperZombie,oFootballZombie1],
	PicArr: function() {
		var a = oHypnoShroom.prototype,
			b = a.PicArr;
		return ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/rednight.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: 200,
	LevelName: "关卡 2-5",
	LvlEName: 15,
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [7, 9, 4]
	},
	UserDefinedFlagFunc: function(b) {
		var a = oP.FlagZombies;
		a > 3 && AppearTombstones(3, 9, 1);
		for (u in $Z) {
              e = $Z[u];
            e.HP*=1.25;
             if(a>2&&a<12){
			    oSym.addTask(200,function(e){
                    $Z[e.id]&&e.ChangeR(e);
					$Z[e.id]&& oSym.addTask(200,arguments.callee,[e]);
                },[e])
			}else if(a>=12){
			e.OSpeed*=1.5;
			e.OSpeed*=1.5;
			e.caiPlants = function(a) {
		    if(a.PZ&&a.beAttacked){
				for (let i = 0; i < 4; i++) {
				let p = oGd.$[a.R + "_" + GetC(a.ZX - 10) + "_" + i];
                    p && (p.canEat) && p.getHurt(a, 1, 100);
				        }
			        }
                return 1;
				}
		    }
		}
		oP.FlagNum == a && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie,oNewspaperZombie]);
	},
	StartGameMusic: "Ultimate battle"
},
	{
	AZ: [
		[oZombie, 2, 1],
		[oZombie2, 2, 1],
		[oZombie3, 1, 1],
		[oConeheadZombie, 2, 1],
		[oJalapenoZombie, 2, 3],
		[oFootballZombie1, 2, 3],
		[oNewspaperZombie,1, 2],
		[oPoleVaultingZombie, 1, 1],
		[oScreenDoorZombie, 1, 1]
	],
	FlagNum: 21,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19],
		a2: [2, 4, 6, 40, 12, 20, 24,60]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/HypnoShroom.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oHypnoShroom, 16)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
	}
});


