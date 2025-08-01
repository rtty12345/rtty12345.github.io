var CZombies = function(b, a) {
	return (a = function() {}).prototype = {
		name: "Zombies",
		HP: 270,
		Lvl: 1,
		NormalGif: 2,
		CardGif: 0,
		StaticGif: 1,
		StandGif: 2,
		hard:0,
		BookHandBack: 0,
		AudioArr: [],
		CanSelect: 1,
		CanDisplay: 1,
		BookHandPosition: "50% 70%",
		AttackGif: 3,
		LostHeadGif: 4,
		LostHeadAttackGif: 5,
		HeadGif: 6,
		DieGif: 7,
		LostPaperSpeed:1.6,
		BoomDieGif: 8,
		width: 166,
		height: 144,
		beAttackedPointL: 82,
		beAttackedPointR: 156,
		BreakPoint: 90,
		SunNum: 50,
		coolTime: 0,
		Ornaments: 0,
		OrnHP: 0,
		OSpeed: 1.6,
		Speed: 1.6,
		CSS_fliph: "",
		CSS_alpha: "",
		AKind: 0,
		beAttacked: 1,
		isAttacking: 0,
		Attack: 100,
		WalkDirection: 0,
		LivingArea: 1,
		Altitude: 1,
		FreeSetbodyTime: 0,
		FreeFreezeTime: 0,
		FreeSlowTime: 0,
		CanPass: function(d, c) {
			return c && c != 2
		},
		CanGrow: function(d, c, e) {
			return this.CanPass(c, oGd.$LF[c]) && (oS.ArP ? e > oS.ArP.ArC[1] : true);
		},
        ChkActs: function(h, f, j, e) {
            var d, c, g;
            !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
                R: f,
                ar: [oS.R - 1],
                CustomTop: 400 - h.height + h.GetDY()
            })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
	if(h.HPlook&&!h.bHP){
	h.bHP=1;
    var b = NewEle("dHP", "div", "position:absolute;color:#fff;top:" + (h.pixelTop + 100) + "px;left:" + (h.ZX+80) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "hp" + Math.random();
    dHP.id = A;
    var C = $(A);
    b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
    oSym.addTask(1, function(C, h, b) {
      ClearChild(C);
      if (h.HP >=h.BreakPoint && $Z[h.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (h.ZX+80) + "px";
        b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, h, b])
    }, [C, h, b]);
	}
            this.PrivateAct && this.PrivateAct(this);
            return g
        },
		ChkActs1: function(g, e, h, d) {
			var c, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), !g.isAttacking ? (g.AttackedLX += (c = g.Speed)) > oS.W ? (h.splice(d, 1), g.DisappearDie(), f = 0) : (g.ZX = g.AttackedRX += c, g.Ele.style.left = Math.ceil(g.X += c) + "px", f = 1) : f = 1) : f = 1;
			this.bedevilAct&&this.bedevilAct(this);
			return f
		},
		GetDX: function() {
			return - 110
		},
		GetDY: function() {
			return - 10
		},
		GetDTop: 0,
		ChangeR: function(e) {
			var h = e.R,
			g = e.ar || [],
			j = e.CustomTop,
			d = this,
			q = h - 1,
			l,
			k = d.id,
			m = -1,
			f = d.Ele,
			n = d.EleBody,
			i = oGd.$LF,
			c; ! g.length && (d.CanPass(q, i[q]) && (g[++m] = q), d.CanPass(q += 2, i[q]) && (g[++m] = q));
			g.length ? (l = !d.WalkDirection ? -5:5, d.ZX += l, d.AttackedLX += l, d.AttackedRX += l, d.X += l, q = g[Math.floor(Math.random() * g.length)], SetStyle(f, {
				left: d.X + "px",
				top: (d.pixelTop = j == undefined ? GetY(q) - d.height + d.GetDY() : j) + "px",
				zIndex: d.zIndex = 3 * q + 1
			}), d.isAttacking && (n.src = d.PicArr[d.NormalGif]), oZ.moveTo(k, h, q)) : n.src = d.PicArr[d.NormalGif];
			d.isAttacking = 0
		},
		getShadow: function(c) {
			return "left:" + (c.beAttackedPointL - 10) + "px;top:" + (c.height - 22) + "px"
		},
shootPea:function(a){
	if(!a.A){
	a.A=1;
	oSym.addTask(75, function(a) {
        if (!$Z[a.id]) {
          return
        }
	if(!a.PZ){
	a&&a.shootbedevilPea(a);
	return;
	}
        let z = $(a.id);
        let div = $n("div");
        let d = "Pea" + Math.random();
        div.id = d;
        div.innerHTML = '<img src="images/Plants/PB01.gif">';
        EditEle(div, 0, {
          position: "absolute",
          transform: "rotateY(20deg)",
          zIndex: "24",
          left: a.ZX + "px",
          top: a.pixelTop + 40 + "px"
        }, EDPZ, 0)
        oSym.addTask(1, function(z, d, a) {
          try {
            $(d).style.left = $(d).offsetLeft - 5 + "px";
            let pea = $(d);
            let C = GetC(a.ZX + 40);
            for (let i = 3; i >= 0; i--) {
              for (let j = 1; j <= C; j++) {
                let p = oGd.$[a.R + "_" + j + "_" + i];
                p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" &&
                  p.EName != "oJalapeno" && p.EName != "oDoomShroom" && p.EName != "oSunFlower") && ((p.AttackedLX + $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"), (p.HP -= 20), ($(d) && ClearChild($(d))));
                p && (p.canEat) && (p.HP <= 0) && p.Die();
              }
            }
	let p = oZ.getArHZ($(d).offsetLeft + 50,a.ZX - 10, a.R);
          let i = p.length;
          while (i--) {
            p && (p[i].Altitude == 1) && ((p[i].getPea(p[i], 20, 0), ($(d) && ClearChild($(d)))));
          }
            if ($(d).offsetLeft <= 0) {
              ClearChild($(d));
              $(d).isDie = true;
            };
            !($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a])
          } catch (e) {}
        }, [z, d, a]);
        a.HP > 60&&(a.PZ)&&oSym.addTask(125, arguments.callee, [a])
      }, [a]);
    }
  },
