var oSquashZombie = InheritO(oConeheadZombie, {
        EName: "oSquashZombie",
        CName: "窝瓜僵尸",
        Speed:3.2,
        OrnHP: 1100,
        Lvl: 2,
        SunNum: 75,
        GetSunNum: 0,
        PlayNormalballAudio: function() {
            PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)])
        },
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
            let z = $(a.id),
                s = $(z.SquashHeadId);
            for(let i = 3;i >= 0;i--){
                let p = oGd.$[a.R+"_"+GetC(z.offsetLeft + 80)+"_"+i];
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
                        }catch(e){
                            document.write(e);
                        }
                    },[p,s]);
                    a.NormalDie();
                    break;
                }
            }
        },
        DisappearDie:function(a){
            this.NormalDie()
        },
        CrushDie: function(){
            this.NormalDie();
        }
    }, {
        PicArr: {
            0: "images/Card/Zombies/BucketheadZombie.png",
            1: "images/Zombies/BucketheadZombie/0.gif",
            2: "images/Zombies/BucketheadZombie/BucketheadZombie.gif",
            3: "images/Zombies/BucketheadZombie/BucketheadZombieAttack.gif",
            9: "images/Zombies/Zombie/Zombie2.gif",
            11: "images/Zombies/BucketheadZombie/1.gif"
        }
    }),
    oJalapenoZombie = InheritO(OrnIZombies,{
        EName: "oJalapenoZombie",
        CName: "辣椒僵尸",
        OrnHP: 500,
        Speed:1,
        Lvl: 3,
        SunNum: 125,
        StandGif: 11,
        PicArr: (function() {
        var b = "images/Zombies/ConeheadZombie/",
             a = "images/Zombies/Zombie/";
        return ["images/Card/Zombies/ConeheadZombie.png", b + "0.gif", b + "ConeheadZombie.gif", b + "ConeheadZombieAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Zombie.gif", a + "ZombieAttack.gif", b + "1.gif"]
    })(),
        AudioArr: ["plastichit"],
        PlayNormalballAudio: function() {
            PlayAudio("plastichit")
        },
        Produce: '随时有可能爆炸的辣椒僵尸。<p>韧性：<font color="#FF0000">中(本体：300 帽子：500)</font></p>它已经和火爆辣椒签下了秘密协定，从此火爆辣椒就是它的植物了，但火爆辣椒似乎没有反抗的欲望，这究竟是为什么呢？',
        CanPass: function(d, c) {
            return c;
        },
        PrivateBirth:function(a){
            let z = $(a.id);
            z.JalapenoHead = "Jalapeno" + Math.random();
            let jalapeno = NewImg(z.JalapenoHead,"images/Plants/Jalapeno/Jalapeno.gif","position:absolute;transform:rotateY(180deg);left:60px;top:0px;",0);
            z.appendChild(jalapeno);
        },
        Boom: function(a){
            for(let i = 0;i <=3;i++){
                for(let j = 1;j <= oS.C;j++){
                    let p = oGd.$[a.R+"_"+j+"_"+i],
                        d = "fire" + Math.random(),
                        t = GetY(a.R)-120;
                    p && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains") && p.BoomDie();
                    PlayAudio("jalapeno");
                    NewImg(d,"images/Plants/Jalapeno/JalapenoAttack.gif","position:absolute;left:120px;top:"+t+"px;",EDPZ);
                    oSym.addTask(135,ClearChild,[$(d)]);
                    a.DisappearDie(a);
                }
            }
        },
        PrivateAct: function(a){
            let b = $(a.id),
                c = GetC(b.offsetLeft + 80),
                n;
            if(c <= 3 && c > 0){
                a.Boom(a);
            }else if(c <= 7 && c > 0){
                n = random(0,150);
                !n && a.Boom(a);
            }else if(c <= 9 && c > 0){
                n = random(0,300);
                !n && a.Boom(a);
            }
        },
    }),
    oPeaZombie = InheritO(oNewspaperZombie, {
        EName: "oPeaZombie",
        CName: "豌豆铁门僵尸",
        OrnHP: 1200,
        HP: 300,
        Lvl: 3,
        SunNum: 250,
        StandGif: 13,
        width: 166,
        height: 144,
        beAttackedPointL: 60,
        beAttackedPointR: 116,
        PicArr: (function() {
            var a = "images/Zombies/ScreenDoorZombie/",
                b = "images/Zombies/Zombie/";
            return ["images/Card/Zombies/ScreenDoorZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", b + "Zombie2.gif", b + "ZombieAttack.gif", b + "ZombieLostHead.gif", b + "ZombieLostHeadAttack.gif", b + "ZombieHead.gif" + $Random, b + "ZombieDie.gif" + $Random, b + "BoomDie.gif" + $Random, a + "1.gif"]
        })(),
        CanPass: function(d, c) {
            return c;
        },
        PlayNormalballAudio: function() {
            PlayAudio("splat" + Math.floor(1 + Math.random() * 3))
        },
        Produce: '它拿着一个铁门，还可以不断射出豌豆。<p>韧性：<font color="#FF0000">低(300)</font><br>铁栅门韧性：<font color="#FF0000">高(1200)</font></p><div style="color:red">特点：发射豌豆</div>铁栅门僵尸在一次意外中改造出了这一个头，对于其他僵尸来说，这可算是高科技武器了。',
        GoingDie: CZombies.prototype.GoingDie,
        PrivateBirth: function(a){
            let z = $(a.id);
            z.PeaHead = "Pea" + Math.random();
            let pea = NewImg(z.PeaHead,"images/Plants/Peashooter/Peashooter.gif","position:absolute;width:80px;height:80px;transform:rotateY(180deg);left:45px;top:15px;",0);
            z.appendChild(pea);
        },
        PrivateAct: function(a){
            if(!a.bool){
            a.bool = 1;
            oSym.addTask(125,function(a){
            let z = $(a.id);
            let div = $n("div");
            let d = "Pea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/PB00.gif">';
            EditEle(div,0,{
                position:"absolute",
                zIndex:"24",
                left:z.offsetLeft + "px",
                top:z.offsetTop + 40 + "px"
            },EDPZ,0)
            oSym.addTask(1,function(z,d,a){
                try{
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                let pea = $(d);
                let C = GetC(z.offsetLeft + 40);
                for(let i = 3;i >= 0;i--){
                    for(let j = 1;j <= C;j++){
                        let p = oGd.$[a.R+"_"+j+"_"+i];
                        p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom") && (($(p.id).offsetLeft + $(p.id).offsetWidth >= $(d).offsetLeft) && ($(p.id).offsetLeft >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"),(p.HP -= 20),($(d) && ClearChild($(d))));
                        p && (p.canEat) && (p.HP <= 0) && p.Die();
                    }
                }
                if($(d).offsetLeft <= 0){
                    ClearChild($(d));
                    $(d).isDie = true;
                }
                !($(d).isDie) && oSym.addTask(1,arguments.callee,[z,d,a])
                }catch(e){
                }
            },[z,d,a]);
            !a.isDie && (a.HP > 60) && oSym.addTask(125,arguments.callee,[a])
            },[a]);
            }
        },
        DisappearDie:function(a){
            this.NormalDie();
        },
        CrushDie: function(){
            this.NormalDie();
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
        getHit0: function(c, a, b) {
            b == c.WalkDirection ? (c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody, 50, 0.5), oSym.addTask(10, function(e, d) {
                (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
            }, [c.id])) : (c.HP -= a) < c.BreakPoint && (c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]), c.getHit = c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 = function() {})
        },
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
    oGatlingPeaZombie = InheritO(OrnIIZombies, {
        EName: "oGatlingPeaZombie",
        CName: "机枪僵尸",
        OrnHP: 800,
        HP:300,
        Lvl: 4,
        SunNum:300,
        LostPaperGif: 13,
        StandGif: 14,
        width: 216,
        height: 164,
        beAttackedPointL: 60,
        beAttackedPointR: 130,
        LostPaperSpeed: 4.8,
        PicArr: (function() {
            var a = "images/Zombies/NewspaperZombie/";
            return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostNewspaper.gif", a + "1.gif"]
        })(),
        AudioArr: ["newspaper_rarrgh2"],
        Produce: '机枪僵尸每次可以射出3-5颗豌豆攻击植物,报纸掉落后碾压植物。<p>韧性：<font color="#FF0000">中(报纸：800,本体:300)</font><br>报纸韧性：<font color="#FF0000">稍高</font><br>速度：正常，而后快(失去报纸后)</p>机枪僵尸在看关于僵尸头部移植手术的最新的报纸，他似乎陷入了疯狂。',
        PrivateBirth: function(a){
            let z = $(a.id);
            z.PeaHead = "Pea" + Math.random();
            let pea = NewImg(z.PeaHead,"images/Plants/GatlingPea/GatlingPea.gif","position:absolute;width:80px;height:80px;transform:rotateY(180deg);left:45px;top:30px;",0);
            z.appendChild(pea);
        },
        PrivateAct: function(){
            let a = this;
            if(!a.bool){
                a.bool = 1;
                oSym.addTask(175,function(a){
                    let i = 0,max = random(2,4);
                    var timer = setInterval(function(){
                i++;
                let z = $(a.id);
                let div = $n("div");
                let d = "Pea" + Math.random();
                div.id = d;
                div.innerHTML = '<img src="images/Plants/PB00.gif">';
                EditEle(div,0,{
                    position:"absolute",
                    zIndex:"24",
                    left:z.offsetLeft + "px",
                    top:z.offsetTop + 40 + "px"
                },EDPZ,0);
                oSym.addTask(1,function(z,d,a){
                try{
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                let pea = $(d);
                let C = GetC(z.offsetLeft + 40);
                for(let i = 3;i >= 0;i--){
                    for(let j = 1;j <= C;j++){
                        let p = oGd.$[a.R+"_"+j+"_"+i];
                        p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains" && p.EName != "oPuffShroom" && p.EName != "oSunShroom" && p.EName != "oPotatoMine" && p.EName != "oCherryBomb" && p.EName != "oJalapeno" && p.EName != "oDoomShroom") && (($(p.id).offsetLeft + $(p.id).offsetWidth >= $(d).offsetLeft) && ($(p.id).offsetLeft >= $(d).offsetLeft + $(d).offsetWidth)) && (PlayAudio("splat1"),(p.HP -= 20),($(d) && ClearChild($(d))));
                        p && (p.canEat) && (p.HP <= 0) && p.Die();
                    }
                }
                if($(d).offsetLeft <= 0){
                    ClearChild($(d));
                    $(d).isDie = true;
                }
                !($(d).isDie) && oSym.addTask(1,arguments.callee,[z,d,a])
                }catch(e){
                }
            },[z,d,a]);
                (i > max) && clearInterval(timer);
            },100)
                    !a.isDie && (a.HP > 60) && oSym.addTask(175,arguments.callee,[a]);
                },[a]);
            }
            if(a.OrnHP <= 0){
                let p = oGd.$[a.R+"_"+GetC($(a.id).offsetLeft + 50)+"_1"];
                p && p.canEat && p.Die();
            }
        },
        DisappearDie:function(a){
            this.NormalDie();
        },
        CrushDie: function(){
            this.NormalDie();
        },
        PrivateDie: function(){
            
        },
        getShadow: function(a) {
            return "left:75px;top:" + (a.height - 25) + "px"
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
                case (h -= g) < 1:
                    e.HP = 0;
                    e.NormalDie();
                    return;
                case h < 91:
                    e.HP = h;
                    e.GoingDie(d[[e.OrnLostHeadNormalGif, e.OrnLostHeadAttackGif][f]]);
                    return
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
                    !i && j == -1 && e.PlayNormalballAudio()
            }
            SetAlpha(e.EleBody, 50, 0.5);
            oSym.addTask(10, function(q) {
                var n = $Z[q];
                n && SetAlpha(n.EleBody, 100, 1)
            }, [b])
        },
        getSnowPea: function(c, a, b) {
            PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
            c.getHit0(c, a, b)
        },
        getFirePea: function(f, b, e) {
            f.PlayFireballAudio();
            (f.FreeSlowTime || f.FreeFreezeTime) && (f.Speed = f.OSpeed, f.FreeSlowTime = 0, f.FreeFreezeTime = 0);
            f.Attack = 100;
            var d = f.AttackedLX,
                g = f.AttackedRX,
                a = oZ.getArZ(d, d + 40, f.R),
                c = a.length,
                h;
            while (c--) {
                (h = a[c]) != this && h.getFirePeaSputtering()
            }(f.HP -= b) < f.BreakPoint ? (f.getFirePea = OrnNoneZombies.prototype.getFirePea, f.GoingDie(f.PicArr[[f.LostHeadGif, f.LostHeadAttackGif][f.isAttacking]]), f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = function() {}) : (f.CheckOrnHP(f, f.id, f.OrnHP, b, f.PicArr, f.isAttacking, 0), f.SetAlpha(f, f.EleBody, 50, 0.5), oSym.addTask(10, function(j, i) {
                (i = $Z[j]) && i.SetAlpha(i, i.EleBody, 100, 1)
            }, [f.id]))
        },
        getHit0: function(c, a, b) {
            b == c.WalkDirection ? (c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody, 50, 0.5), oSym.addTask(10, function(e, d) {
                (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
            }, [c.id])) : (c.HP -= a) < c.BreakPoint && (c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]), c.getFirePea = OrnNoneZombies.prototype.getFirePea, c.getSnowPea = OrnNoneZombies.prototype.getSnowPea, c.getHit = c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 = function() {})
        },
        getHit1: function(b, a) {
            (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody, 50, 0.5), oSym.addTask(10, function(d, c) {
                (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1)
            }, [b.id]))
        },
        getHit2: function(b, a) {
            (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.SetAlpha(b, b.EleBody, 50, 0.5), oSym.addTask(10, function(d, c) {
                (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1)
            }, [b.id]))
        },
        getHit3: function(b, a) {
            (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody, 50, 0.5), oSym.addTask(10, function(d, c) {
                (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1)
            }, [b.id]))
        },
        CheckOrnHP: function(g, h, d, c, f, b, a) {
            var e = OrnNoneZombies.prototype;
            (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.ChkActs = function() {
                return 1
            }, g.ChkActs1 = function() {
                return 1
            }, g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit, oSym.addTask(150, function(m, l) {
                var k = $Z[m];
                if (!k) {
                    return
                }
                var j = CZombies.prototype,
                    i = k.OSpeed = k.LostPaperSpeed;
                k.ChkActs = j.ChkActs;
                k.ChkActs1 = j.ChkActs1;
                k.Speed && (k.Speed = !k.FreeSlowTime ? i : 0.5 * i);
                if (!k.beAttacked) {
                    return
                }
                PlayAudio("newspaper_rarrgh2");
                k.EleBody.src = l;
                k.JudgeAttack()
            }, [h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
        }
    });