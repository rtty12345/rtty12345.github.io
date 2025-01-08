var CZombies1= function(b, a) {
	return (a = function() {}).prototype = {
		name: "Zombies",
		HP: 270,
		Lvl: 1,
		NormalGif: 2,
		CardGif: 0,
		StaticGif: 1,
		StandGif: 2,
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
			var d, c, g; ! (h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
				R: f,
				ar: [oS.R - 1],
				CustomTop: 400 - h.height + h.GetDY()
			})), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
			return g
		},
		ChkActs1: function(g, e, h, d) {
			var c, f; ! (g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), !g.isAttacking ? (g.AttackedLX += (c = g.Speed)) > oS.W ? (h.splice(d, 1), g.DisappearDie(), f = 0) : (g.ZX = g.AttackedRX += c, g.Ele.style.left = Math.ceil(g.X += c) + "px", f = 1) : f = 1) : f = 1;
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
			g.length ? (l = !d.WalkDirection ? -5 : 5, d.ZX += l, d.AttackedLX += l, d.AttackedRX += l, d.X += l, q = g[Math.floor(Math.random() * g.length)], SetStyle(f, {
				left: d.X + "px",
				top: (d.pixelTop = j == undefined ? GetY(q) - d.height + d.GetDY() : j) + "px",
				zIndex: d.zIndex = 3 * q + 1
			}), d.isAttacking && (n.src = d.PicArr[d.NormalGif]), oZ.moveTo(k, h, q)) : n.src = d.PicArr[d.NormalGif];
			d.isAttacking = 0
		},
		getShadow: function(c) {
			return "left:" + (c.beAttackedPointL - 10) + "px;top:" + (c.height - 22) + "px"
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
		Birth: function() {
			var c = this;
			$Z[c.id] = c;
			oZ.add(c);
			c.BirthCallBack(c)
		},
		getCrushed: function(c) {
			return true
		},
		getRaven: function() {
			return this.DisappearDie(),
			1
		},
        getExplosion: function(Attack , howDie , callback) {
            Attack = Attack == undefined?1800:Attack;
            howDie = howDie == undefined?"ExplosionDie":howDie;
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
		getFreeze: function(d, c) {
			d.beAttacked && d.getHit0(d, 20, 0);
			d.Speed = 0;
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
		NormalDie: function() {
			var c = this;
			c.EleBody.src = c.PicArr[c.DieGif] + Math.random();
			oSym.addTask(250, ClearChild, [c.Ele]);
			c.HP = 0;
			delete $Z[c.id];
			c.PZ && oP.MonPrgs()
		},
		ExplosionDie: function() {
			var c = this;
			c.EleBody.src = c.PicArr[c.BoomDieGif] + Math.random();
			oSym.addTask(300, ClearChild, [c.Ele]);
			c.HP = 0;
			delete $Z[c.id];
			c.PZ && oP.MonPrgs()
		},
		DisappearDie: function() {
			ClearChild(this.Ele);
			this.HP = 0;
			delete $Z[this.id];
			this.PZ && oP.MonPrgs()
		},
		CrushDie: function() {
			var c = this;
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
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 10, 0), h.JudgeAttackH())
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
		NormalAttack: function(d, c) {
			PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
			oSym.addTask(50,
			function(e) {
				$Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
			},
			[d]);
			oSym.addTask(100,
			function(f, e) {
				var h = $Z[f],
				g;
				h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && g.getHurt(h, h.AKind, h.Attack), h.JudgeAttack())
			},
			[d, c])
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
			c.Attack=300,
			c.ChkActs = c.ChkActs1;
			oP.MonPrgs()
		},
		SetAlpha: $User.Browser.IE ?
		function(f, d, e, c) {
			d.style.filter = (f.CSS_alpha = "alpha(opacity=" + e + ")") + f.CSS_fliph
		}: function(f, d, e, c) {
			d.style.opacity = c
		}
	},
	a
} (),
OrnNoneZombies2= function() {
	var a = function(c, b) {
		if ((c.HP -= b) < c.BreakPoint) {
			c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]);
			c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 = function() {};
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
		getPea: function(e, b, c) {
			e.PlayNormalballAudio();
			e.getHit0(e, b, c)
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
		getFirePeaSputtering: function() {
			this.getHit0(this, 13)
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
OrnNoneZombies3= function() {
	var a = function(c, b) {
		if ((c.HP -= b) < c.BreakPoint) {
			c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]);
			c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 = function() {};
			return
		}
		c.SetAlpha(c, c.EleBody,400,0.5);
		oSym.addTask(10,
		function(e, d) { (d = $Z[e]) && d.SetAlpha(d, d.EleBody,800,1)
		},
		[c.id])
	};
	return InheritO(CZombies, {
		getHit: a,
		getHit0: a,
		getHit1: a,
		getHit2: a,
		getHit3: a,
		getPea: function(e, b, c) {
			e.PlayNormalballAudio();
			e.getHit0(e, b, c)
		},
		getFirePea: function(g, c, j) {
			g.PlayFireballAudio(); (g.FreeSlowTime || g.FreeFreezeTime) && (g.Speed = g.OSpeed, g.FreeSlowTime = 0, g.FreeFreezeTime = 0);
			g.Attack = 800;
			var f = g.AttackedLX,
			h = g.AttackedRX,
			b = oZ.getArZ(f, f + 40, g.R),
			e = b.length;
			while (e--) {
				b[e].getFirePeaSputtering()
			}
			g.getHit0(g, c, j)
		},
		getFirePeaSputtering: function() {
			this.getHit0(this, 13)
		},
		getSnowPea: function(f, c, g) {
			var e = f.FreeSlowTime,
			b = oSym.Now + 1000;
			e == 0 ? (f.PlaySlowballAudio(), f.Speed = 0.5 * f.OSpeed, f.Attack = 400) : f.PlayNormalballAudio();
			e < b && (f.FreeSlowTime = b, oSym.addTask(1000,
			function(h, d) {
				var i = $Z[h];
				i && i.FreeSlowTime == d && (i.FreeSlowTime = 0, i.Attack =800, i.Speed && (i.Speed = i.OSpeed))
			},
			[f.id, b]));
			f.getHit0(f, c, g)
		}
	})
} (),
oBackupDancer1= InheritO(OrnNoneZombies, {
	EName: "oBackupDancer",
	CName: "伴舞僵尸",
	OSpeed:5,
	Speed: 5,
	HP:400,
	Lvl: 1,
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
		return ["images/Card/Zombies/BackupDancer.png", a + "0.gif", a + "BackupDancer.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Dancing.gif" + $Random, a + "LostHeadDancing.gif" + $Random, a + "Mound.gif" + $Random]
	})(),
	bedevil: function(a) {
		a.ExchangeLR(a, 1);
		a.JudgeAttack = a.JudgeAttackH;
		a.PZ = 0;
		a.WalkDirection = 1;
		a.ZX = a.AttackedRX;
		a.ChkActs = a.ChkActs1;
		a.Speed = 3.5;
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
	Produce: '当舞王僵尸摇摆时，这种僵尸四个结伙出现。</p><p>韧性：<font color="#FF0000">中（400）</font><br>伴舞僵尸曾在位于僵尸纽约城的“咀利牙”表演艺术学院钻研过六年的舞技。',
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
		return f
	},
	ChkSpeed: function(b) {
		if (!b.DZStep) {
			return
		}
		var a = b.Speed;
		switch (true) {
		case(b.FreeFreezeTime || b.FreeSetbodyTime) == 1 : a && (b.Speed = 0);
			break;
		case b.FreeSlowTime > 0 : a != 1.75 && (b.Speed = 1.75);
			break;
		default:
			a != 3.5 && (b.Speed = 3.5)
		}
	}
}),



