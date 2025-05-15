oS.Init({
    PName: [oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater,oPuffShroom,oSunShroom,oFumeShroom,oGraveBuster,oHypnoShroom,oScaredyShroom,oIceShroom,oDoomShroom,oLilyPad,oSquash,oThreepeater,oTangleKelp,oJalapeno,oTorchwood,oTallNut,oSeaShroom,oPlantern,oCactus,oBlover,oSplitPea,oStarfruit,oPumpkinHead,oCoffeeBean,oGarlic,oGatlingPea,oGloomShroom,oTwinSunflower],
    ZName: [oNewspaperZombie],
    PicArr: ["images/interface/background1.jpg"], 
    backgroundImage: "images/interface/background1.jpg",
	Coord:1,
    DKind: 1,
	LF:[0,1,1,1,1,1,1],
	//ZF:[0,0,0,2,2,0,0],
    CanSelectCard: 1, 
    LevelName: "二爷海",  
    LvlEName: 11451,  
    SunNum: 100,
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
     }
},
{
    AZ: [
    [oNewspaperZombie2,1,1,[1]]
    ], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1,5,7,10,15,20],
        a2: [50,80,140,180,250,300,500]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    }
});
