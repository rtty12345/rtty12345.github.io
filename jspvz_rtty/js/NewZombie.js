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
  })