shootbedevilPea:function(a) {
    if (!a.eW) {
      a.Speed = 1;
      a.eW= 1;
      oSym.addTask(75, function(a) {
        if (!$Z[a.id]) {
          return
        }
        let z = $(a.id);
        let div = $n("div");
        let d = "Pea" + Math.random();
        div.id = d;
        div.innerHTML = '<img src="images/Plants/PB00.gif">';
        EditEle(div, 0, {
          position: "absolute",
          transform: "rotateY(20deg)",
          zIndex: "24",
          left: a.ZX + "px",
          top: a.pixelTop + 40 + "px"
        }, EDPZ, 0)
        oSym.addTask(1, function(z, d, a) {
          $(d).style.left = $(d).offsetLeft + 5 + "px";
          let pea = $(d);
          let p = oZ.getArZ(a.ZX - 10, $(d).offsetLeft + 50, a.R);
          let i = p.length;
          while (i--) {
            p && (p[i].Altitude == 1) && ((p[i].getPea(p[i], 20, 0), ($(d) && ClearChild($(d)))));
          }
          if ($(d).offsetLeft >900) {
            ClearChild($(d));
          };
	oSym.addTask(1, arguments.callee, [z, d, a])
        }, [z, d, a]);
        a.HP > 60&& (!a.PZ) && oSym.addTask(75, arguments.callee, [a])
      }, [a]);
    }
  },
		Init: function(g, i, e, d) {
			var c = 0,
			h = this,
			f = [];
			i.AttackedRX = (i.X = (i.ZX = i.AttackedLX = g) - i.beAttackedPointL) + i.beAttackedPointR;
			while (--d) {
				i.CanPass(d, e[d]) && (f[c++] = d)
			}
			i.ArR = f;
			i.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + i.getShadow(i) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);top:", 'px" src="', '"></div>']
		},
		getHTML: function(d, g, i, h, f, k, j, c) {
			var e = this.ArHTML;
			return e[0] + d + e[1] + f + e[2] + g + e[3] + i + e[4] + h + e[5] + k + e[6] + j + e[7] + c + e[8]
		},
		prepareBirth: function(f) {
			var h = this,
			e = h.ArR,
			d = e[Math.floor(Math.random() * e.length)],
			g = GetY(d) + h.GetDY(),
			c = g - h.height,
			j = 3 * d + 1,
			i = h.id = "Z_" + Math.random();
			h.R = d;
			h.pixelTop = c;
			h.zIndex = j; (h.delayT = f) && (h.FreeSetbodyTime = oSym.Now);
			return h.getHTML(i, h.X, c, j, "none", "auto", h.GetDTop, h.PicArr[h.NormalGif])
		},
		CustomBirth: function(i, c, d, m) {
			var g = this,
			f = GetY(i) + g.GetDY(),
			h = f - g.height,
			k = 3 * i + 1,
			e = g.id = "Z_" + Math.random(),
			l = g.beAttackedPointL,
			j = g.beAttackedPointR;
			g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = GetX(c) - (j - l) * 0.5) - l) + j;
			g.R = i;
			g.pixelTop = h;
			g.zIndex = k; (g.delayT = d) && (g.FreeSetbodyTime = oSym.Now);
			return g.getHTML(e, g.X, h, k, "none", m || 0, g.GetDTop, g.PicArr[g.NormalGif])
		},
		BirthCallBack: function(f) {
			var e = f.delayT,
			d = f.id,
			c = f.Ele = $(d);
			f.EleShadow = c.firstChild;
			f.EleBody = c.childNodes[1];
			e ? oSym.addTask(e,
			function(h, g) {
				var i = $Z[h];
				i && (i.FreeSetbodyTime = 0, SetBlock(g))
			},
			[d, c]) : SetBlock(c)
		},
		CustomZombies:function(a, e, b, z){
         asyncInnerHTML(a.CustomBirth(e, b, 0, "auto"), function(n, m) {
             EDPZ.appendChild(n);
             m.Birth();
             z && m.bedevil(m);
             //document.write()
         }, 
a)
     }, 
  CustomZombie:function(h, e, b){
	  ++oP.NumZombies,
         asyncInnerHTML((a = new h).CustomBirth(e, b, 1,"auto"), function(n, m) {
             EDPZ.appendChild(n);
             m.Birth();
             //document.write()
         }, 
a);
return a;
     }, 
       Birth: function() {
            var num=Math.round(Math.random()*100);
		c = this;
	   if(c&&c.hard==1&&num>=66){c.HP*=1.35;c.OrnHP*=1.35
	    }else if(c&&c.hard==1&&num>=33){c.Speed*=1.5,c.oSpeed*=1.5,c.LostPaperSpeed+=3
	    }else if(c&&c.hard==1&&num<33){c.Attack+=100};
            $Z[c.id] = c;
            oZ.add(c);
            c.BirthCallBack(c);
            c.PrivateBirth && c.PrivateBirth(c);
        },
	OpenBox: function(b) {
            var a = $Z[b];
            oSym.addTask(0,
                function(c) {
                    $Z[c] && (oSym.addTask(0,
                        function(f) {
                            var e = $Z[f],
                                d;
                            e && (d = NewImg("", "images/interface/blank.png", "width:306px;height:300px;left:" + (e.X - 16) + "px;top:" + (e.pixelTop - 90) + "px;z-index:20"), PlayAudio("explosion"),EDPZ.appendChild(d), oSym.addTask(70, ClearChild, [d]), e.PZ ? ((function(k, g) {
                                var q = Math.max(1, k - 1),
                                    o = Math.min(oS.R, k + 1),
                                    n = Math.max(1, g - 1),
                                    h = Math.min(oS.C, g + 1),
                                    r = oGd.$,
                                    l,
                                    j = "",
                                    m;
                                do {
                                    g = n;
                                    do {
                                        j = q + "_" + g + "_";
                                        for (l = 0; l < 4; l++) {
                                            (m = r[j + l]) && m.BoomDie()
                                        }
                                    } while (g++ < h)
                                } while (q++ < o)
                            })(e.R, GetC(e.ZX))) : (function(j, l) {
                                var m = j - 120,
                                    o = j + 120,
                                    h = Math.max(1, l - 1),
                                    g = Math.min(oS.R, l + 1),
                                    n,
                                    k;
                                do {
                                    k = (n = oZ.getArZ(m, o, h)).length;
                                    while (k--) {
                                        n[k].ExplosionDie()
                                    }
                                } while (h++ < g)
                            })(e.ZX,e.R))
                        },
                        [c]))
                },
                [b])
        },
	getCrushed: function(c) {
			return true
		},
        getRaven: function(a, Attack1, Attack2) {
            Attack1 = Attack1 == undefined?200:Attack1;
            Attack2 = Attack2 == undefined?100:Attack2;
            if(this.OrnHP>=Attack1){
               this.OrnHP-=Attack2;
            }else if(this.OrnHP<1){
                if(this.HP>Attack1){
                    this.HP-=Attack2;
                }else if(this.HP<=Attack1){
                    return this.DisappearDie(), 1
                }
            }else if(this.OrnHP<Attack1 && this.OrnHP>1){
                if(this.OrnHP+this.HP>Attack1){
                    this.OrnHP=0;
                    this.HP-=(Attack2-this.OrnHP);
                }else if(this.OrnHP+this.HP<=Attack1){
                    return this.DisappearDie(), 1
                }
            }
        },
        getExplosion: function(Attack,howDie,callback) {
            Attack = Attack == undefined?1800:Attack;
            howDie = howDie == undefined?"ExplosionDie":howDie;
            if(this.OrnHP>=Attack){
                this.OrnHP-=Attack;
            }else if(this.OrnHP<1){
                if(this.HP>Attack){
                    this.HP-Attack;
                }else if(this.HP<=Attack){
                    this[howDie](this);
                }
            }else if(this.OrnHP<Attack && this.OrnHP>1){
                if(this.OrnHP+this.HP>Attack){
                    this.OrnHP=0;
                    this.HP-=(Attack-this.OrnHP);
                }else if(this.OrnHP+this.HP<=Attack){
                    this[howDie](this);
                }
            }
            callback && callback();
        },
		getDispelled: function() {
		if (this.Altitude != 1 || this.AttackedRX < GetX(0)) {return;};
		this.ChkActs = function() {return 1};
		(function(id) {
			var o = $Z[id]; if (!o) return;
			var d = o.WalkDirection = 1, R = o.R, C = GetC(o.AttackedLX), sx = 50;
			o.AttackedLX += sx; o.ZX += sx; o.X += sx;
			if (o.AttackedLX > oS.W) {o.DisappearDie(); return;};
			SetStyle($(id), {left: o.X + 'px'}); oSym.addTask(2, arguments.callee, [id]);
		})(this.id);
	},
        getbedevil: function(Attack,howDie,callback) {
            Attack = Attack == undefined?114514:Attack;
            howDie = howDie == undefined?"bedevil":howDie;
            if(this.OrnHP>=Attack){
                this.OrnHP-=Attack;
            }else if(this.OrnHP<1){
                if(this.HP>Attack){
                    this.HP-=Attack;
                }else if(this.HP<=Attack){
                    this[howDie](this);
                }
            }else if(this.OrnHP<Attack && this.OrnHP>1){
                if(this.OrnHP+this.HP>Attack){
                    this.OrnHP=0;
                    this.HP-=(Attack-this.OrnHP);	
                }else if(this.OrnHP+this.HP<=Attack){
                    this[howDie](this);
                }
            }
            callback && callback();
        },
        getThump: function(Attack,callback) {
            this.getExplosion(Attack,"DisappearDie",callback);
        },
		PlayNormalballAudio: function() {
			PlayAudio("splat" + Math.floor(1 + Math.random() * 3))
		},
		PlayFireballAudio: function() {
			PlayAudio(["ignite", "ignite2"][Math.floor(Math.random() * 2)])
		},
		PlaySlowballAudio: function() {
			PlayAudio("frozen")
		},
		getFireball: function(h, e, g) {
			h.FreeSlowTime = 0;
			h.Attack = 100;
			h.FreeFreezeTime || h.FreeSetbodyTime ? (h.PlayNormalballAudio(), h.Speed = h.OSpeed) : h.PlayFireballAudio();
			var f = h.AttackedLX,
			j = h.AttackedRX,
			c = !g ? oZ.getArZ(f, f + 40, h.R) : oZ.getArZ(j - 40, j, h.R),
			d = c.length;
			while (d--) {
				c[d].getSputtering()
			}
		},
		getSputtering: function(c) {
			this.getHit2(this, c || 13, 0)
		},
		getSlow: function(h, f, g) {
			var d = oSym.Now + g,
			e = h.FreeSlowTime,
			c = 0;
			switch (true) {
			case ! e: !(h.FreeFreezeTime || h.FreeSetbodyTime) && (h.Speed = 0.5 * h.OSpeed);
				h.Attack = 50;
				h.PlaySlowballAudio();
				h.FreeSlowTime = d;
				c = 1;
				break;
			case e < d: h.FreeSlowTime = d;
				h.PlayNormalballAudio();
				c = 1
			}
			c && oSym.addTask(g,
			function(j, i) {
				var k = $Z[j];
				k && k.FreeSlowTime == i && (k.FreeSlowTime = 0, k.Attack = 100, k.Speed && (k.Speed = k.OSpeed))
			},
			[f, d])
		},
		getr:function(e,l){
		e.ZX +=l,
			e.AttackedLX += l, 
			e.AttackedRX += l, 
			e.X += l, 
			SetStyle(e.Ele, {
            left: e.X + "px"
          })
		},
		flatTire:function(){},
		getFreeze: function(d, c) {
			d.beAttacked && d.getHit0(d, 1000, 0);
			d.Speed = 0;
			oSym.addTask(1500,
			function(g, f, e) {
				ClearChild(e);
				var h = $Z[g];
				h && h.FreeFreezeTime == f && (h.FreeFreezeTime = 0, h.Attack = 50, !h.FreeSetbodyTime && (h.Speed = 0.5 * h.OSpeed, h.isAttacking && h.JudgeAttack()), oSym.addTask(1500,
				function(j, i) {
					var k = $Z[j];
					k && k.FreeSlowTime == i && (k.FreeSlowTime = 0, k.Attack = 100, !k.FreeSetbodyTime && (k.Speed = k.OSpeed))
				},
				[g, h.FreeSlowTime = oSym.Now + 1500]))
			},
			[c, d.FreeFreezeTime = oSym.Now + 1500, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", d.getShadow(d), d.Ele)])
		},
		NormalDie: function() {
			var c = this;
			try{ClearChild($("dHP"))}catch{};
			c.EleBody.src = c.PicArr[c.DieGif] + Math.random();
			oSym.addTask(250, ClearChild, [c.Ele]);
			c.HP = 0;
			delete $Z[c.id];
			c.PZ && oP.MonPrgs()
		},
		ExplosionDie: function() {
			var c = this;
			try{ClearChild($("dHP"))}catch{};
			c.EleBody.src = c.PicArr[c.BoomDieGif] + Math.random();
			oSym.addTask(300, ClearChild, [c.Ele]);
			c.HP = 0;
			delete $Z[c.id];
			c.PZ && oP.MonPrgs()
		},
		DisappearDie: function() {
			try{ClearChild($("dHP"))}catch{};
			ClearChild(this.Ele);
			this.HP = 0;
			delete $Z[this.id];
			this.PZ && oP.MonPrgs()
		},
		CrushDie: function() {
			var c = this;
			try{ClearChild($("dHP"))}catch{};
			c.GoingDieHead(c.id, c.PicArr, c);
			ClearChild(c.Ele);
			c.HP = 0;
			delete $Z[c.id];
			c.PZ && oP.MonPrgs()
		},
		GoingDieHead: function(e, c, d) {
			oSym.addTask(200, ClearChild, [NewImg(0, c[d.HeadGif] + Math.random(), "left:" + d.AttackedLX + "px;top:" + (d.pixelTop - 20) + "px;z-index:" + d.zIndex, EDPZ)])
		},
		GoingDie: function(d) {
			var c = this,
			e = c.id;
			c.EleBody.src = d;
			c.GoingDieHead(e, c.PicArr, c);
			c.beAttacked = 0;
			c.FreeFreezeTime = c.FreeSetbodyTime = c.FreeSlowTime = 0;
			c.AutoReduceHP(e)
		},
		AutoReduceHP: function(c) {
			oSym.addTask(100,
			function(e) {
				var d = $Z[e];
				d && ((d.HP -= 60) < 1 ? d.NormalDie() : d.AutoReduceHP(e))
			},
			[c])
		},
		JudgeAttack: function() {
			var g = this,
			d = g.ZX,
			e = g.R + "_",
			f = GetC(d),
			h = oGd.$,
			c; (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), g.NormalAttack(c[0], c[1])) : g.isAttacking && (g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif])
		},
		JudgeLR: function(f, d, e, c, g) {
			return e > 10 || e < 1 ? false: function() {
				d += --e + "_";
				var h = 3,
				i;
				while (h--) {
					if ((i = g[d + h]) && i.canEat) {
						return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
					}
				}
			} ()
		},
		JudgeSR: function(f, d, e, c, g) {
			return e > 9 ? false: function() {
				d += e + "_";
				var h = 3,
				i;
				while (h--) {
					if ((i = g[d + h]) && i.canEat) {
						return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
					}
				}
			} ()
		},
		JudgeAttackH1: function() {
			var e = this,
			d = oZ.getZ0(e.ZX, e.R),
			c = e.id;
			d && d.beAttacked && d.AttackedLX < 900 && d.Altitude == 1 && (e.AttackZombie(d.id), !d.isAttacking && d.AttackZombie(c))
		},
		JudgeAttackH: function() {
			var e = this,
			d = oZ.getZ0(e.ZX, e.R),
			f = e.id,
			c;
			d && d.beAttacked && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif], e.AttackZombie(f, c = d.id), !d.isAttacking && d.AttackZombie2(d, c, f)) : e.AttackZombie(f, d.id, 1)) : e.isAttacking && (e.isAttacking = 0, e.EleBody.src = e.PicArr[e.NormalGif])
		},
		AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 10, 0), h.JudgeAttack())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit0(h, 10, 0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
		Stone_of_Sinan_Up:function(){},
        NormalAttack: function(d, c) {
            PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
            oSym.addTask(50, function(e) {
                $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
            }, [d]);
            oSym.addTask(100, function(f, e) {
                var h = $Z[f],
                    g;
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && g.getHurt(h, h.AKind, h.Attack), h.JudgeAttack())
            }, [d, c]);
            this.PrivateAttack && this.PrivateAttack(this)
        },
		PZ: 1,
		ExchangeLR: function(f, d) {
			var e = f.width,
			h = f.beAttackedPointL,
			c = f.beAttackedPointR,
			g = f.Ele;
			g.style.left = (f.X = f.AttackedLX - (f.beAttackedPointL = e - c)) + "px";
			f.beAttackedPointR = e - h;
			f.EleShadow.style.cssText = f.getShadow(f);
			f.ExchangeLR2(f, f.EleBody, d)
		},
		ExchangeLR2: $User.Browser.IE ?
		function(e, c, d) {
			c.style.filter = e.CSS_alpha + (e.CSS_fliph = d ? " fliph": "")
		}: function(e, c, d) {
			c.className = d ? "fliph": ""
		},
		bedevil: function(c) {
			c.ExchangeLR(c, 1);
			c.JudgeAttack = c.JudgeAttackH;
			c.PZ = 0;
			c.WalkDirection = 1;
			c.ZX = c.AttackedRX;
			c.ChkActs = c.ChkActs1;
			oP.MonPrgs()
		},
		reNormal: function(c) {
			c.ExchangeLR(c, 0);
			c.JudgeAttack = CZombies.prototype.JudgeAttack;
			c.PZ = 1;
			c.WalkDirection = 0;
			c.ZX = c.AttackedLX;
			c.ChkActs = CZombies.prototype.ChkActs;
		},
		bedevil1: function(c) {
			c.JudgeAttack = c.JudgeAttack;
			c.PZ = 1;
			c.WalkDirection = 0;
			c.ZX = c.AttackedLX;
			c.ChkActs = c.ChkActs;
		},
        SetAlpha: $User.Browser.IE ? function(f, d, e, c) {
            d.style.filter = (f.CSS_alpha = "alpha(opacity=" + e + ")") + f.CSS_fliph
        } : function(f, d, e, c) {
            d.style.opacity = c
        }
    }, a
}(),
OrnNoneZombies = function() {
	var a = function(c, b) {
		if ((c.HP -= b) < c.BreakPoint) {
			c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]);
			c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 =c.getHit4= function() {};
			return
		}
		c.SetAlpha(c, c.EleBody, 50, 0.5);
		oSym.addTask(10,
		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
		},
		[c.id])
	};
	return InheritO(CZombies, {
		getHit: a,
		getHit0: a,
		getHit1: a,
		getHit2: a,
		getHit3: a,
		getHit4:a,
		getPea: function(e, b, c) {
			e.PlayNormalballAudio();
			e.getHit0(e, b, c)
		},
		getZPea: function(e, b, c) {
			e.PlayNormalballAudio();
			Math.round(Math.random()*1000)>5?e.getHit0(e, b, c):(e.PZ?CustomZombies(new oImp,e.R,GetC(e.ZX-1),1):CustomZombie(oImp,e.R,GetC(e.ZX+1)))
		},
		gethPea: function(e, b, c) {
			e.PlayNormalballAudio();
			e.getHit4(e, b, c)
		},
		getFirePea: function(g, c, j) {
			g.PlayFireballAudio(); (g.FreeSlowTime || g.FreeFreezeTime) && (g.Speed = g.OSpeed, g.FreeSlowTime = 0, g.FreeFreezeTime = 0);
			g.Attack = 100;
			var f = g.AttackedLX,
			h = g.AttackedRX,
			b = oZ.getArZ(f, f + 40, g.R),
			e = b.length;
			while (e--) {
				b[e].getFirePeaSputtering()
			}
			g.getHit0(g, c, j)
		},
		getFreeze1: function(d, c) {
			d.beAttacked && d.getHit0(d, 50, 0);
			d.Speed = 0;
			d.isAttacking=0;
			oSym.addTask(400,
			function(g, f, e) {
				ClearChild(e);
				var h = $Z[g];
				h && h.FreeFreezeTime == f && (h.FreeFreezeTime = 0, h.Attack = 50, !h.FreeSetbodyTime && (h.Speed = 0.5 * h.OSpeed, h.isAttacking && h.JudgeAttack()), oSym.addTask(1500,
				function(j, i) {
					var k = $Z[j];
					k && k.FreeSlowTime == i && (k.FreeSlowTime = 0, k.Attack = 100, !k.FreeSetbodyTime && (k.Speed = k.OSpeed))
				},
				[g, h.FreeSlowTime = oSym.Now + 1500]))
			},
			[c, d.FreeFreezeTime = oSym.Now + 400, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", d.getShadow(d), d.Ele)])
		},
		getFirePeaSputtering: function() {
			this.getHit0(this, 13)
		},
		getSlowPea1: function(e,b,c){
                e.getFirePea2(e,b,c);
                e.getSlow(e);
                },
		getrPea:function(e,b,c){
			e.getPea(e,b,c);
			e.getr(e,20)
		},
		getFirePea2: function(g, c, j) {
			g.PlayFireballAudio(); 
			var f = g.AttackedLX,
			h = g.AttackedRX,
			b = oZ.getArZ(f, f + 40, g.R),
			e = b.length;
			while (e--) {
				b[e].getFirePeaSputtering2()
			}
			g.getHit1(g, c, j)
		},
		getSlowPea: function(e,b,c){
		var d;
                for (d in $Z) {
		PlayAudio("frozen");
                e.getFreeze1(e, d);
		}
                },
		getFirePea1: function(g, c, j) {
			g.PlayFireballAudio(); 
			var f = g.AttackedLX,
			h = g.AttackedRX,
			b = oZ.getArZ(f, f + 40, g.R),
			e = b.length;
			while (e--) {
				b[e].getFirePeaSputtering1()
			}
			g.getHit0(g, c, j)
		},
		getFirePeaSputtering1: function() {
			this.getSnowPea(this, 13)
		},
		getFirePeaSputtering2: function() {
			this.getSnowPea(this, 13)
		},
		getSnowPea: function(f, c, g) {
			var e = f.FreeSlowTime,
			b = oSym.Now + 1000;
			e == 0 ? (f.PlaySlowballAudio(), f.Speed = 0.5 * f.OSpeed, f.Attack = 50) : f.PlayNormalballAudio();
			e < b && (f.FreeSlowTime = b, oSym.addTask(1000,
			function(h, d) {
				var i = $Z[h];
				i && i.FreeSlowTime == d && (i.FreeSlowTime = 0, i.Attack = 100, i.Speed && (i.Speed = i.OSpeed))
			},
			[f.id, b]));
			f.getHit0(f, c, g)
		}
	})
} (),
oBackupDancer = InheritO(OrnNoneZombies, {
	EName: "oBackupDancer",
	CName: "伴舞僵尸",
	OSpeed:5,
	Speed: 5,
	HP:400,
	Lvl: 1,
	StandGif: 9,
	width: 126,
	height: 152,
	beAttackedPointL: 50,
	beAttackedPointR: 95,
	PicArr: (function() {
		var a = "images/Zombies/BackupDancer/";
		return ["images/Card/Zombies/BackupDancer.png", a + "0.gif", a + "BackupDancer.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Dancing.gif" + $Random, a + "LostHeadDancing.gif" + $Random, a + "Mound.gif" + $Random]
	})(),
	bedevil: function() {
	},
	flatTire:function(){},
	getSlow: function(f, d, e) {
		var b = oSym.Now + e,
		c = f.FreeSlowTime,
		a = 0;
		switch (true) {
		case ! c: f.PlaySlowballAudio();
			f.Attack = 50;
			f.FreeSlowTime = b;
			a = 1;
			break;
		case c < b: f.PlayNormalballAudio();
			f.FreeSlowTime = b;
			a = 1
		}
		a && oSym.addTask(e,
		function(h, g) {
			var i = $Z[h];
			i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
		},
		[d, b])
	},
	getFreeze: function(b, a) {
		b.beAttacked && b.getHit0(b, 20, 0);
		oSym.addTask(400,
		function(e, d, c) {
			ClearChild(c);
			var f = $Z[e];
			f && f.FreeFreezeTime == d && (f.FreeFreezeTime = 0, f.Attack = 50, !f.FreeSetbodyTime && f.isAttacking && f.JudgeAttack(), oSym.addTask(1500,
			function(h, g) {
				var i = $Z[h];
				i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
			},
			[e, f.FreeSlowTime = oSym.Now + 1500]))
		},
		[a, b.FreeFreezeTime = oSym.Now + 400, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", b.getShadow(b), b.Ele)])
	},
	CustomBirth: function(g, d, a, b, j) {
		var e = this,
		c = GetY(g) + e.GetDY(),
		f = c - e.height,
		i = e.beAttackedPointL,
		h = e.beAttackedPointR;
		e.AttackedRX = (e.X = (e.ZX = e.AttackedLX = d - (h - i) * 0.5) - i) + h;
		e.R = g; (e.delayT = a) && (e.FreeSetbodyTime = oSym.Now);
		return e.getHTML(e.id = b, e.X, e.pixelTop = f, e.zIndex = 3 * g + 1, "none", j || 0, e.height + "px", e.PicArr[e.StandGif])
	},
	Produce: '已被辞退</p><p>韧性：<font color="#FF0000">中（400）</font><br>孩子们，我被辞退了，什么罐头我说',
	BirthCallBack: function(e) {
		var d = e.delayT,
		c = e.id,
		b = e.Ele = $(c),
		a = e.EleBody = b.childNodes[1];
		e.EleShadow = b.firstChild;
		oSym.addTask(d,
		function(g, f) {
			var h = $Z[g];
			h && (h.FreeSetbodyTime = 0, SetBlock(f))
		},
		[c, b])
	},
	ChangeChkActsTo0: function(c, b, a) {
		if (!c.PZ) {
			c.ChangeChkActsTo1(c, b, a);
			return
		}
		c.LostHeadGif = 10;
		c.NormalGif = 9; ! c.isAttacking && (a.src = c.PicArr[9]);
		c.Speed = c.DZStep = 0;
		oSym.addTask(200,
		function(e, d) {
			var f = $Z[e];
			f && f.beAttacked && f.ChangeChkActsTo1(f, e, d)
		},
		[b, a])
	},
	ChangeChkActsTo1: function(c, b, a) {
		c.LostHeadGif = 4;
		c.NormalGif = 2;
		c.DZStep = 1; ! c.isAttacking && (a.src = c.PicArr[2]);
		c.PZ && oSym.addTask(220,
		function(e, d) {
			var f = $Z[e];
			f && f.beAttacked && f.ChangeChkActsTo0(f, e, d)
		},
		[b, a])
	},
	ChkActs: function(g, d, h, c) {
		var e, b, a, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
			R: d,
			ar: [oS.R - 1],
			CustomTop: 400 - g.height + g.GetDY()
		})), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
		g.ChkSpeed(g);
		this.CheckBoomFire(this);
		return f
	},
CheckBoomFire: function (f) {
      oSym.addTask(
        1,
        function (f) {
          // 生成1到100之间的随机整数
        let randomNumber = Math.floor(Math.random() * 100) + 1;

          $Z[f.id] && randomNumber <= 100&& f.BoomFire(f.R);
         oSym.addTask(100, arguments.callee, [f]);
        },
        [f]
      );
    },
    BoomFire: function (y) {
      var s=$Z[this];
      PlayAudio("jalapeno");
      fireid = "fire_" + Math.random();
      NewImg(
        fireid,
        "images/Plants/Jalapeno/JalapenoAttack.gif",
        "width:755px;height:131px;left:120px;top:" + (GetY(y - 1) - 42) + "px",
        EDAll
      );
      oSym.addTask(
        135,
        (id) => {
          ClearChild($(id));
        },
        [fireid]
      );
      for (let i = 1; i <= oS.C; i++) {
        for (let j = 0; j < 4; j++) {
          let g = oGd.$[y + "_" + i + "_" + j];
	  if(g&&g.EName!="oHypnoShroom"&& g.EName!="oGarlic"&&g.getHurt!=function(){}&&g.EName!="oPotatoMine"&&g.EName!="oSquash"){
          this.hard==2?g&& g.getHurt(this,0,1000):g&& g.getHurt(this,0,100)
	  }else	if(g&&g.getHurt!=function(){}){
	g&&g.Die()
	  }
        }
      }
      this.DisappearDie();
    },
	ChkSpeed: function(b) {
		if (!b.DZStep) {
			return
		}
		var a = b.Speed;
		switch (true) {
		case(b.FreeFreezeTime || b.FreeSetbodyTime) == 1 : a && (b.Speed = 0);
			break;
		case b.FreeSlowTime > 0 : a != 1.75 && (b.Speed = 5);
			break;
		default:
			a != 5&& (b.Speed = 5)
		}
	}
}),
oBackupDancer1= InheritO(OrnNoneZombies, {
  EName: "oBackupDancer",
  CName: "伴舞僵尸",
  OSpeed: 3.5,
  Speed: 3.5,
  Lvl: 1,
HP:1000,
  StandGif: 9,
  CanSelect: 0,
  width: 126,
  height: 152,
  beAttackedPointL: 50,
  beAttackedPointR: 95,
  Speed: 3.5,
  OSpeed: 3.5,
  PicArr: (function() {
    var a = "images/Zombies/BackupDancer/";
    return ["images/Card/Zombies/BackupDancer.png", a + "0.gif", a + "BackupDancer.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Dancing.gif" + $Random, a + "LostHeadDancing.gif" + $Random, a + "Mound.gif" + $Random, "images/Zombies/JackinTheBoxZombie/Boom.gif" + $Random]
  })(),
	bedevil: function() {
	},
	getSlow: function(f, d, e) {
		var b = oSym.Now + e,
		c = f.FreeSlowTime,
		a = 0;
		switch (true) {
		case ! c: f.PlaySlowballAudio();
			f.Attack = 50;
			f.FreeSlowTime = b;
			a = 1;
			break;
		case c < b: f.PlayNormalballAudio();
			f.FreeSlowTime = b;
			a = 1
		}
		a && oSym.addTask(e,
		function(h, g) {
			var i = $Z[h];
			i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
		},
		[d, b])
	},
	getFreeze: function(b, a) {
		b.beAttacked && b.getHit0(b, 20, 0);
		oSym.addTask(400,
		function(e, d, c) {
			ClearChild(c);
			var f = $Z[e];
			f && f.FreeFreezeTime == d && (f.FreeFreezeTime = 0, f.Attack = 50, !f.FreeSetbodyTime && f.isAttacking && f.JudgeAttack(), oSym.addTask(1500,
			function(h, g) {
				var i = $Z[h];
				i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
			},
			[e, f.FreeSlowTime = oSym.Now + 1500]))
		},
		[a, b.FreeFreezeTime = oSym.Now + 400, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", b.getShadow(b), b.Ele)])
	},
	CustomBirth: function(g, d, a, b, j) {
		var e = this,
		c = GetY(g) + e.GetDY(),
		f = c - e.height,
		i = e.beAttackedPointL,
		h = e.beAttackedPointR;
		e.AttackedRX = (e.X = (e.ZX = e.AttackedLX = d - (h - i) * 0.5) - i) + h;
		e.R = g; (e.delayT = a) && (e.FreeSetbodyTime = oSym.Now);
		return e.getHTML(e.id = b, e.X, e.pixelTop = f, e.zIndex = 3 * g + 1, "none", j || 0, e.height + "px", e.PicArr[e.StandGif])
	},
  Produce: '当舞王僵尸摇摆时，这种僵尸四个结伙出现。</p><p>韧性：<font color="#FF0000">低</font><br>伴舞僵尸曾在位于僵尸纽约城的“咀利牙”表演艺术学院钻研过六年的舞技。',
  ChkActs: function(g, d, h, c) {
    var e, b, a, f;
    !(g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
      R: d,
      ar: [oS.R - 1],
      CustomTop: 400 - g.height + g.GetDY()
    })), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
    g.ChkSpeed(g);
    g.RandomOpenBox(g.id);
    return f
  },
flatTire:function(){},
  RandomOpenBox: function(a) {
    oSym.addTask(0,
      function(c) {
        var b = $Z[c];
        b && b.beAttacked && b.OpenBox(c)
      },
      [a])
  },

  OpenBox: function(b) {
    var a = $Z[b];
    a.EleBody.src = a.PicArr[7];
    a.ChkActs = a.ChkActs1 = function() {
      return 1
    };
    a.JudgeAttack = function() {
      var g = this,
        d = g.ZX,
        e = g.R + "_",
        f = GetC(d),
        h = oGd.$,
        c;
      (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), g.NormalAttack(c[0], c[1])) : g.isAttacking && (g.isAttacking = 0)
    };
    a.JudgeAttackH = function() {
      var e = this,
        d = oZ.getZ0(e.ZX, e.R),
        f = e.id,
        c;
      d && d.beAttacked && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif], e.AttackZombie(f, c = d.id), !d.isAttacking && d.AttackZombie2(d, c, f)) : e.AttackZombie(f, d.id, 1)) : e.isAttacking && (e.isAttacking = 0)
    };
    a.getPea = a.getSnowPea = a.getFirePeaSputtering = a.getFirePea = a.getHit = a.getHit0 = a.getHit1 = a.getHit2 = a.getHit3 = a.ChangeR = a.bedevil = function() {};
    oSym.addTask(0,
      function(c) {
        $Z[c] && (a.Status =0,PlayAudio("jack_surprise"), oSym.addTask(0,
          function(f) {
            var e = $Z[f],
              d;
            e && (d = NewImg("", "images/interface/blank.png", "width:306px;height:300px;left:" + (e.X - 16) + "px;top:" + (e.pixelTop - 90) + "px;z-index:20"), PlayAudio("explosion"), d.src = e.PicArr[12] + Math.random(), EDPZ.appendChild(d), oSym.addTask(70, ClearChild, [d]), e.PZ ? ((function(k, g) {
              var q = Math.max(1, k - 1),
                o = Math.min(oS.R, k + 1),
                n = Math.max(1, g - 1),
                h = Math.min(oS.C, g + 1),
                r = oGd.$,
		A=this,
                l,
                j = "",
                m;
              do {
                g = n;
                do {
                  j = q + "_" + g + "_";
                  for (l = 0; l < 4; l++) {
                    e.hard==2?(m = r[j + l])&&m.getHurt(e,0,1000):(m = r[j + l])&&m.getHurt(e,0,100);
                  }
                } while (g++ < h)
              } while (q++ < o)
            })(e.R, GetC(e.ZX))) : (function(j, l) {
              var m = j - 120,
                o = j + 120,
                h = Math.max(1, l - 1),
                g = Math.min(oS.R, l + 1),
                n,
                k;
              do {
                k = (n = oZ.getArZ(m, o, h)).length;
                while (k--) {
                  n[k].getExplosion(300)
                }
              } while (h++ < g)
            })(e.ZX, e.R), e.DisappearDie())
          },
          [c]))
      },
      [b])
  },
	BirthCallBack: function(e) {
		var d = e.delayT,
		c = e.id,
		b = e.Ele = $(c),
		a = e.EleBody = b.childNodes[1];
		e.EleShadow = b.firstChild;
		oSym.addTask(d,
		function(g, f) {
			var h = $Z[g];
			h && (h.FreeSetbodyTime = 0, SetBlock(f))
		},
		[c, b])
	},
	ChangeChkActsTo0: function(c, b, a) {
		if (!c.PZ) {
			c.ChangeChkActsTo1(c, b, a);
			return
		}
		c.LostHeadGif = 10;
		c.NormalGif = 9; ! c.isAttacking && (a.src = c.PicArr[9]);
		c.Speed = c.DZStep = 0;
		oSym.addTask(200,
		function(e, d) {
			var f = $Z[e];
			f && f.beAttacked && f.ChangeChkActsTo1(f, e, d)
		},
		[b, a])
	},
	ChangeChkActsTo1: function(c, b, a) {
		c.LostHeadGif = 4;
		c.NormalGif = 2;
		c.DZStep = 1; ! c.isAttacking && (a.src = c.PicArr[2]);
		c.PZ && oSym.addTask(220,
		function(e, d) {
			var f = $Z[e];
			f && f.beAttacked && f.ChangeChkActsTo0(f, e, d)
		},
		[b, a])
	},
		ChkSpeed: function(b) {
		if (!b.DZStep) {
			return
		}
		var a = b.Speed;
		switch (true) {
		case(b.FreeFreezeTime || b.FreeSetbodyTime) == 1 : a && (b.Speed = 0);
			break;
		case b.FreeSlowTime > 0 : a != 1.75 && (b.Speed = 5);
			break;
		default:
			a != 5&& (b.Speed = 5)
		}
	}
}),
oDancingZombie= InheritO(OrnNoneZombies, {
	EName: "oDancingZombie",
	CName: "舞王僵尸",
	HP:1200,
	BreakPoint: 1,
	Lvl: 3,
	StandGif: 9,
	SunNum: 400,
	beAttackedPointL: 40,
	beAttackedPointR: 85,
	width: 184,
	height: 176,
	BookHandPosition: "70% 70%",
	AudioArr: ["Beatit"],
	OSpeed:15,
	Speed:15,
	NormalGif: 9,
	GetDTop: 5,
	getShadow: function(a) {
		return "left:30px;top:146px"
	},
	GetDX: function() {
		return - 50
	},
	GetDY: function() {
		return - 5
	},
	LostHeadGif: 14,
	addSpotlight: (function() {
		var a, b;
		$User.Browser.IE6 ? (a = "_8", b = "filter:alpha(opacity=30)") : a = b = "";
		return function(d, f, c) {
			var g = $Z[d],
			e;
			NewEle(d + "_spotlightCon", "div", "position:absolute;left:-30px;top:-400px;width:184px;height:600px;overflow:hidden", 0, c).appendChild(g.spotlight = NewImg(d + "_spotlight", "images/Zombies/DancingZombie/spotlight" + a + ".png", "left:0;top:0;width:920px;height:600px;" + b));
			e = NewEle(d + "_spotlight2Con", "div", "position:absolute;left:-25px;top:135px;width:184px;height:60px;overflow:hidden", 0);
			c.insertBefore(e, f.EleShadow);
			e.appendChild(g.spotlight2 = NewImg(d + "_spotlight2", "images/Zombies/DancingZombie/spotlight2" + a + ".png", "left:0;top:0;width:920px;height:60px;" + b))
		}
	})(),
	PicArr: (function() {
		var d = "images/Zombies/DancingZombie/",
		c = $User.Browser.IE6 ? "_8": "",
		a = d + "spotlight" + c + ".png" + $Random,
		b = d + "spotlight2" + c + ".png" + $Random;
		return ["images/Card/Zombies/DancingZombie.png", d + "0.gif", d + "DancingZombie.gif", d + "Attack.gif", d + "LostHead.gif", d + "LostHeadAttack.gif", d + "Head.gif" + $Random, d + "Die.gif" + $Random, d + "BoomDie.gif" + $Random, d + "SlidingStep.gif" + $Random, d + "Dancing.gif" + $Random, d + "Summon1.gif", d + "Summon2.gif", d + "Summon3.gif", d + "LostHeadSlidingStep.gif" + $Random, d + "LostHeadDancing.gif" + $Random, d + "LostHeadSummon.gif" + $Random, a, b]
	})(),
	Produce: '舞王僵尸和人类(在世或者死去的)如有雷同，纯属巧合。</p><p>韧性：<font color="#FF0000">中（1200）</font><br>特点：<font color="#FF0000">召唤路障僵尸</font></p>舞王僵尸辞退了原来的伴舞，并将路障收为伴舞，虽然路障们无法配合他的舞蹈，不过brains are the most important!</font></p>游戏内音乐：《Beat it》-Michael Jackson',
	getSnowPea: function() {
		this.PlaySlowballAudio();
	},
	NormalDie: function() {
		var a = this;
		a.ResetBackupDancer(a);
		a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
		oSym.addTask(250, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	ExplosionDie: function() {
		var a = this;
		a.ResetBackupDancer(a);
		a.EleBody.src = a.PicArr[a.BoomDieGif] + Math.random();
		oSym.addTask(300, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	DisappearDie: function() {
		this.ResetBackupDancer(this);
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	},
	CrushDie: function() {
		var a = this;
		a.ResetBackupDancer(a);
		a.GoingDieHead(a.id, a.PicArr, a);
		ClearChild(a.Ele);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	bedevil: function(b) {
		var a = b.id;
		b.ExchangeLR(b, 1);
		b.JudgeAttack = b.JudgeAttackH;
		b.PZ = 0;
		b.WalkDirection = 1;
		b.ZX = b.AttackedRX;
		b.ChkActs = b.ChkActs1;
		b.ChangeChkActsTo1(b, a, b.EleBody);
		b.ResetBackupDancer(b);
		$(a + "_spotlightCon").style.left = "20px",
		$(a + "_spotlight2Con").style.left = "25px";
		oP.MonPrgs()
	},
	ResetBackupDancer: function(f) {
		var g = f.ArDZ,
		d = g.length,
		c, b, e, a = f.DZStep;
		while (d--) {
			if ((c = g[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
				if (a > 0) {
					switch (true) {
					case(e.FreeFreezeTime || e.FreeSetbodyTime) == 1 : e.Speed = 0;
						break;
					case e.FreeSlowTime > 0 : e.Speed = 1.75;
						break;
					default:
						e.Speed = 3.5
					}
				}
			}
		}
		a > -1 && oSym.addTask(f.DZStepT - oSym.Now,
		function(o, j) {
			var m = 4,
			l, k, n, h = "ChangeChkActsTo" + j;
			while (m--) { (l = o[m]) && (k = l[0]) && (n = $Z[k]) && n.beAttacked && (n.DZStep = j, n[h](n, k, n.EleBody))
			}
		},
		[g, [1, 0][a]])
	},
	BirthCallBack: function(d) {
		var b = d.delayT,
		l = d.id,
		a = d.Ele = $(l),
		c = 320,
		i = oGd.$LF,
		g = d.R,
		s = g - 1,
		n = g + 1,
		e,
		r,
		q = LX - 60,
		m = LX + 100,
		k = LX - 130,
		j = LX - 70,
		h = LX + 30,
		f = d.ArDZ = [0, 0, 0, 0];
		d.EleShadow = a.firstChild;
		d.EleBody = a.childNodes[1];
		s > 0 && (e = i[s]) && e != 2 && (f[0] = ["", s,
		function(o) {
			return o
		},
		3 * s + 2,
		function(o) {
			return o - 70
		},
		GetY(s) - 155]);
		n <= oS.R && (e = i[n]) && e != 2 && (f[2] = ["", n,
		function(o) {
			return o
		},
		3 * n + 2,
		function(o) {
			return o - 70
		},
		GetY(n) - 155]);
		e = 3 * g + 2;
		r = GetY(g) - 155;
		f[3] = ["", g,
		function(o) {
			return o - 60
		},
		e,
		function(o) {
			return o - 130
		},
		r];
		f[1] = ["", g,
		function(o) {
			return o + 100
		},
		e,
		function(o) {
			return o + 30
		},
		r];
		func = function(t, o) {
			var u = $Z[t];
			u && (u.ExchangeLR(d, 1), u.DZMSpeed = 15, u.DZStep = -1, u.DZStepT = oSym.Now + 100, u.FreeSetbodyTime = 0, SetBlock(o))
		};
		b ? (oSym.addTask(b, func, [l, a]), c += b) : func(l, a);
		oSym.addTask(c,
		function(o) {
			var t = $Z[o];
			t && t.beAttacked && !t.isAttacking && t.NormalAttack(o)
		},
		[d.id])
	},
	ChkActs1: function(e, b, f, a) {
		var c, d; ! (e.FreeFreezeTime || e.FreeSetbodyTime) ? (e.beAttacked && !e.isAttacking && e.JudgeAttack(), c = e.id, !e.isAttacking ? (e.AttackedLX += 3.5) > oS.W ? (f.splice(a, 1), e.DisappearDie(), d = 0) : (e.ZX = e.AttackedRX += 3.5, e.Ele.style.left = Math.ceil(e.X += 3.5) + "px", d = 1) : d = 1) : d = 1;
		return d
	},
	ChkTmp: function(c, b, d, a) {
		c.ChkSpeed(c);
		return 0
	},
	ChkActs: function(g, d, h, c) {
		var e, b, a, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
			R: d,
			ar: [oS.R - 1],
			CustomTop: 400 - g.height + g.GetDY()
		})), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
		g.ChkSpeed(g);
		if(g.HPlook&&!g.bHP){
	g.bHP=1;
    var E= NewEle("daHP", "div", "position:absolute;color:#fff;top:" + (g.pixelTop + 100) + "px;left:" + (g.ZX+60) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "shp" + Math.random();
    daHP.id = A;
    var C = $(A);
    E.innerHTML = '<div>' +Math.round(Math.max(g.OrnHP,0) + g.HP) + "</div>";
    oSym.addTask(1, function(C, g, E) {
      ClearChild(C);
      if (g.HP >=g.BreakPoint && $Z[g.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (g.ZX+60) + "px";
        E.innerHTML = '<div>' +Math.round(Math.max(g.OrnHP,0) + g.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, g, E])
    }, [C, g, E]);
	}
		return f
	},
	ChkSpeed: function(g) {
		if (!g.DZStep) {
			return
		}
		var h = g.ArDZ,
		d = 4,
		c, b, e, a = g.OSpeed,
		f = [];
		switch (true) {
		case(g.isAttacking || g.FreeFreezeTime || g.FreeSetbodyTime) == 1 : a = 0;
			break;
		case g.FreeSlowTime > 0 : a != 1.75 && (a = 1.75)
		}
		while (d--) {
			if ((c = h[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
				f.push(e);
				switch (true) {
				case(e.isAttacking || e.FreeFreezeTime || e.FreeSetbodyTime) == 1 : a = 0;
					break;
				case e.FreeSlowTime > 0 : a != 1.75 && (a = 1.75)
				}
			}
		}
		if (a != g.DZMSpeed) {
			g.DZMSpeed = a;
			d = f.length;
			while (d--) { (e = f[d]).Speed != a && (e.Speed = a)
			}
			g.Speed != a && (g.Speed = a)
		}
	},
	AttackZombie: function(a) {
		this.ExchangeLR(this, 0);
		var b = this.id;
		this.isAttacking = 1;
		this.EleBody.src = this.PicArr[this.AttackGif];
		oSym.addTask(10,
		function(d, c) {
			var f = $Z[d],
			e;
			f && f.beAttacked && !f.FreeFreezeTime && !f.FreeSetbodyTime && ((e = $Z[c]) ? (e.getHit0(e,20,0), oSym.addTask(10, arguments.callee, [d, c])) : (f.isAttacking = 0, f.EleBody.src = f.PicArr[f.NormalGif], f.TurnLeft(f)))
		},
		[b, a])
	},
	ChkBackupDancer: function(h, g, f) {
		var b = h.ArDZ,
		d = 4,
		j = 1,
		c, e, a;
		while (d--) { (e = b[d]) && (!(c = e[0]) || !(a = $Z[c]) || (a.PZ ? false: (e[0] = "", true))) && (d = j = 0)
		} ! h.isAttacking && j ? f.src = h.PicArr[10] : h.Summon(h, g);
		h.ChangeChkActsTo0(h, g, f)
	},
	ChangeChkActsTo0: function(g, e, a) {
		var d = 4,
		h = g.ArDZ,
		c, b, f;
		while (d--) { (b = h[d]) && (c = b[0]) && (f = $Z[c]) && f.beAttacked && (f.LostHeadGif = 10, f.NormalGif = 9, !f.isAttacking && (f.EleBody.src = f.PicArr[9]), f.Speed = 0)
		}
		g.LostHeadGif = 15;
		g.NormalGif = 10;
		g.Speed = g.DZMSpeed = g.DZStep = 0;
		g.DZStepT = oSym.Now + 100;
		oSym.addTask(200,
		function(j, i) {
			var k = $Z[j];
			k && k.beAttacked && k.ChangeChkActsTo1(k, j, i)
		},
		[e, a])
	},
	ChangeChkActsTo1: function(g, e, a) {
		var d = 4,
		h = g.ArDZ,
		c, b, f;
		while (d--) { (b = h[d]) && (c = b[0]) && (f = $Z[c]) && f.beAttacked && (f.LostHeadGif = 4, f.NormalGif = 2, !f.isAttacking && (f.EleBody.src = f.PicArr[2]))
		}
		g.LostHeadGif = 4;
		g.NormalGif = 2;
		g.DZStep = 1;
		g.DZStepT = oSym.Now + 150; ! g.isAttacking && (a.src = g.PicArr[2]);
		g.PZ && oSym.addTask(220,
		function(j, i) {
			var k = $Z[j];
			k && k.beAttacked && k.ChkBackupDancer(k, j, i)
		},
		[e, a])
	},
	TurnLeft: function(c) {
		var a = CZombies.prototype,
		b = c.id;
		c.AttackZombie = a.AttackZombie;
		c.NormalAttack = a.NormalAttack;
		c.OSpeed = 3.5; ! (c.FreeSlowTime || c.FreeFreezeTime || c.FreeSetbodyTime) && (c.Speed = 3.5);
		c.getSnowPea = OrnNoneZombies.prototype.getSnowPea;
		c.getFreeze = CZombies.prototype.getFreeze;
		oSym.addTask(20,
		function(d, e) {
			$Z[d] && e.beAttacked && (e.addSpotlight(d, e, e.Ele), oSym.addTask(200,
			function(g, f, i, h, k) {
				var j = $Z[g];
				j && (h > -736 ? h -= 184 : h = 0, f.style.left = h + "px", k > -736 ? k -= 184 : k = 0, i.style.left = k + "px", oSym.addTask(100, arguments.callee, [g, f, i, h, k]))
			},
			[d, e.spotlight, e.spotlight2, 0, 0]), oSym.addTask(200,
			function(h, g) {
				var f;
				$Z[g] && h.beAttacked && (f = h.EleBody, !h.isAttacking ? f.src = h.PicArr[10] : h.isAttacking = 0, h.ChangeChkActsTo0(h, g, f))
			},
			[e, d]))
		},
		[b, c]);
		c.Summon(c, b)
	},
	NormalAttack: function(a) {
		var b = $Z[a];
		b.ExchangeLR(b, 0);
		b.TurnLeft(b)
	},
	Summon: function(d, c) {
		d.LostHeadGif = 16;
		var a = d.EleBody,
		b = d.ChkActs;
		d.ChkActs = d.ChkTmp;
		d.ChkTmp = b;
		a.src = "images/Zombies/DancingZombie/Summon1.gif";
		PlayAudio("Beatit");
		oSym.addTask(10,
		function(f, e) {
			var g = $Z[f];
			g && g.beAttacked && (e.src = "images/Zombies/DancingZombie/Summon2.gif", oSym.addTask(10,
			function(t, s, x) {
				var h = $Z[t],
				v = h.ZX,
				m = h.ArDZ,
				n = [],
				k = "images/Zombies/BackupDancer/Mound.gif" + $Random + Math.random(),
				r = 4,
				w = [],
				u = [],
				o = 0,
				q,
				l;
				if (h && h.beAttacked) {
					s.src = "images/Zombies/DancingZombie/Summon3.gif";
					while (r--) { (q = m[r]) && (!(l = q[0]) || !$Z[l]) && (u[o] = (w[o] = new oConeheadZombie1).CustomBirth(q[1], q[2](v), 100, q[0] = "Z_" + Math.random()), n.push(NewImg("", k, "z-index:" + q[3] + ";left:" + q[4](v) + "px;top:" + q[5] + "px", EDPZ)), ++o)
					}
					oSym.addTask(150,
					function() {
						var i = arguments.length;
						while (i--) {
							ClearChild(arguments[i])
						}
					},
					n);
					oSym.addTask(90,
					function(A, y, z, i) {
						var B = $Z[A];
						B && B.beAttacked && (oP.AppearUP(y, z, i), oSym.addTask(80,
						function(D, C) {
							var E = $Z[D];
							if (E && E.beAttacked) {
								return
							}
							var j = C.length,
							E;
							while (j--) { (E = C[j]).ChangeChkActsTo0(E, E.id, E.EleBody)
							}
						},
						[A, z]));
						B && B.beAttacked&&(!B.PZ)&&(oP.AppearUP(y, z, i), 
						oSym.addTask(80,
						function(D, C) {
							var E = $Z[D];
							if (E && E.beAttacked) {
								return
							}
							var j = C.length,
							E;
							while (j--) { (E = C[j]).ChangeChkActsTo1(E,E.id, E.EleBody),
							E.bedevil(E)
							}
						},
						[A, z]))
					},
					[t, u, w, o]);
					oSym.addTask(100,
					function(y, i) {
						var z = $Z[y],
						j;
						z && z.beAttacked && (j = z.ChkActs,z.ChkActs = z.ChkTmp,z.ChkTmp = j)
					},
					[t, s])
				}
			},
			[f, e]))
		},
		[c, a])
	}
}),
oDancingZombie1= InheritO(OrnNoneZombies, {
	EName: "oDancingZombie1",
	CName: "舞王僵尸",
	HP:800,
	BreakPoint: 1,
	Lvl: 3,
	StandGif: 9,
	SunNum: 600,
	beAttackedPointL: 40,
	beAttackedPointR: 85,
	width: 184,
	height: 176,
	BookHandPosition: "70% 70%",
	AudioArr: ["Beatit"],
	OSpeed:10,
	Speed:10,
	NormalGif: 9,
	GetDTop: 5,
	getShadow: function(a) {
		return "left:30px;top:146px"
	},
	GetDX: function() {
		return - 50
	},
	GetDY: function() {
		return - 5
	},
	LostHeadGif: 14,
	addSpotlight: (function() {
		var a, b;
		$User.Browser.IE6 ? (a = "_8", b = "filter:alpha(opacity=30)") : a = b = "";
		return function(d, f, c) {
			var g = $Z[d],
			e;
			NewEle(d + "_spotlightCon", "div", "position:absolute;left:-30px;top:-400px;width:184px;height:600px;overflow:hidden", 0, c).appendChild(g.spotlight = NewImg(d + "_spotlight", "images/Zombies/DancingZombie/spotlight" + a + ".png", "left:0;top:0;width:920px;height:600px;" + b));
			e = NewEle(d + "_spotlight2Con", "div", "position:absolute;left:-25px;top:135px;width:184px;height:60px;overflow:hidden", 0);
			c.insertBefore(e, f.EleShadow);
			e.appendChild(g.spotlight2 = NewImg(d + "_spotlight2", "images/Zombies/DancingZombie/spotlight2" + a + ".png", "left:0;top:0;width:920px;height:60px;" + b))
		}
	})(),
	PicArr: (function() {
		var d = "images/Zombies/DancingZombie/",
		c = $User.Browser.IE6 ? "_8": "",
		a = d + "spotlight" + c + ".png" + $Random,
		b = d + "spotlight2" + c + ".png" + $Random;
		return ["images/Card/Zombies/DancingZombie.png", d + "0.gif", d + "DancingZombie.gif", d + "Attack.gif", d + "LostHead.gif", d + "LostHeadAttack.gif", d + "Head.gif" + $Random, d + "Die.gif" + $Random, d + "BoomDie.gif" + $Random, d + "SlidingStep.gif" + $Random, d + "Dancing.gif" + $Random, d + "Summon1.gif", d + "Summon2.gif", d + "Summon3.gif", d + "LostHeadSlidingStep.gif" + $Random, d + "LostHeadDancing.gif" + $Random, d + "LostHeadSummon.gif" + $Random, a, b]
	})(),
	Produce: '舞王僵尸和人类(在世或者死去的)如有雷同，纯属巧合。</p><p>韧性：<font color="#FF0000">中（800）</font><br>特点：<font color="#FF0000">召唤小丑或辣椒爆炸</font></p>舞王僵尸辞退了原来的伴舞，并将路障收为伴舞，虽然路障们无法配合他的舞蹈，不过brains are the most important!</font></p>游戏内音乐：《Beat it》-Michael Jackson',
	getSnowPea: function() {
		this.PlaySlowballAudio();
	},
	NormalDie: function() {
		var a = this;
		a.ResetBackupDancer(a);
		a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
		oSym.addTask(250, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	ExplosionDie: function() {
		var a = this;
		a.ResetBackupDancer(a);
		a.EleBody.src = a.PicArr[a.BoomDieGif] + Math.random();
		oSym.addTask(300, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	DisappearDie: function() {
		this.ResetBackupDancer(this);
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	},
	CrushDie: function() {
		var a = this;
		a.ResetBackupDancer(a);
		a.GoingDieHead(a.id, a.PicArr, a);
		ClearChild(a.Ele);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	bedevil: function(b) {
		var a = b.id;
		b.ExchangeLR(b, 1);
		b.JudgeAttack = b.JudgeAttackH;
		b.PZ = 0;
		b.WalkDirection = 1;
		b.ZX = b.AttackedRX;
		b.ChkActs = b.ChkActs1;
		b.ChangeChkActsTo1(b, a, b.EleBody);
		b.ResetBackupDancer(b);
		$(a + "_spotlightCon").style.left = "20px",
		$(a + "_spotlight2Con").style.left = "25px";
		oP.MonPrgs()
	},
	ResetBackupDancer: function(f) {
		var g = f.ArDZ,
		d = g.length,
		c, b, e, a = f.DZStep;
		while (d--) {
			if ((c = g[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
				if (a > 0) {
					switch (true) {
					case(e.FreeFreezeTime || e.FreeSetbodyTime) == 1 : e.Speed = 0;
						break;
					case e.FreeSlowTime > 0 : e.Speed = 1.75;
						break;
					default:
						e.Speed = 3.5
					}
				}
			}
		}
		a > -1 && oSym.addTask(f.DZStepT - oSym.Now,
		function(o, j) {
			var m = 4,
			l, k, n, h = "ChangeChkActsTo" + j;
			while (m--) { (l = o[m]) && (k = l[0]) && (n = $Z[k]) && n.beAttacked && (n.DZStep = j, n[h](n, k, n.EleBody))
			}
		},
		[g, [1, 0][a]])
	},
	BirthCallBack: function(d) {
		var b = d.delayT,
		l = d.id,
		a = d.Ele = $(l),
		c = 320,
		i = oGd.$LF,
		g = d.R,
		s = g - 1,
		n = g + 1,
		e,
		r,
		q = LX - 60,
		m = LX + 100,
		k = LX - 130,
		j = LX - 70,
		h = LX + 30,
		f = d.ArDZ = [0, 0, 0, 0];
		d.EleShadow = a.firstChild;
		d.EleBody = a.childNodes[1];
		s > 0 && (e = i[s]) && e != 2 && (f[0] = ["", s,
		function(o) {
			return o
		},
		3 * s + 2,
		function(o) {
			return o - 70
		},
		GetY(s) - 155]);
		n <= oS.R && (e = i[n]) && e != 2 && (f[2] = ["", n,
		function(o) {
			return o
		},
		3 * n + 2,
		function(o) {
			return o - 70
		},
		GetY(n) - 155]);
		e = 3 * g + 2;
		r = GetY(g) - 155;
		f[3] = ["", g,
		function(o) {
			return o - 60
		},
		e,
		function(o) {
			return o - 130
		},
		r];
		f[1] = ["", g,
		function(o) {
			return o + 100
		},
		e,
		function(o) {
			return o + 30
		},
		r];
		func = function(t, o) {
			var u = $Z[t];
			u && (u.ExchangeLR(d, 1), u.DZMSpeed = 15, u.DZStep = -1, u.DZStepT = oSym.Now + 100, u.FreeSetbodyTime = 0, SetBlock(o))
		};
		b ? (oSym.addTask(b, func, [l, a]), c += b) : func(l, a);
		oSym.addTask(c,
		function(o) {
			var t = $Z[o];
			t && t.beAttacked && !t.isAttacking && t.NormalAttack(o)
		},
		[d.id])
	},
	ChkActs1: function(e, b, f, a) {
		var c, d; ! (e.FreeFreezeTime || e.FreeSetbodyTime) ? (e.beAttacked && !e.isAttacking && e.JudgeAttack(), c = e.id, !e.isAttacking ? (e.AttackedLX += 3.5) > oS.W ? (f.splice(a, 1), e.DisappearDie(), d = 0) : (e.ZX = e.AttackedRX += 3.5, e.Ele.style.left = Math.ceil(e.X += 3.5) + "px", d = 1) : d = 1) : d = 1;
		return d
	},
	ChkTmp: function(c, b, d, a) {
		c.ChkSpeed(c);
		return 0
	},
	ChkActs: function(g, d, h, c) {
		var e, b, a, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
			R: d,
			ar: [oS.R - 1],
			CustomTop: 400 - g.height + g.GetDY()
		})), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
		g.ChkSpeed(g);
	if(g.HPlook&&!g.bHP){
	g.bHP=1;
    var E= NewEle("daHP", "div", "position:absolute;color:#fff;top:" + (g.pixelTop + 100) + "px;left:" + (g.ZX+60) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "shp" + Math.random();
    daHP.id = A;
    var C = $(A);
    E.innerHTML = '<div>' + Math.round(Math.max(g.OrnHP,0) + g.HP) + "</div>";
    oSym.addTask(1, function(C, g, E) {
      ClearChild(C);
      if (g.HP > g.BreakPoint && $Z[g.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (g.ZX+60) + "px";
        E.innerHTML = '<div>' + Math.round(Math.max(g.OrnHP,0) + g.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, g, E])
    }, [C, g, E]);
	}
		return f
	},
	ChkSpeed: function(g) {
		if (!g.DZStep) {
			return
		}
		var h = g.ArDZ,
		d = 4,
		c, b, e, a = g.OSpeed,
		f = [];
		switch (true) {
		case(g.isAttacking || g.FreeFreezeTime || g.FreeSetbodyTime) == 1 : a = 0;
			break;
		case g.FreeSlowTime > 0 : a != 1.75 && (a = 1.75)
		}
		while (d--) {
			if ((c = h[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
				f.push(e);
				switch (true) {
				case(e.isAttacking || e.FreeFreezeTime || e.FreeSetbodyTime) == 1 : a = 0;
					break;
				case e.FreeSlowTime > 0 : a != 1.75 && (a = 1.75)
				}
			}
		}
		if (a != g.DZMSpeed) {
			g.DZMSpeed = a;
			d = f.length;
			while (d--) { (e = f[d]).Speed != a && (e.Speed = a)
			}
			g.Speed != a && (g.Speed = a)
		}
	},
	AttackZombie: function(a) {
		this.ExchangeLR(this, 0);
		var b = this.id;
		this.isAttacking = 1;
		this.EleBody.src = this.PicArr[this.AttackGif];
		oSym.addTask(10,
		function(d, c) {
			var f = $Z[d],
			e;
			f && f.beAttacked && !f.FreeFreezeTime && !f.FreeSetbodyTime && ((e = $Z[c]) ? (e.getHit0(e,20,0), oSym.addTask(10, arguments.callee, [d, c])) : (f.isAttacking = 0, f.EleBody.src = f.PicArr[f.NormalGif], f.TurnLeft(f)))
		},
		[b, a])
	},
	ChkBackupDancer: function(h, g, f) {
		if (!h.PZ) {
			h.ChangeChkActsTo1(h, g, f);
			return
		}
		var b = h.ArDZ,
		d = 4,
		j = 1,
		c, e, a;
		while (d--) { (e = b[d]) && (!(c = e[0]) || !(a = $Z[c]) || (a.PZ ? false: (e[0] = "", true))) && (d = j = 0)
		} ! h.isAttacking && j ? f.src = h.PicArr[10] : h.Summon(h, g);
		h.ChangeChkActsTo0(h, g, f)
	},
	ChangeChkActsTo0: function(g, e, a) {
		if (!g.PZ) {
			g.ChangeChkActsTo1(g, e, a);
			return
		}
		var d = 4,
		h = g.ArDZ,
		c, b, f;
		while (d--) { (b = h[d]) && (c = b[0]) && (f = $Z[c]) && f.beAttacked && (f.LostHeadGif = 10, f.NormalGif = 9, !f.isAttacking && (f.EleBody.src = f.PicArr[9]), f.Speed = 0)
		}
		g.LostHeadGif = 15;
		g.NormalGif = 10;
		g.Speed = g.DZMSpeed = g.DZStep = 0;
		g.DZStepT = oSym.Now + 100;
		oSym.addTask(200,
		function(j, i) {
			var k = $Z[j];
			k && k.beAttacked && k.ChangeChkActsTo1(k, j, i)
		},
		[e, a])
	},
	ChangeChkActsTo1: function(g, e, a) {
		var d = 4,
		h = g.ArDZ,
		c, b, f;
		while (d--) { (b = h[d]) && (c = b[0]) && (f = $Z[c]) && f.beAttacked && (f.LostHeadGif = 4, f.NormalGif = 2, !f.isAttacking && (f.EleBody.src = f.PicArr[2]))
		}
		g.LostHeadGif = 4;
		g.NormalGif = 2;
		g.DZStep = 1;
		g.DZStepT = oSym.Now + 150; ! g.isAttacking && (a.src = g.PicArr[2]);
		g.PZ && oSym.addTask(220,
		function(j, i) {
			var k = $Z[j];
			k && k.beAttacked && k.ChkBackupDancer(k, j, i)
		},
		[e, a])
	},
	TurnLeft: function(c) {
		var a = CZombies.prototype,
		b = c.id;
		c.AttackZombie = a.AttackZombie;
		c.NormalAttack = a.NormalAttack;
		c.OSpeed = 3.5; ! (c.FreeSlowTime || c.FreeFreezeTime || c.FreeSetbodyTime) && (c.Speed = 3.5);
		c.getSnowPea = OrnNoneZombies.prototype.getSnowPea;
		c.getFreeze = CZombies.prototype.getFreeze;
		oSym.addTask(20,
		function(d, e) {
			$Z[d] && e.beAttacked && (e.addSpotlight(d, e, e.Ele), oSym.addTask(200,
			function(g, f, i, h, k) {
				var j = $Z[g];
				j && (h > -736 ? h -= 184 : h = 0, f.style.left = h + "px", k > -736 ? k -= 184 : k = 0, i.style.left = k + "px", oSym.addTask(100, arguments.callee, [g, f, i, h, k]))
			},
			[d, e.spotlight, e.spotlight2, 0, 0]), oSym.addTask(200,
			function(h, g) {
				var f;
				$Z[g] && h.beAttacked && (f = h.EleBody, !h.isAttacking ? f.src = h.PicArr[10] : h.isAttacking = 0, h.ChangeChkActsTo0(h, g, f))
			},
			[e, d]))
		},
		[b, c]);
		c.Summon(c, b)
	},
	NormalAttack: function(a) {
		var b = $Z[a];
		b.ExchangeLR(b, 0);
		b.TurnLeft(b)
	},
	Summon: function(d, c) {
		d.LostHeadGif = 16;
		var a = d.EleBody,
		b = d.ChkActs;
		d.ChkActs = d.ChkTmp;
		d.ChkTmp = b;
		a.src = "images/Zombies/DancingZombie/Summon1.gif";
		PlayAudio("Beatit");
		oSym.addTask(10,
		function(f, e) {
			var g = $Z[f];
			g && g.beAttacked && (e.src = "images/Zombies/DancingZombie/Summon2.gif", oSym.addTask(10,
			function(t, s, x) {
				var h = $Z[t],
				v = h.ZX,
				m = h.ArDZ,
				n = [],
				k = "images/Zombies/BackupDancer/Mound.gif" + $Random + Math.random(),
				r = 4,
				w = [],
				u = [],
				o = 0,
				q,
				l;
				if (h && h.beAttacked) {
					s.src = "images/Zombies/DancingZombie/Summon3.gif";
					while (r--) { (q = m[r]) && (!(l = q[0]) || !$Z[l]) && (u[o] = (w[o] =Math.round(Math.random()*1+0) ? new oBackupDancer1 : new oBackupDancer).CustomBirth(q[1], q[2](v), 100, q[0] = "Z_" + Math.random()), n.push(NewImg("", k, "z-index:" + q[3] + ";left:" + q[4](v) + "px;top:" + q[5] + "px", EDPZ)), ++o)
					}
					oSym.addTask(150,
					function() {
						var i = arguments.length;
						while (i--) {
							ClearChild(arguments[i])
						}
					},
					n);
					oSym.addTask(90,
					function(A, y, z, i) {
						var B = $Z[A];
						B && B.beAttacked && (oP.AppearUP(y, z, i), oSym.addTask(80,
						function(D, C) {
							var E = $Z[D];
							if (E && E.beAttacked) {
								return
							}
							var j = C.length,
							E;
							while (j--) { (E = C[j]).ChangeChkActsTo0(E, E.id, E.EleBody)
							}
						},
						[A, z]));
					},
					[t, u, w, o]);
					oSym.addTask(100,
					function(y, i) {
						var z = $Z[y],
						j;
						z && z.beAttacked && (j = z.ChkActs, z.ChkActs = z.ChkTmp, z.ChkTmp = j)
					},
					[t, s])
				}
			},
			[f, e]))
		},
		[c, a])
	}
}),
oZombie = InheritO(OrnNoneZombies,{
	EName: "oZombie",
	CName: "领带僵尸",
	StandGif: 9,
	PicArr: (function() {
		var a = "images/Zombies/Zombie/";
		return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "Zombie.gif", a + "ZombieAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif"]
	})(),
	Produce: '韧性：<font color="#FF0000">低'
}),
oZombie2 = InheritO(oZombie, {
	EName: "oZombie2",
	HP:300,
	PrivateBirth: function(a){
            let z = $(a.id);
            z.PeaHead = "Pea" + Math.random();
            let pea = NewImg(z.PeaHead,"images/Plants/Cob.gif","position:absolute;width:340px;height:194px;transform:rotateY(180deg);left:45px;top:15px;",0);
            z.appendChild(pea);
        },
        PrivateAct: function(a){
            if(!a.bool){
            a.bool = 1;
            oSym.addTask(2000,function(a){
	if(!$Z[a.id]){return}
            let z = $(a.id);
            let div = $n("div");
            let d = "Pea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/PB31.gif">';
            EditEle(div,0,{
                position:"absolute",
                zIndex:"24",
                left:a.ZX + "px",
                top:a.pixelTop + 40 + "px"
            },EDPZ,0)
            oSym.addTask(1,function(z,d,a){
                try{
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                let pea = $(d);
                let C = GetC(a.ZX+ 40);
                for(let i = 3;i >= 0;i--){
                    for(let j = 1;j <= C;j++){
                        let p = oGd.$[a.R+"_"+j+"_"+i];
                       a&&(a.beAttacked)&&p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oLilyPad"&& p.EName != "oCherryBomb" && p.EName != "oGatlingPea"&& p.EName != "oJalapeno" && p.EName != "oDoomShroom"&& p.EName != "oSunFlower") && ((p.AttackedLX+ $(p.id).offsetWidth>= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("potato_mine"),((a.hard==2)?CustomZombie(oBoom,p.R,p.C):(p.HP -=1000)),($(d) && ClearChild($(d))));
                        p && (p.canEat) && (p.HP <= 0) && p.Die();
                    }
                }
	let Z= oZ.getArHZ($(d).offsetLeft-50,a.ZX+60,a.R);
          let i = Z.length;
          while (i--) {
            a&&(a.beAttacked)&&Z&& (Z[i].Altitude==1) && (PlayAudio("potato_mine"), (Z[i].getHit0(Z[i],300,0),($(d) && ClearChild($(d)))));
          }
                if($(d).offsetLeft <= 0){
                    ClearChild($(d));
                    $(d).isDie = true;
                }
                !($(d).isDie) && oSym.addTask(1,arguments.callee,[z,d,a])
                }catch(e){
                }
            },[z,d,a]);
            !a.isDie && (a.HP > 60)&&(a.PZ)&&oSym.addTask(1500,arguments.callee,[a])
            },[a]);
            }
        },
  bedevilAct: function(a) {
    if (!a.e) {
      a.Speed = 1;
      a.e = 1;
      oSym.addTask(2000, function(a) {
	if(!$Z[a.id]){return}
        let z = $(a.id);
        let div = $n("div");
        let d = "Pea" + Math.random();
        div.id = d;
        div.innerHTML = '<img src="images/Plants/PB31.gif">';
        EditEle(div, 0, {
          position: "absolute",
          transform: "rotateY(20deg)",
          zIndex: "24",
          left: a.ZX + "px",
          top: a.pixelTop + 40 + "px"
        }, EDPZ, 0)
        oSym.addTask(1, function(z, d, a) {
          $(d).style.left = $(d).offsetLeft + 5 + "px";
          let pea = $(d);
          let C = GetC(a.ZX + 40);
          let p = oZ.getArZ(a.ZX- 60, $(d).offsetLeft + 50, a.R);
          let i = p.length;
          while (i--) {
            a&&(a.beAttacked)&&p && (p[i].Altitude==1) && (PlayAudio("potato_mine"), ((a.hard==2)?CustomZombies(new oBoom,p[i].R,GetC(p[i].ZX)-1,1):(p[i].getHit0(p[i], 300, 0)),($(d) && ClearChild($(d)))));
          }
          if ($(d).offsetLeft >= 900) {
            ClearChild($(d));
            $(d).isDie = true;
          }!($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a])
        }, [z, d, a]);
        !a.isDie && (a.HP > 60) && (!a.PZ) && oSym.addTask(1500, arguments.callee, [a])
      }, [a]);
    }
  }
},
{
	PicArr: {
		2 : "images/Zombies/Zombie/Zombie2.gif",
		9 : "images/Zombies/Zombie/2.gif"
	}
}),
oZombie3= InheritO(oZombie, {
	EName: "oZombie3",
	Speed:Math.random()*2+2,
	HP:Math.random()*400+600,
	Lvl:2,
},
{
	PicArr: {
		2 : "images/Zombies/Zombie/Zombie3.gif",
		9 : "images/Zombies/Zombie/3.gif"
	}
}),

OrnIZombies = function() {
	var a = function(f, b) {
		var d = f.OrnHP,
		c = f.HP,
		e = OrnNoneZombies.prototype; (d = f.OrnHP -= b) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayNormalballAudio = e.PlayNormalballAudio, f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 =f.getHit4= e.getHit);
		f.SetAlpha(f, f.EleBody, 50, 0.5);
		oSym.addTask(10,
		function(h, g) { (g = $Z[h]) && g.SetAlpha(g, g.EleBody, 100, 1)
		},
		[f.id])
	};
	return InheritO(OrnNoneZombies, {
		Ornaments: 1,
		OrnLostNormalGif: 9,
		OrnLostAttackGif: 10,
		getHit: a,
		getHit0: a,
		getHit1: a,
		getHit2: a,
		getHit3: a
	})
} (),
oFlagZombie =Math.round(Math.random()*1+0)?InheritO(oZombie, {
	PicArr: (function() {
		var a = "images/Zombies/FlagZombie/";
		return ["images/Card/Zombies/FlagZombie.png", a + "FlagZombie.gif", a + "FlagZombie.gif",a + "FlagZombieAttack.gif", a + "FlagZombieLostHead.gif", a + "FlagZombieLostHeadAttack.gif", "images/Zombies/Zombie/unlook.gif" + $Random, "images/Zombies/Zombie/ZombieDie.gif" + $Random, "images/Zombies/Zombie/BoomDie.gif" + $Random, a + "1.gif"]
	})(),
	EName: "oFlagZombie",
	CName: "处决者旗帜",
	OSpeed: (this.hard==2)?12:8,
	Speed: (this.hard==2)?12:8,
	SunNum: 300,
	Attack:500,
	HP:500,
	BreakPoint:1,
	beAttackedPointR: 101,
	AudioArr:["lawnmower"],
	CanPass: function(d, c) {
		return c
	},
	bedevil: function(c) {
			c.ExchangeLR(c, 1);
		        c.Attack=500;
			c.JudgeAttack = c.JudgeAttackH;
			c.PZ = 0;
		        c.Speed=3;
			c.WalkDirection = 1;
			c.ZX = c.AttackedRX;
			c.ChkActs = c.ChkActs1;
			oP.MonPrgs()
		},
        PrivateAct: function(a){
            if(a.HP <= 40){
		a.OpenBox(a.id);
		a.hard==2&&(a.Speed=12);
            }
        },
	Produce: '一个雷厉风行的处决者<p>韧性：<font color="#FF0000">低（500）</font><p>移速：<font color="#FF0000">快</font></p>特性：<font color="#FF0000">碾压植物，濒死时有3*3爆炸，对僵尸直接秒杀，方式等同于植物小推车</font></p>作为一个处决者，旗帜僵尸不会对他任何的敌对势力心慈手软，包括他叛变后的僵尸',
	getSnowPea:OrnNoneZombies.prototype.getPea,
	getSlowPea:OrnNoneZombies.prototype.getFirePea,
	getSlowPea1:OrnNoneZombies.prototype.getFirePea,
	flatTire:function(){
	this.getExplosion(20)
	},
			AttackZombie: function(d, c) {
			oSym.addTask(1,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.CrushDie(g, 10000, 0), h.JudgeAttackH())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(1,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.CrushDie(h, 10000, 0), oSym.addTask(1, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
			GoingDie: function(d) {
			var c = this,
			e = c.id;
			c.EleBody.src = d;
			c.GoingDieHead(e, c.PicArr, c);
			c.FreeFreezeTime = c.FreeSetbodyTime = c.FreeSlowTime = 0;
			c.AutoReduceHP(e)
		},
	JudgeAttack: function() {
			var f = this,
			c = f.ZX,
			d = f.R + "_",
			e = GetC(c),
			g = oGd.$,
			b; (b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g)) && f.NormalAttack(b[0], b[1])
		},
		JudgeAttack1: function() {
			var f = this,
			c = f.ZX,
			d = f.R + "_",
			e = GetC(c),
			g = oGd.$,
			b; (b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g)) && f.NormalAttack(b[0], b[1])
		},
		reNormal: function(c) {
			c.ExchangeLR(c, 0);
			c.JudgeAttack = c.JudgeAttack1;
			c.PZ = 1;
			c.WalkDirection = 0;
			c.ZX = c.AttackedLX;
			c.ChkActs = CZombies.prototype.ChkActs;
		},
		JudgeLR: function(e, c, d, b, f) {
			return d > 10 || d < 1 ? false: function() {
				c += --d + "_";
				var g = 3,
				h;
				while (g--) {
					if (h = f[c + g]) {
						return h.AttackedRX >= b && h.AttackedLX <= b ? [e.id, h.id] : false
					}
				}
			} ()
		},
		JudgeSR: function(e, c, d, b, f) {
			return d > 9 ? false: function() {
				c += d + "_";
				var g = 3,
				h;
				while (g--) {
					if (h = f[c + g]) {
						return h.AttackedRX >= b && h.AttackedLX <= b ? [e.id, h.id] : false
					}
				}
			} ()
		},
		NormalAttack: function(c, b) {
			var d = $Z[c];
			$P[b].getHurt(d, 2, d.Attack)
		}
}):InheritO(OrnIZombies, {
        PicArr: (function() {
            var a ="images/Zombies/FlagZombie/",
		b= "images/Zombies/Zombie/";
            return ["images/Card/Zombies/FlagZombie.png", a + "0.gif", a + "Walk.gif",a + "Attack.gif", a + "FlagZombieLostHead.gif",a+ "FlagZombieLostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random,"images/Zombies/Zombie/ZombieDie.gif" + $Random,"images/Zombies/Zombie/BoomDie.gif" + $Random, a + "OrnLost.gif", a + "OrnLostAttack.gif",a + "01.gif"]
        })(),
        EName: "oFlagZombie",
        CName: "推进者旗帜",
        OSpeed: 7.2,
        Speed:7.2,
	HP:1500,
	SunNum:225,
	OrnHP:1500,
        beAttackedPointR: 101,
	AudioArr:["plastichit"],
	PlayNormalballAudio: function() {
		PlayAudio("plastichit")
	},
	CanPass:function(d,c){return c},
        ChkActs: function(h, f, j, e) {
            var d, c, g;
            !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
                R: f,
                ar: [oS.R - 1],
                CustomTop: 400 - h.height + h.GetDY()
            })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
for (i=1;i<=oS.R;i++){
if(h.hard!==2){
let a=oZ.getArZ(h.ZX-100,h.ZX+300,h.R),
	z=a.length;
	while(z--){
	if(a[z].EName!="oFlagZombie"){
	a[z].getr(a[z],-5)
	    }
	}
}else{
let b=oZ.getArZ(0,oS.W,i),
	Z=b.length;
	while(Z--){
	if(b[Z].EName!="oFlagZombie"){
	b[Z].getr(b[Z],-5)
	    }
	}
    }
}
if(h.HPlook&&!h.bHP){
	h.bHP=1;
    var b = NewEle("dHP", "div", "position:absolute;color:#fff;top:" + (h.pixelTop + 100) + "px;left:" + (h.ZX+60) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "hp" + Math.random();
    dHP.id = A;
    var C = $(A);
    b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
    oSym.addTask(1, function(C, h, b) {
      ClearChild(C);
      if (h.HP > h.BreakPoint && $Z[h.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (h.ZX+60) + "px";
        b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, h, b])
    }, [C, h, b]);
}
            this.PrivateAct && this.PrivateAct(this);
            return g
	},
			AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 40, 0), h.JudgeAttack())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit0(h, 40, 0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
        NormalAttack: function(d, c) {
            PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
            oSym.addTask(50, function(e) {
                $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
            }, [d]);
            oSym.addTask(25, function(f, e) {
                var h = $Z[f],
                    g;
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && g.getHurt(h, h.AKind, h.Attack), h.JudgeAttack())
            }, [d, c]);
            this.PrivateAttack && this.PrivateAttack(this)
        },
        Produce: '旗帜僵尸标志着即将来袭的一大堆僵尸"流"，这种旗帜推着这些僵尸“流”<p>韧性：<font color="#FF0000">高（1500（头盔）+1500）</font></p>毫无疑问，摇旗僵尸喜爱脑髓。但在私下里他也迷恋旗帜。也许是因为旗帜上也画有脑子吧，这很难说。'
    }),
oConeheadZombie1= InheritO(OrnIZombies, {
	EName: "oConeheadZombie",
	CName: "路障伴舞僵尸",
	OrnHP: 500,
	Lvl: 2,
	SunNum: 75,
	StandGif: 1,
	PicArr: (function() {
		var b = "images/Zombies/ConeheadZombie/",
		a = "images/Zombies/Zombie/";
		return ["images/Card/Zombies/ConeheadZombie.png", b + "0.gif", b + "ConeheadZombie.gif", b + "ConeheadZombieAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Zombie.gif", a + "ZombieAttack.gif", b + "1.gif"]
	})(),
		bedevil: function(a) {
		a.ExchangeLR(a, 1);
		a.JudgeAttack = a.JudgeAttackH;
		a.PZ = 0;
		a.WalkDirection = 1;
		a.ZX = a.AttackedRX;
		a.ChkActs = a.ChkActs1;
		a.Speed = 10;
		a.HP=500,
		a.ChangeChkActsTo1(a, a.id, a.EleBody);
		oP.MonPrgs()
	},
	getSlow: function(f, d, e) {
		var b = oSym.Now + e,
		c = f.FreeSlowTime,
		a = 0;
		switch (true) {
		case ! c: f.PlaySlowballAudio();
			f.Attack = 50;
			f.FreeSlowTime = b;
			a = 1;
			break;
		case c < b: f.PlayNormalballAudio();
			f.FreeSlowTime = b;
			a = 1
		}
		a && oSym.addTask(e,
		function(h, g) {
			var i = $Z[h];
			i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
		},
		[d, b])
	},
	getFreeze: function(b, a) {
		b.beAttacked && b.getHit0(b, 20, 0);
		oSym.addTask(400,
		function(e, d, c) {
			ClearChild(c);
			var f = $Z[e];
			f && f.FreeFreezeTime == d && (f.FreeFreezeTime = 0, f.Attack = 50, !f.FreeSetbodyTime && f.isAttacking && f.JudgeAttack(), oSym.addTask(1500,
			function(h, g) {
				var i = $Z[h];
				i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
			},
			[e, f.FreeSlowTime = oSym.Now + 1500]))
		},
		[a, b.FreeFreezeTime = oSym.Now + 400, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", b.getShadow(b), b.Ele)])
	},
	CustomBirth: function(g, d, a, b, j) {
		var e = this,
		c = GetY(g) + e.GetDY(),
		f = c - e.height,
		i = e.beAttackedPointL,
		h = e.beAttackedPointR;
		e.AttackedRX = (e.X = (e.ZX = e.AttackedLX = d - (h - i) * 0.5) - i) + h;
		e.R = g; (e.delayT = a) && (e.FreeSetbodyTime = oSym.Now);
		return e.getHTML(e.id = b, e.X, e.pixelTop = f, e.zIndex = 3 * g + 1, "none", j || 0, e.height + "px", e.PicArr[e.StandGif])
	},
	AudioArr: ["plastichit"],
	PlayNormalballAudio: function() {
		PlayAudio("plastichit")
	},
	Produce: '他的路障头盔，使他两倍坚韧于普通僵尸。<p>韧性：<font color="#FF0000">中</font></p>路障僵尸在聚会上找到了一份给舞王伴舞的工作，薪水不错，虽然路障僵尸脱帽又戴帽的样子很招笑，但他们的冲击力的确是顶',
		ChangeChkActsTo0: function(c, b, a) {
		if (!c.PZ) {
			c.ChangeChkActsTo1(c, b, a);
			return
		}
		c.LostHeadGif = 4;
		c.NormalGif = 9; ! c.isAttacking && (a.src = c.PicArr[9]);
		c.Speed = c.DZStep =1.6;
		oSym.addTask(200,
		function(e, d) {
			var f = $Z[e];
			f && f.beAttacked && f.ChangeChkActsTo1(f, e, d)
		},
		[b, a])
	},
	ChangeChkActsTo1: function(c, b, a) {
		c.LostHeadGif = 4;
		c.NormalGif = 3;
		c.DZStep = 1; ! c.isAttacking && (a.src = c.PicArr[2]);
		c.PZ && oSym.addTask(220,
		function(e, d) {
			var f = $Z[e];
			f && f.beAttacked && f.ChangeChkActsTo0(f, e, d)
		},
		[b, a])
	},
	  NormalDie: function() {
    var c = this,
      R = (c.R - 1 || 1),
      RM = (c.R + 1 <= oS.R ? c.R + 1 : oS.R),
      C = GetC($(c.id).offsetLeft + 80);
    c.EleBody.src = c.PicArr[c.DieGif] + Math.random();
    oSym.addTask(250, ClearChild, [c.Ele]);
    c.HP = 0;
    delete $Z[c.id];
    c.PZ && oP.MonPrgs();
    for (let i = Math.max(C - 1, 1); i <= Math.max(C + 1,1); i++) {
      for (let l = R; l <= RM; l++) {
       if ((i == C || l == c.R)||(c.hard==2)) {

          oP.NumZombies += 2,

            asyncInnerHTML(((a = new oZombie).CustomBirth(l, i, 1, "auto")), function(n, m) {
                EDPZ.appendChild(n);
                m.Birth();
              },
              a);
        }
      }
    }
    return a;
  },
  ExplosionDie: function() {
    var c = this,
      R = (c.R - 1 || 1),
      C = GetC($(c.id).offsetLeft + 80),
      RM = (c.R + 1 <= oS.R ? c.R + 1 : oS.R);
    c.EleBody.src = c.PicArr[c.BoomDieGif] + Math.random();
    oSym.addTask(300, ClearChild, [c.Ele]);
    c.HP = 0;
    delete $Z[c.id];
    c.PZ && oP.MonPrgs();
    for (let i = Math.max(C - 1, 1); i <= Math.max(C + 1, 1); i++) {
      for (let l = R; l <= RM; l++) {
        if ((i == C || l == c.R)||(c.hard==2)) {
          oP.NumZombies += 2,
            asyncInnerHTML(((a = new oZombie).CustomBirth(l, i, 1, "auto")), function(n, m) {
                EDPZ.appendChild(n);
                m.Birth();
              },
              a);
        }
      }
    }
    return a;
  },
  DisappearDie: function() {
    var c = this,
      R = (c.R - 1 || 1),
      RM = (c.R + 1 <= oS.R ? c.R + 1 : oS.R),
      C = GetC($(c.id).offsetLeft + 80);
    ClearChild(this.Ele);
    this.HP = 0;
    delete $Z[this.id];
    this.PZ && oP.MonPrgs();
    for (let i = Math.max(C - 1, 1); i <= Math.max(C + 1, 1); i++) {
      for (let l = R; l <= RM; l++) {
        if ((i == C || l == c.R)||(c.hard==2)) {
          oP.NumZombies += 2,
            asyncInnerHTML(((a = new oZombie).CustomBirth(l, i, 1, "auto")),
              function(n, m) {
                EDPZ.appendChild(n);
                m.Birth();
              },
              a);
        }
      }
    }
    return a;
  },
  CrushDie: function() {
    var c = this;
    let R = (c.R - 1 || 1),
      RM = (c.R + 1 <= oS.R ? c.R + 1 : oS.R),
      C = GetC($(c.id).offsetLeft + 80);
    c.GoingDieHead(c.id, c.PicArr, c);
    ClearChild(c.Ele);
    c.HP = 0;
    delete $Z[c.id];
    c.PZ && oP.MonPrgs();
    for (let i = Math.max(C - 1, 1); i <= Math.max(C + 1, 1); i++) {
      for (let l = R; l <= RM; l++) {
        if ((i == C || l == c.R)||(c.hard==2)) {

          oP.NumZombies += 2,

            asyncInnerHTML(((a = new oZombie).CustomBirth(l, i, 1, "auto")),
              function(n, m) {
                EDPZ.appendChild(n);
                m.Birth();
              },
              a);
        }
      }
    }
    return a;
  },
	ChkActs: function(g, d, h, c) {
		var e, b, a, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
			R: d,
			ar: [oS.R - 1],
			CustomTop: 400 - g.height + g.GetDY()
		})), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
		g.ChkSpeed(g);
if(g.HPlook&&!g.bHP){
	g.bHP=1;
    var E= NewEle("daHP", "div", "position:absolute;color:#fff;top:" + (g.pixelTop + 100) + "px;left:" + (g.ZX+60) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "shp" + Math.random();
    daHP.id = A;
    var C = $(A);
    E.innerHTML = '<div>' + Math.round(Math.max(g.OrnHP,0) + g.HP) + "</div>";
    oSym.addTask(1, function(C, g, E) {
      ClearChild(C);
      if (g.HP > g.BreakPoint && $Z[g.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (g.ZX+60) + "px";
        E.innerHTML = '<div>' + Math.round(Math.max(g.OrnHP,0) + g.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, g, E])
    }, [C, g, E]);
	}
		return f
	},
	ChkSpeed: function(b) {
		if (!b.DZStep) {
			return
		}
		var a = b.Speed;
		switch (true) {
		case(b.FreeFreezeTime || b.FreeSetbodyTime) == 1 : a && (b.Speed = 1.6);
			break;
		case b.FreeSlowTime > 0 : a != 1.75 && (b.Speed = 1.6);
			break;
		default:
			a != 1.6&& (b.Speed = 1.6)
		}
	}
}),
oConeheadZombie= InheritO(OrnIZombies, {
	EName: "oConeheadZombie",
	CName: "路障伴舞僵尸",
	OrnHP: 370,
	Lvl: 3,
	SunNum: 175,
	StandGif: 11,
	PicArr: (function() {
		var b = "images/Zombies/ConeheadZombie/",
		a = "images/Zombies/Zombie/";
		return ["images/Card/Zombies/ConeheadZombie.png", b + "0.gif", b + "ConeheadZombie.gif", b + "ConeheadZombieAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Zombie.gif", a + "ZombieAttack.gif", b + "1.gif"]
	})(),
	AudioArr: ["plastichit"],
	PrivateBirth: function(a){
	    a.PrivateAct = Math.round(Math.random()*1+0) ? a.PrivateAct1 : a.PrivateAct2;
        },
        PrivateAct2:function(a){
	if(this.hard==2){
	this&&this.PrivateAct1(this);
	return
	}
            if(!this.bool){
                this.bool = 1;
                oSym.addTask(50,function(a){
                    if(+ESSunNum.innerHTML > 0 && !oS.CardKind && oS.StaticCard){
                        ESSunNum.innerHTML = +ESSunNum.innerHTML - 1;
                        a.GetSunNum += 1;
                    }else if(oS.CardKind && oS.StaticCard){
                        AppearSun(a.ZX + 40,a.pixelTop + 80,40);
                        a.GetSunNum += 1;
                    }
                    !oS.CardKind &&oS.StaticCard && a.HP >= 1 && oSym.addTask(100,arguments.callee,[a]);
		oS.CardKind &&oS.StaticCard && a.HP >= 1 && oSym.addTask(1000,arguments.callee,[a]);
                },[a])
            }
        },
	bedevilAct:function(a){
            if(!this.be){
                this.be= 1;
		  oSym.addTask(50,function(a){  
              if(!oS.CardKind && oS.StaticCard){
                        AppearSun(a.ZX+ 40,a.pixelTop + 80,40);
                        a.GetSunNum += 1;
                    }
		!oS.CardKind &&oS.StaticCard && a.HP >= 1 && oSym.addTask(1000,arguments.callee,[a]);
                },[a])
            }
        },
	PrivateAct1:function(a){
            if(!a.bool){
                a.Speed =a.oSpeed=5;
                var C = GetC(a.X + 80);
for (i=0;i<4;i++){
	for (let l= (a.R - 1 >= 1 ? a.R - 1 : 1); l<= (a.R + 1 <= oS.R ? a.R + 1 : oS.R); l++) {
                var p = oGd.$[(a.hard==2?l:a.R)+"_"+C+"_"+i];
                if(p && p.canEat && (p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom")){
		   	p.Die();
                    PlayAudio("gargantuar_thump");
		    oSym.addTask(400,function(a){
		    a.bool=1;
		    a.Speed=a.oSpeed=1.6;
		    },[a]);
		    a.Attack=100; 
		}
                }
            }
	    }
	},
	PlayNormalballAudio: function() {
		PlayAudio("plastichit")
	},
	Produce: '他的路障头盔，使他两倍坚韧于普通僵尸。<p>韧性：<font color="#FF0000">中</font></p>特性：有概率冲撞形态，碰到植物秒杀，在它冲撞第一棵植物后约4秒解除此形态，另一形态若正常关卡扣阳光，iz加阳光<font color="#FF0000"></font></p>路障僵尸在聚会上找到了一份给舞王伴舞的工作，薪水不错，虽然路障僵尸脱帽又戴帽的样子很招笑，但他们的冲击力的确是顶'
}),
oBucketheadZombie= InheritO(oConeheadZombie,{
	EName: "oBucketheadZombie",
	CName: "铁桶僵尸",
	OrnHP: 1100,
	HP:800,
	Lvl: 5,
	SunNum: 150,
	LostOrnSpeed:15,
	LostOrnGif:9,
	AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 20, 0), h.JudgeAttackH())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit0(h, 20, 0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
	NormalAttack: function(d, c) {
	var ZP=[oZombie,oZombie2,oZombie3,oDancingZombie,oDancingZombie1,oConeheadZombie,oBucketheadZombie,oZomboni,oNewspaperZombie,oNewspaperZombie2,oNewspaperZombie3,oFlagZombie,oScreenDoorZombie,oFootballZombie,oBalloonZombie,oPeaZombie,oJackinTheBoxZombie,oDiggerZombie];
            PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
            oSym.addTask(50, function(e) {
                $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
            }, [d]);
            oSym.addTask(50, function(f, e) {
                var h = $Z[f],
                    g;
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e])&&g.getHurt(h, 2, h.Attack),(g&&g!==undefined)&&(h.hard==2?CustomZombie(ZP[Math.floor(Math.random() *ZP.length)],g.R,g.C):CustomZombie(oZombie3,g.R,g.C)),h.JudgeAttack())
            }, [d, c]);
            this.PrivateAttack && this.PrivateAttack(this)
	},
	PrivateBirth: function(a){
	    a.PrivateAct = Math.round(Math.random()*1+0) ? a.PrivateAct1 : a.PrivateAct2;
	},
        PrivateAct1:function() {
			},
	 PrivateAct2:function(a){
		 if(!a.hp){
                 a.hp=true;
            oSym.addTask(1000,function(a){
        for (let i = (a.R - 1 >= 1 ? a.R - 1 : 1); i <= (a.R + 1 <= oS.R ? a.R + 1 : oS.R); i++) {
	let A = oZ.getArZ(a.ZX - 120, a.ZX + 120, i),
              w = A.length;
            while (w--) {
         (t=A[w])&&(t.OrnHP*=1.2);
            }
	}
            },[a])
	}
        },
PlayNormalballAudio: function() {
		PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)])
	},
	Produce: '他的铁桶头盔，能极大程度的承受伤害。<p>韧性：<font color="#FF0000">高(1100+800)</font><br>特点：<font color="#FF0000">对植物伤害高，植物死后召唤速度快的普僵</font></p>铁桶头僵尸经常戴着水桶，在冷漠的世界里显得独一无二。但事实上，他只是忘记了，那铁桶还在他头上而已。'
},
{
	PicArr: {            
	    0: "images/Card/Zombies/BucketheadZombie.png",
            1: "images/Zombies/BucketheadZombie/0.gif",
            2: "images/Zombies/BucketheadZombie/BucketheadZombie.gif",
            3: "images/Zombies/BucketheadZombie/BucketheadZombieAttack.gif",
            9: "images/Zombies/Zombie/Zombie2.gif",
            11: "images/Zombies/BucketheadZombie/1.gif"
	},
}),
oFootballZombie= InheritO(oConeheadZombie,{
	EName: "oFootballZombie",
	CName: "橄榄球僵尸",
	OrnHP: 2400,
	HP:270,
	Lvl: 3,
	SunNum: 200,
	StandGif: 11,
	width: 154,
	height: 160,
	OSpeed: 4,
	Speed: 4,
	beAttackedPointL: 40,
	beAttackedPointR: 134,
	PlayNormalballAudio: function() {
		PlayAudio("plastichit")
	},
	getSnowPea:OrnNoneZombies.prototype.getPea,
	getFirePea:OrnNoneZombies.prototype.getPea,
	getSlowPea:OrnNoneZombies.prototype.getPea,
	getSlowPea1:OrnNoneZombies.prototype.getPea,
	bedevil: function(c) {
		c.ExchangeLR(c, 1);
		c.JudgeAttack = c.JudgeAttackH;
		c.PZ = 0;
		c.WalkDirection = 1;
	        c.ZX = c.AttackedRX;
		c.ChkActs = c.ChkActs1;
		c.Attack=150;
		oP.MonPrgs()
		},
	PicArr: (function() {
		var a = "images/Zombies/FootballZombie/";
		return ["images/Card/Zombies/FootballZombie.png", a + "0.gif", a + "FootballZombie.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "OrnLost.gif", a + "OrnLostAttack.gif", a + "1.gif"]
	})(),
	getShadow: function(a) {
		return "left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px"
	},
	PrivateBirth: function(a){
	    a.PrivateAct = Math.round(Math.random()*1+0) ? a.PrivateAct1 : a.PrivateAct2;
	},
        PrivateAct1: function(a){
            if(!a.Change){
                a.Change = true;
                oSym.addTask(a.hard==2?1:300,function(a){
                    a.ChangeR(a);
                    a.Change = false;
                },[a])
            }
        },
	PrivateAct2:function(a){
		 if(!a.hp){
                 a.hp=true;
            oSym.addTask(600,function(a){
                PlayAudio("grassstep");
		   a.hard==2?a.Speed+=4:a.Speed+=2;
		   a.Attack+=50;
			a.hp=false;
            },[a])
		 }
        },
	AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit1(g,20,0),h.JudgeAttack())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit1(h,20,0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
	Produce: '橄榄球僵尸免疫减速，有些会给自己加速，有些会换行<p>韧性：<font color="#FF0000">极高(2500+400)</font><br>速度：<font color="#FF0000">快（原版两倍）</font><br>伤害：<font color="#FF0000">中</font><br>弱点：<font color="#FF0000">磁力菇</font></p>橄榄球僵尸因其进攻防守样样在行而受到僵尸的崇拜，圈粉无数，是僵尸橄榄球界的明星，当然这是僵尸从他家发现“Dope”之前的事了'
}),
oFootballZombie1= InheritO(oConeheadZombie,{
	EName: "oFootballZombie1",
	CName: "黑橄榄球僵尸",
	OrnHP: 5000,
	HP:1000,
	Lvl: 8,
	SunNum: 400,
	StandGif: 11,
	width: 154,
	height: 160,
	OSpeed: 2,
	Speed: 2,
	beAttackedPointL: 40,
	beAttackedPointR: 134,
	PlayNormalballAudio: function() {
		PlayAudio("plastichit")
	},
	getSnowPea:OrnNoneZombies.prototype.getPea,
	getFirePea:OrnNoneZombies.prototype.getPea,
	getSlowPea:OrnNoneZombies.prototype.getPea,
	getSlowPea1:OrnNoneZombies.prototype.getPea,
	bedevil: function() {
		},
	PicArr: (function() {
		var a = "images/Zombies/FootballZombie/";
		return ["images/Card/Zombies/FootballZombie.png", a + "0.gif", a + "FootballZombie.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "OrnLost.gif", a + "OrnLostAttack.gif", a + "1.gif"]
	})(),
	getShadow: function(a) {
		return "left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px"
	},
	AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit1(g,40,0), h.JudgeAttackH())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked &&!i.FreeFreezeTime && !i.FreeSetbodyTime && (h = $Z[f])&&(h.reNormal(h),i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif])
			},
			[d, c])
		},
	NormalAttack: function(d, c) {
            PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
            oSym.addTask(50, function(e) {
                $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
            }, [d]);
            oSym.addTask(300, function(f, e) {
                var h = $Z[f],
                    g;
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime&&((g = $P[e])&&g.getHurt(h, 2,h.Attack),g&&g!==undefined&&CustomZombie(oFootballZombie,g.R,g.C),h.JudgeAttack())
            }, [d, c]);
            this.PrivateAttack && this.PrivateAttack(this)
	},
	Produce: '橄榄球僵尸免疫减速，是双发的一生之敌，且不会溅射火豌豆<p>韧性：<font color="#FF0000">极高(2000+400)</font><br>速度：<font color="#FF0000">快（原版两倍）</font><br>伤害：<font color="#FF0000">中（1.5倍）</font><br>弱点：<font color="#FF0000">磁力菇</font></p>橄榄球僵尸因其进攻防守样样在行而受到僵尸的崇拜，圈粉无数，是僵尸橄榄球界的明星，当然这是僵尸从他家发现“Dope”之前的事了'
}),
oPoleVaultingZombie = InheritO(OrnNoneZombies, {
	EName: "oPoleVaultingZombie",
	CName: "撑杆僵尸",
	HP: 800,
	width:348,
	height: 218,
	OSpeed: 5,
	Speed: 5,
	beAttackedPointL: 215,
	beAttackedPointR:260,
	StandGif: 13,
	GetDX: function() {
		return - 238
	},
	GetDY: function() {
		return 2
	},
	Lvl: 2,
	SunNum: 125,
	BookHandPosition: "-30px 70%",
	PicArr: (function() {
		var a = "images/Zombies/PoleVaultingZombie/";
		return ["images/Card/Zombies/PoleVaultingZombie.png", a + "0.gif", a + "PoleVaultingZombie.gif", a + "PoleVaultingZombieAttack.gif", a + "PoleVaultingZombieLostHead.gif", a + "PoleVaultingZombieLostHeadAttack.gif", a + "PoleVaultingZombieHead.gif" + $Random, a + "PoleVaultingZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "PoleVaultingZombieWalk.gif", a + "PoleVaultingZombieLostHeadWalk.gif", a + "PoleVaultingZombieJump.gif", a + "PoleVaultingZombieJump2.gif", a + "1.gif"]
	})(),
	AudioArr: ["polevault", "grassstep"],
	Produce: '撑杆僵尸可以跳N格<p>韧性：<font color="#FF0000">中(800)</font><Br>速度：<font color="#FF0000">快,而后慢(跳跃后)</font><BR>特点：<font color="#FF0000">跃过他所碰到的第一筑植物</font></p>一些僵尸渴望走得更远、得到更多，这也促使他们由普通成为非凡。那就是撑杆僵尸。',
        getShadow: function(a) {
            return "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 35) + "px"
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "left:" + b.X + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        JudgeAttack: function() {
            var g = this,
                b = g.ZX,
                d = g.R + "_",
                c = GetC(b),
                h = oGd.$,
                f, a, e = b - 120;
            for (f = c - 2; f <= c; f++) {
                if (f > 9) {
                    continue
                }
                for (a = 2; a > -1;
                (p = h[d + f + "_" + a--]) && (p.EName != "oBrains" ? p.AttackedRX >= e && p.AttackedLX < b && p.canEat && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack,g.NormalAttack(g.id, p.id, p.AttackedLX)) : p.AttackedRX >= b && p.AttackedLX < b && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack, (g.NormalAttack = CZombies.prototype.NormalAttack)(g.id, p.id)))) {}
            }
        },
        getCrushed: function(a) {
            this.NormalAttack(this.id, a.id, a.AttackedLX);
            this.getCrushed = function() {
                return false
            };
            a.Stature > 0 && oSym.addTask(50, function(c) {
                var b = $Z[c];
                b && b.CrushDie()
            }, [this.id]);
            return false
        },
        getRaven: function(a) {
            return !this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX), 0
        },
        NormalAttack: function(d, b, g) {
            var f = $Z[d],
                a = f.Ele,
                c = f.EleShadow,
                e = f.EleBody;
            e.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump.gif" + $Random + Math.random();
            PlayAudio("grassstep");
            SetHidden(c);
            f.isAttacking = 1;
            f.Altitude = 2;
            f.getFreeze = function() {
                f.getSnowPea(f, 20)
            };
            oSym.addTask(50, function(h) {
                $Z[h] && PlayAudio("polevault")
            }, [d]);
            oSym.addTask(100, function(m, j, i, l, n) {
                var h = $Z[m],
                    k, q, r;
                h && ((k = $P[j]) && k.Stature > 0 ? (h.AttackedRX = (h.X = (h.AttackedLX = h.ZX = q = k.AttackedRX) - h.beAttackedPointL - 180) + h.beAttackedPointR, SetStyle(i, {
                    left: h.X  + "px",
                }), n.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif", SetVisible(l), h.isAttacking = 0, h.Altitude = 1, h.OSpeed = h.Speed = 3.2, h.NormalGif = 9, h.LostHeadGif = 10, h.NormalAttack = (r = CZombies.prototype)
                    .NormalAttack, h.getCrushed = r.getCrushed, h.getFreeze = r.getFreeze, h.getRaven = r.getRaven) : (h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g) - h.beAttackedPointR  -180) + h.beAttackedPointL, SetStyle(i, {
                    left: h.X  + "px",
                }), n.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump2.gif" + $Random + Math.random(), SetVisible(l), oSym.addTask(80, function(s, v) {
                    var u = $Z[s],
                        t;
                    u && (v.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif", u.isAttacking = 0, u.Altitude = 1, u.OSpeed = u.Speed = 3.2, u.NormalGif = 9, u.LostHeadGif = 10, u.NormalAttack = (t = CZombies.prototype).NormalAttack,u.getCrushed = t.getCrushed, u.getFreeze = t.getFreeze, u.getRaven = t.getRaven,($P[k.id]&&(u.hard==2)&&k.getHurt(h,2,1000)));
                }, [m, n])))
            }, [d, b, a, c, e])
        }
    }),
  oPoleVaultingZombie1= InheritO(oPoleVaultingZombie, {
    EName: "oPoleVaultingZombie1",
    CName: "跳跳僵尸",
    HP: 500,
    Lvl:3,
    width: 348,
    height: 218,
    OSpeed: 3.2,
    Speed: 3.2,
    beAttackedPointL: 215,
    beAttackedPointR: 260,
    StandGif: 13,
    SunNum: 225,
    GetDX: function () {
      return -238;
    },
    GetDY: function () {
      return 2;
    },
    Lvl: 2,
    BookHandPosition: "-30px 70%",
    PicArr: (function () {
      var a = "images/Zombies/PoleVaultingZombie/";
      return [
        "images/Card/Zombies/PoleVaultingZombie.png",
        a + "0.gif",
        a + "PoleVaultingZombie.gif",
        a + "PoleVaultingZombieAttack.gif",
        a + "PoleVaultingZombieLostHead.gif",
        a + "PoleVaultingZombieLostHeadAttack.gif",
        a + "PoleVaultingZombieHead.gif" + $Random,
        a + "PoleVaultingZombieDie.gif" + $Random,
        a + "BoomDie.gif" + $Random,
        a + "PoleVaultingZombieWalk.gif",
        a + "PoleVaultingZombieLostHeadWalk.gif",
        a + "PoleVaultingZombieJump.gif",
        a + "PoleVaultingZombieJump2.gif",
        a + "1.gif",
      ];
    })(),
    AudioArr: ["polevault", "grassstep"],
    Produce:
      '撑杆僵尸运用标杆高高地跃过障碍物。<p>韧性：<font color="#FF0000">中</font><Br>速度：<font color="#FF0000">快,而后慢(跳跃后)</font><BR>特点：<font color="#FF0000">跃过他所碰到的第一筑植物</font></p>一些僵尸渴望走得更远、得到更多，这也促使他们由普通成为非凡。那就是撑杆僵尸。',
    getShadow: function (a) {
      return (
        "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 35) + "px"
      );
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "left:" +
            b.X +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    JudgeAttack: function () {
      var g = this,
        b = g.ZX,
        d = g.R + "_",
        c = GetC(b),
        h = oGd.$,
        f,
        a,
        e = b - 74;
      for (f = c - 2; f <= c; f++) {
        if (f > 9) {
          continue;
        }
        for (
          a = 2;
          a > -1;
          (p = h[d + f + "_" + a--]) &&
          (p.EName != "oBrains"
            ? p.AttackedRX >= e &&
              p.AttackedLX < b &&
              p.canEat &&
              ((a = -1),
              p.Stature > 0
                ? (g.JudgeAttack = CZombies.prototype.JudgeAttack)
                : 1,
              g.NormalAttack(g.id, p.id, p.AttackedLX))
            : p.AttackedRX >= b &&
              p.AttackedLX < b &&
              ((a = -1),
              (g.JudgeAttack = CZombies.prototype.JudgeAttack),
              (g.NormalAttack = CZombies.prototype.NormalAttack)(g.id, p.id)))
        ) {}
      }
    },
    getCrushed: function (a) {
      this.NormalAttack(this.id, a.id, a.AttackedLX);
      this.getCrushed = function () {
        return false;
      };
      a.Stature > 0 &&
        oSym.addTask(
          50,
          function (c) {
            var b = $Z[c];
            b && b.CrushDie();
          },
          [this.id]
        );
      return false;
    },
    getRaven: function (a) {
      return (
        !this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX), 0
      );
    },
    NormalAttack: function (d, b, g) {
      var f = $Z[d],
        a = f.Ele,
        c = f.EleShadow,
        e = f.EleBody;
      e.src =
        "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump.gif" +
        $Random +
        Math.random();
      PlayAudio("grassstep");
      SetHidden(c);
      f.isAttacking = 1;
      f.Altitude = 2;
      f.getFreeze = function () {
        f.getSnowPea(f, 20);
      };
      oSym.addTask(
        50,
        function (h) {
          $Z[h] && PlayAudio("polevault");
        },
        [d]
      );
      oSym.addTask(
        100,
        function (m, j, i, l, n) {
          var h = $Z[m],
            k,
            q,
            r;
          h &&
            ((k = $P[j]) && k.Stature > 0
              ? ((h.AttackedRX =
                  (h.X =
                    (h.AttackedLX = h.ZX = q = k.AttackedRX) -
                    h.beAttackedPointL) + h.beAttackedPointR),
                SetStyle(i, {
                  left: h.X + "px",
                }),
                (n.src =
                  "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif"),
                SetVisible(l),
                (h.isAttacking = 0),
                (h.Altitude = 1),
                (h.OSpeed = h.Speed = 1.6),
                (h.NormalGif = 9),
                (h.LostHeadGif = 10),
                (h.NormalAttack = (r = CZombies.prototype).NormalAttack),
                (h.getCrushed = r.getCrushed),
                (h.getFreeze = r.getFreeze),
                (h.getRaven = r.getRaven))
              : ((h.ZX = h.AttackedLX =
                  (h.X = (h.AttackedRX = g) - h.beAttackedPointR) +
                  h.beAttackedPointL),
                SetStyle(i, {
                  left: h.X + "px",
                }),
		 (k!==undefined&&k.getHurt(h,2,1000)),
		 (h.hard==2&&CustomZombie(oZombie3,h.R,GetC(h.ZX))),
                (n.src =
                  "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump2.gif" +
                  $Random +
                  Math.random()),
                SetVisible(l),
                oSym.addTask(
                  80,
                  function (s, v) {
                    var u = $Z[s],
                      t;
                    u &&
                      ((u.isAttacking = 0),
                      (u.Altitude = 1),
                      (v.src = u.PicArr[u.NormalGif]));
                  },
                  [m, n]
                )));
        },
        [d, b, a, c, e]
      );
    },
  }),
