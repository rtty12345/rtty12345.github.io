oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom,oGloomShroom],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oDancingZombie, oScreenDoorZombie, oConeheadZombie1,oBucketheadZombie,oFootballZombie,oBackupDancer,oBackupDancer1,oDancingZombie1],
	PicArr: ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", "images/interface/ZombieNoteSmall.png", "images/interface/ZombieNote2.png"],
	backgroundImage: "images/interface/background2.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: 500,
	LevelName: "关卡 2-9",
	LvlEName: 19,
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [5, 9, 11]
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie,oPeaZombie,oSquashZombie,oZomboni])
	},
	StartGameMusic: "Ultimate battle"
},
{
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 1, 1],
		[oZombie3, 1, 1],
		[oConeheadZombie, 3, 1],
		[oScreenDoorZombie, 1, 1],
		[oFootballZombie, 1, 1],
		[oDancingZombie1, 1, 1],
		[oDancingZombie, 1, 1]
	],
	FlagNum: 10,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19],
		a2: [3, 6, 9, 150, 12, 20, 50, 180]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/interface/ZombieNoteSmall.png", "left:667px;top:220px", EDAll, {
			onclick: function() {
				SetHidden($("PointerUD"));
				(SetStyle(this, {
					width: "613px",
					height: "399px",
					left: "193px",
					top: "100px"
				})).src = "images/interface/ZombieNote2.png";
				this.onclick = function() {
					SelectModal(20)
				}
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
	}
});
