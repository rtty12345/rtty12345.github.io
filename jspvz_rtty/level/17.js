oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oScreenDoorZombie, oFootballZombie,oPeaZombie,oZomboni],
	PicArr: function() {
		var a = oIceShroom.prototype,
			b = a.PicArr;
		return ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background2.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: 50,
	LevelName: "关卡 2-7",
	LvlEName: 17,
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [5, 9, 11]
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie,oPeaZombie,oZomboni])
	},
	StartGameMusic: "Ultimate battle"
},
	{
	AZ: [
		[oZombie, 2, 1],
		[oZombie2, 2, 1],
		[oZombie3, 1, 1],
		[oConeheadZombie, 3, 1],
		[oScreenDoorZombie, 1, 1],
		[oFootballZombie, 1, 1]
	],
	FlagNum: 20,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19],
		a2: [1, 2, 3, 10, 12, 15, 18, 60]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/IceShroom.png", "left:587px;top:270px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oIceShroom, 18)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:235px;left:596px", EDAll)
	}
});
