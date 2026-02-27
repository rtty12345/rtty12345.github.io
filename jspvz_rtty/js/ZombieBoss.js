oNewspaperBoss = InheritO(oNewspaperZombie2, {
  EName: "oNewspaperBoss",
  CName: "读报Boss",
  OrnHP: 90000,
  Lvl: 200,
  LostPaperGif: 13,
  StandGif: 14,
  width: 432,
  HP: 15100,
  height: 328,
  beAttackedPointL: 120,
  beAttackedPointR: 260,
  AKind: 2,
SunNum:2000,
  CanPass: function(d, c) {
    return c
  },
	Act:function(){},
  getr: function() {},
  AudioArr: ["newspaper_rarrgh"],
  Produce: '被神秘力量改造的“僵尸”<p>韧性：<font color="#FF0000">极高</font><br>报纸韧性：<font color="#FF0000">极高</font><br>速度：0，而后慢(失去报纸后)</p>被神秘力量改造的物体，它并不是僵尸',
  ChkActs: function(h, f, j, e) {
    var d, c, g;
    h.Ornaments !== 0 && (h.ZX <= 720) && (h.Speed = h.oSpeed = 0);
    !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.getHit0(h, 114514), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
      R: f,
      ar: [oS.R - 1],
      CustomTop: 400 - h.height + h.GetDY()
    })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
    if (h.HPlook && !h.bHP) {
      h.bHP = 1;
      var b = NewEle("dHP", "div", "position:absolute;color:#fff;top:250px;left:160px;width:100%;font-size:12px;", "", EDAll);
      var A = "hp" + Math.random();
      dHP.id = A;
      var C = $(A);
      oSym.addTask(1, function(C, h, b) {
        ClearChild(C);
        if (h.HP >= h.BreakPoint && $Z[h.id]) {
          $(h.id) && $(h.id).appendChild(C);
          if (!h.Ornaments) {
            b.innerHTML = '<div>' + Math.round(h.HP) + "</div>";
          } else {
            b.innerHTML = '<div>' + Math.round(h.OrnHP) + "+" + Math.round(h.HP) + "</div>"
          }
        }
        oSym.addTask(5, arguments.callee, [C, h, b])
      }, [C, h, b]);
    }
    this.changeR(this);
    this.PrivateAct && this.PrivateAct(this);
    !this.cannotCheck && this.CheckSkills(this);
    return g
  },
  getExplosion: function() {
    this.getHit0(this, 2000, 0)
  },
  getThump: function() {
    this.getHit0(this, 2000, 0)
  },
  DisappearDie: function() {
    this.getHit0(this, 2000, 0)
  },
  ExplosionDie: function() {
    this.getHit0(this, 2000, 0)
  },
  changeR: function(a) {
    if (!a.Change&&a.beAttacked&&$Z[a.id]) {
      a.Change = true;
      oSym.addTask(1500 + (a.OrnHP * 0.01), function(a) {
            a.ZX +=5;
			a.AttackedLX += 5;
			a.AttackedRX += 5; 
			a.X += 5;
			SetStyle(a.Ele, {
            left: a.X + "px"
          });
        a.ChangeR(a);
        if (a.OrnHP >= 80000) {
          oP.SetTimeoutZombie([oZombie, oZombie2, oZombie3], 0);
		  oP.SetTimeoutTomZombie([oZombie]);
          oP.NumZombies += 3;
        } else if (a.OrnHP >= 60000) {
		try{AppearTombstones(8, 9, 1);}catch{};
          oP.SetTimeoutZombie([oNewspaperZombie, oNewspaperZombie,oZombie, oZombie2, oZombie3], 0);
          oP.SetTimeoutTomZombie([oZombie]);
          oP.NumZombies += 5;
        } else if (a.OrnHP >= 40000) {
          try{AppearTombstones(8, 9, 1);}catch{};
          oP.SetTimeoutZombie([oNewspaperZombie, oScreenDoorZombie, oScreenDoorZombie,oPeaZombie], 0);
          oP.SetTimeoutTomZombie([oZombie, oZombie2, oZombie3]);
          oP.NumZombies += 4;
        } else if (a.OrnHP >= 30000) {
          try{AppearTombstones(8, 9, 1);}catch{};
          oP.SetTimeoutZombie([oNewspaperZombie, oScreenDoorZombie, oFootballZombie,oPeaZombie], 0);
          oP.SetTimeoutTomZombie([oZombie, oZombie2, oZombie3,oScreenDoorZombie]);
          oP.NumZombies += 4;
        }else if (a.OrnHP >= 10000) {
          try{AppearTombstones(6, 9, 2);}catch{};
          oP.SetTimeoutZombie([oFootballZombie, oFootballZombie, oPeaZombie, oScreenDoorZombie,oPeaZombie], 0);
          oP.SetTimeoutTomZombie([oZombie2, oZombie3,oNewspaperZombie,oScreenDoorZombie]);
          oP.NumZombies += 5;
        } else {
          try{AppearTombstones(4, 9, 5);}catch{};
          oP.SetTimeoutZombie([oNewspaperZombie2,oFootballZombie, oNewspaperZombie,oNewspaperZombie3,oFootballZombie], 0);
          oP.SetTimeoutTomZombie([oZombie2, oZombie3,oNewspaperZombie,oFootballZombie,oScreenDoorZombie]);
          oP.NumZombies += 5;
        }
        a.Change = false;
      }, [a])
    }
  },
  CheckSkills: function(a) {
    a.cannotCheck = 1;
    oSym.addTask(1300 + (a.OrnHP * 0.01), function(a) {
	var Num=Math.floor(Math.random() * a.Skill.length);
      a.Skill[Num].func(a);
      a.OrnHP<20000&&a.Skill[Math.floor(Math.random() * a.Skill.length)].func(a);
      a.cannotCheck = 0;
	NewEle("DivTeach", "div", 0, 0, EDAll);
	innerText($("DivTeach"),a.Skill[Num].name);
	oSym.addTask(500, ClearChild,[$("DivTeach")]);
    }, [a])
  },
  Skill: [{
      name: "墓碑炸弹",
      tip: "向前发射并向上下各散射两个墓碑吞噬者，击中植物或魅惑僵尸直接在当格生成墓碑",
      func: function(a) {
        let i = 0,
          max = 5;
        var timer = setInterval(function() {
            i++;
            let z = $(a.id);
            let div = $n("div");
            let d = "tPea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/GraveBuster/GraveBuster.gif">';
            EditEle(div, 0, {
              position: "absolute",
              transform: "rotateY(20deg)",
              zIndex: "24",
              left: a.ZX + "px",
              top: a.pixelTop + 160 + "px"
            }, EDPZ, 0);
            oSym.addTask(1, function(z, d, a, i) {
                let pea = $(d);
                let y = (i <= 2 ? (Math.random() * 4 + 0) : (i <= 4 ? 0 : Math.random() * 0 - 4));
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                $(d).style.top = $(d).offsetTop - y + "px";
                let C = GetC(a.ZX + 40);
                for (let i = 3; i >= 0; i--) {
                  for (let j = 1; j <= C; j++) {
                    let p = oGd.$[GetR($(d).offsetTop + 100) + "_" + j + "_" + i];
                    p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains") && (p.AttackedLX < $(d).offsetLeft) && (p.AttackedRX > $(d).offsetLeft) && (PlayAudio("explosion"), (PrivateTombstones(p.R, p.C)), ($(d) && ClearChild($(d))));
                    let Z = oZ.getHZ1($(d).offsetLeft, GetR($(d).offsetTop + 100));
                    Z && (Z.Altitude == 1) && ((Z.DisappearDie(), (PrivateTombstones(Z.R, GetC(Z.ZX))), ($(d) && ClearChild($(d)))))
                  }
                }
                if ($(d).offsetLeft <= 0 || ($(d).offsetTop <= GetY(0) - 100) || ($(d).offsetTop >= GetY(oS.R) + 250)) {
                  ClearChild($(d));
                }
                oSym.addTask(1, arguments.callee, [z, d, a, i])
              },
              [z, d, a, i]);
            (i > max) && clearInterval(timer);
          },
          100);
      }
    },
    {
      name: "狂暴",
      tip: "使全场僵尸能踩植物，此技能持续10秒",
      func: function(a) {
		  $(a.id).style.filter = 'saturate(25%)',
        a.PrivateAct = function(a) {
            for (u in $Z) {
              e = $Z[u];	
			if(e.color!==1){
				 e.PZ&&e.beAttacked && (!e.FreeSetbodyTime)&&(
					e.color=1);
			e.caiPlants = function(a) {
		    if(a.PZ&&a.beAttacked&&(!a.FreeSetbodyTime)){
				for (let i = 0; i < 4; i++) {
				let p = oGd.$[a.R + "_" + GetC(a.ZX - 10) + "_" + i];
                    p && (p.canEat) && p.getHurt(a, 1, 100);
				        }
			        }
                return 1;
				}
			}
		}
	};
          $Z[a.id] && oSym.addTask(1000, function(a) {
            a.PrivateAct = function() {};
			$(a.id).style.filter = 'saturate(100%)';
            for (u in $Z) {
              e = $Z[u];
                e.caiPlants =function(){return 0};
				e.color=0;
            }
          }, [a])
      }
    },
{
name:"The world",
tip:"使场上植物停止攻击,持续7秒，此技能会在破报期间立刻发动",
func:function(){
for (u in $P) e = $P[u], e && (e.AttTime=700),oSym.addTask(700,function(e){e && (e.AttTime=0)},[e]);
}
},
{
name:"重装出击",
tip:"场上出现大量寒冰铁门或橄榄",
func:function(){
	for(i=Math.max(Math.ceil(a.OrnHP/7000),7);i<=9;i++){
		for(l=1;l<=oS.R;l++){
         CustomZombie(Math.random()*100>10?oFootballZombie:oPeaZombie,l,i);
		}
	}
 }
},
{
name:"火力压制",
tip:"场上出现玉米二爷",
func:function(){
	for(i=8;i<=9;i++){
	  for(l=1;l<=oS.R;l++){
		CustomZombie(oNewspaperZombie3,l,i);	Math.random()*100>5&&CustomZombie(oFootballZombie1,7,Math.round(Math.random()*4+1));
		}
	}
 }
},

{
name:"天罚",
tip:"后排随机一行出现窝瓜二爷",
func:function(){
	var b=Math.round(Math.random()*3+2);
	  for(l=1;l<=oS.R;l++){
		var a=CustomZombie(oNewspaperZombie,l,b);
		a.PrivateBirth=function(){};
		a.Act=a.Act1;
		a.ActH=a.ActH1;
	}
 }
}
  ],
