  var oPoleVaultingZombie1= InheritO(oPoleVaultingZombie, {
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
	OSpeed:7.2,
	Speed:7.2,
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
						B && B.beAttacked && (oP.AppearUP(y, z,i), oSym.addTask(80,
						function(D,C) {
							var E = $Z[D];
							if (E && E.beAttacked) {
								return
							}
							var j = C.length,
							E;
							while (j--) { (E = C[j]).ChangeChkActsTo0(E, E.id, E.EleBody)
							}
						},
						[A,z]));
					},
					[t, u,w,o]);
					oSym.addTask(100,
					function(y,i) {
						var z = $Z[y],
						j;
						z && z.beAttacked && (j = z.ChkActs,z.ChkActs = z.ChkTmp,z.ChkTmp = j)
					},
					[t,s])
				}
			}，
			[f,e]))
		}，
		[c, a])
	}
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
    	if(!h.Ornaments){
        b.innerHTML = '<div>' + Math.round(h.HP) + "</div>";
	}else{b.innerHTML = '<div>' +Math.round(h.OrnHP)+"+"+Math.round(h.HP) + "</div>"}
    oSym.addTask(1, function(C, h, b) {
      ClearChild(C);
      if (h.HP > h.BreakPoint && $Z[h.id]) {
        EDAll && EDAll.appendChild(C);
        C.style.left = (h.ZX+80) + "px";
        	if(!h.Ornaments){
        b.innerHTML = '<div>' + Math.round(h.HP) + "</div>";
	}else{b.innerHTML = '<div>' +Math.round(h.OrnHP)+"+"+Math.round(h.HP) + "</div>"}
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
	}else if(a.HP<=800&&(a.hard==2)){
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
			k.AKind=0;
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
		[h,f[[g.NormalGif = g.OrnLostNormalGif,g.AttackGif = g.OrnLostAttackGif][b]]]))
	},
			NormalAttack1: function(c,b) {
			var d = $Z[c];
			$P[b].getHurt(d,2,d.Attack)
		},
		JudgeAttack1: function() {
			var f = this,
			c = f.ZX,
			d = f.R + "_",
			e = GetC(c),
			g = oGd.$,
			b; (b = f.JudgeLR(f,d,e,c,g) || f.JudgeSR(f,d,e,c,g)) && f.NormalAttack(b[0], b[1])
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
})
