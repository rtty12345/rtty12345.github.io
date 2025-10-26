var oPea=InheritO(CPlants, {
        EName: "oPea",
        CName: "豌豆射手",
        width: 71,
        height: 71,
        beAttackedPointR: 51,
        SunNum: 100,
        BKind: 0,
        AudioArr: ["splat1", "splat2", "splat3", "plastichit", "shieldhit", "shieldhit2"],
        PicArr: ["images/Card/Plants/Peashooter.png", "images/Plants/Peashooter/0.gif", "images/Plants/Peashooter/Peashooter.gif", "images/Plants/PB00.gif", "images/Plants/PeaBulletHit.gif"],
        Tooltip: "向敌人射出豌豆",
        Produce: '豌豆射手，你的第一道防线。它们通过发射豌豆来攻击僵尸。<p>伤害：<font color="#FF0000">中等</font></p>一棵植物，怎么能如此快地生长，并发射如此多的豌豆呢？豌豆射手：“努力工作，奉献自己，再加上一份阳光，高纤维和氧化碳均衡搭配，这种健康早餐让一切成为可能。”',
        PrivateBirth: function(a) {
            a.BulletEle = NewImg(0, a.PicArr[3], "left:" + (a.AttackedLX - 40) + "px;top:" + (a.pixelTop + 3) + "px;visibility:hidden;z-index:" + (a.zIndex + 2))
        },
        PrivateDie: function(a) {
            a.BulletEle = null
        },
        NormalAttack: function() {
            var a = this,
                b = "PB" + Math.random();
			CustomZombies(new oZombie,a.R,4,1);
            EditEle(a.BulletEle.cloneNode(false), {
                    id: b
                },
                0, EDPZ);
            oSym.addTask(15,
                function(d) {
                    var c = $(d);
                    c && SetVisible(c)
                },
                [b]);
            oSym.addTask(1,
                function(f, j, h, c, n, i, m, k, o, g) {
                    var l, e = GetC(n),
                        d = oZ["getZ" + c](n, i);
                    m == 0 && g[i + "_" + e] && k != e && (PlayAudio("firepea"), m = 1, h = 40, k = e, j.src = "images/Plants/PB" + m + c + ".gif");
                    d && d.Altitude == 1 ? (d[{
                        "-1": "getSnowPea",
                        0: "getPea",
                        1: "getFirePea"
                    } [m]](d, h, c), (SetStyle(j, {
                        left: o + 28 + "px",
                        width: "52px",
                        height: "46px"
                    })).src = "images/Plants/PeaBulletHit.gif", oSym.addTask(10, ClearChild, [j])) : (n += (l = !c ? 5 : -5)) < oS.W && n > 100 ? (j.style.left = (o += l) + "px", oSym.addTask(1, arguments.callee, [f, j, h, c, n, i, m, k, o, g])) : ClearChild(j)
                },
                [b, $(b), 20, 0, a.AttackedLX, a.R, 0, 0, a.AttackedLX - 40, oGd.$Torch])
        }
    });