shootPea:function(){},
  Init: function(e, g, c, b) {
    var a = 0,
      f = this,
      d = [];
    g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
    while (--b) {
      g.CanPass(b, c[b]) && (d[a++] = b)
    }
    g.ArR = d;
    g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:432px;height:328px;top:", 'px" src="', '"></div>']
  },
  GoingDieHead: function(c, a, b) {
    oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:350px;height:372px;left:" + (b.AttackedLX - 40) + "px;top:" + (b.pixelTop - 40) + "px;z-index:" + b.zIndex, EDPZ)])
  },
  getShadow: function(a) {
    return "width:172px;height:72px;left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 44) + "px"
  },
  PrivateAct: function() {},
  GoingDie: function(b) {
    var a = this,
      c = a.id;
	for (i in $Z)i!==c&&$Z[i].ExplosionDie();
    a.EleBody.src = b;
    oSym.addTask(200, ClearChild, [NewImg(0, a.PicArr[a.HeadGif] + Math.random(), "width:500px;height:372px; left:" + a.AttackedLX + "px;top:" + (a.pixelTop - 20) + "px;z-index:" + a.zIndex, EDPZ)]);
    a.beAttacked = 0;
    a.FreeFreezeTime = a.FreeSetbodyTime = a.FreeSlowTime = 0;
    a.AutoReduceHP(c)
  },
  getbedevil: function() {
    this.getHit0(this, 2000, 0)
  },
  getPoison: function(e, b, c) {
    this.getHit0(this,60,0)
  },
  CrushDie:function(){this.getHit0(this,2,0)},
  CheckOrnHP: function(g, h, d, c, f, b, a) {
    var e = OrnNoneZombies.prototype;
    (g.OrnHP = d -= c) < 1 && (
      g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit,
      oSym.addTask(300,
        function(m, l) {
          var k = $Z[m];
          if (!k) {
            return
          }
          var j = CZombies.prototype;
		for (u in $P) e = $P[u], e && (e.AttTime=1000),oSym.addTask(1000,function(e){e && (e.AttTime=0)},[e]);
          try {
            AppearTombstones(8, 9, 12)
          } catch {};
          for (i = 5; i <= 7; i++) {
            for (l = 1; l <= oS.R; l++) {
              for (A = 1; A < 4; A++) {
                oGd.$[l + "_" + i + "_" + A] && (PrivateTombstones(l, i))
              }
            }
          };
          k.oSpeed = 0.8;
          k.Speed = 0.8;
          if (!k.beAttacked) {
            return
          }
          PlayAudio("newspaper_rarrgh2");
          k.EleBody.src = l;
          k.JudgeAttack()
        },
        [h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
  }
}),
oHypnoShroomBoss = InheritO(oZombie, {
  EName: "oHypnoShroomBoss",
  CName: "叛变的魅惑菇",
  Lvl: 200,
width: 200,
height: 176,
  HP: 80100,
  beAttackedPointL: 20,
  beAttackedPointR: 122,
  AKind: 2,
SunNum:2000,
  CanPass: function(d, c) {
    return c
  },
Act:function(){},
getr: function() {},
PicArr: (function() {
            var a = "images/Plants/HypnoShroom/HypnoShroom.gif";
            return ["images/Card/Plants/HypnoShroom.png", a, a, a, a, a, a, a+ $Random, a, a]
})(),
  Produce: '意料之外，情理之中<p>韧性：<font color="#FF0000">极高（80100）</font><br>速度：0',
  ChkActs: function(h, f, j, e) {
    var d, c, g;
    (h.ZX <= 720) && (h.Speed = h.oSpeed = 0);
    !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.getHit0(h, 114514), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
      R: f,
      ar: [oS.R - 1],
      CustomTop: 400 - h.height + h.GetDY()
    })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
    if (h.HPlook && !h.bHP) {
      h.bHP = 1;
      var b = NewEle("dHP", "div", "position:absolute;color:#fff;top:250px;left:160px;width:100%;font-size:12px;", "", EDAll);
      var A = "hp" + Math.random();
      dHP.id = A;
      var C = $(A);
      oSym.addTask(1, function(C, h, b) {
        ClearChild(C);
        if (h.HP >= h.BreakPoint && $Z[h.id]) {
          $(h.id) && $(h.id).appendChild(C);
            b.innerHTML = '<div>' + Math.round(h.OrnHP) + "+" + Math.round(h.HP) + "</div>"
        }
        oSym.addTask(5, arguments.callee, [C, h, b])
      }, [C, h, b]);
    }
    this.changeR(this);
    this.PrivateAct && this.PrivateAct(this);
    !this.cannotCheck && this.CheckSkills(this);
    return g
  },
  getExplosion: function() {
    this.getHit0(this, 2000, 0)
  },
  getThump: function() {
    this.getHit0(this, 2000, 0)
  },
  DisappearDie: function() {
    this.getHit0(this, 2000, 0)
  },
  ExplosionDie: function() {
    this.getHit0(this, 2000, 0)
  },
  changeR: function(a) {
    if (!a.Change&&a.beAttacked&&$Z[a.id]) {
      a.Change = true;
      oSym.addTask(1500 + (a.HP * 0.01), function(a) {
            a.ZX +=5;
			a.AttackedLX += 5;
			a.AttackedRX += 5; 
			a.X += 5;
			SetStyle(a.Ele, {
            left: a.X + "px"
          });
        a.ChangeR(a);
        if (a.HP >= 75000) {
          oP.SetTimeoutZombie([oZombie, oZombie2, oZombie3,oImp], 0);
          oP.NumZombies += 4;
        } else if (a.OrnHP >= 65000) {
          oP.SetTimeoutZombie([oConeheadZombie,oBucketheadZombie,oNewspaperZombie,oZombie2, oZombie3,oPoleVaultingZombie], 0);
          oP.NumZombies += 6;
        } else if (a.HP >= 55000) {
          oP.SetTimeoutZombie([oConeheadZombie,oBucketheadZombie,oNewspaperZombie,oZombie3,oPoleVaultingZombie,oJackinTheBoxZombie,oFootballZombie], 0);
          oP.NumZombies += 7;
        } else if (a.HP >= 40000) {
          oP.SetTimeoutZombie([oBucketheadZombie,oNewspaperZombie,oSceeenDoorZombie,oPoleVaultingZombie,oJackinTheBoxZombie,oFootballZombie,oPeaZombie,oDancingZombie,oPoleVaultingZombie2,oNewspaperZombie,oJalapenoZombie], 0);
          oP.NumZombies += 9;
        }else if (a.HP >= 30000) {
          oP.SetTimeoutZombie([oNewspaperZombie,oSceeenDoorZombie,oFootballZombie,oPeaZombie,oDancingZombie,oPoleVaultingZombie2,oNewspaperZombie,oPoleVaultingZombie,oJalapenoZombie], 0);
          oP.NumZombies += 9;
        } else if (a.HP >= 15000) {
          oP.SetTimeoutZombie([oNewspaperZombie,oSceeenDoorZombie,oFootballZombie,oPeaZombie,oDancingZombie2,oPoleVaultingZombie2,oNewspaperZombie,oPoleVaultingZombie1,oJalapenoZombie,oBucketheadZombie,oDancingZombie2,oFlagZombie], 0);
          oP.NumZombies += 12;
        }else if (a.HP >= 5000) {
          oP.SetTimeoutZombie([oNewspaperZombie3,oSceeenDoorZombie,oFootballZombie,oPeaZombie,oDancingZombie,oPoleVaultingZombie2,oNewspaperZombie,oPoleVaultingZombie1,oJalapenoZombie,oBucketheadZombie,oDancingZombie2,oFlagZombie,oNewspaerZombie,oFlagZombie], 0);
          oP.NumZombies += 14;
        }else {
          oP.SetTimeoutZombie([oNewspaperZombie3,oSceeenDoorZombie,oFootballZombie,oPeaZombie,oDancingZombie,oPoleVaultingZombie2,oNewspaperZombie2,oPoleVaultingZombie1,oJalapenoZombie,oBucketheadZombie,oDancingZombie2,oFlagZombie,oNewspaerZombie,oFlagZombie,oZombie,oZombie2,oZombie3,oPoleVaultingZombie,oJackinTheBoxZombie], 0);
          oP.NumZombies += 18;
        }
        a.Change = false;
      }, [a])
    }
  },
  CheckSkills: function(a) {
    a.cannotCheck = 1;
    oSym.addTask(2000 + (a.OrnHP * 0.01), function(a) {
	var Num=Math.floor(Math.random() * a.Skill.length);
      a.Skill[Num].func(a);
      a.OrnHP<20000&&a.Skill[Math.floor(Math.random() * a.Skill.length)].func(a);
      a.cannotCheck = 0;
	NewEle("DivTeach", "div", 0, 0, EDAll);
	innerText($("DivTeach"),a.Skill[Num].name);
	oSym.addTask(500, ClearChild,[$("DivTeach")]);
    }, [a])
  },
  Skill: [
{
name:"天罚",
tip:"后排随机一行出现路障，铁桶，窝瓜二爷",
func:function(a){
	var b=Math.round(Math.random()*3+2);
	  for(l=1;l<=oS.R;l++){
		var a=CustomZombie(a.HP>60000?oConeheadZombie:a.HP>30000?oBucketheadZombie:oNewspaperZombie,l,b);
		a.PrivateBirth=function(){};
		a.Act=a.Act1;
		a.ActH=a.ActH1;
	}
 }
},
{
name:"背叛",
tip:"随机将植物变为僵尸",
func:function(b){	    
	let a = [];
      for (let i in oGd.$) {
        let p = oGd.$[i];
        if (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains"&&p.EName != "oSpikeweed1") {
          a.push(oGd.$[i]);
        }
      }
      var i = a.length;
	if(a.length){
      let l = GetX(a[i].C) - 80,
        t = GetY(a[i].R) - 80;
      oSym.addTask(200, ClearChild, [NewImg(0, "images/Plants/PotatoMine/PotatoMine_mashed.gif", "left:" + l + "px;top:" + t + "px;height:93px;width:132px;z-index:25;", EDPZ)]);
        PlayAudio("potato_mine");
	while(i--){
        a[i]&&Math.random()*60000>a.HP&&a[i].Die();
	}
  }
 }
}
  ],
shootPea:function(){},
  Init: function(e, g, c, b) {
    var a = 0,
      f = this,
      d = [];
    g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
    while (--b) {
      g.CanPass(b, c[b]) && (d[a++] = b)
    }
    g.ArR = d;
    g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:432px;height:328px;top:", 'px" src="', '"></div>']
  },
  getShadow: function(a) {
    return "width:172px;height:72px;left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 44) + "px"
  },
  PrivateAct: function() {},
  GoingDie: function(b) {
    var a = this,
      c = a.id;
	for (i in $Z)i!==c&&$Z[i].DisappearDie();
    a.EleBody.src = b;
    a.FreeFreezeTime = a.FreeSetbodyTime = a.FreeSlowTime = 0;
    a.AutoReduceHP(c)
  },
  getbedevil: function() {},
  getPoison: function(e, b, c) {
    this.getHit0(this,60,0)
  },
  CrushDie:function(){this.getHit0(this,2,0)}
})