oDancingZombie1= InheritO(OrnNoneZombies, {
	EName: "oDancingZombie",
	CName: "舞王僵尸",
	HP: 600,
	BreakPoint: 166,
	Lvl: 3,
	StandGif: 9,
	SunNum: 400,
	beAttackedPointL: 40,
	beAttackedPointR: 85,
	width: 184,
	height: 176,
	BookHandPosition: "70% 70%",
	AudioArr: ["Beatit"],
	OSpeed:30,
	Speed:30,
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
	Produce: '舞王僵尸和人类(在世或者死去的)如有雷同，纯属巧合。</p><p>韧性：<font color="#FF0000">中（600）</font><br>特点：<font color="#FF0000">召唤伴舞僵尸</font></p>舞王僵尸的最新唱片“抓住脑子啃啊啃”在僵尸界的人气正急速飙升。</font></p>游戏内音乐：《Beat it》-Michael Jackson',
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
			u && (u.ExchangeLR(d, 1), u.DZMSpeed = 30, u.DZStep = -1, u.DZStepT = oSym.Now + 220, u.FreeSetbodyTime = 0, SetBlock(o))
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
			f && f.beAttacked && !f.FreeFreezeTime && !f.FreeSetbodyTime && ((e = $Z[c]) ? (e.getHit0(e, 10, 0), oSym.addTask(10, arguments.callee, [d, c])) : (f.isAttacking = 0, f.EleBody.src = f.PicArr[f.NormalGif], f.TurnLeft(f)))
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
		g.DZStepT = oSym.Now + 200;
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
		g.DZStepT = oSym.Now + 220; ! g.isAttacking && (a.src = g.PicArr[2]);
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
					while (r--) { (q = m[r]) && (!(l = q[0]) || !$Z[l]) && (u[o] = (w[o] = new oConeheadZombie).CustomBirth(q[1], q[2](v), 100, q[0] = "Z_" + Math.random()), n.push(NewImg("", k, "z-index:" + q[3] + ";left:" + q[4](v) + "px;top:" + q[5] + "px", EDPZ)), ++o)
					}
					oSym.addTask(220,
					function() {
						var i = arguments.length;
						while (i--) {
							ClearChild(arguments[i])
						}
					},
					n);
					oSym.addTask(110,
					function(A, y, z, i) {
						var B = $Z[A];
						B && B.beAttacked && (oP.AppearUP(y, z, i), oSym.addTask(100,
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
						[A, z]))
					},
					[t, u, w, o]);
					oSym.addTask(200,
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
