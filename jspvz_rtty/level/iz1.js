oS.Init({
  PName: [
    oGatlingPea
    oPumpkinHead,
    oFumeShroom,
    oPotatoMine,
    oSunFlower,
    oRepeater,
    oSquash,
    oCactus,
    oLilyPad,
  ],
  ZName: [oZombie,oDolphinRiderZombie,oFootballZombie],
  PicArr: [
    "images/interface/background4.jpg",
    "images/interface/trophy.png",
    "images/interface/Stripe.png",
  ],
  backgroundImage: "images/interface/background4.jpg",
  Coord: 2,
  DKind: 0,
  LF: [0, 1, 1, 2, 2, 1, 1],
  ShowScroll: false,
  ProduceSun: false,
  SunNum: 1000,
  BrainsNum: 6,
  CardKind: 1,
  LevelName: "海豚测试",
  LvlEName: "ImZombiePool4",
  LoadMusic: "Mountains",
  StartGameMusic: "Mountains",
  ArP: {
    ArC: [1, 5],
    ArR: [1, 6],
    Auto: 1,
    P: {
      Arr: [
        0, 0, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7,
        7, 7,
      ],
      Arr1: [3, 3, 3, 3],
      Arr2: [1, 1, 1],
    },
  },
  RandomGrow: function (Point, Arr) {
    Point.sort(function () {
      return Math.random() - 0.5;
    });
    Arr.sort(function () {
      return Math.random() - 0.5;
    });
    while (Point.length && Arr.length)
      CustomSpecial(
        oS.PName[Arr[Arr.length - 1]],
        Point[Point.length - 1][1],
        Point[Point.length - 1][0],
        1
      ),
        Point.length--,
        Arr.length--;
  },
  RiddleAutoGrow: function () {
    var k = oS.ArP,
      f = k.ArC,
      j = k.ArR,
      e = k.P,
      d = oS.PName,
      Arr = [];
    var SummonRange = function (Arr, l, r) {
      for (; l <= r; ++l) for (var j = f[0]; j <= f[1]; ++j) Arr.push([j, l]);
    };
    SummonRange(Arr, 3, 4), oS.RandomGrow(Arr, e.Arr); 
    SummonRange(Arr, 1, 2),
      SummonRange(Arr, 5, 6),
      oS.RandomGrow(Arr, e.Arr1),
      oS.RandomGrow(Arr, e.Arr); 
    SummonRange(Arr, 1, 6), oS.RandomGrow(Arr, e.Arr2); 
    for (var i = f[0]; i <= f[1]; ++i)
      CustomSpecial(oLilyPad, 3, i), CustomSpecial(oLilyPad, 4, i); 
    for (var i = j[0]; i <= j[1]; ++i) CustomSpecial(oBrains, i, 0); 
    NewImg(
      "iStripe",
      "images/interface/Stripe.png",
      "left:" + (GetX1X2(6)[0] - 11) + "px;top:65px",
      EDAll
    );
  },
  StartGame: function () {
    oP.Monitor(), BeginCool();
    SetVisible($("dFlagMeter"), $("dTop"));
    oS.RiddleAutoGrow();
  },
});