OrnIIZombies = InheritO(OrnNoneZombies, {
	Ornaments: 2,
	BreakPoint: 91,
	NormalGif: 2,
	AttackGif: 3,
	LostHeadGif: 4,
	LostHeadAttackGif: 5,
	OrnLostNormalGif: 6,
	OrnLostAttackGif: 7,
	OrnLostHeadNormalGif: 8,
	OrnLostHeadAttackGif: 9,
	HeadGif: 10,
	DieGif: 11,
	BoomDieGif: 12
}),
oNewspaperZombie = InheritO(OrnIIZombies, {
	EName: "oNewspaperZombie",
	CName: "你亲爱的二爷",
	OrnHP: 200,
	Lvl: 4,
	HP:500,
	Altitude:1,
	LostPaperGif: 13,
	StandGif: 14,
	width: 216,
	height: 164,
	beAttackedPointL: 60,
	beAttackedPointR: 130,
	SunNum: 125,
	BreakPoint:1,
	LostPaperSpeed: 32,
	LostPaperAtack:800,
	PicArr: (function() {
		var a = "images/Zombies/NewspaperZombie/";
		return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostNewspaper.gif", a + "1.gif"]
	})(),
	AudioArr: ["newspaper_rarrgh2"],
	Produce: '他的封印只能提供有限的防御<p>韧性：<font color="#FF0000">中（500）</font><br>封印韧性：<font color="#FF0000">低（200）</font><br>伤害：<font color="#FF0000">有报时同普僵，破报后8倍</font><br>速度：正常，而后超级快(失去封印后)</font><br>特性：若在有报时受到灰烬伤害，将自身血量变为900（只能一次),破报愣神时无敌</p>你亲爱的二爷很容易破防，请不要在黑夜关卡用小喷菇惹他',
	getShadow: function(a) {
		return "left:75px;top:" + (a.height - 25) + "px"
	},
	CanPass: function(d, c) {
		return c
	},
	getExplosion: function(){
            if(this.OrnHP >= 1){
                this.getHit1(this,200)
		this.HP=900;
	    }
	    else{
                this.DisappearDie()
            }
        },
			AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) &&  (h.OrnHP?g.getHit0(g,10,0): g.getHit0(g,100,0)),h.JudgeAttack())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? ((g.OrnHP!=0?h.getHit0(h, 10, 0): h.getHit0(h, 100, 0)), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
	GoingDie: function(b) {
		var a = this,
		c = a.id;
		a.EleBody.src = b;
		oSym.addTask(200, ClearChild, [NewImg(0, a.PicArr[a.HeadGif] + Math.random(), "left:" + a.AttackedLX + "px;top:" + (a.pixelTop - 20) + "px;z-index:" + a.zIndex, EDPZ)]);
		a.beAttacked = 0;
		a.FreeFreezeTime = a.FreeSetbodyTime = a.FreeSlowTime = 0;
		a.AutoReduceHP(c)
	},
	getHurtOrnLost: function(j, a, g, m, c, l, k, i) {
		var e = this;
		if (!e.beAttacked) {
			k && e.DisappearDie();
			return
		}
		var b = e.id,
		h = e.HP,
		d = e.PicArr,
		f = e.isAttacking;
		switch (true) {
		case(h -= g) < 1 : e.HP = 0;
			e.NormalDie();
			return;
		case h < 1 : e.HP = h;
			e.GoingDie(d[[e.OrnLostHeadNormalGif, e.OrnLostHeadAttackGif][f]]);
			return
		}
		e.HP = h;
		switch (m) {
		case - 1 : e.getSlow(e, b, 1000);
			break;
		case 1:
			e.getFireball(e, b, a);
			break;
		default:
			!i && j == -1 && e.PlayNormalballAudio()
		}
		SetAlpha(e.EleBody,400, 0.5);
		oSym.addTask(10,
		function(q) {
			var n = $Z[q];
			n && SetAlpha(n.EleBody,800,1)
		},
		[b])
	},
	getSnowPea: function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getSlowPea:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getSlowPea1:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit1(c, a, b)
	},
	getFirePea: function(f,b,e) {
		f.PlayFireballAudio(); (f.FreeSlowTime || f.FreeFreezeTime) && (f.Speed = f.OSpeed, f.FreeSlowTime = 0, f.FreeFreezeTime = 0);
		f.Attack = 800;
		var d = f.AttackedLX,
		g = f.AttackedRX,
		a = oZ.getArZ(d, d + 40, f.R),
		c = a.length,
		h;
		while (c--) { (h = a[c]) != this && h.getFirePeaSputtering()
		} (f.HP -= b) < f.BreakPoint ? (f.getFirePea = OrnNoneZombies.prototype.getFirePea, f.GoingDie(f.PicArr[[f.LostHeadGif, f.LostHeadAttackGif][f.isAttacking]]), f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = function() {}) : (f.CheckOrnHP(f, f.id, f.OrnHP, b, f.PicArr, f.isAttacking, 0), f.SetAlpha(f, f.EleBody,400, 0.5), oSym.addTask(10,
		function(j, i) { (i = $Z[j]) && i.SetAlpha(i, i.EleBody,800, 1)
		},
		[f.id]))
	},
	getHit0: function(c, a) {
		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
		},
		[c.id])
	},
	getHit1: function(b, a) { (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody,400, 0.5), oSym.addTask(10,
		function(d, c) { (c = $Z[d]) && c.SetAlpha(c, c.EleBody,800, 1)
		},
		[b.id]))
	},
	getHit2: function(b, a) { (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.SetAlpha(b, b.EleBody,400, 0.5), oSym.addTask(10,
		function(d, c) { (c = $Z[d]) && c.SetAlpha(c, c.EleBody,800,1)
		},
		[b.id]))
	},
	getHit3: function(b, a) { (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody,400, 0.5), oSym.addTask(10,
		function(d, c) { (c = $Z[d]) && c.SetAlpha(c, c.EleBody,800,1)
		},
		[b.id]))
	},
        NormalAttack1: function(d, c) {
            PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
            oSym.addTask(50, function(e) {
                $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
            }, [d]);
            oSym.addTask(10, function(f, e) {
                var h = $Z[f],
                    g;
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && g.getHurt(h, h.AKind, h.Attack), h.JudgeAttack())
            }, [d, c]);
            this.PrivateAttack && this.PrivateAttack(this)
        }, 
	CheckOrnHP: function(g, h, d, c, f, b, a) {
		var e = OrnNoneZombies.prototype; (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.ChkActs = function() {
			return 1
		},
		g.ChkActs1 = function() {
			return 1
		},
		g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9,g.Altitude=4,g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea,g.getSlowPea = e.getSlowPea,g.getSlowPea1= e.getSlowPea1, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit, oSym.addTask(300,
		function(m, l) {
			var k = $Z[m];
			if (!k) {
				return
			}
			var j = CZombies.prototype,
			i = k.OSpeed = k.LostPaperSpeed;
			k.Altitude=1;
			k.hard==2&&(k.AKind=2);
			k.NormalAttack=k.NormalAttack1;
			k.ChkActs = (k.PZ?j.ChkActs:j.ChkActs1);
			k.ChkActs1 = j.ChkActs1;
			k.Speed && (k.Speed = !k.FreeSlowTime ? i: 0.5 * i);
			if (!k.beAttacked) {
				return
			}
			PlayAudio("newspaper_rarrgh2");
			k.EleBody.src = l;
			k.JudgeAttack();
		},
		[h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
	}
}),
  oNewspaperZombie1= InheritO(OrnIIZombies, {
    EName: "oNewspaperZombie1",
    CName: "读报僵尸",
    OrnHP: 180,
    HP: 800,
    Lvl: 2,
    LostPaperGif: 13,
    StandGif: 14,
    width: 216,
    height: 164,
    SunNum: 75,
    beAttackedPointL: 60,
    beAttackedPointR: 240,
    LostPaperSpeed: 5,
    HeadPosition: [{
      x: 62,
      y: 30,
      width: 40,
      height: 40,
    }, {
      x: 62,
      y: 30,
      width: 40,
      height: 40,
    }, ],
    PicArr: (function() {
      var a = "images/Zombies/NewspaperZombie/";
      return [
        "images/Card/Zombies/NewspaperZombie.png",
        a + "0.gif",
        a + "HeadWalk1.gif",
        a + "HeadAttack1.gif",
        a + "LostHeadWalk1.gif",
        a + "LostHeadAttack1.gif",
        a + "HeadWalk0.gif",
        a + "HeadAttack0.gif",
        a + "LostHeadWalk0.gif",
        a + "LostHeadAttack0.gif",
        a + "Head.gif" + $Random,
        a + "Die.gif" + $Random,
        a + "BoomDie.gif" + $Random,
        a + "LostNewspaper.gif",
        a + "1.gif",
      ];
    })(),
    AudioArr: ["newspaper_rarrgh2"],
    Produce: '他的报纸只能提供有限的防御。<p>韧性：<font color="#FF0000">中</font><br>报纸韧性：<font color="#FF0000">低</font><br>速度：正常，而后快(失去报纸后)</p>看到在另一个平行宇宙称霸的二爷，停留在原时空的读报也坐不住了，终于在星云的帮助下喝了药水，喝完后，他的感言：“ I feel I become stronger!',
    getShadow: function(a) {
      return "left:75px;top:" + (a.height - 25) + "px";
    },
    GoingDie: function(b) {
      var a = this,
        c = a.id;
      a.EleBody.src = b;
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a.PicArr[a.HeadGif] + Math.random(),
          "left:" +
          a.AttackedLX +
          "px;top:" +
          (a.pixelTop - 20) +
          "px;z-index:" +
          a.zIndex,
          EDPZ
        ),
      ]);
      a.beAttacked = 0;
      a.FreeFreezeTime = a.FreeSetbodyTime = a.FreeSlowTime = 0;
      a.AutoReduceHP(c);
    },
    getHurtOrnLost: function(j, a, g, m, c, l, k, i) {
      var e = this;
      if (!e.beAttacked) {
        k && e.DisappearDie();
        return;
      }
      var b = e.id,
        h = e.HP,
        d = e.PicArr,
        f = e.isAttacking;
      switch (true) {
        case (h -= g) < 1:
          e.HP = 0;
          e.NormalDie();
          return;
        case h < 91:
          e.HP = h;
          e.GoingDie(d[[e.OrnLostHeadNormalGif, e.OrnLostHeadAttackGif][f]]);
          return;
      }
      e.HP = h;
      switch (m) {
        case -1:
          e.getSlow(e, b, 1000);
          break;
        case 1:
          e.getFireball(e, b, a);
          break;
        default:
          !i && j == -1 && e.PlayNormalballAudio();
      }
      SetAlpha(e.EleBody, 50, 0.5);
      oSym.addTask(
        10,
        function(q) {
          var n = $Z[q];
          n && SetAlpha(n.EleBody, 100, 1);
        },
        [b]
      );
    },
    getSnowPea: function(c, a, b) {
      PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
      c.getHit0(c, a, b);
    },
