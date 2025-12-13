var oGraveBuster1=InheritO(oGraveBuster, {
EName: "oGraveBuster1",	
SunNum:100,
coolTime:2.5
});
var oCoffeeBean1=InheritO(oCoffeeBean, {
EName: "oCoffeeBean1",	
SunNum:100,
coolTime:2.5
});
oS.Init({
PName:[oGatlingPea,oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater,oPuffShroom,oSunShroom,oFumeShroom,oGraveBuster1,oHypnoShroom,oScaredyShroom,oIceShroom,oDoomShroom,oSquash,oThreepeater,oJalapeno,oSpikeweed,oTorchwood,oTallNut,oPlantern,oCactus,oBlover,oSplitPea,oStarfruit,oPumpkinHead,oFlowerPot,oCoffeeBean1,oGarlic,oGloomShroom,oTwinSunflower,oSpikerock],
ZName:[oZombie,oZombie2,oZombie3,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oImp,oNewspaperBoss],
PicArr:["images/interface/background1.jpg"],
backgroundImage:"images/interface/background1.jpg",
CanSelectCard:1,
SunNum:114514,
LevelName:"??",
LvlEName:"boss",
LargeWaveFlag:{16:$("imgFlag1")},
StartGameMusic:"Ultimate battle"
},
{
AZ:[[oNewspaperBoss,0,100,[10]],
   [oZombie,1,0]],
FlagNum:20,
FlagToSumNum:{
    a1: [19],
	a2: [0,1]},
FlagToMonitor:{
20:[ShowFinalWave,0]
}});
