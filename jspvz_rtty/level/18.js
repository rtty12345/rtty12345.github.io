oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oDancingZombie, oConeheadZombie1,oNewspaperZombie2,oNewspaperZombie],
	PicArr: function() {
		var a = oIceShroom.prototype,
			b = a.PicArr;
		return ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", "images/Card/Plants/DoomShroom.png"]
	}(),
	backgroundImage: "images/interface/background2.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: 350,
	LevelName: "关卡 2-8",
	LvlEName: 18,
	LargeWaveFlag: {
		10: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [6, 9, 7]
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie,oNewspaperZombie2])
	},
	StartGameMusic: "Ultimate battle"
},
{
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 1, 1],
		[oConeheadZombie, 2, 1],
		[oNewspaperZombie2, 2, 1,[1]],
		[oDancingZombie, 1, 1]
	],
	FlagNum: 10,
	FlagToSumNum: {
		a1: [3, 5, 9],
		a2: [3, 6, 9, 30]
	},
	FlagToMonitor: {
		9: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/DoomShroom.png", "left:587px;top:270px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oDoomShroom, 19);
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:235px;left:596px", EDAll)
	}
});
