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
