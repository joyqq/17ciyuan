//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,
    mn2fm: 'https://wx3.sinaimg.cn/large/007YersYgy1gl2kfh71nej30zk0zkjwo.jpg',
    mn2xk: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupnfalkhj30u01hc4qp.jpg',
    mn2all: [
      'https://wx3.sinaimg.cn/large/007YersYgy1gl2kfh71nej30zk0zkjwo.jpg',
      'https://wx3.sinaimg.cn/large/007YersYgy1gkupnfalkhj30u01hc4qp.jpg',
    ],
    mn3fm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn57x46wrj308c08cwfi.jpg',
    mn3xk: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupnfzz8mj30u01hchdt.jpg',
    mn4fm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn63mrj8nj308c08ct95.jpg',
    mn4xk: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupngry58j30u01hchdt.jpg',
    
    mn5fm1: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn69sdb9ij30ci0ci0sq.jpg',
    mn5_1: [
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupnhhdknj30u01hc7wh.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupr7aqalj30u01hcnog.jpg',
        name: '闪卡'
      },
    ],
    mn5fm2: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn69s7obnj30ci0cidfx.jpg',
    mn5_2: [
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupniehoij30u01hcb29.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupr81j6vj30u01hc1kx.jpg',
        name: '闪卡'
      }
    ],
    mn5fm3: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn69sgr1jj30ci0cijre.jpg',
    mn5_3: [
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupnjo8ttj30u01hcb29.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupr8vsbej30u01hc1kx.jpg',
        name: '闪卡'
      }
    ],

    mn6fm1: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn6n46nwpj30ci0ciweg.jpg',
    mn6_1:[
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupnkhv12j30u01hc7wh.jpg',
        name: '专辑小卡',
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupr9m8xzj30u01hc4qp.jpg',
        name: '闪卡',
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupra788oj30u01hce68.jpg',
        name: '折叠海报',
      },
    ],
    mn6fm2: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn6n49c3gj30ci0cit8o.jpg',
    mn6_2:[
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupnl9p35j30u01hc7wh.jpg',
        name: '专辑小卡',
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpsqe2zo0oj30u01hc4l8.jpg',
        name: '闪卡',
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupraosb9j30u01hcqmy.jpg',
        name: '折叠海报',
      },
    ],
    mn6fm3: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpn6n4ezxtj30ci0ciaa6.jpg',
    mn6_3:[
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupnncf0uj30u01hcb29.jpg',
        name: '专辑小卡',
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkuprc1vyuj30u01hc1kx.jpg',
        name: '闪卡',
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkuprcmyybj30u01hc4k3.jpg',
        name: '折叠海报',
      },
    ],
    mn7fm1: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpntpsx2i6j30dw0dwta4.jpg',
    mn7_1: [
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupnnzveuj30u01hcb29.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkuprdf1sej30u01hc7wh.jpg',
        name: '书签'
      }
    ],
    mn7fm2: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpntps7uhsj30dw0dwjsm.jpg',
    mn7_2: [
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupnoq9vaj30u01hce81.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupre4di9j30u01hc1kx.jpg',
        name: '书签'
      }
    ],
    mn7fm3: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpntpsghnuj30dw0dwmyk.jpg',
    mn7_3: [
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupnpj9jmj30u01hcb29.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupresgd6j30u01hc4qp.jpg',
        name: '书签'
      }
    ],
    mn7fm4: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpntpsc7dyj30dw0dw75s.jpg',
    mn7_4: [
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupnqcs8mj30u01hcb29.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkuprfglwmj30u01hcnoq.jpg',
        name: '书签'
      }
    ],
    zg1fm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuatsf8jj30h80h8qgq.jpg',
    zg1sq: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupt90b4yj30u01hcatu.jpg',
    zg1hxfm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnug9p1ipj30h80h8qb0.jpg',
    zg1hx:[
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupoia5d4j30u01hc4qp.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupt8jy1nj30u01hc1kx.jpg',
        name: '拍立得'
      }
    ],
    zg2fm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuc92lgbj30h80h8kaj.jpg', 
    zg2: [
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupoj8d7jj30u01hcnpd.jpg',
        name: '专辑小卡',
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupt9l2tzj30u01hc1kx.jpg',
        name: '立牌',
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkuptaf3y1j30u01hc4qp.jpg',
        name: '明信片',
      },
    ],
    tbzfm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnugbwq8zj30h80h87id.jpg',
    tbzxk: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupohln10j30u01hchdt.jpg',
    zg3fm1: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuc5l0lgj30dw0dwn3e.jpg',
    zg3_1: [
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkupok2uhxj30u01hcnpd.jpg',
        name: '专辑小卡',
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gkuptb9by7j30u01hc1kx.jpg',
        name: '小海报',
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gkuptbw5w2j30u01hcwyx.jpg',
        name: '圆形贴纸',
      },
    ],
    zg3fm2: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuc6ikxxj30dw0dw44x.jpg',
    zg3_2: [
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gkupoktdw6j30u01hcqv5.jpg',
        name: '专辑小卡',
      },
      {
        url:'https://wx2.sinaimg.cn/large/007YersYgy1gkuptd1ro6j30u01hc1kx.jpg',
        name: '小海报',
      },
      {
        url:'https://wx1.sinaimg.cn/large/007YersYgy1gkuptdo54oj30u01hcnhb.jpg',
        name: '圆形贴纸',
      },
    ],
    zg3fm3: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuc5q8xgj30dw0dwgs5.jpg',
    zg3_3: [
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkupolnk66j30u01hcnpd.jpg',
        name: '专辑小卡',
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkuptecrctj30u01hc1kx.jpg',
        name: '小海报',
      },
      {
        url:'https://wx2.sinaimg.cn/large/007YersYgy1gkuptf0hwuj30u01hcnk9.jpg',
        name: '圆形贴纸',
      },
    ],
    zg3fm4: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuc6pw02j30dw0dwagg.jpg',
    zg3_4: [
      {
        url:'https://wx2.sinaimg.cn/large/007YersYgy1gkupomcongj30u01hchdt.jpg',
        name: '专辑小卡',
      },
      {
        url:'https://wx2.sinaimg.cn/large/007YersYgy1gkuptfmj5tj30u01hc7ui.jpg',
        name: '小海报',
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkuptg4nffj30u01hcdyi.jpg',
        name: '圆形贴纸',
      },
    ],
    zg3fm5: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnuc5wnh8j30dw0dwjxo.jpg',
    zg3_5: [
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gnoavbvef5j30u01hckjl.jpg',
        name: '专辑小卡',
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gkuptgwddij30u01hc4qp.jpg',
        name: '小海报',
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gkuptheoymj30u01hctte.jpg',
        name: '圆形贴纸',
      },
    ],
    tb2fm: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpnug77583j30h80h8q3n.jpg',
    tb2:[
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gnoavcj549j30u01hce81.jpg',
        name: '专辑小卡'
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkuprg2gucj30u01hc1kx.jpg',
        name: '单人卡'
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkuprgrf1nj30u01hc1kx.jpg',
        name: '双人卡'
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkuprhlqjwj30u01hcx2u.jpg',
        name: '椭圆卡'
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkupri3jslj30u01hc7p3.jpg',
        name: '圆卡'
      },
    ],
    mn8fm1: 'https://wx3.sinaimg.cn/mw2000/008hT4DMly1grrh3413fmj315o15owlj.jpg',
    mn8fm2: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grrh34bultj315o15odnb.jpg',
    mn8fm3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grrh34r1paj315o15ogtu.jpg',
    mn8_1: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnvuc5oh7j30u01hc4dt.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokbfel1oj30u01hcqj3.jpg',
        name: '明信片'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokbet1klj30u01hc4a7.jpg',
        name: '迷你卡'
      },
    ],
    mn8_2: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnvucdkpnj30u01hcqeu.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokbg2n6pj30u01hcgwz.jpg',
        name: '明信片'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokbfrs0pj30u01hcn7c.jpg',
        name: '分队卡'
      },
    ],
    mn8_3: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnvubxxb3j30u01hcwt8.jpg',
        name: '专辑小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokbgrr8nj30u01hc4bk.jpg',
        name: '明信片'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokbgflxoj30u01hcdu1.jpg',
        name: '迷你卡'
      },
    ],
    wmyfm: 'https://wx2.sinaimg.cn/large/007YersYgy1go05s4xyj3j30i20gcjw9.jpg',
    wmy: [
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwp4pw4j30u01hc4qp.jpg',
        name: '初回A'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwr4l3kj30u01hc1kx.jpg',
        name: '初回B'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupws1gzoj30u01hc1kx.jpg',
        name: '克拉盘'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwsrxhzj30u01hc1kx.jpg',
        name: '通常盘'
      }
    ],
    hefm: 'https://wx3.sinaimg.cn/large/007YersYgy1go05wxyo1cj319y19ykh6.jpg',
    he: [
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwti5cqj30u01hcnoy.jpg',
        name: '初回A'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwubnwaj30u01hc1kx.jpg',
        name: '初回B'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwuykvrj30u01hc1k7.jpg',
        name: '初回C'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupwvqttxj30u01hc1kx.jpg',
        name: '克拉盘'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupwwh3e6j30u01hce7a.jpg',
        name: '通常盘'
      },
    ],
    fffm: 'https://wx1.sinaimg.cn/large/007YersYgy1go05x1zep5j30rs0rk799.jpg',
    ff: [
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupwxdtivj30u01hc1kx.jpg',
        name: '初回A'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupwy157wj30u01hcx5f.jpg',
        name: '初回B'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupwz5c6dj30u01hc1kx.jpg',
        name: '初回C'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkupwzw5uqj30u01hc1kx.jpg',
        name: '克拉盘'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkurc1x23yj30u01hcqul.jpg',
        name: '通常盘'
      },
    ], 
    hfm: 'https://wx3.sinaimg.cn/large/007YersYgy1go05s88o4pj30rs0rk4h0.jpg',
    h24: [
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gkupx0mi1rj30u01hc1kx.jpg',
        name: '初回A'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gkupx185ycj30u01hcnle.jpg',
        name: '初回B'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkupx1vqc9j30u01hcquq.jpg',
        name: '初回C'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gkurc17qnxj30u01hcaxu.jpg',
        name: '克拉盘'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gkuq00i04dj30u01hctzi.jpg',
        name: '通常盘'
      },
    ],
    gdfm: 'https://wx3.sinaimg.cn/large/007YersYgy1go05x4sz0fj30rs0rk7dn.jpg',
    gd:[
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb0x3zc8j30u01hc177.jpg',
        name: '初回A'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb0y2cdvj30u01hc15d.jpg',
        name: '初回B'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb0ydqovj30u01hc7hg.jpg',
        name: '初回C'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb0yp5c0j30u01hcqh2.jpg',
        name: '初回D'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb0wmks5j30u01hctk5.jpg',
        name: '克拉盘'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb0wu9f0j30u01hcdv3.jpg',
        name: '通常盘'
      },
    ],

    sjk: [
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gp6jeflw7zj30x21hckjl.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gp6jegnm1bj30x21hchdt.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gp6jes7jpij31hc1g4u0x.jpg',
        name: 'WE MAKE YOU SC'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gp6jehgg85j319f1hcqv5.jpg',
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gp6jei65z1j30x21hcnpd.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/007YersYgy1gp6jej2dspj31hc1gonpe.jpg',
        name: 'IDEAL CUT安可场'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gp6jekpt7jj31481hchdu.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gp6jelhv1zj30u01hcu0x.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/007YersYgy1gp6jerfb2zj31hc1g4qv5.jpg',
        name: 'Happy Ending SC'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gp6jemd11uj31481hce82.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gp6jen4juvj30u01hcu0x.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gp6jeoal4aj30u01hcqv5.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gp6jep3m3fj31481hcx6p.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/007YersYgy1gp6jepx5koj31211hcqv5.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx3.sinaimg.cn/large/007YersYgy1gp6jeqniqyj316q1hce81.jpg',
        name: '冬周'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq49cyq9lj30u01hcwxk.jpg',
        name: 'HARE'
      },
    ],

    qt: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grkhrpl0r0j30u01hctfh.jpg',
        name: '韩专封面'
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gp6hnta2vmj30u01hc4qp.jpg',
        name: '日专封面'
      },
      {
        url:'https://wx4.sinaimg.cn/large/007YersYgy1gkupzb7doej30u01hc1kx.jpg',
        name: 'Semicolon 单封'
      },
      {
        url:'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4pzyiotj30u01hcduf.jpg',
        name: '非专团体卡'
      },
      {
        url:'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4q0kwgwj30u01hc7hu.jpg',
        name: '小分队卡 Hip-Hop'
      },
      {
        url:'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4q14ikej30u01hcwso.jpg',
        name: '小分队卡 Performance'
      },
      {
        url:'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4q1tcwwj30u01hc7id.jpg',
        name: '小分队卡 Vocal'
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gkupzfi7lij316n2io1l0.jpg',
        name: '闪卡'
      },
      {
        url:'https://wx3.sinaimg.cn/large/007YersYgy1gp6hntunccj30u01hctth.jpg',
        name: 'Kihno'
      },
    ],
  },
 
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0
      })
      console.log(e.currentTarget.dataset.idx)
  },

  previewImage: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // =============重点重点=============
    })
  },

  previewImage_zg1hx: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg1hx.length; i++){
      dataArray[i] = this.data.zg1hx[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zg2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg2.length; i++){
      dataArray[i] = this.data.zg2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn5_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn5_1.length; i++){
      dataArray[i] = this.data.mn5_1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn5_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn5_2.length; i++){
      dataArray[i] = this.data.mn5_2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn5_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn5_3.length; i++){
      dataArray[i] = this.data.mn5_3[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn8_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn8_1.length; i++){
      dataArray[i] = this.data.mn8_1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn8_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn8_2.length; i++){
      dataArray[i] = this.data.mn8_2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn8_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn8_3.length; i++){
      dataArray[i] = this.data.mn8_3[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },



  previewImage_mn6_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn6_1.length; i++){
      dataArray[i] = this.data.mn6_1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn6_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn6_2.length; i++){
      dataArray[i] = this.data.mn6_2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn6_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn6_3.length; i++){
      dataArray[i] = this.data.mn6_3[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zg3_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg3_1.length; i++){
      dataArray[i] = this.data.zg3_1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zg3_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg3_2.length; i++){
      dataArray[i] = this.data.zg3_2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zg3_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg3_3.length; i++){
      dataArray[i] = this.data.zg3_3[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zg3_4: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg3_4.length; i++){
      dataArray[i] = this.data.zg3_4[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zg3_5: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zg3_5.length; i++){
      dataArray[i] = this.data.zg3_5[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn7_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn7_1.length; i++){
      dataArray[i] = this.data.mn7_1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn7_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn7_2.length; i++){
      dataArray[i] = this.data.mn7_2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn7_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn7_3.length; i++){
      dataArray[i] = this.data.mn7_3[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_mn7_4: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.mn7_4.length; i++){
      dataArray[i] = this.data.mn7_4[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_tb2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.tb2.length; i++){
      dataArray[i] = this.data.tb2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_wmy: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.wmy.length; i++){
      dataArray[i] = this.data.wmy[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_he: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.he.length; i++){
      dataArray[i] = this.data.he[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_ff: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.ff.length; i++){
      dataArray[i] = this.data.ff[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_h24: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.h24.length; i++){
      dataArray[i] = this.data.h24[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_gd: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.gd.length; i++){
      dataArray[i] = this.data.gd[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_sjk: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.sjk.length; i++){
      dataArray[i] = this.data.sjk[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_qt: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.qt.length; i++){
      dataArray[i] = this.data.qt[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  onShow: function () {
    let that = this
    if(that.data.isPreview) {
      that.setData({
        isPreview: false
      })
      return
    }
  },

  onLoad: function () {
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
      success(res) {
        console.log(res)
      },
      fail(e) {
        console.log(e)
      }
    })
  },
})