getSlowPea:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
getSlowPea1:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit1(c, a, b)
	},
    getFirePea: function(f, b, e) {
      f.PlayFireballAudio();
      (f.FreeSlowTime || f.FreeFreezeTime) &&
      ((f.Speed = f.OSpeed), (f.FreeSlowTime = 0), (f.FreeFreezeTime = 0));
      f.Attack = 100;
      var d = f.AttackedLX,
        g = f.AttackedRX,
        a = oZ.getArZ(d, d + 40, f.R),
        c = a.length,
        h;
      while (c--) {
        (h = a[c]) != this && h.getFirePeaSputtering();
      }
      (f.HP -= b) < f.BreakPoint ?
        ((f.getFirePea = OrnNoneZombies.prototype.getFirePea),
          f.GoingDie(
            f.PicArr[[f.LostHeadGif, f.LostHeadAttackGif][f.isAttacking]]
          ),
          (f.getHit =
            f.getHit0 =
            f.getHit1 =
            f.getHit2 =
            f.getHit3 =
            function() {})) :
        (f.CheckOrnHP(f, f.id, f.OrnHP, b, f.PicArr, f.isAttacking, 0),
          f.SetAlpha(f, f.EleBody, 50, 0.5),
          oSym.addTask(
            10,
            function(j, i) {
              (i = $Z[j]) && i.SetAlpha(i, i.EleBody, 100, 1);
            },
            [f.id]
          ));
    },
    getHit0: function(c, a, b) {
      b == c.WalkDirection ?
        (c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1),
          c.SetAlpha(c, c.EleBody, 50, 0.5),
          oSym.addTask(
            10,
            function(e, d) {
              (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1);
            },
            [c.id]
          )) :
        (c.HP -= a) < c.BreakPoint &&
        (c.GoingDie(
            c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]
          ),
          (c.getFirePea = OrnNoneZombies.prototype.getFirePea),
          (c.getSnowPea = OrnNoneZombies.prototype.getSnowPea),
          (c.getHit =
            c.getHit0 =
            c.getHit1 =
            c.getHit2 =
            c.getHit3 =
            function() {}));
    },
    getHit1: function(b, a) {
      (b.HP -= a) < b.BreakPoint ?
        (b.GoingDie(
            b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]
          ),
          (b.getFirePea = OrnNoneZombies.prototype.getFirePea),
          (b.getSnowPea = OrnNoneZombies.prototype.getSnowPea),
          (b.getHit =
            b.getHit0 =
            b.getHit1 =
            b.getHit2 =
            b.getHit3 =
            function() {})) :
        (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0),
          b.SetAlpha(b, b.EleBody, 50, 0.5),
          oSym.addTask(
            10,
            function(d, c) {
              (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1);
            },
            [b.id]
          ));
    },
    getHit2: function(b, a) {
      (b.HP -= a) < b.BreakPoint ?
        (b.GoingDie(
            b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]
          ),
          (b.getFirePea = OrnNoneZombies.prototype.getFirePea),
          (b.getSnowPea = OrnNoneZombies.prototype.getSnowPea),
          (b.getHit =
            b.getHit0 =
            b.getHit1 =
            b.getHit2 =
            b.getHit3 =
            function() {})) :
        (b.SetAlpha(b, b.EleBody, 50, 0.5),
          oSym.addTask(
            10,
            function(d, c) {
              (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1);
            },
            [b.id]
          ));
    },
    getHit3: function(b, a) {
      (b.HP -= a) < b.BreakPoint ?
        (b.GoingDie(
            b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]
          ),
          (b.getFirePea = OrnNoneZombies.prototype.getFirePea),
          (b.getSnowPea = OrnNoneZombies.prototype.getSnowPea),
          (b.getHit =
            b.getHit0 =
            b.getHit1 =
            b.getHit2 =
            b.getHit3 =
            function() {})) :
        (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0),
          b.SetAlpha(b, b.EleBody, 50, 0.5),
          oSym.addTask(
            10,
            function(d, c) {
              (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1);
            },
            [b.id]
          ));
    },
    CheckOrnHP: function(g, h, d, c, f, b, a) {
      var e = OrnNoneZombies.prototype;
      (g.OrnHP = d -= c) < 1 &&
        (a && (g.HP += d),
          (g.ChkActs = function() {
            return 1;
          }),
          (g.ChkActs1 = function() {
            return 1;
          }),
          (g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random()),
          (g.Ornaments = 0),
          (g.LostHeadGif = 8),
          (g.LostHeadAttackGif = 9),
          (g.getFirePea = e.getFirePea),
          (g.getSnowPea = e.getSnowPea),
	 (g.getSlowPea = e.getPea),
          (g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit),
          oSym.addTask(
            150,
            function(m, l) {
              var k = $Z[m];
              if (!k) {
                return;
              }
              var j = CZombies.prototype,
                i = (k.OSpeed = k.LostPaperSpeed);
              k.ChkActs = (k.PZ?j.ChkActs:j.ChkActs1);
              k.ChkActs1 = j.ChkActs1;
              k.Speed && (k.Speed = !k.FreeSlowTime ? i : 0.5 * i);
              if (!k.beAttacked) {
                return;
              }
              PlayAudio("newspaper_rarrgh2");
              k.EleBody.src = l;
              k.JudgeAttack();
            },
            [
              h,
              f[
                [
                  (g.NormalGif = g.OrnLostNormalGif),
                  (g.AttackGif = g.OrnLostAttackGif),
                ][b]
              ],
            ]
          ));
    },
  }),
OrnIIZombies1= InheritO(OrnNoneZombies, {
	Ornaments: 1,
	BreakPoint: 91,
	NormalGif: 2,
	AttackGif: 3,
	LostHeadGif: 4,
	LostHeadAttackGif: 5,
	OrnLostNormalGif: 6,
	OrnLostAttackGif: 7,
	OrnLostHeadNormalGif: 8,
	OrnLostHeadAttackGif: 9,
	HeadGif: 10,
	DieGif: 11,
	BoomDieGif: 12
}),
oNewspaperZombie2= InheritO(OrnIIZombies, {
	EName: "oNewspaperZombie2",
	CName: "你亲爱的精英二爷",
	OrnHP:600,
	Lvl: 8,
	HP:1600,
	Altitude:1,
	LostPaperGif: 13,
	StandGif: 14,
	width: 216,
	height: 164,
	beAttackedPointL: 60,
	beAttackedPointR: 130,
	SunNum: 325,
	BreakPoint:1,
	LostPaperSpeed:10,
	LostPaperAtack:800,
	PicArr: (function() {
		var a = "images/Zombies/NewspaperZombie/";
		return ["images/Card/Zombies/NewspaperZombie.png", a + "01.gif", a + "HeadWalk3.gif", a + "HeadAttack2.gif", a + "LostHeadWalk3.gif", a + "LostHeadAttack2.gif", a + "HeadWalk2.gif", a + "HeadWalk2.gif", a + "LostHeadWalk2.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die1.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostNewspaper1.gif", a + "11.gif"]
	})(),
	AudioArr: ["newspaper_rarrgh"],
	Produce: '他的封印只能提供有限的防御<p>韧性：<font color="#FF0000">高（1600）</font><br>封印韧性：<font color="#FF0000">中（600）</font><br>伤害：<font color="#FF0000">有报时同普僵，破报后碾压</font><br>速度：正常，而后较快(失去封印后)</font><br>特性：破报后碾压植物，破报前免疫魅惑，报纸优先承伤，发怒时，全屏墓碑出普通二爷</p>二爷界的首领',
	getShadow: function(a) {
		return "left:75px;top:" + (a.height - 25) + "px"
	},
	CanPass: function(d, c) {
		return c
	},
	ChkActs: function(h, f, j, e) {
            var d, c, g;
            !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
                R: f,
                ar: [oS.R - 1],
                CustomTop: 400 - h.height + h.GetDY()
            })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
		if(h.HPlook&&!h.bHP){
	h.bHP=1;
    var b = NewEle("dHP", "div", "position:absolute;color:#fff;top:" + (h.pixelTop + 100) + "px;left:" + (h.ZX+80) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "hp" + Math.random();
    dHP.id = A;
    var C = $(A);
    b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
    oSym.addTask(1, function(C, h, b) {
      ClearChild(C);
      if (h.HP > h.BreakPoint && $Z[h.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (h.ZX+80) + "px";
        b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, h, b])
    }, [C, h, b])
		}
            return g
        },
	bedevil: function() {},
	getbedevil: function() {},
	GoingDie: function(b) {
		var a = this,
		c = a.id;
		a.EleBody.src = b;
		oSym.addTask(200, ClearChild, [NewImg(0, a.PicArr[a.HeadGif] + Math.random(), "left:" + a.AttackedLX + "px;top:" + (a.pixelTop - 20) + "px;z-index:" + a.zIndex, EDPZ)]);
		a.FreeFreezeTime =a.FreeSetbodyTime = a.FreeSlowTime = 0;
		a.AutoReduceHP(c)
	},
        getExplosion: function(Attack,howDie,callback) {
            Attack = Attack == undefined?1800:Attack;
            howDie = howDie == undefined?"ExplosionDie":howDie;
            if(this.OrnHP>=Attack){
                this.OrnHP-=Attack;
		this.HP=3000;
            }else if(this.OrnHP<1){
                if(this.HP>Attack){
                    this.HP-=Attack;
                }else if(this.HP<=Attack){
                    this[howDie](this);
                }
            }else if(this.OrnHP<Attack && this.OrnHP>1){
                if(this.OrnHP+this.HP>Attack){
                    this.OrnHP=0;
                    this.HP=3000;
                }else if(this.OrnHP+this.HP<=Attack){
		    this.OrnHP=0;
                    this.HP=3000; 
                }
            }
            callback && callback();
        },
	PrivateAct:function(a){
            if(!a.bool){
	        for (let i = 0; i <= 0; i++) {
                oP.SetTimeoutTomZombie([oNewspaperZombie]);
		try{oP.SetTimeoutWaterZombie(7,9,1,[oNewspaperZombie]);}catch{};
		a.bool=1;
              }
	}else if(a.HP<=800){
	a.getSlow=a.getFreeze=a.getFreeze1=function(){};
	a.FreeSlowTime=a.FreeFreezeTime=0;
	a.Speed=a.LostPaperSpeed;
	    }
	},
	PrivateBirth: function() {
	    try{AppearTombstones(8,9,this.hard==2?5:Math.round(Math.random()*1+1))}catch{}
        },
		getHurtOrnLost: function(j, a, g, m, c, l, k, i) {
		var e = this;
		if (!e.beAttacked) {
			k && e.DisappearDie();
			return
		}
		var b = e.id,
		h = e.HP,
		d = e.PicArr,
		f = e.isAttacking;
		switch (true) {
		case(h -= g) < 1 : e.HP =0;
			e.NormalDie();
			return;
		case h < 1 : e.HP = h;
			e.GoingDie(d[[e.OrnLostHeadNormalGif, e.OrnLostHeadAttackGif][f]]);
			return
		}
		e.HP = h;
		switch (m) {
		case - 1 : e.getSlow(e, b, 1000);
			break;
		case 1:
			e.getFireball(e, b, a);
			break;
		default:
			!i && j == -1 && e.PlayNormalballAudio()
		}
		SetAlpha(e.EleBody,400, 0.5);
		oSym.addTask(10,
		function(q) {
			var n = $Z[q];
			n && SetAlpha(n.EleBody,800,1)
		},
		[b])
	},
	getHit0: function(c, a, b) {
 		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
 		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
 		},
 		[c.id])
 	},
	getHit1: function(c, a, b) {
 		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
 		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
 		},
 		[c.id])
 	},
	getHit2: function(c, a, b) {
 		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
 		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
 		},
 		[c.id])
 	},
	getHit3: function(c, a, b) {
 		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
 		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
 		},
 		[c.id])
 	},
	getHit4: function(c, a, b) {
 		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
 		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
 		},
 		[c.id])
 	},
	AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g,200,0), h.JudgeAttack())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.DieGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit0(h, 200, 0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
	getSnowPea: function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getSlowPea:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getSlowPea1:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit1(c, a, b)
	},
	reNormal: function(c) {
			c.ExchangeLR(c, 0);
			c.JudgeAttack = (!c.OrnHP?c.JudgeAttack1:CZombies.prototype.JudgeAttack);
			c.PZ = 1;
			c.WalkDirection = 0;
			c.ZX = c.AttackedLX;
			c.ChkActs = CZombies.prototype.ChkActs;
		},
	getFirePea: function(f,b,e) {
		f.PlayFireballAudio(); (f.FreeSlowTime || f.FreeFreezeTime) && (f.Speed = f.OSpeed, f.FreeSlowTime = 0, f.FreeFreezeTime = 0);
		f.Attack = 100;
		var d = f.AttackedLX,
		g = f.AttackedRX,
		a = oZ.getArZ(d, d + 40, f.R),
		c = a.length,
		h;
		while (c--) { (h = a[c]) != this && h.getFirePeaSputtering()
		} (f.CheckOrnHP(f, f.id, f.OrnHP, b, f.PicArr, f.isAttacking, 0), f.SetAlpha(f, f.EleBody,400, 0.5), oSym.addTask(10,
		function(j, i) { (i = $Z[j]) && i.SetAlpha(i, i.EleBody,100, 1)
		},
		[f.id]))
	},
	CheckOrnHP: function(g, h, d, c, f, b, a) {
		var e = OrnNoneZombies.prototype; (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.ChkActs = function() {
			return 1
		},
		g.ChkActs1 = function() {
			return 1
		},
		g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(),g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9,g.getFirePea =g.getSnowPea = g.getSlowPea= g.getSlowPea1=g.getSlow=g.getHit0=g.getExplosion=g.getThump=g.getRaven=g.getHit1=g.getHit2=g.getHit3=g.getHit4=function(){},g.AKind=2,oSym.addTask(600,
		function(m, l) {
			var k = $Z[m];
			if (!k) {
				return
			}
			var j = CZombies.prototype,
			i = k.OSpeed = k.LostPaperSpeed;
			k.Altitude=1;
			k.getPea=e.getPea;
			k.getSlow=j.getSlow;
			k.getSnowPea=e.getSnowPea;
			k.getSlowPea=e.getSlowPea;
			k.getSlowPea1=e.getSlowPea1;
			k.getFirePea=e.getFirePea;
			k.getRaven=j.getRaven;
			k.getThump=j.getThump;
			k.getHit1=k.getHit2=k.getHit3=k.getHit0=k.getHit4=e.getHit;
			k.getExplosion=j.getExplosion;
			k.Attack=800;
			k.Akind=0;
			k.NormalAttack=k.NormalAttack1;
			k.JudgeAttack=k.JudgeAttack1;
			k.bedevil=j.bedevil;
			k.getbedevil=j.getbedevil;
			k.ChkActs = (k.PZ?j.ChkActs:j.ChkActs1);
			k.ChkActs1 = j.ChkActs1;
			k.Speed && (k.Speed = !k.FreeSlowTime ? i: 0.5 * i);
			if (!k.beAttacked) {
				return
			}
			PlayAudio("newspaper_rarrgh");
			k.EleBody.src = l;
			k.JudgeAttack();
			k.Attack=800
		},
		[h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
	},
			NormalAttack1: function(c, b) {
			var d = $Z[c];
			$P[b].getHurt(d, 2, d.Attack)
		},
		JudgeAttack1: function() {
			var f = this,
			c = f.ZX,
			d = f.R + "_",
			e = GetC(c),
			g = oGd.$,
			b; (b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g)) && f.NormalAttack(b[0], b[1])
		}
}),
oBoom=InheritO(oZombie, {
HP:400,
EName:"oBoom",
PicArr: (function() {
    var a = "images/Zombies/Zombie/";
    return ["images/Card/Zombies/Zombie.png", a + "unlook.gif", a + "unlook.gif", a + "unlook.gif", a + "unlook.gif", a + "unlook.gif", a + "unlook.gif" + $Random, a + "unlook.gif" + $Random, a + "unlook.gif" + $Random, a + "unlook.gif" + $Random, a + "unlook.gif" + $Random, a + "unlook.gif" + $Random, "images/Zombies/JackinTheBoxZombie/Boom.gif" + $Random]
  })(),
PrivateAct:function(){this&&this.OpenBox(this.id)},
bedevilAct:function(){this&&this.OpenBox(this.id)},
OpenBox:oBackupDancer1.prototype.OpenBox
}),
oNewspaperZombie3= InheritO(OrnIIZombies, {
	EName: "oNewspaperZombie3",
	CName: "你亲爱的二形态精英二爷",
	OrnHP: 200,
	Lvl: 4,
	HP:1000,
	Altitude:1,
	LostPaperGif: 13,
	StandGif: 14,
	width: 216,
	height: 164,
	beAttackedPointL: 60,
	beAttackedPointR: 130,
	SunNum: 225,
	BreakPoint:1,
	LostPaperSpeed: 8,
	LostPaperAtack:800,
	PicArr: (function() {
		var a = "images/Zombies/NewspaperZombie/";
		return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostNewspaper.gif", a + "1.gif"]
	})(),
	AudioArr: ["newspaper_rarrgh2"],
	Produce: '他的封印只能提供有限的防御<p>韧性：<font color="#FF0000">中（1000）</font><br>封印韧性：<font color="#FF0000">低（200）</font><br>伤害：<font color="#FF0000">同普僵</font><br>速度：正常，而后快(失去封印后)</font><br>特性：若在有报时受到灰烬伤害，将自身血量变为1500（只能一次)</p>你亲爱的二爷很容易破防，请不要在黑夜关卡用小喷菇惹他',
	getShadow: function(a) {
		return "left:75px;top:" + (a.height - 25) + "px"
	},
	CanPass: function(d, c) {
		return c
	},
	ChkActs: function(h, f, j, e) {
            var d, c, g;
            !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
                R: f,
                ar: [oS.R - 1],
                CustomTop: 400 - h.height + h.GetDY()
            })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
		if(h.HPlook&&!h.bHP){
	h.bHP=1;
    var b = NewEle("dHP", "div", "position:absolute;color:#fff;top:" + (h.pixelTop + 100) + "px;left:" + (h.ZX+80) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "hp" + Math.random();
    dHP.id = A;
    var C = $(A);
    b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
    oSym.addTask(1, function(C, h, b) {
      ClearChild(C);
      if (h.HP > h.BreakPoint && $Z[h.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (h.ZX+80) + "px";
        b.innerHTML = '<div>' + Math.round(Math.max(h.OrnHP,0) + h.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, h, b])
    }, [C, h, b]);
		}
            return g
        },
	ChkActs1: function(g, e, h, d) {
			var c, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), !g.isAttacking ? (g.AttackedLX += (c = g.Speed)) > oS.W ? (h.splice(d, 1), g.DisappearDie(), f = 0) : (g.ZX = g.AttackedRX += c, g.Ele.style.left = Math.ceil(g.X += c) + "px", f = 1) : f = 1) : f = 1;
			return f
		},
        getExplosion: function(Attack,howDie,callback) {
            Attack = Attack == undefined?1800:Attack;
            howDie = howDie == undefined?"ExplosionDie":howDie;
            if(this.OrnHP>=Attack){
                this.OrnHP-=Attack;
		this.HP=1500;
            }else if(this.OrnHP<1){
                if(this.HP>Attack){
                    this.HP-=Attack;
                }else if(this.HP<=Attack){
                    this[howDie](this);
                }
            }else if(this.OrnHP<Attack && this.OrnHP>1){
                if(this.OrnHP+this.HP>Attack){
                    this.OrnHP=0;
                    this.HP=1500;
                }else if(this.OrnHP+this.HP<=Attack){
		    this.OrnHP=0;
                    this.HP=1500; 
                }
            }
            callback && callback();
        },
        PrivateAct: function(a){
            if(!a.bool){
            a.bool = 1;
            oSym.addTask(75,function(a){
	    if(!$Z[a.id]){return}
            let z = $(a.id);
            let div = $n("div");
            let d = "Pea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/PB31.gif">';
            EditEle(div,0,{
                position:"absolute",
                zIndex:"24",
                left:a.ZX + "px",
                top:a.pixelTop + 40 + "px"
            },EDPZ,0)
            oSym.addTask(1,function(z,d,a){
                try{
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                let pea = $(d);
                let C = GetC(a.ZX + 40);
                for(let i = 3;i >= 0;i--){
                    for(let j = 1;j <= C;j++){
                        let p = oGd.$[a.R+"_"+j+"_"+i];
                        p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom"&& p.EName != "oGatlingPea" && p.EName != "oLilyPad" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom"&& p.EName != "oSunFlower") && ((p.AttackedLX+ $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("potato_mine"),(a.hard==2?CustomZombie(oBoom,p.R,p.C):p.HP -=1000),($(d) && ClearChild($(d))));
                        p && (p.canEat) && (p.HP <= 0) && p.Die();
                    }
                }
	let Z= oZ.getArHZ($(d).offsetLeft -50,a.ZX +60,a.R);
          let i = Z.length;
          while (i--) {
            Z&&  (Z[i].Altitude==1) && (PlayAudio("potato_mine"), (Z[i].getHit0(Z[i],300,0),($(d) && ClearChild($(d)))));
          }
                if($(d).offsetLeft <= 0){
                    ClearChild($(d));
                    $(d).isDie = true;
                }
                !($(d).isDie) && oSym.addTask(1,arguments.callee,[z,d,a])
                }catch(e){
                }
            },[z,d,a]);
            !a.isDie && (a.HP > 60)&& (a.PZ)&&oSym.addTask(75,arguments.callee,[a])
            },[a]);
            }
        },
  bedevilAct: function(a) {
    if (!a.e) {
      a.Speed = 1;
      a.e = 1;
      oSym.addTask(100, function(a) {
	if(!$Z[a.id]){return}
        let z = $(a.id);
        let div = $n("div");
        let d = "Pea" + Math.random();
        div.id = d;
        div.innerHTML = '<img src="images/Plants/PB31.gif">';
        EditEle(div, 0, {
          position: "absolute",
          transform: "rotateY(20deg)",
          zIndex: "24",
          left: a.ZX + "px",
          top: a.pixelTop + 40 + "px"
        }, EDPZ, 0)
        oSym.addTask(1, function(z, d, a) {
          $(d).style.left = $(d).offsetLeft + 5 + "px";
          let pea = $(d);
          let C = GetC(a.ZX+ 40);
          let p = oZ.getArZ(a.ZX-10, $(d).offsetLeft + 50, a.R);
          let i = p.length;
          while (i--) {
            p &&  (p[i].Altitude==1)&& (PlayAudio("potato_mine"), (a.hard==2?CustomZombies(new oBoom,p[i].R,GetC(p[i].ZX)-1,1):p[i].getHit0(p[i], 300, 0),($(d) && ClearChild($(d)))));
          }
          if ($(d).offsetLeft >= 900) {
            ClearChild($(d));
            $(d).isDie = true;
          }!($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a])
        }, [z, d, a]);
        !a.isDie && (a.HP > 60) && (!a.PZ) && oSym.addTask(75, arguments.callee, [a])
      }, [a]);
    }
  },
              AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g,100,0), h.JudgeAttack())
			},
			[d, c])
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit0(h, 100, 0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c])
		},
	bedevil: function(c) {
			c.ExchangeLR(c, 1);
			c.JudgeAttack = c.JudgeAttackH;
			c.PZ = 0;
			c.WalkDirection = 1;
			c.ZX = c.AttackedRX;
			c.ChkActs = (c.OrnHP?c.ChkActs1:CZombies.prototype.ChkActs1);
			oP.MonPrgs()
		},
	GoingDie: function(b) {
		var a = this,
		c = a.id;
		a.EleBody.src = b;
		oSym.addTask(200, ClearChild, [NewImg(0, a.PicArr[a.HeadGif] + Math.random(), "left:" + a.AttackedLX + "px;top:" + (a.pixelTop - 20) + "px;z-index:" + a.zIndex, EDPZ)]);
		a.beAttacked = 0;
		a.FreeFreezeTime = a.FreeSetbodyTime = a.FreeSlowTime = 0;
		a.AutoReduceHP(c)
	},
	getHurtOrnLost: function(j, a, g, m, c, l, k, i) {
		var e = this;
		if (!e.beAttacked) {
			k && e.DisappearDie();
			return
		}
		var b = e.id,
		h = e.HP,
		d = e.PicArr,
		f = e.isAttacking;
		switch (true) {
		case(h -= g) < 1 : e.HP = 0;
			e.NormalDie();
			return;
		case h < 1 : e.HP = h;
			e.GoingDie(d[[e.OrnLostHeadNormalGif, e.OrnLostHeadAttackGif][f]]);
			return
		}
		e.HP = h;
		switch (m) {
		case - 1 : e.getSlow(e, b, 1000);
			break;
		case 1:
			e.getFireball(e, b, a);
			break;
		default:
			!i && j == -1 && e.PlayNormalballAudio()
		}
		SetAlpha(e.EleBody,400, 0.5);
		oSym.addTask(10,
		function(q) {
			var n = $Z[q];
			n && SetAlpha(n.EleBody,800,1)
		},
		[b])
	},
	getSnowPea: function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getSlowPea:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getSlowPea1:function(c, a, b) {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
		c.getHit1(c, a, b)
	},
	getFirePea: function(f,b,e) {
		f.PlayFireballAudio(); (f.FreeSlowTime || f.FreeFreezeTime) && (f.Speed = f.OSpeed, f.FreeSlowTime = 0, f.FreeFreezeTime = 0);
		f.Attack = 800;
		var d = f.AttackedLX,
		g = f.AttackedRX,
		a = oZ.getArZ(d, d + 40, f.R),
		c = a.length,
		h;
		while (c--) { (h = a[c]) != this && h.getFirePeaSputtering()
		} (f.HP -= b) < f.BreakPoint ? (f.getFirePea = OrnNoneZombies.prototype.getFirePea, f.GoingDie(f.PicArr[[f.LostHeadGif, f.LostHeadAttackGif][f.isAttacking]]), f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = function() {}) : (f.CheckOrnHP(f, f.id, f.OrnHP, b, f.PicArr, f.isAttacking, 0), f.SetAlpha(f, f.EleBody,400, 0.5), oSym.addTask(10,
		function(j, i) { (i = $Z[j]) && i.SetAlpha(i, i.EleBody,800, 1)
		},
		[f.id]))
	},
	getHit0: function(c, a, b) {
		c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody,400, 0.5), oSym.addTask(10,
		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
		},
		[c.id])
	},
	getHit1: function(b, a) { (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody,400, 0.5), oSym.addTask(10,
		function(d, c) { (c = $Z[d]) && c.SetAlpha(c, c.EleBody,800, 1)
		},
		[b.id]))
	},
	getHit2: function(b, a) { (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.SetAlpha(b, b.EleBody,400, 0.5), oSym.addTask(10,
		function(d, c) { (c = $Z[d]) && c.SetAlpha(c, c.EleBody,800,1)
		},
		[b.id]))
	},
	getHit3: function(b, a) { (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody,400, 0.5), oSym.addTask(10,
		function(d, c) { (c = $Z[d]) && c.SetAlpha(c, c.EleBody,800,1)
		},
		[b.id]))
	},
	CheckOrnHP: function(g, h, d, c, f, b, a) {
		var e = OrnNoneZombies.prototype; (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.ChkActs = function() {
			return 1
		},
		g.ChkActs1 = function() {
			return 1
		},
		g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9,g.HP=1000,g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea,g.getSlowPea1= e.getSlowPea1,g.getSlowPea = e.getSlowPea, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit,oSym.addTask(150,
		function(m, l) {
			var k = $Z[m];
			if (!k) {
				return
			}
			var j = CZombies.prototype,
			i = k.OSpeed = k.LostPaperSpeed;
			k.Altitude=1;
			k.ChkActs = j.ChkActs;
			k.ChkActs = (k.PZ?j.ChkActs:j.ChkActs1);
			k.Speed && (k.Speed = !k.FreeSlowTime ? i: 0.5 * i);
			if (!k.beAttacked) {
				return
			}
			PlayAudio("newspaper_rarrgh2");
			k.EleBody.src = l;
			k.JudgeAttack();
		},
		[h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
	}
}),
oScreenDoorZombie = InheritO(oNewspaperZombie1, {
	EName: "oScreenDoorZombie",
	CName: "铁门僵尸",
	OrnHP: 1100,
	Lvl: 3,
	HP:400,
	oSpeed:1.6,
	Speed:1.6,
	SunNum: 175,
	StandGif: 13,
	width: 166,
	height: 144,
	beAttackedPointL: 60,
	beAttackedPointR: 116,
	LostPaperGif:6,
	PicArr: (function() {
		var a = "images/Zombies/ScreenDoorZombie/",
		b = "images/Zombies/Zombie/";
		return ["images/Card/Zombies/ScreenDoorZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", b + "Zombie2.gif", b + "ZombieAttack.gif", b + "ZombieLostHead.gif", b + "ZombieLostHeadAttack.gif", b + "ZombieHead.gif" + $Random, b + "ZombieDie.gif" + $Random, b + "BoomDie.gif" + $Random, a + "1.gif"]
	})(),
	PlayNormalballAudio: function() {
		PlayAudio("splat" + Math.floor(1 + Math.random() * 3))
	},
	Produce: '他的铁门是非常坚硬的盾牌。<p>韧性：<font color="#FF0000">低(400)</font><br>铁门韧性：<font color="#FF0000">高（1100）</font><br>弱点：大喷菇和磁力菇</p>能发射豌豆',
	GoingDie: CZombies.prototype.GoingDie,
	getFirePea: function(c, a, b) {
		PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
		c.getHit0(c, a, b)
	},
	getFirePeaSputtering: function() {},
	getFirePeaSputtering1: function() {},
	getSnowPea: function(c, a, b) {
            PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
            c.getHit0(c, a, b)
        },
	getSlowPea:function(c, a, b) {
		PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
		c.getHit0(c, a, b)
	},
	getSlowPea1:function(c, a, b) {
		PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
		c.getHit1(c, a, b)
	},
	getPea: function(c, a, b) {
            PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
            c.getHit0(c, a, b)
        },
		getZPea: function(e, b, c) {
			PlayAudio(["shieldhit","shieldhit2"][Math.floor(Math.random() * 2)]);
			Math.round(Math.random()*1000)>5?e.getHit0(e, b, c):(e.PZ?CustomZombies(new oImp,e.R,GetC(e.ZX-1),1):CustomZombie(oImp,e.R,GetC(e.ZX+1)))
		},
		gethPea: function(e, b, c) {
			PlayAudio(["shieldhit","shieldhit2"][Math.floor(Math.random() * 2)]);
			e.getHit4(e, b, c)
		},
getHit0:function(a,c){
	if(a.hard==2){
        let z = $(a.id);
        let div = $n("div");
        let d = "Pea" + Math.random();
        div.id = d;
        div.innerHTML = '<img src="images/Plants/PB01.gif">';
        EditEle(div, 0, {
          position: "absolute",
          transform: "rotateY(20deg)",
          zIndex: "24",
          left: a.ZX + "px",
          top: a.pixelTop + 60 + "px"
        }, EDPZ, 0)
        oSym.addTask(1, function(z, d, a,c) {
          try {
	  if(a.PZ){
            $(d).style.left = $(d).offsetLeft - 5 + "px";
            let pea = $(d);
            let C = GetC(a.ZX + 40);
            for (let i = 3; i >= 0; i--) {
              for (let j = 1; j <= C; j++) {
                let p = oGd.$[a.R + "_" + j + "_" + i];
                p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" &&
                  p.EName != "oJalapeno" && p.EName != "oDoomShroom" && p.EName != "oSunFlower") && ((p.AttackedLX + $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"), (p.HP -=c), ($(d) && ClearChild($(d))));
                p && (p.canEat) && (p.HP <= 0) && p.Die();
              }
            }
	let p = oZ.getArHZ($(d).offsetLeft + 50,a.ZX - 10, a.R);
          let i = p.length;
          while (i--) {
            p && (p[i].Altitude == 1) && ((p[i].getPea(p[i],c,0), ($(d) && ClearChild($(d)))));
          }
            if ($(d).offsetLeft <= 0) {
              ClearChild($(d));
              $(d).isDie = true;
        }}else{
          $(d).style.left = $(d).offsetLeft + 5 + "px";
          let pea = $(d);
          let p = oZ.getArZ(a.ZX - 10, $(d).offsetLeft + 50, a.R);
          let i = p.length;
          while (i--) {
            p && (p[i].Altitude == 1) && ((p[i].getPea(p[i], c,0), ($(d) && ClearChild($(d)))));
          }
          if ($(d).offsetLeft >900) {
            ClearChild($(d));
          }}
            !($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a,c])
          } catch (e) {}
        }, [z, d, a,c])}
(a.CheckOrnHP(a, a.id, a.OrnHP, c*0.5, a.PicArr, a.isAttacking, 1), a.SetAlpha(a, a.EleBody, 50, 0.5), oSym.addTask(10, function(e, d) {
                (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
            }, [a.id]))
        },
PrivateAct: function() {
    let a = this;
    if (!a.bool) {
      a.bool = 1;
      oSym.addTask(140, function(a) {
        let i = 0,
          max = 3;
        var timer = setInterval(function() {
            i++;
	if(!$Z[a.id]){return}
            let z = $(a.id);	    
            let div = $n("div");
            let d = "Pea" + Math.random();
	div.id=d;
            div.innerHTML = '<img src="images/Plants/PB00.gif">';
            EditEle(div, 0, {
              position: "absolute",
              zIndex: "24",
              left: a.ZX + "px",
              top: a.pixelTop + 40 + "px"
            }, EDPZ, 0);
            oSym.addTask(1, function(z, d, a) {
              try {
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                let pea = $(d);
                let C = GetC(a.ZX + 40);
                for (let i = 3; i >= 0; i--) {
                  for (let j = 1; j <= C; j++) {
                    let p = oGd.$[a.R + "_" + j + "_" + i];
                    p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oSunFlower" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom" &&
                      p.EName != "oSunFlower") && ((p.AttackedLX+ $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"), (p.HP -= 20), ($(d) && ClearChild($(d))));
		p&& (p.EName== "oSunFlower") && ((p.AttackedLX + $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"), (p.getHurt($Z[a],0,20)), ($(d) && ClearChild($(d))));
                    p && (p.canEat) && (p.HP <= 0) && p.Die();
                  }
                }
                let Z = oZ.getArHZ($(d).offsetLeft, a.ZX + 60, a.R);
                let i = Z.length;
                while (i--) {
                  Z && (Z[i].Altitude == 1) && ((Z[i].getPea(Z[i], 20, 0)), ($(d) && ClearChild($(d))));
                }
                if ($(d).offsetLeft <= 0) {
                  ClearChild($(d));
                  $(d).isDie = true;
                }!($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a])
              } catch (e) {}
            }, [z, d, a]);
            (i > max) && clearInterval(timer);
          },
          100);
        !a.isDie && (a.HP > 60) && (a.PZ) && oSym.addTask(140, arguments.callee, [a]);
      }, [a]);
    }
  },
bedevilAct: function() {
    let a = this;
    if (!a.e) {
      a.e = 1;
      a.Speed = 1.6;
      oSym.addTask(140, function(a) {
        let i = 0,
          max = 3;
        var timer = setInterval(function() {
            i++;
	if(!$Z[a.id]){return}
            let z = $(a.id);
            let div = $n("div");
            let d = "Pea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/PB00.gif">';
            EditEle(div, 0, {
              position: "absolute",
              zIndex: "24",
              left: a.ZX + "px",
              top: a.pixelTop + 40 + "px"
            }, EDPZ, 0);
            oSym.addTask(1, function(z, d, a) {
              try {
                $(d).style.left = $(d).offsetLeft + 5 + "px";
                let pea = $(d);
                let Z = oZ.getArZ(a.ZX-40, $(d).offsetLeft+50, a.R);
                let i = Z.length;
                while (i--) {
                  Z && (Z[i].Altitude == 1) && ((Z[i].getPea(Z[i],20,0)),($(d) && ClearChild($(d))));
                }
                if ($(d).offsetLeft>=900) {
                  ClearChild($(d));
                  $(d).isDie = true;
                };
                !($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a])
              } catch (e) {}
            }, [z, d, a]);
            (i > max) && clearInterval(timer);
          },
          100);
        !a.isDie && (a.HP > 60) && (!a.PZ) && oSym.addTask(140, arguments.callee, [a]);
      }, [a]);
    }
  },
	CheckOrnHP: function(g, h, d, c, f, b, a) {
		var e = oNewspaperZombie3.prototype; (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.Ornaments = 1, g.EleBody.src = f[[g.NormalGif = g.OrnLostNormalGif,g.AttackGif = g.OrnLostAttackGif][b]],
			g.LostHeadGif = 8,
			g.LostHeadAttackGif = 9,
			g.getPea = e.getPea,
			g.NormalAttack = e.NormalAttack,
			g.getFirePea = e.getFirePea,
			g.getFirePeaSputtering = e.getFirePeaSputtering,
			g.getSnowPea = e.getSnowPea,
			g.getSlowPea=e.getSlowPea,
			g.getSlowPea1=e.getSlowPea1,
			g.PlayNormalballAudio = e.PlayNormalballAudio,
			g.PlayFireballAudio = e.PlayFireballAudio, 
			g.PlaySlowballAudio = e.PlaySlowballAudio,
			g.getHit=e.getHit0,
			g.OrnHP=100,
			g.AKind=2,
			g.CheckOrnHP=e.CheckOrnHP)
	},
	getFireball: function(c, a, b) {
		b != c.WalkDirection ? (c.FreeSlowTime = 0, c.Attack = 100, c.Speed != c.OSpeed ? (c.PlayNormalballAudio(), c.Speed = c.OSpeed) : c.PlayFireballAudio()) : c.PlayNormalballAudio()
	},
	getSputtering: function() {},
	getSlow: function(d, a, c, b, e) { (b != d.WalkDirection || e != -1) ? CZombies.prototype.getSlow(d, a, c) : d.PlayNormalballAudio()
	}
}),
oAquaticZombie = InheritO(OrnNoneZombies, {
	StandGif: 4,
	AttackGif: 5,
	HeadGif: 6,
	DieGif: 7,
	WalkGif0: 2,
	WalkGif1: 3,
	CanPass: function(b, a) {
		return a == 2
	},
	BirthCallBack: function(g) {
		var e = g.delayT,
		c = g.id,
		b = g.Ele = $(c),
		d = g.AttackedLX,
		f,
		a,
		h;
		f = g.EleShadow = b.firstChild;
		g.EleBody = b.childNodes[1];
		switch (true) {
		case d > GetX(9) : g.ChkActs = g.ChkActsL1;
			g.WalkStatus = 0;
			break;
		case d < GetX(0) : g.ChkActs = g.ChkActsL3;
			g.WalkStatus = 0;
			break;
		default:
			g.ChkActs = g.ChkActsL2;
			g.WalkStatus = 1;
			g.EleBody.src = g.PicArr[g.NormalGif = g.WalkGif1];
			SetHidden(f);
			NewEle(a = c + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:61px;top:" + (g.height - 88) + "px;width:97px;height:88px;over-flow:hidden", 0, b);
			ImgSpriter(a, c, [["0 0", 9, 1], ["-97px 0", 9, 2], ["-194px 0", 9, 3], ["-291px 0", 9, 4], ["-388px 0", 9, 5], ["-485px 0", 9, 6], ["-582px 0", 9, 7], ["-679px 0", 9, -1]], 0,
			function(i, j) {
				ClearChild($(i))
			})
		}
		e ? oSym.addTask(e,
		function(j, i) {
			var k = $Z[j];
			k && (k.FreeSetbodyTime = 0, SetBlock(i))
		},
		[c, b]) : SetBlock(b)
	},
	ChkActsL1: function(f, e, g, d) {
		var c, a, b = f.id; ! (f.FreeFreezeTime || f.FreeSetbodyTime) && (f.AttackedRX -= (c = f.Speed), LX = f.ZX = f.AttackedLX -= c, f.Ele.style.left = Math.floor(f.X -= c) + "px");
		f.AttackedLX < GetX(9) && (PlayAudio("zombie_entering_water"), f.WalkStatus = 1, f.EleBody.src = f.PicArr[f.NormalGif = f.WalkGif1], SetHidden(f.EleShadow), NewEle(a = b + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:61px;top:" + (f.height - 88) + "px;width:97px;height:88px;over-flow:hidden", 0, f.Ele), f.ChkActs = f.ChkActsL2, ImgSpriter(a, b, [["0 0", 9, 1], ["-97px 0", 9, 2], ["-194px 0", 9, 3], ["-291px 0", 9, 4], ["-388px 0", 9, 5], ["-485px 0", 9, 6], ["-582px 0",9,7], ["-679px 0", 9, -1]], 0,
		function(h, i) {
			ClearChild($(h))
		}));
		return 1
	},
	ChkActsL2: function(d, c, e, b) {
		var a; ! (d.FreeFreezeTime || d.FreeSetbodyTime) && (d.beAttacked && !d.isAttacking && d.JudgeAttack(), !d.isAttacking && (d.AttackedRX -= (a = d.Speed), d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px"));
		d.AttackedLX < GetX(0) && (d.WalkStatus = 0, d.EleBody.src = d.PicArr[d.NormalGif = d.WalkGif0], SetVisible(d.EleShadow), d.ChkActs = d.ChkActsL3);
		this.PrivateAct && this.PrivateAct(this)
		return 1
	},
	ChkActsL3: CZombies.prototype.ChkActs,
	ChkActs1: function(d, c, e, b) {
		var a; ! (d.FreeFreezeTime || d.FreeSetbodyTime) && (d.beAttacked && !d.isAttacking && d.JudgeAttack(), !d.isAttacking && (d.AttackedLX += (a = d.Speed), d.ZX = d.AttackedRX += a, d.Ele.style.left = Math.ceil(d.X += a) + "px"));
		d.AttackedLX > GetX(9) && (d.WalkStatus = 0, d.EleBody.src = d.PicArr[d.NormalGif = d.WalkGif0], SetVisible(d.EleShadow), d.ChkActs = d.ChkActs2);
		return 1
	},
	ChkActs2: function(e, c, f, b) {
		var a, d; ! (e.FreeFreezeTime || e.FreeSetbodyTime) ? (e.beAttacked && !e.isAttacking && e.JudgeAttack(), !e.isAttacking ? (e.AttackedLX += (a = e.Speed)) > oS.W ? (f.splice(b, 1), e.DisappearDie(), d = 0) : (e.ZX = e.AttackedRX += a, e.Ele.style.left = Math.ceil(e.X += a) + "px", d = 1) : d = 1) : d = 1;
		return d
	},
	ExchangeLR: function(d, b) {
		var c = d.width,
		f = d.beAttackedPointL,
		a = d.beAttackedPointR,
		e = d.Ele;
		e.style.left = (d.X = d.AttackedLX - (d.beAttackedPointL = c - a)) + "px";
		d.beAttackedPointR = c - f;
		d.EleShadow.style.cssText = "visibility:hidden;left:" + (d.beAttackedPointL - 10) + "px;top:" + (d.height - 22) + "px";
		d.ExchangeLR2(d, d.EleBody, b)
	},
	GoingDie: function() {
		var b = this,
		c = b.id,
		a = b.PicArr;
		b.EleBody.src = a[7] + Math.random();
		b.GoingDieHead(c, a, b);
		b.beAttacked = 0;
		b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
		b.AutoReduceHP(c)
	},
	AutoReduceHP: function(a) {
		oSym.addTask(100,
		function(c) {
			var b = $Z[c];
			b && ((b.HP -= 60) < 1 ? (b.NormalDie(), oSym.addTask(50, ClearChild, [b.Ele])) : oSym.addTask(100, arguments.callee, [c]))
		},
		[a])
	},
	ExplosionDie: function() {
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	},
	DisappearDie: function() {
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	},
	CrushDie: function() {
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	},
	NormalDie: function() {
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	}
}),
oDuckyTubeZombie1 = InheritO(oAquaticZombie, {
	EName: "oDuckyTubeZombie1",
	CName: "鸭子救生圈僵尸",
	HP:300,
	beAttackedPointR: 130,
	GetDY: function() {
		return 5
	},
	Produce: '鸭子救生圈能让僵尸能浮在水面上。<p>韧性：<font color="#FF0000">低</font><br>只在水池关卡出现</font></p>只有特定的僵尸才能成为救生圈僵尸。没错，那就是领带三人组。',
	PicArr: (function() {
		var a = "images/Zombies/DuckyTubeZombie1/";
		return ["images/Card/Zombies/DuckyTubeZombie1.png", a + "0.gif", a + "Walk1.gif", a + "Walk2.gif", a + "1.gif", a + "Attack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random]
	})(),
	AudioArr: ["zombie_entering_water"]
}),
oDuckyTubeZombie2 = InheritO(oDuckyTubeZombie1, {
	EName: "oDuckyTubeZombie2",
	CName: "路障鸭子救生圈僵尸",
	OrnHP: 370,
	Lvl: 2,
	SunNum: 125,
	CanDisplay: 0,
	OrnLostNormalGif: 9,
	OrnLostAttackGif: 10,
	PlayNormalballAudio: function() {
		PlayAudio("plastichit")
	},
	PicArr: (function() {
		var b = "images/Zombies/DuckyTubeZombie2/",
		a = "images/Zombies/DuckyTubeZombie1/";
		return ["images/Card/Zombies/DuckyTubeZombie1.png", b + "0.gif", b + "Walk1.gif", b + "Walk2.gif", b + "1.gif", b + "Attack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "Walk1.gif", a + "Walk2.gif", a + "Attack.gif"]
	})(),
	AudioArr: ["plastichit", "zombie_entering_water"],
	getHit: OrnIZombies.prototype.getHit,
	getHit0: OrnIZombies.prototype.getHit0,
	getHit1: OrnIZombies.prototype.getHit1,
	getHit2: OrnIZombies.prototype.getHit2,
	getHit3: OrnIZombies.prototype.getHit3,
	PrivateAct1:oConeheadZombie.prototype.PrivateAct1,
	PrivateAct2:oConeheadZombie.prototype.PrivateAct2,
	PrivateBirth:oConeheadZombie.prototype.PrivateBirth,
}),
oDuckyTubeZombie3 = InheritO(oDuckyTubeZombie2, {
	EName: "oDuckyTubeZombie3",
	CName: "铁桶鸭子救生圈僵尸",
	OrnHP: 1100,
	HP:800,
	Lvl: 6,
	SunNum: 175,
	PlayNormalballAudio: function() {
		PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)])
	},
	PrivateBirth:oBucketheadZombie.prototype.PrivateBirth,
	PrivateAct1:oBucketheadZombie.prototype.PrivateAct1,
	PrivateAct2:oBucketheadZombie.prototype.PrivateAct2,
	PrivateAttack:oBucketheadZombie.prototype.PrivateAttack,
	NormalAttack:oBucketheadZombie.prototype.NormalAttack,
	AudioArr: ["shieldhit", "shieldhit2", "zombie_entering_water"],
	PicArr: (function() {
		var b = "images/Zombies/DuckyTubeZombie3/",
		a = "images/Zombies/DuckyTubeZombie1/";
		return ["images/Card/Zombies/DuckyTubeZombie1.png", b + "0.gif", b + "Walk1.gif", b + "Walk2.gif", b + "1.gif", b + "Attack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "Walk1.gif", a + "Walk2.gif", a + "Attack.gif"]
	})()
}),
oSnorkelZombie = InheritO(oDuckyTubeZombie1, {
	EName: "oSnorkelZombie",
	CName: "潜水僵尸",
	Lvl: 2,
	SunNum: 175,
	width: 143,
	height: 200,
	HP:400,
	beAttackedPointL: 40,
	beAttackedPointR: 100,
	OSpeed: 5,
	Speed:5,
	Altitude: 1,
	Produce: '潜水僵尸可以在水下前行。<p>韧性：<font color="#FF0000">低</font><br>特点：<font color="#FF0000">在泳池潜泳以避免遭到攻击，一段时间后，释放辣椒爆炸，本行或者上中下三行<br>只在水池关卡出现</font></p>僵尸不呼吸。他们不需要空气。那么为什么潜水僵尸需要一套潜水装置来潜水呢？<br>答案：同行的压力。',
	JumpTime: 25,
	getShadow: function(a) {
		return "left:" + a.beAttackedPointL + "px;top:" + (a.height - 45) + "px"
	},
	CanPass: function(d, c) {
		return c
	},
	PicArr: (function() {
		var a = "images/Zombies/SnorkelZombie/";
		return ["images/Card/Zombies/SnorkelZombie.png", a + "0.gif", a + "Walk1.gif", a + "Walk2.gif", a + "1.gif", a + "Attack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "Jump.gif" + $Random, a + "Risk.gif" + $Random, a + "Sink.gif" + $Random]
	} ()),
	AudioArr: ["zombie_entering_water"],
	BirthCallBack: function(a) {
		oAquaticZombie.prototype.BirthCallBack(a), GetC(this.ZX) <= 9 && this.Jump(this);
		Math.round(Math.random()*100)>25?this.CheckBoomFire(this):this.CheckBoomFire1(this);
	},
	Jump: function(a) {
		a.beAttacked && (PlayAudio("zombie_entering_water"), a.Altitude = 2, SetHidden(a.EleShadow), a.EleBody.src = a.PicArr[8] + Math.random(), oSym.addTask(160,
		function(c, b) {
			$Z[c] && b.beAttacked && (b.WalkStatus = 1, b.Altitude = 0, b.OSpeed = b.Speed = 2, b.HP=500,b.EleBody.src = b.PicArr[b.NormalGif = b.WalkGif1], b.ChkActs = b.ChkActsL2)
		},
		[a.id, a]), a.ChkActs = function() {
			return 1
		})
	},
	ChkActsL1: function(d, c, e, b) {
		if (d.JumpTime <= 0) {
			d.Jump(d);
			return 1
		}
		var a; ! (d.FreeFreezeTime || d.FreeSetbodyTime) && (d.AttackedRX -= (a = d.Speed), LX = d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px", --d.JumpTime);
		return 1
	},
	ChkActsL2: function(d, c, e, b) {
		var a; ! (d.FreeFreezeTime || d.FreeSetbodyTime) && (d.AttackedLX > GetX(0) ? (d.beAttacked && !d.isAttacking && d.JudgeAttack(), !d.isAttacking && (d.AttackedRX -= (a = d.Speed), d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px")) : (d.beAttacked && (d.WalkStatus = 0, d.Altitude = 1, d.EleBody.src = d.PicArr[d.NormalGif = d.WalkGif0], SetVisible(d.EleShadow), d.ChkActs = d.ChkActsL3)));
		return 1
	},
	CheckBoomFire: function (f) {
if(f.hard==2){
	f.CheckBoomFire1(f);
	return
}
      oSym.addTask(
        3500,
        function (f) {
          // 生成1到100之间的随机整数
        let randomNumber = Math.floor(Math.random() * 100) + 1;
          $Z[f.id] && randomNumber <= 100 && f.BoomFire(f.R);
          oSym.addTask(1000, arguments.callee, [f]);
        },
        [f]
      );
    },
CheckBoomFire1: function (f) {
      oSym.addTask(
        3500,
        function (f) {
          // 生成1到100之间的随机整数
        let randomNumber = Math.floor(Math.random() * 100) + 1,
	         R = (f.R - 1) || 0,
                    RM = f.R + 1 <= oS.R ? f.R + 1 : oS.R;
	for(let i = R;i <= RM;i++){
	for(let l=0;l<=oS.R;l++){
          ($Z[f.id] && randomNumber <= 100)&&((f.hard==2)?f.BoomFire(l):f.BoomFire(i));
          oSym.addTask(1500, arguments.callee, [f]);
	}
	}
        },
        [f]
      );
    },
    BoomFire: function (y) {
      PlayAudio("jalapeno");
      fireid = "fire_" + Math.random();
      NewImg(
        fireid,
        "images/Plants/Jalapeno/JalapenoAttack.gif",
        "width:755px;height:131px;left:120px;top:" + (GetY(y - 1) - 42) + "px",
        EDAll
      );
      oSym.addTask(
        135,
        (id) => {
          ClearChild($(id));
        },
        [fireid]
      );
      for (let i = 1; i <= oS.C; i++) {
        for (let j = 0; j < 4; j++) {
          let g = oGd.$[y + "_" + i + "_" + j];
          g && g.BoomDie();
        }
      }
    },
getbedevil:function(){
	this.DisappearDie()
},
bedevil:function(){
	this.DisappearDie()
},
	JudgeAttack: function() {
		var e = this,
		b = e.ZX,
		c = e.R + "_",
		d = GetC(b),
		g = oGd.$,
		a,
		f = e.id; (a = e.JudgeLR(e, c, d, b, g) || e.JudgeSR(e, c, d, b, g)) ? !e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[9] + Math.random(), oSym.addTask(50,
		function(i, h) {
			$Z[i] && h.beAttacked && (h.EleBody.src = h.PicArr[h.AttackGif], h.Altitude = 1, h.NormalAttack(a[0], a[1]))
		},
		[f, e])) : e.NormalAttack(a[0], a[1]) : e.isAttacking && (e.EleBody.src = e.PicArr[10] + Math.random(), e.Altitude = 0, oSym.addTask(70,
		function(i, h) {
			$Z[i] && h.beAttacked && (h.isAttacking = 0, h.EleBody.src = h.PicArr[h.NormalGif])
		},
		[f, e]))
	},
	NormalAttack: function(b, a) {
		oSym.addTask(100,
		function(d, c) {
			var f = $Z[d],
			e;
			f && f.beAttacked && !f.FreeFreezeTime && !f.FreeSetbodyTime && ((e = $P[c]) && e.getHurt(f, 0, 100), f.JudgeAttack())
		},
		[b, a])
	},
	JudgeAttackH: function() {
		var c = this,
		b = oZ.getZ0(c.ZX, c.R),
		d = c.id,
		a;
		b && b.beAttacked && b.AttackedLX < 900 && b.Altitude < 2 ? (!c.isAttacking ? (c.isAttacking = 1, c.EleBody.src = c.PicArr[9] + Math.random(), a = b.id, !b.isAttacking && b.AttackZombie2(b, a, d), oSym.addTask(50,
		function(g, h, f, e) {
			$Z[h] && g.beAttacked && ($Z[e] && f.beAttacked ? (g.EleBody.src = g.PicArr[g.AttackGif], g.Altitude = 1, g.AttackZombie(h, e)) : g.JudgeAttackH())
		},
		[c, d, b, a])) : c.AttackZombie(d, a)) : c.isAttacking && (c.EleBody.src = c.PicArr[10] + Math.random(), c.Altitude = 0, oSym.addTask(70,
		function(f, e) {
			$Z[f] && e.beAttacked && (e.isAttacking = 0, e.EleBody.src = e.PicArr[e.NormalGif])
		},
		[d, c]))
	},
	AttackZombie2: function(c, b, a) {
		c.isAttacking = 1;
		c.EleBody.src = c.PicArr[9] + Math.random();
		oSym.addTask(50,
		function(g, e, d, f) {
			$Z[e] && g.beAttacked && ((f = $Z[d]) && f.beAttacked ? (g.EleBody.src = g.PicArr[g.AttackGif], g.Altitude = 1, oSym.addTask(10,
			function(k, i, j, h) {
				$Z[i] && k.beAttacked && !k.FreeFreezeTime && !k.FreeSetbodyTime && ($Z[h] && j.beAttacked ? (j.bedevil1(j, 15, 0), oSym.addTask(10, arguments.callee, [k, i, j, h])) : (k.EleBody.src = k.PicArr[10] + Math.random(), k.Altitude = 0, oSym.addTask(70,
				function(l, m) {
					$Z[l] && m.beAttacked && (m.isAttacking = 0, m.EleBody.src = m.PicArr[m.NormalGif])
				},
				[i, k])))
			},
			[g, e, f, d])) : (g.EleBody.src = g.PicArr[10] + Math.random(), g.Altitude = 0, oSym.addTask(70,
			function(h, i) {
				$Z[h] && i.beAttacked && (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif])
			},
			[e, g])))
		},
		[c, b, a])
	},
	AutoReduceHP: function(a) {
		oSym.addTask(100,
		function(c) {
			var b = $Z[c];
			b && ((b.HP -= 60) < 1 ? (b.NormalDie(), oSym.addTask(200, ClearChild, [b.Ele])) : oSym.addTask(100, arguments.callee, [c]))
		},
		[a])
	}
}),
oSmallZombie = InheritO(oZombie, {
	EName: "oSmallZombie",
	CName: "小领带僵尸",
	HP: 67,
	width: 83,
	height: 72,
	beAttackedPointL: 41,
	beAttackedPointR: 78,
	BreakPoint: 25,
	Init: function(e, g, c, b) {
		var a = 0,
		f = this,
		d = [];
		g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
		while (--b) {
			g.CanPass(b, c[b]) && (d[a++] = b)
		}
		g.ArR = d;
		g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
	},
	GoingDieHead: function(c, a, b) {
		oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
	},
	getShadow: function(a) {
		return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
	}
}),
oSmallFlagZombie = InheritO(oFlagZombie, {
	EName: "oSmallFlagZombie",
	CName: "小旗帜僵尸",
	HP: 67,
	width: 83,
	height: 72,
	beAttackedPointL: 41,
	beAttackedPointR: 78,
	BreakPoint: 1,
	Init: function(e, g, c, b) {
		var a = 0,
		f = this,
		d = [];
		g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
		while (--b) {
			g.CanPass(b, c[b]) && (d[a++] = b)
		}
		g.ArR = d;
		g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
	},
	GoingDieHead: function(c, a, b) {
		oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
	},
	getShadow: function(a) {
		return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
	}
}),
oSmallDuckyTubeZombie1 = InheritO(oDuckyTubeZombie1, {
	EName: "oSmallDuckyTubeZombie1",
	CName: "小鸭子救生圈僵尸",
	HP: 67,
	width: 83,
	height: 72,
	beAttackedPointL: 41,
	beAttackedPointR: 73,
	BreakPoint: 25,
	Init: function(e, g, c, b) {
		var a = 0,
		f = this,
		d = [];
		g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
		while (--b) {
			g.CanPass(b, c[b]) && (d[a++] = b)
		}
		g.ArR = d;
		g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
	},
	GoingDieHead: function(c, a, b) {
		oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
	},
	getShadow: function(a) {
		return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
	}
}),
oSmallConeheadZombie = InheritO(oConeheadZombie, {
	EName: "oSmallConeheadZombie",
	CName: "小路障僵尸",
	OrnHP: 92,
	HP: 67,
	width: 83,
	height: 72,
	beAttackedPointL: 41,
	beAttackedPointR: 78,
	BreakPoint: 25,
	Init: function(e, g, c, b) {
		var a = 0,
		f = this,
		d = [];
		g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
		while (--b) {
			g.CanPass(b, c[b]) && (d[a++] = b)
		}
		g.ArR = d;
		g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
	},
	GoingDieHead: function(c, a, b) {
		oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
	},
	getShadow: function(a) {
		return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
	}
}),
oSmallFootballZombie = InheritO(oFootballZombie, {
	EName: "oSmallFootballZombie",
	CName: "小橄榄球僵尸",
	OrnHP: 350,
	HP: 67,
	width: 77,
	height: 80,
	beAttackedPointL: 20,
	beAttackedPointR: 77,
	BreakPoint: 25,
	Init: function(e, g, c, b) {
		var a = 0,
		f = this,
		d = [];
		g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
		while (--b) {
			g.CanPass(b, c[b]) && (d[a++] = b)
		}
		g.ArR = d;
		g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:77px;height:80px;top:", 'px" src="', '"></div>']
	},
	GoingDieHead: function(c, a, b) {
		oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
	},
	getShadow: function(a) {
		return "width:43px;height:18px;left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px"
	}
}),
oSmallSnorkelZombie = InheritO(oSnorkelZombie, {
	EName: "oSmallSnorkelZombie",
	CName: "小潜水僵尸",
	HP: 67,
	width: 71,
	height: 100,
	beAttackedPointL: 20,
	beAttackedPointR: 50,
	BreakPoint: 25,
	Init: function(e, g, c, b) {
		var a = 0,
		f = this,
		d = [];
		g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
		while (--b) {
			g.CanPass(b, c[b]) && (d[a++] = b)
		}
		g.ArR = d;
		g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:71px;height:100px;top:", 'px" src="', '"></div>']
	},
	GoingDieHead: function(c, a, b) {
		oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:71px;height:105px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
	},
	getShadow: function(a) {
		return "width:43px;height:18px;left:" + a.beAttackedPointL + "px;top:" + (a.height - 45) + "px"
	}
}),
oZomboni = function() {
	var a = function(d, b) {
		var c = d.HP;
		switch (true) {
		case(d.HP = c -= b) < 1 : d.GoingDie();
			d.getHit0 = d.getHit1 = d.getHit2 = d.getHit3 = function() {};
			return;
		case c < 450 : d.EleBody.src = "images/Zombies/Zomboni/3.gif";
			(d.hard==2)&&(d.Speed=7.2);
			break;
		case c < 900 : d.EleBody.src = "images/Zombies/Zomboni/2.gif"
		}
		d.SetAlpha(d, d.EleBody, 50, 0.5);
		oSym.addTask(10,
		function(f, e) { (e = $Z[f]) && e.SetAlpha(e, e.EleBody, 100, 1)
		},
		[d.id])
	};
	return InheritO(OrnNoneZombies, {
		EName: "oZomboni",
		CName: "重型冰车僵尸",
		HP:1350,
		Lvl: 6,
		StandGif: 2,
		DieGif: 6,
		BoomDieGif: 7,
		BookHandPosition: "40% 35%",
		width: 464,
		height: 364,
		GetDTop: 104,
		beAttackedPointL: 140,
		beAttackedPointR: 290,
		BreakPoint: 1,
		SunNum:450,
		GetDY: function() {
			return 0
		},
		OSpeed: 2.5,
		Speed: 2.5,
		AKind: 2,
		Attack: 50,
		Produce: '冰车僵尸运用冰雪，碾过你的植物。<p>韧性：<font color="#FF0000">高（1500）</font><br>特点：<font color="#FF0000">碾压植物，留下条冰道，越到后面速度越快,冻结植物</font></p>经常被误以为是在驾驶着冰车的僵尸，但事实上冰车僵尸是种完全不同的生物形式，他与太空兽人联系更紧密而不是僵尸。',
		PicArr: (function() {
			var b = "images/Zombies/Zomboni/";
			return ["images/Card/Zombies/Zomboni.png", b + "0.gif", b + "1.gif", b + "2.gif", b + "3.gif", b + "4.gif", b + "5.gif" + $Random, b + "BoomDie.gif" + $Random, b + "ice.png", b + "ice_cap.png"]
		})(),
		AudioArr: ["zamboni", "explosion"],
		BirthCallBack: function(h) {
			var g = h.delayT,
			e = h.id,
			c = h.Ele = $(e),
			d = h.R,
			f,
			b = oGd.$Ice;
			h.EleShadow = c.firstChild;
			h.EleBody = c.childNodes[1]; ! b[d] ? (f = NewEle("dIceCar" + d, "div", "position:absolute;z-index:1;left:145px;top:" + (GetY(d) - 65) + "px;width:800px;height:72px", 0, EDPZ), NewImg("", "images/interface/blank.png", "position:absolute;clip:rect(0,auto,auto,800px);width:800px;height:72px;left:5px;background:url(images/Zombies/Zomboni/ice.png) repeat-x", f), NewImg("", "images/Zombies/Zomboni/ice_cap.png", "position:absolute;display:none;left:0", f), b[d] = [1, 11, h.AttackedLX]) : ++b[d][0];
			g ? oSym.addTask(g,
			function(j, i) {
				var k = $Z[j];
				k && (k.FreeSetbodyTime = 0, SetBlock(i), PlayAudio("zamboni"))
			},
			[e, c]) : (SetBlock(c), PlayAudio("zamboni"))
		},
	PrivateAct: function(a){
            oSym.addTask(1,function(a){
                let R = (a.R - 1) || 0,
                    RM = a.R + 1 <= oS.R ? a.R + 1 : oS.R,
                    C = GetC($(a.id).offsetLeft + 80);
                for(let i = R;i <= RM;i++){
                    for(let j = C - 1;j <= C + 1;j++){
                        for(let k = 0;k <= 3;k++){
                            let p = oGd.$[i+"_"+j+"_"+k];
			    p &&((p.EName != "oLawnCleaner") && (p.EName != "oPoolCleaner") && (p.EName != "oBrains")&& (p.EName != "oSpikeweed")&& (p.EName != "oSnowPea")&& (p.EName != "oTorchwood")&& (p.EName != "oSpikerock")&&(p.EName!="oGatlingPea")&&(p.EName!="oIceShroom")&&(p.EName!="oJalapeno")&&(p.EName!="oIceShroom")&&(p.EName!="oJalapeno"))&& ($(p.id).style.opacity= 0.3); 
                            p && ((p.EName != "oLawnCleaner") && (p.EName != "oPoolCleaner") && (p.EName != "oBrains")&& (p.EName != "oSpikeweed")&& (p.EName != "oSnowPea")&& (p.EName != "oTorchwood")&& (p.EName != "oSpikerock")&&(p.EName!="oGatlingPea")&&(p.EName!="oIceShroom")&&(p.EName!="oJalapeno")&&(p.EName!="oIceShroom")&&(p.EName!="oJalapeno"))  && (p.NormalAttack=function(){});
			    p && ((p.EName != "oLawnCleaner") && (p.EName != "oPoolCleaner") && (p.EName != "oBrains")&& (p.EName != "oSunFlower")&& (p.EName != "oSpikeweed")&& (p.EName != "oSnowPea")&& (p.EName != "oTorchwood")&& (p.EName != "oSpikerock")&& (p.EName != "oStarfruit")&& (p.EName != "oWallNut")&& (p.EName != "oTallNut")&& (p.EName != "oPumpkinHead")&&(p.EName!="oGatlingPea")&&(p.EName!="oGarlic")&&(p.EName!="oIceShroom")&&(p.EName!="oJalapeno"))  && (p.getHurt=CPlants.prototype.getHurt);
                        }
                    }
                }
            },[a])
	},
		ChkActs: function(e, j, q, k) {
			var b, r, m, g, n = oGd.$Ice[j], d, h, f, c, l = $("dIceCar" + j);

			if (l == null) { // 对没有冰道的情况下特判
				l = NewEle("dIceCar" + j, "div", "position:absolute;z-index:1;left:145px;top:" + (GetY(e.R) - 65) + "px;width:800px;height:72px", 0, EDPZ); // 生成新的冰道
				NewImg("", "images/interface/blank.png", "position:absolute;clip:rect(0,auto,auto,800px);width:800px;height:72px;left:5px;background:url(images/Zombies/Zomboni/ice.png) repeat-x", l);
				NewImg("", "images/Zombies/Zomboni/ice_cap.png", "position:absolute;display:none;left:0", l);
				n = oGd.$Ice[j] = [1, 11, e.AttackedLX];
			}

			e.JudgeAttack(); (r = e.AttackedRX -= (b = e.Speed)) < -50 ? (q.splice(k, 1), e.DisappearDie(), m = 0) : (r < 100 && !e.PointZombie && (e.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), e.ChangeR({
				R: j,
				ar: [oS.R - 1],
				CustomTop: 400 - e.height + e.GetDY()
			})), e.ZX = e.AttackedLX -= b, e.Ele.style.left = Math.floor(e.X -= b) + "px", m = 1);
			d = e.X;
			h = d + 250;
			f = d + 100;
			c = GetC(h);
			c > -1 && c < n[1] && (oGd.$Crater[j + "_" + c] = 1, n[1] = c);
			h > 120 && h < n[2] && (n[2] = h, l.firstChild.style.clip = "rect(0,auto,auto," + f + "px)", l.childNodes[1].style.left = Math.max(0, f) + "px");
			GetC(e.AttackedLX) > 5 && (e.OSpeed = (e.Speed+= 0.01));
				if(e.HPlook&&!e.bHP){
	e.bHP=1;
    var E= NewEle("edHP", "div", "position:absolute;color:#fff;top:" + (e.pixelTop + 240) + "px;left:" + (e.ZX - 50) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "zohp" + Math.random();
    edHP.id = A;
    var C = $(A);
    E.innerHTML = '<div>' + e.HP+ "</div>";
    oSym.addTask(1, function(C, e, E) {
      ClearChild(C);
      if (e.HP >= e.BreakPoint && $Z[e.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (e.ZX - 50) + "px";
        E.innerHTML = '<div>' + e.HP+ "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, e, E])
    }, [C, e, E]);
				}
			this.PrivateAct && this.PrivateAct(this);
			return m
		},
		ChkActs1: function(f, d, g, c) {
			var b, e;
			f.JudgeAttack(); (f.AttackedLX += (b = f.Speed)) > oS.W ? (g.splice(c, 1), f.DisappearDie(), e = 0) : (f.ZX = f.AttackedRX += b, f.Ele.style.left = Math.ceil(f.X += b) + "px", e = 1);
			return e
		},
		getPea: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		gethPea: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		getZPea: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		getSlowPea: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		getSlowPea1: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		getFirePea: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		getSnowPea: function(c, b) {
			PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
			c.getHit0(c, b)
		},
		bedevil: function(c) {
			c.ExchangeLR(c, 1);
			c.JudgeAttack = c.JudgeAttackH;
			c.PZ = 0;
			c.Attack=3000;
			c.WalkDirection = 1;
			c.ZX = c.AttackedRX;
			c.ChkActs = c.ChkActs1;
			oP.MonPrgs()
		},
		getFirePeaSputtering: function() {},
		getFreeze: function(c, b) {
			c.getHit0(c, 20)
		},
		getShadow: function(b) {
			return "left:" + (b.beAttackedPointL - 10) + "px;top:" + (b.height - 22) + "px"
		},
		getHit: a,
		getHit0: a,
		getHit1: a,
		getHit2: a,
		getHit3: a,
		GoingDie: function() {
			var b = this;
			b.beAttacked = 0;
			b.AutoReduceHP(b.id)
		},
		NormalDie: function() {
			var b = this;
			this.isDie = 1;
			PlayAudio("explosion");
			b.EleBody.src = b.PicArr[b.DieGif] + Math.random();
			oSym.addTask(70, ClearChild, [b.Ele]);
			b.HP = 0;
			delete $Z[b.id];
			b.JudgeIce();
			b.PZ && oP.MonPrgs()
		},
		DisappearDie: function() {
			this.isDie = 1;
			var b = this;
			ClearChild(b.Ele);
			b.HP = 0;
			delete $Z[b.id];
			b.JudgeIce();
			b.PZ && oP.MonPrgs()
		},
		ExplosionDie: function() {
			this.isDie = 1;
			var b = this;
			b.EleBody.src = b.PicArr[b.BoomDieGif] + Math.random();
			oSym.addTask(300, ClearChild, [b.Ele]);
			b.HP = 0;
			delete $Z[b.id];
			b.JudgeIce();
			b.PZ && oP.MonPrgs()
		},
		CrushDie: function() {
			this.NormalDie()
		},
		JudgeIce: function() {
			var d = this, b = d.R, e = $("dIceCar" + b), c = oGd.$Ice[b];

			if (d.PointZombie) return; // 如果冰车已经进入家门，则不产冰

			e && e.childNodes[1] && SetBlock(e.childNodes[1]); (--c[0]) <= 0 && oSym.addTask(3000,
			function(k, h) {
				var j = oGd.$Ice[h],
				g,
				f = oGd.$Crater;
				if (j && j[0] <= 0 && k) {
					ClearChild(k);
					g = j[1];
					while (g < 11) {
						delete f[h + "_" + g++];
						delete oGd.$Ice[h]
					}
				}
			},
			[e, b])
		},
		flatTire: function() {
			var b = this;
			b.EleBody.src = "images/Zombies/Zomboni/4.gif";
			b.beAttacked = 0;
			b.HP = 0;
			b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {};
			b.ChkActs = b.ChkActs1 = function() {};
			oSym.addTask(290,
			function(e, c) {
				var d = $Z[e];
				d && d.NormalDie()
			},
			[b.id, b.EleBody])
		},
		JudgeAttack: function() {
			var f = this,
			c = f.ZX,
			d = f.R + "_",
			e = GetC(c),
			g = oGd.$,
			b; (b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g)) && f.NormalAttack(b[0], b[1])
		},
		JudgeLR: function(e, c, d, b, f) {
			return d > 10 || d < 1 ? false: function() {
				c += --d + "_";
				var g = 3,
				h;
				while (g--) {
					if (h = f[c + g]) {
						return h.AttackedRX >= b && h.AttackedLX <= b ? [e.id, h.id] : false
					}
				}
			} ()
		},
		JudgeSR: function(e, c, d, b, f) {
			return d > 9 ? false: function() {
				c += d + "_";
				var g = 3,
				h;
				while (g--) {
					if (h = f[c + g]) {
						return h.AttackedRX >= b && h.AttackedLX <= b ? [e.id, h.id] : false
					}
				}
			} ()
		},
		NormalAttack: function(c, b) {
			var d = $Z[c];
			$P[b].getHurt(d, 2, d.Attack)
		},
		getThump: function() {
			this.NormalDie()
		},
		prepareBirth: function(f, R) {
			var h = this, e = h.ArR, d = R || e[Math.floor(Math.random() * e.length)], g = GetY(d) + h.GetDY(), c = g - h.height, j = 3 * d + 1, i = h.id = "Z_" + Math.random();

			h.R = d, h.pixelTop = c, h.zIndex = j, h.delayT = 0; // 设置其本身不受 delayT 影响

			return h.getHTML(i, h.X, c, j, "none", "auto", h.GetDTop, h.PicArr[h.NormalGif]);
		}
	})
} (),
oDolphinRiderZombie = InheritO(oAquaticZombie, {
	EName: "oDolphinRiderZombie",
	CName: "海豚骑士僵尸",
	HP: 800,
	BreakPoint: 167,
	width: 282,
	height: 210,
	Lvl:3,
	getShadow: function(a) {
		return ("left:105px;top:175px")
	},
	GetDX: function() {
		return - 137
	},
	GetDY: function() {
		return 0
	},
	GetDTop: 0,
	haveDolphin: 1,
	JumpTime: 45,
	beAttackedPointL: 110,
	beAttackedPointR: 190,
	SunNum: 100,
	OSpeed: 3.2,
	Speed: 3.2,
	PicArr: (function() {
		var a = "images/Zombies/DolphinRiderZombie/";
		return ["images/Card/Zombies/DolphinRiderZombie.png", a + "0.gif", a + "Walk1.gif", a + "Walk2.gif", a + "1.gif", a + "Attack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "Jump.gif" + $Random, a + "Jump2.gif" + $Random, a + "Walk3.gif", a + "Walk4.gif", a + "Die2.gif" + $Random, a + "Jump3.gif" + $Random]
	})(),
	AudioArr: ["dolphin_before_jumping", "dolphin_appears", "zombie_entering_water"],
	Produce: '海豚骑士僵尸善于利用你水池防御的弱点<p>韧性：<font color="#FF0000">中(800)</font><br>速度：<font color="#FF0000">快，慢（跳越后）</font><br>特点：<font color="#FF0000">跃过他所遇到的第一株植物,有海豚时自身无敌，跳跃完毕时会再次召唤两个海豚骑士（被召唤的海豚骑士不会再次召唤，但跳跃时会使全场僵尸前进一格）</font><br>只在水池关卡出现</font></p>那海豚其实也是个僵尸。',
	BirthCallBack: function(a) {
		PlayAudio("dolphin_appears");
		oAquaticZombie.prototype.BirthCallBack(a), GetC(this.ZX) <= 9 && this.Jump(this);
	},
	CanPass: function(d, c) {
		return c
	},
	Jump: function(a) {
		a.beAttacked && (PlayAudio("zombie_entering_water"),SetHidden(a.EleShadow), a.EleBody.src = a.PicArr[8] + Math.random(), oSym.addTask(240,
		function(d, b) {
			var c;
			$Z[d] && b.beAttacked && (b.WalkStatus = 1, b.OSpeed = b.Speed = 10.8,(b.hard==2)&&(b.Altitude=2),SetStyle(b.Ele, {
				left: (c = b.X -= 140) + "px"
			}), b.AttackedLX = c + (b.beAttackedPointL = 185), b.AttackedRX = c + (b.beAttackedPointR = 265), b.EleBody.src = b.PicArr[b.NormalGif = b.WalkGif1], b.ChkActs = b.ChkActsL2)
		},
		[a.id, a]),a.ChkActs = function() {
			return 1
		})
	},
	ChkActsL1: function(d, c, e, b) {
		if (d.JumpTime <= 0) {
			d.Jump(d);
			return 1
		}
		var a; ! (d.FreeFreezeTime || d.FreeSetbodyTime) && (d.AttackedRX -= (a = d.Speed), LX = d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px", --d.JumpTime);
		return 1
	},
	getCrushed: function(a) {
		this.NormalAttack(this.id, a.id, a.AttackedLX);
		this.getCrushed = function() {
			return false
		};
		a.Stature > 0 && oSym.addTask(50,
		function(c) {
			var b = $Z[c];
			b && b.CrushDie()
		},
		[this.id]);
		return false
	},
	flatTire:function(){},
	getRaven: function(a) {
		return ! this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX),
		0
	},
	JudgeAttack: function() {
		var f = this,
		b = f.ZX,
		d = f.R + "_",
		c = GetC(b),
		g = oGd.$,
		e,
		a;
		for (e = c - 2; e <= c; e++) {
			if (e > 9) {
				continue
			}
			for (a = 2; a > -1; (p = g[d + e + "_" + a--]) && (p.EName != "oBrains" ? p.AttackedRX >= b && p.AttackedLX < b && (a = -1, f.JudgeAttack = CZombies.prototype.JudgeAttack, f.NormalAttack(f.id, p.id, p.AttackedLX)) : p.AttackedRX >= b && p.AttackedLX < b && (a = -1, f.JudgeAttack = CZombies.prototype.JudgeAttack, (f.NormalAttack = CZombies.prototype.NormalAttack)(f.id, p.id)))) {}
		}
	},
	AttackZombie2: function(c, b, a) {
		c.NormalAttack(b, a, $Z[a].AttackedLX)
	},
	NormalAttack: function(d, b, g) {
		var f = $Z[d],
		a = f.Ele,
		c = f.EleShadow,
		e = f.EleBody;
		e.src = f.PicArr[9] + Math.random();
		SetHidden(c);
		f.isAttacking = 1;
		f.Altitude = 2;
		f.haveDolphin = 0;
		PlayAudio("dolphin_before_jumping");
		f.getFreeze = function() {
			f.getSnowPea(f, 20, 0)
		};
		oSym.addTask(50,
		function(m, j, i, l, q) {
			var h = $Z[m],
			k,
			r,
			s,
			n = function() {
				q.src = h.PicArr[10];
				h.isAttacking = 0;
				h.Altitude = 1;
				h.WalkGif0 = 11;
				h.NormalGif = h.WalkGif1 = 10;
				h.LostHeadGif = h.DieGif = 12;
				h.NormalAttack = (s = CZombies.prototype).NormalAttack;
				h.getCrushed = s.getCrushed;
				h.getFreeze = s.getFreeze;
				h.getRaven = s.getRaven;
				h.AttackZombie2 = s.AttackZombie2
				oP.SetTimeoutZombie([oDolphinRiderZombie1, oDolphinRiderZombie1], 0);
                                oP.NumZombies += 2;
			};
			h && ((k = $P[j]) && k.Stature > 0 ? (h.AttackedRX = (h.X = (h.AttackedLX = h.ZX = r = k.AttackedRX) - (h.beAttackedPointL = 45)) + (h.beAttackedPointR = 100), SetStyle(i, {
				left: h.X + "px"
			}), h.EleShadow.style.left = "45px", n()) : (h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g) - (h.beAttackedPointR = 100)) + (h.beAttackedPointL = 45), SetStyle(i, {
				left: h.X + "px"
			}), h.EleShadow.style.left = "45px", q.src = h.PicArr[13] + Math.random(),
			oSym.addTask(170,
			function(t, w) {
				var v = $Z[t],
				u;
				v && n()
			},
			[m, q])))
		},
		[d, b, a, c, e])
	},
	ChkActs3: function(h, f, j, e) {
            var d, c, g;
            !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
                R: f,
                ar: [oS.R - 1],
                CustomTop: 400 - h.height + h.GetDY()
            })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
            return g
        },
	GoingDie: function() {
		var b = this,
		c = b.id,
		a = b.PicArr;
		b.EleBody.src = a[b.haveDolphin ? 7 : 12] + Math.random();
		b.GoingDieHead(c, a, b);
		b.beAttacked = 0;
		b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
		b.AutoReduceHP(c)
	}
}),
oDolphinRiderZombie1= InheritO(oDolphinRiderZombie, {
	EName: "oDolphinRiderZombie1",
	CName: "海豚骑士僵尸",
	HP: 800,
	NormalAttack: function(d, b, g) {
		var f = $Z[d],
		a = f.Ele,
		c = f.EleShadow,
		e = f.EleBody;
		e.src = f.PicArr[9] + Math.random();
		SetHidden(c);
		f.isAttacking = 1;
		f.Altitude = 2;
		f.haveDolphin = 0;
		PlayAudio("dolphin_before_jumping");
		f.getFreeze = function() {
			f.getSnowPea(f, 20, 0)
		};
		oSym.addTask(50,
		function(m, j, i, l, q) {
			var h = $Z[m],
			k,
			r,
			s,
			n = function() {
				q.src = h.PicArr[10];
				h.isAttacking = 0;
				h.Altitude = 1;
				h.OSpeed = h.Speed = 3.6;
				h.WalkGif0 = 11;
				h.NormalGif = h.WalkGif1 = 10;
				h.LostHeadGif = h.DieGif = 12;
				h.NormalAttack = (s = CZombies.prototype).NormalAttack;
				h.getCrushed = s.getCrushed;
				h.getFreeze = s.getFreeze;
				h.getRaven = s.getRaven;
				h.AttackZombie2 = s.AttackZombie2;
				for(z in $Z) left= $Z[z],A=left.Ele,left.ZX -= 80, left.AttackedLX -=80, left.AttackedRX -= 80, left.X -=80,SetStyle(A,{left:left.X+"px"});
			};
			h && ((k = $P[j]) && k.Stature > 0 ? (h.AttackedRX = (h.X = (h.AttackedLX = h.ZX = r = k.AttackedRX) - (h.beAttackedPointL = 45)) + (h.beAttackedPointR = 100), SetStyle(i, {
				left: h.X + "px"
			}), h.EleShadow.style.left = "45px", n()) : (h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g) - (h.beAttackedPointR = 100)) + (h.beAttackedPointL = 45), SetStyle(i, {
				left: h.X + "px"
			}), h.EleShadow.style.left = "45px", q.src = h.PicArr[13] + Math.random(), oSym.addTask(170,
			function(t, w) {
				var v = $Z[t],
				u;
				v && n()
			},
			[m, q])))
		},
		[d, b, a, c, e])
	},
}),
oImp = InheritO(OrnNoneZombies, {
	EName: "oImp",
	CName: "小鬼僵尸",
	HP: 200,
	BreakPoint: 23,
	beAttackedPointL: 30,
	beAttackedPointR: 60,
	width: 81,
	height: 110,
	StandGif: 5,
	NormalGif: 5,
	DieGif: 3,
	BoomDieGif: 4,
	AttackGif: 2,
	OSpeed: 3.2,
	Speed: 3.2,
        GetDX: function() {
		return - 50
	},
	GetDY: function() {
		return 0
	},
	getShadow: function(a) {
		return "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 32) + "px"
	},
	PrivateBirth:function(a){
		oSym.addTask(500,function(a){
		a&&($Z[a.id])&&(a.ZX>=200)&&(a.ZX-=300),(a.AttackedLX-=300),(a.AttackedRX-=300),(a.X-=300),SetStyle(a.Ele,{left:a.X+"px"});
		},[a])
	},
	Produce: '小淘气们是一群小型僵尸，他们被伽刚特尔用来投掷进你的防御体系，隔一段时间会瞬移一段距离</p><p>韧性：<font color="#FF0000">低</font><br>小淘气虽然瘦小，却很结实。他精通僵尸柔道，僵尸空手道和僵尸关节技。另外，他还会吹口琴。',
	GoingDie: function() {
		var b = this,
		c = b.id,
		a = b.PicArr;
		b.EleBody.src = a[3] + Math.random();
		b.beAttacked = 0;
		b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
		b.AutoReduceHP(c)
	},
	NormalDie: function() {
		var a = this;
		oSym.addTask(250, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	CrushDie: function() {
		var a = this;
		ClearChild(a.Ele);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	PicArr: (function() {
		var a = "images/Zombies/Imp/";
		return ["images/Card/Zombies/Imp.png", a + "0.gif", a + "Attack.gif", a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif"]
	})()
}),
oBalloonZombie = InheritO(OrnIZombies, {
	EName: "oBalloonZombie",
	CName: "气球僵尸",
	OrnHP:20,
	HP:500,
	SunNum: 300,
	width: 207,
	height: 197,
	beAttackedPointL: 30,
	beAttackedPointR: 85,
	OSpeed:3.6,
	Speed:3.6,
	Altitude: 3,
	OrnLostNormalGif: 9,
	OrnLostAttackGif: 3,
	BreakBall:false, // 气球是否被戳破
	MulBallNum: function() { // 减去气球数
		if (!this.BreakBall) this.BreakBall = true, oGd.$Balloon[this.R] |= 0, --oGd.$Balloon[this.R];
	},
	CanPass: function(d, c) {
		return c
	},
	getShadow: function(a) {
		return "left:" + (a.beAttackedPointL - 10) + "px;top:" + (a.height - 32) + "px"
	},
	AudioArr: ["ballooninflate", "balloon_pop"],
	BookHandPosition: "80% 80%",
	PicArr: (function() {
		var a = "images/Zombies/BalloonZombie/";
		return ["images/Card/Zombies/Balloonzombie.png", a + "0.gif", a + "1.gif", a + "Attack.gif", a + "Walk2.gif", a + "Attack2.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "Boom.gif", a + "Walk.gif", a + "Drop.gif", a + "Boom2.gif"]
	})(),
	Produce: '气球僵尸漂浮在空中，躲过大多数攻击，有气球时碾压植物<p>韧性：<font color="#FF0000">低</font><br>特点：<font color="#FF0000">飞行</font><br>弱点：<font color="#FF0000">仙人掌和三叶草</font></p>气球僵尸真幸运。气球有很多功效，而其他僵尸都不曾捡到过。',
	BirthCallBack: function(e) {
		var d = e.delayT, c = e.id, a = e.Ele = $(c), f = oGd.$Balloon, b = e.R;
		e.EleShadow = a.firstChild;
		e.EleBody = a.childNodes[1];
		d ? oSym.addTask(d, function(i, g, c) {
			var j = $Z[i], k = oGd.$Balloon;
			j && (j.FreeSetbodyTime = 0, SetBlock(g)); k[c] |= 0, ++k[c]; // 增加数量
			PlayAudio("ballooninflate");
		}, [c, a, b]) : (SetBlock(a), f[b] == undefined ? f[b] = 1 : ++f[b], PlayAudio("ballooninflate"));
	},
	ChkActs: function(f, d, g, c) {
		var b, a, e;
		if(f.Altitude == 3 && f.AttackedRX < GetX(1)&&(f.hard!=2)) { // 气球掉落
			f.Drop(); return 1;
		}
		!(f.FreeFreezeTime || f.FreeSetbodyTime) ?(f.beAttacked && !f.isAttacking && f.JudgeAttack(),!f.isAttacking ?((a = f.AttackedRX -= (b = f.Speed)) < -50 ? (g.splice(c, 1), f.DisappearDie(), e = 0) : (a < 100 && !f.PointZombie && (f.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), f.ChangeR({
			R: d,
			ar: [oS.R - 1],
			CustomTop: 400 - f.height + f.GetDY()
		})), f.ZX = f.AttackedLX -= b, f.Ele.style.left = Math.floor(f.X -= b) + "px", e = 1)) :e=1): e = 1;
	if(f.HPlook&&!f.bHP){
	f.bHP=1;
    var E = NewEle("dHP", "div", "position:absolute;color:#fff;top:" + (f.pixelTop + 100) + "px;left:" + (f.ZX - 50) + "px;width:100%;font-size:12px", "", EDAll);
    var A = "hp" + Math.random();
    dHP.id = A;
    var C = $(A);
    E.innerHTML = '<div>' + Math.round(Math.max(f.OrnHP,0) + f.HP) + "</div>";
    oSym.addTask(1, function(C, f, E) {
      ClearChild(C);
      if (f.HP > f.BreakPoint && $Z[f.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (f.ZX - 50) + "px";
        E.innerHTML = '<div>' + Math.round(Math.max(f.OrnHP,0) + f.HP) + "</div>";
      }
      oSym.addTask(5, arguments.callee, [C, f, E])
    }, [C, f, E]);
	}
		return e
	},
	NormalAttack: function(c, b) {
    var d = $Z[c];
    $P[b].getHurt(d, 2, d.Attack)
  },
  JudgeAttack: function() {
    var f = this,
      c = f.ZX,
      d = f.R + "_",
      e = GetC(c),
      g = oGd.$,
      b;
    (b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g)) && f.NormalAttack(b[0], b[1])
  },
	Drop:function() {
		var a = this;
		if(a.hard==2){return}
		PlayAudio("balloon_pop");
		a.EleBody.src = "images/Zombies/BalloonZombie/Drop.gif" + $Random + Math.random();
	a.ChkActs = function() {
			return 1
		};
		a.Altitude = 4; a.MulBallNum();
		oSym.addTask(120,
		function(b) {
			var c = $Z[b];
			if (c) {
				c.BoomDieGif = 11;
				c.Altitude = 1;
				c.OSpeed = c.Speed = 6.4;
				c.getFreeze = OrnIZombies.prototype.getFreeze;
				c.EleBody.src = "images/Zombies/BalloonZombie/Walk.gif";
				c.NormalAttack=OrnIZombies.prototype.NormalAttack;
				c.JudgeAttack=OrnIZombies.prototype.JudgeAttack;
				c.ChkActs = OrnIZombies.prototype.ChkActs;
				c.ExplosionDie = function() {
					var d = this;
					d.EleBody.src = d.PicArr[d.BoomDieGif];
					oSym.addTask(200, ClearChild, [d.Ele]);
					d.HP = 0;
					delete $Z[d.id];
					d.PZ && oP.MonPrgs(); d.MulBallNum();
				};
				c.DisappearDie = function() {
					ClearChild(this.Ele);
					this.HP = 0;
					delete $Z[this.id];
					this.PZ && oP.MonPrgs(); this.MulBallNum();
				};
				c.CrushDie = function() {
					var d = this;
					d.GoingDieHead(d.id, d.PicArr, d);
					ClearChild(d.Ele);
					d.HP = 0;
					delete $Z[d.id];
					d.PZ && oP.MonPrgs(); d.MulBallNum();
				}
			}
		},
		[a.id])
	},
	getFreeze: function(b, a) {
		b.Attack = 50;
		b.Speed = 0.5 * b.OSpeed;
		oSym.addTask(1500,
		function(d, c) {
			var e = $Z[d];
			e && e.FreeSlowTime == c && (e.FreeSlowTime = 0, e.Attack = 100, e.Speed = e.OSpeed)
		},
		[a, b.FreeSlowTime = oSym.Now + 1500])
	},
	NormalDie: function() {
		var a = this;
		a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
		oSym.addTask(250, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs(); a.MulBallNum();
	},
	ExplosionDie: function() {
		var a = this;
		a.EleBody.src = a.PicArr[a.BoomDieGif];
		oSym.addTask(200, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs(); a.MulBallNum();
	},
	DisappearDie: function() {
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs(); this.MulBallNum();
	},
	CrushDie: function() {
		this.DisappearDie()
	},
	getDispelled: function() {
		if (this.Altitude != 3 || this.AttackedRX < GetX(0)) {return;};
		this.ChkActs = function() {return 1};
		(function(id) {
			var o = $Z[id]; if (!o) return;
			var d = o.WalkDirection = 1, R = o.R, C = GetC(o.AttackedLX), sx = 50;
			o.AttackedLX += sx; o.ZX += sx; o.X += sx;
			if (o.AttackedLX > oS.W) {o.DisappearDie(); return;};
			SetStyle($(id), {left: o.X + 'px'}); oSym.addTask(2, arguments.callee, [id]);
		})(this.id);
	}, 
	getFirePeaSputtering: function() {
		(this.Altitude == 1) && (this.getHit0(this, 13));
	},
	prepareBirth: oZomboni.prototype.prepareBirth
}),
oSquashZombie = InheritO(oConeheadZombie, {
        EName: "oSquashZombie",
        CName: "窝瓜僵尸",
        Speed:3.2,
        OrnHP: 500,
        Lvl: 6,
        SunNum: 175,
        GetSunNum: 0,
        Produce: '能一次性压扁你的植物。<p>韧性：<font color="#FF0000">高</font><br>弱点：<font color="#FF0000">炮灰植物</font></p>他究竟是从哪里得到这个窝瓜并和他融合的？没有人会知道。',
        CanPass: function(d, c) {
            return c;
        },
        PrivateBirth:function(a){
            let z = $(a.id);
            z.SquashHeadId = "Squash" + Math.random();
            let squash = NewImg(z.SquashHeadId,"images/Plants/Squash/Squash.gif","position:absolute;left:40px;top:-150px;",0);
            z.appendChild(squash);
        },
        PrivateAct:function(a){
	if(!a.bool){
           let z = $(a.id),
               s = $(z.SquashHeadId);
		var C = GetC(a.X + 80);
                var p = oGd.$[`${a.R}_${C}_1`];
                if(p && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains") && (p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom")){
                    a.Speed = 0;
                    EditImg(s,0,"images/Plants/Squash/SquashAttack.gif",{
                        left:"0px",
                        top:"-50px"
                    },0);
                    oSym.addTask(50,function(p,s){
                        try{
                            PlayAudio("gargantuar_thump");
                            p && p.Die();
                            ClearChild(s);
			    a.BoomFire(a.R);
                        }catch(e){
                            document.write(e);
                        }
                    },[p,s]);
                    a.bool=1;
		}
            }
        },
BoomFire: function (y) {
      PlayAudio("jalapeno");
      fireid = "fire_" + Math.random();
      NewImg(
        fireid,
        "images/Plants/Jalapeno/JalapenoAttack.gif",
        "width:755px;height:131px;left:120px;top:" + (GetY(y - 1) - 42) + "px",
        EDAll
      );
      oSym.addTask(
        135,
        (id) => {
          ClearChild($(id));
        },
        [fireid]
      );
      for (let i = 1; i <= oS.C; i++) {
        for (let j = 0; j < 4; j++) {
          let g = oGd.$[y + "_" + i + "_" + j];
          g && g.BoomDie();
        }
      }
      this.NormalDie();
    },
        CrushDie: function(){
            this.NormalDie();
        }
    }),
    oPeaZombie= InheritO(oNewspaperZombie1, {
        EName: "oPeaZombie",
        CName: "寒冰射手僵尸",
        OrnHP:2000,
        HP: 800,
        Lvl: 3,
        SunNum: 200,
        StandGif: 13,
        width: 166,
        height: 144,
        beAttackedPointL: 60,
        beAttackedPointR: 116,
        PicArr: (function() {
            var a = "images/Zombies/ScreenDoorZombie/",
                b = "images/Zombies/Zombie/";
            return ["images/Card/Zombies/ScreenDoorZombie.png", a + "0.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", b + "ZombieLostHead.gif", b + "ZombieLostHeadAttack.gif", b + "ZombieLostHead.gif", b + "ZombieLostHeadAttack.gif", b + "unlook.gif" + $Random, b + "ZombieDie.gif" + $Random, b + "BoomDie.gif" + $Random, a + "1.gif"]
        })(),
        CanPass: function(d, c) {
            return c;
        },
        PlayNormalballAudio: function() {
            PlayAudio("splat" + Math.floor(1 + Math.random() * 3))
        },
        Produce: '它拿着一个铁门，还可以不断射出豌豆。<p>韧性：<font color="#FF0000">低(800)</font><br>铁栅门韧性：<font color="#FF0000">高(2000)</font></p><div style="color:red">特点：发射寒冰豌豆，同时使3×3的僵尸额外发射一颗普通豌豆</div>只是一个普普通通的小豌豆僵尸',
        GoingDie: CZombies.prototype.GoingDie,
	PrivateBirth: function(a){
            let z = $(a.id);
            z.PeaHead = "Pea" + Math.random();
            let pea = NewImg(z.PeaHead,"images/Plants/SnowPea/SnowPea.gif","position:absolute;width:80px;height:80px;transform:rotateY(180deg);left:45px;top:15px;",0);
            z.appendChild(pea);
        },
        PrivateAct: function(a){
            if(!a.bool){
            a.bool = 1;
	oSym.addTask(1, function(a) {
        for (let i = (a.R - 1 >= 1 ? a.R - 1 : 1); i <= (a.R + 1 <= oS.R ? a.R + 1 : oS.R); i++) {
          if (a.EName == "oPeaZombie" && ($Z[a.id])) {
            let A = oZ.getArZ(a.ZX - 120, a.ZX + 120, i),
              w = A.length;
            while (w--) {
              (t = A[w])&& t.shootPea(t)
            }
          }
        };
        oSym.addTask(100, arguments.callee, [a])
      }, [a]);
            oSym.addTask(700,function(a){
	if(!$Z[a.id]){return}
            let z = $(a.id);
            let div = $n("div");
            let d = "Pea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/PB-10.gif">';
            EditEle(div,0,{
                position:"absolute",
		transform:"rotateY(20deg)",
                zIndex:"24",
                left:a.ZX + "px",
                top:a.pixelTop + 40 + "px"
            },EDPZ,0)
            oSym.addTask(1,function(z,d,a){
                try{
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                let pea = $(d);
                let C = GetC(a.ZX + 40);
                for(let i = 3;i >= 0;i--){
                    for(let j = 1;j <= C;j++){
                        let p = oGd.$[a.R+"_"+j+"_"+i];
                p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && 
				    p.EName != "oJalapeno" && p.EName != "oDoomShroom"&& p.EName != "oSunFlower"&& p.EName != "oSquash"&& p.EName != "oIceShroom"&& p.EName != "oSnowPea"&& 
				    p.EName != "oTorchwood"&&p.EName!="oGatlingPea"&&p.EName!="oGatlingPea1"&&p.EName!="oLilyPad") &&((p.AttackedLX + $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"),(p.HP -= 50),(p.NormalAttack=function(){}),($(p.id).style.opacity = 0.5),($(d) && ClearChild($(d))));
		p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom"&& p.EName != "oSunFlower"&& p.EName != "oIceShroom"
				    &&p.EName!="oLilyPad") &&((p.AttackedLX + $(p.id).offsetWidth >= $(d).offsetLeft) && (p.AttackedLX >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"),(p.HP -= 20),($(d) && ClearChild($(d))));
                p && (p.canEat) && (p.HP <= 0) && p.Die();
                    }
                }
	let Z= oZ.getArHZ($(d).offsetLeft - 50,a.ZX +60, a.R);
          let i = Z.length;
          while (i--) {
            Z&&(Z[i].Altitude==1)&& (PlayAudio("splat1"), (Z[i].getHit0(Z[i],50,0),(Z[i].getSlow(Z[i])),($(d) && ClearChild($(d)))));
          }
                if($(d).offsetLeft <= 0){
                    ClearChild($(d));
                    $(d).isDie = true;
                };
                !($(d).isDie) && oSym.addTask(1,arguments.callee,[z,d,a])
                }catch(e){
                }
            },[z,d,a]);
            !a.isDie && (a.HP > 60) &&(a.PZ)&&oSym.addTask(125,arguments.callee,[a])
            },[a]);
            }
        },
  bedevilAct: function(a) {
    if (!a.e) {
      a.Speed = 1;
      a.e = 1;
oSym.addTask(1, function(a) {
        for (let i = (a.R - 1 >= 1 ? a.R - 1 : 1); i <= (a.R + 1 <= oS.R ? a.R + 1 : oS.R); i++) {
          if (a.EName == "oPeaZombie" && ($Z[a.id])) {
            let A = oZ.getArHZ(a.ZX - 120, a.ZX + 120, i),
              w = A.length;
            while (w--) {
              (t = A[w])&& t.shootbedevilPea(t)
            }
          }
        };
        oSym.addTask(100, arguments.callee, [a])
      }, [a]);
      oSym.addTask(200, function(a) {
	if(!$Z[a.id]){return}
        let z = $(a.id);
        let div = $n("div");
        let d = "Pea" + Math.random();
        div.id = d;
        div.innerHTML = '<img src="images/Plants/PB-10.gif">';
        EditEle(div, 0, {
          position: "absolute",
          transform: "rotateY(20deg)",
          zIndex: "24",
          left: a.ZX+ "px",
          top: a.pixelTop + 40 + "px"
        }, EDPZ, 0)
        oSym.addTask(1, function(z, d, a) {
          $(d).style.left = $(d).offsetLeft + 5 + "px";
          let pea = $(d);
          let p = oZ.getArZ(a.ZX - 10, $(d).offsetLeft + 50, a.R);
          let i = p.length;
          while (i--) {
            p &&  (p[i].Altitude==1) && ((p[i].getSlowPea(p[i], 20, 0),($(d) && ClearChild($(d)))));
          }
          if ($(d).offsetLeft>=900) {
            ClearChild($(d));
            $(d).isDie = true;
          };
	!($(d).isDie) && oSym.addTask(1, arguments.callee, [z, d, a])
        }, [z, d, a]);
        !a.isDie && (a.HP > 60) && (!a.PZ) && oSym.addTask(575, arguments.callee, [a])
      }, [a]);
    }
  },
        getExplosion:CZombies.prototype.getExplosion,
        getFirePea: function(c, a, b) {
            PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
            c.getHit0(c, a, b)
        },
        getFirePeaSputtering: function() {},
        getSnowPea: function(c, a, b) {
            PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
            c.getHit0(c, a, b)
        },
        getPea: function(c, a, b) {
            PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
            c.getHit0(c, a, b)
        },
	getSlowPea: function(c, a, b) {
            PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
            c.getHit0(c, a, b)
        },
	getSlowPea1: function(c, a, b) {
            PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
            c.getHit1(c, a, b)
        },
        getHit0:oScreenDoorZombie.prototype.getHit0,
        CheckOrnHP: function(g, h, d, c, f, b, a) {
            var e = OrnNoneZombies.prototype;
            (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.Ornaments = 0, g.EleBody.src = f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]], g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getPea = e.getPea, g.getFirePea = e.getFirePea, g.getFirePeaSputtering = e.getFirePeaSputtering, g.getSnowPea = g.getSnowPea, g.PlayNormalballAudio = e.PlayNormalballAudio, g.PlayFireballAudio = e.PlayFireballAudio, g.PlaySlowballAudio = e.PlaySlowballAudio, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit)
        },
        getFireball: function(c, a, b) {
            b != c.WalkDirection ? (c.FreeSlowTime = 0, c.Attack = 100, c.Speed != c.OSpeed ? (c.PlayNormalballAudio(), c.Speed = c.OSpeed) : c.PlayFireballAudio()) : c.PlayNormalballAudio()
        },
        getSputtering: function() {},
        getSlow: function(d, a, c, b, e) {
            (b != d.WalkDirection || e != -1) ? CZombies.prototype.getSlow(d, a, c) : d.PlayNormalballAudio()
        }
    }),
oJackinTheBoxZombie = InheritO(OrnNoneZombies, {
	EName: "oJackinTheBoxZombie",
	CName: "小丑僵尸",
	SunNum: 175,
	HP: 800,
	BreakPoint: 100,
	Lvl: 3,
	Status: 1,
	BookHandPosition: "30% 70%",
	width: 196,
	height: 181,
	beAttackedPointL: 120,
	beAttackedPointR: 170,
	StandGif: 5,
	NormalGif: 6,
	DieGif: 3,
	BoomDieGif: 4,
	HeadGif: 11,
	LostHeadGif: 9,
	LostHeadAttackGif: 10,
	AttackGif: 2,
	OSpeed: 3.6,
	Speed: 3.6,
	Produce: '这种僵尸带着个会爆炸的盒子。</p><p>韧性：<font color="#FF0000">中</font><br>速度：<font color="#FF0000">快</font><br>特点：<font color="#FF0000">打开玩偶匣会爆炸，无视植物</font><br>弱点：<font color="#FF0000">磁力菇</font><br>这种僵尸令人不寒而栗，不是因为他的冰冷身躯而是因为他的疯狂。',
	AudioArr: ["jackinthebox", "jack_surprise", "explosion"],
	PicArr: (function() {
		var a = "images/Zombies/JackinTheBoxZombie/";
		return ["images/Card/Zombies/JackboxZombie.png", a + "0.gif", a + "Attack.gif", a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif", a + "Walk.gif", a + "OpenBox.gif", a + "Boom.gif" + $Random, a + "LostHead.gif", a + "LostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random]
	})(),
	RandomOpenBox: function(a) {
            oSym.addTask(Math.floor(Math.random() * 100) > 4 ? Math.floor(1000 + Math.random() * 800) : Math.floor(450+ Math.random() * 301),
		function(c) {
			var b = $Z[c];
			b && b.beAttacked && b.OpenBox(c)
		},
			 [a])
	},
			AttackZombie: function(d, c) {
			oSym.addTask(10,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 10, 0), h.JudgeAttack())
			},
			[d, c]);
			this.OpenBox&& this.OpenBox(this.id)
		},
		AttackZombie2: function(e, d, c) {
			e.isAttacking = 1;
			e.EleBody.src = e.PicArr[e.AttackGif];
			oSym.addTask(10,
			function(g, f) {
				var i = $Z[g],
				h;
				i && i.beAttacked && !i.FreeFreezeTime && !i.FreeSetbodyTime && ((h = $Z[f]) ? (h.getHit0(h, 10, 0), oSym.addTask(10, arguments.callee, [g, f])) : (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif]))
			},
			[d, c]);
			this.OpenBox&& this.OpenBox(this.id)
		},
	OpenBox: function(b) {
		var a = $Z[b];
		a.ChkActs = a.ChkActs1 = function() {
			return 1
		};
		a.JudgeAttack = function() {
			var g = this,
			d = g.ZX,
			e = g.R + "_",
			f = GetC(d),
			h = oGd.$,
			c; (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), g.NormalAttack(c[0], c[1])) : g.isAttacking && (g.isAttacking = 0)
		};
		a.JudgeAttackH = function() {
			var e = this,
			d = oZ.getZ0(e.ZX, e.R),
			f = e.id,
			c;
			d && d.beAttacked && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif], e.AttackZombie(f, c = d.id), !d.isAttacking && d.AttackZombie2(d, c, f)) : e.AttackZombie(f, d.id, 1)) : e.isAttacking && (e.isAttacking = 0)
		};
		oSym.addTask(0,
		function(c) {
			$Z[c] && (a.Status = 0,
				  PlayAudio("jack_surprise"), oSym.addTask(0,
			function(f) {
				var e = $Z[f],
				d;
				e && (d = NewImg("", "images/interface/blank.png", "width:306px;height:300px;left:" + (e.X - 16) + "px;top:" + (e.pixelTop - 90) + "px;z-index:20"), PlayAudio("explosion"), d.src = e.PicArr[8] + Math.random(), EDPZ.appendChild(d), oSym.addTask(70, ClearChild, [d]), e.PZ ? ((function(k, g) {
					var q = Math.max(1, k - 1),
					o = Math.min(oS.R, k + 1),
					n = Math.max(1, g - 1),
					h = Math.min(oS.C,g + 1),
					r = oGd.$,
					l,
					j = "",
					m;
					do {
						g = n;
						do {
							j = q + "_" + g + "_";
							for (l = 0; l < 4; l++) { (m = r[j + l]) && m.BoomDie()
							}
						} while ( g ++< h )
					} while ( q ++< o )
				})(e.R, GetC(e.ZX))) : (function(j, l) {
					var m = j - 120,
					o = j + 120,
					h = Math.max(1, l - 1),
					g = Math.min(oS.R, l + 1),
					n,
					k;
					do {
						k = (n = oZ.getArZ(m, o, h)).length;
						while (k--) {
							n[k].ExplosionDie()
						}
					} while ( h ++< g )
				})(e.ZX, e.R), e.ChkActs=(e.PZ?(t=CZombies.prototype).ChkActs:t.ChkActs1),
				 e.ChkActs1=t.ChkActs1,
				e.JudgeAttackH=t.JudgeAttackH,
				e.JudgeAttack=(e.PZ?t.JudgeAttack:t.JudgeAttackH),
				e.Status=1,
				(e.hard==2)?(e.HP=1500):(e.HP=1000))
			},
			[c]))
		},
		[b])
	},
	getShadow: function(a) {
		return "left:" + (a.beAttackedPointL - 8) + "px;top:" + (a.height - 32) + "px"
	},
	BirthCallBack: function(d) {
		var c = d.delayT,
		b = d.id,
		a = d.Ele = $(b);
		d.EleShadow = a.firstChild;
		d.EleBody = a.childNodes[1];
		c ? oSym.addTask(c,
		function(f, e) {
			var g = $Z[f];
			g && (PlayAudio("jackinthebox",true), ++oGd.$JackinTheBox, g.FreeSetbodyTime = 0, SetBlock(e))
		},
		[b, a]) : (PlayAudio("jackinthebox", true), ++oGd.$JackinTheBox, SetBlock(a))
	},
        NormalAttack: function(d, c) {
            PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
            oSym.addTask(50, function(e) {
                $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
            }, [d]);
            oSym.addTask(1, function(f, e) {
                var h = $Z[f],
                    g;
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && g.getHurt(h, h.AKind, h.Attack), h.JudgeAttack())
            }, [d, c]);
            this.OpenBox&& this.OpenBox(this.id)
        },	
	NormalDie: function() {
		var a = this;
		a.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
		a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
		oSym.addTask(250, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	ExplosionDie: function() {
		var a = this;
		a.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
		a.EleBody.src = a.PicArr[a.BoomDieGif] + Math.random();
		oSym.addTask(300, ClearChild, [a.Ele]);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	},
	DisappearDie: function() {
		this.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
		ClearChild(this.Ele);
		this.HP = 0;
		delete $Z[this.id];
		this.PZ && oP.MonPrgs()
	},
	CrushDie: function() {
		var a = this;
		a.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
		a.GoingDieHead(a.id, a.PicArr, a);
		ClearChild(a.Ele);
		a.HP = 0;
		delete $Z[a.id];
		a.PZ && oP.MonPrgs()
	}
}),
oDiggerZombie = InheritO(OrnNoneZombies, {
  EName: "oDiggerZombie",
  CName: "矿工僵尸",
  Lvl: 4,
  SunNum: 200,
  HP: 800,
  BreakPoint: 70,
  width: 167,
  height: 170,
  GetDTop: 20,
  beAttackedPointL: 65,
  beAttackedPointR: 90,
  OrnHP: 0,
  OSpeed: 15,
  Speed: 15,
  Altitude: 0, // 挖矿
  CardGif: 0,
  StandGif: 1,
  StaticGif: 2,
  NormalGif: 3,
  WalkGif0: 3,
  WalkGif1: 4,
  WalkGif2: 5,
  AttackGif: 3,
  AttackGif_Up0: 6,
  AttackGif_Up1: 7,
  HeadGif: 8,
  DieGif: 9,
  UpGif: 10,
  DownGif: 11,
  BoomDieGif: 8,
  LostHeadGif: 5,
  LostHeadAttackGif: 5,

  Produce: '这种僵尸通过挖地来绕过防线。<p>韧性：<font color="#FF0000">中</font><Br>速度：<font color="#FF0000">快,而后慢</font><BR>特点：<font color="#FF0000">挖地道，然后在草地的左侧现身</font><BR>弱点：<font color="#FF0000">分裂射手，磁力菇</font></p>最近，他一直在听奥特曼的主题曲，据他所述，他好像是在某一处听到这首歌，觉得很好听，于是他现在也不挖土了，天天循环播放这首歌',
  BirthCallBack: function(f) {
    var e = f.delayT,
      d = f.id,
      c = (f.Ele = $(d));
    (f.EleShadow = c.firstChild),
    (f.EleBody = c.childNodes[1]),
    SetHidden(f.EleShadow);
    e
      ?
      oSym.addTask(
        e,
        function(h, g) {
          var i = $Z[h];
          i && ((i.FreeSetbodyTime = 0), SetBlock(g));
        },
        [d, c]
      ) :
      SetBlock(c);
  },
  HeadPosition: [{
    x: 42,
    y: 146
  }, {
    x: 40,
    y: 147
  }, ],
  getShadow: function(a) {
    return "left:" + a.beAttackedPointL + "px;top:" + (a.height - 20) + "px";
  },
  isUp: 0,
  JudgeLR: function(f, d, e, c, g) {
    return e > 10 || e < 1 ?
      false :
      (function() {
        d += --e + "_";
        var h = 3,
          i;
        while (h--) {
          if ((i = g[d + h]) && i.canEat) {
            return i.AttackedRX >= c && i.AttackedLX <= c ?
              [f.id, i.id] :
              false;
          }
        }
      })();
  },
  JudgeSR: function(f, d, e, c, g) {
    return e > 9 ?
      false :
      (function() {
        d += e + "_";
        var h = 3,
          i;
        while (h--) {
          if ((i = g[d + h]) && i.canEat) {
            return i.AttackedRX >= c && i.AttackedLX <= c ?
              [f.id, i.id] :
              false;
          }
        }
      })();
  },
bedevil: function(c) {
			c.ExchangeLR(c, 1);
			c.JudgeAttack = c.JudgeAttackH;
			c.PZ = 0;
			c.WalkDirection = 1;
			c.ZX = c.AttackedRX;
			c.ChkActs = c.ChkActs1;
			oP.MonPrgs()
		},
  PicArr: (function() {
    var a = "images/Zombies/DiggerZombie/";
    return [
      "images/Card/Zombies/Diggerzombie.png",
      a + "0.gif",
      a + "DiggerZombie.gif",
      a + "Walk1.gif",
      a + "Walk2.gif",
      a + "Walk3.gif",
      a + "Attack1.gif",
      a + "Attack2.gif",
      "images/Zombies/Zombie/unlook.gif" + $Random,
      a + "Die.gif" + $Random,
      a + "Up.gif" + $Random,
      a + "Down.gif" + $Random,
      a + "BoomDie.gif" + $Random,
 "images/Zombies/JackinTheBoxZombie/Boom.gif" + $Random
    ];
  })(),
  AudioArr: ["zombie_entering_water","jack_surprise","explosion"],
  Go_Up: function(a, WD) {
    // WD: 方向，1右0左
    a.isUp = 1; //a.Ifgc=0;
    a.beAttacked &&
      ((a.WalkDirection = WD),
        (a.BoomDieGif = 12),
        PlayAudio("zombie_entering_water"),
        (a.Altitude = 4),
        SetVisible(a.EleShadow),
        (a.EleBody.src = a.PicArr[a.UpGif] + Math.random()),
        (a.OSpeed = a.Speed = 0)),
      (a.ChkActs = function() {
        return 1;
      }); // 跳起来
    oSym.addTask(
      100,
      function(c, b) {
	var d=$Z[c];
        WD
          ?
          ((b.AttackGif = b.AttackGif_Up0),
            (b.AttackedRX += 30),
            (b.beAttackedPointL = 70),
            (b.beAttackedPointR = 130),
            (b.Ele.lastChild.style.left = "40px"),
            (b.JudgeAttack = b.JudgeAttack_Up1)) :
          (b.AttackGif = b.AttackGif_Up1); // GIF
        $Z[c] &&
          b.beAttacked &&
          (WD && b.ExchangeLR(b, WD),
            (b.Altitude = 1),
            (b.isAttacking = 0),
            (b.EleBody.src = b.PicArr[(b.NormalGif = b.DownGif)])); // 眩晕
        $Z[c] &&
          b.beAttacked &&
          oSym.addTask(
            400,
            function(c, b) {
              // 行走
              (b.EleBody.src =
                b.PicArr[(b.NormalGif = WD ? b.WalkGif1 : b.WalkGif2)]),
              (b.OSpeed = b.Speed = 1.6),
              (b.ChkActs =WD?b.ChkActs1:
                OrnNoneZombies.prototype.ChkActs);
            },
            [c, b]
          );
      },
      [a.id, a]
    );
  },
  ChkActs: function(f, d, g, c) {
    // 到了左边自己钻出来
    if (f.Altitude == 0 && f.AttackedRX < GetX(1) -40) return f.Go_Up(f,Math.round(Math.random()*100)>10?1:0), 1;
    if (f.Altitude == 0 && f.AttackedRX < GetX(3) -40&&(f.hard==2)) return f.Go_Up(f,0), 1;
    var b, a, e;
    !(f.FreeFreezeTime || f.FreeSetbodyTime) ?
    (f.beAttacked && !f.isAttacking && f.JudgeAttack_Dig(),
      !f.isAttacking ?
      (a = f.AttackedRX -= b = f.Speed) < -50 ?
      (g.splice(c, 1), f.DisappearDie(), (e = 0)) :
      (a < 80 &&
        !f.PointZombie &&
        ((f.PointZombie = 1),
          !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)),
          f.ChangeR({
            R: d,
            ar: [oS.R - 1],
            CustomTop: 400 - f.height + f.GetDY(),
          })),
        (f.ZX = f.AttackedLX -= b),
        (f.Ele.style.left = Math.floor((f.X -= b)) + "px"),
        (e = 1)) :
      (e = 1)) :
    (e = 1);
    return e;
  },
 PrivateAct: function(a) {
    if (!a.bool) {
      a.bool = 1;
      oSym.addTask(200, function(a) {
        for (let i = GetC(a.ZX); i <= GetC(a.ZX)+2; i++) {
          for (l = 0; l < 4; l++) {
            if (oGd.$[a.R + "_" + i + "_" + l]) {
              PlayAudio(["ignite", "ignite2"][Math.floor(Math.random() * 2)]);
              let m = oGd.$[a.R + "_" + i + "_" + l];
              m&&(m.HP -= 100);
	      let s= oZ.getArHZ(a.ZX,a.ZX+200,a.R),
              g=s.length;
	while(g--){
	(t=s[g])&&t&&(t.beAttacked)&&(t.Altitude==1)&&t.getHit1(t,100,0)
        };
	try{m.SetAlpha(m,$(m.id),50,0.5)}catch{}
	oSym.addTask(10, function(m) {
                try{m.SetAlpha(m,$(m.id), 100, 1)}catch{}
            }, [m]);
                m && (m.HP <= 0) && m.Die()
            }
          }
        };
        (a.PZ)&&a.HP >= 1 && a.beAttacked && oSym.addTask(200, arguments.callee, [a]);
      }, [a]);
    }
  },
bedevilAct: function(a) {
    if (!a.b) {
      a.b= 1;
      oSym.addTask(100, function(a) {
              PlayAudio(["ignite", "ignite2"][Math.floor(Math.random() * 2)]);
              let m = oZ.getArZ(a.ZX,a.ZX+200,a.R),
              l=m.length;
	while(l--){
	(t=m[l])&&t&&(t.beAttacked)&&(t.Altitude==1)&&t.getHit1(t,100,0)
        };
        (!a.PZ)&&a.HP >= 1 && a.beAttacked && oSym.addTask(200, arguments.callee, [a]);
      }, [a]);
    }
  },
ChkActs1: function(g, e, h, d) {
			var c, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), !g.isAttacking ? (g.AttackedLX += (c = g.Speed)) > oS.W ? (h.splice(d, 1), g.DisappearDie(), f = 0) : (g.ZX = g.AttackedRX += c, g.Ele.style.left = Math.ceil(g.X += c) + "px", f = 1) : f = 1) : f = 1;
			g&&(g.PZ)?this.PrivateAct&&this.PrivateAct(this):this.bedevilAct&&this.bedevilAct(this);
			return f
},
  CanDig: {
    oPotatoMine,oChomper,oSpikerock,oSpikeweed: true
  },
  JudgeAttack_Dig: function() {
    var g = this,
      d = g.ZX,
      e = g.R + "_",
      f = GetC(d),
      h = oGd.$,
      c;
    (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) &&
    g.CanDig[$P[c[1]]["EName"]] ?
      (!g.isAttacking &&
        ((g.isAttacking = 1), (g.EleBody.src = g.PicArr[g.AttackGif])),
        g.NormalAttack(c[0], c[1])) :
      g.isAttacking &&
      ((g.isAttacking = 0), (g.EleBody.src = g.PicArr[g.NormalGif]));
  },
  JudgeAttack_Up1: function() {
    var g = this,
      d = g.AttackedRX,
      e = g.R + "_",
      f = GetC(d),
      h = oGd.$,
      c;
    (c = g.JudgeSR(g, e, f, d, h) || g.JudgeLR(g, e, f, d, h)) ?
    (!g.isAttacking &&
      ((g.isAttacking = 1), (g.EleBody.src = g.PicArr[g.AttackGif])),
      g.NormalAttack(c[0], c[1])) :
    g.isAttacking &&
      ((g.isAttacking = 0), (g.EleBody.src = g.PicArr[g.NormalGif]));
  },
  Stone_of_Sinan_Up: function() {
    // 被磁铁吸了镐子调用的函数
    var g = this; //alert(1);
    if (g.isUp) {
      g.EleBody.src =
        g.PicArr[
          g.isAttacking ?
          (g.AttackGif = g.AttackGif_Up1) :
          (g.NormalGif = g.WalkGif2)
        ];
    } else {
      g.Go_Up(g, 0);
    }
    g.Stone_of_Sinan_Up = function() {};
  },
});
