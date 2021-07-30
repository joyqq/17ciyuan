//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,
    img0: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqe7xbwzj315o0a9mz7.jpg',
    santu: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5ypujcj30m80p0wg3.jpg',
        name: '应援色',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5z0ymaj30rs1g8n2i.jpg',
        name: '一代克拉棒',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy61hbgsj30sg18h78u.jpg',
        name: '二代克拉棒',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy6348ntj30jg1dc0x8.jpg',
        name: '小克拉棒 &\n钥匙扣',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5zfgkrj30sg1487q0.jpg',
        name: '17\'S CUT\n三周年纪念海报',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5zuiinj30sg1481bj.jpg',
        name: '17\'S CUT\n三周年纪念海报',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy60cw5xj30sg3n94qp.jpg',
        name: '17\'S CUT\n三周年纪念周边',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/orj360/008hT4DMly1gpvy60wdn3j30sg1sitp5.jpg',
        name: '17\'S CUT\n三周年纪念T恤',
        disp: 'widthFix',
        fsize: '23'
      },
      
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy62mbuwj30jg18x436.jpg',
        name: '五周年T恤',
        disp: 'widthFix',
        fsize: '30'
      },
      
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy4vz2t7j30sg0iyara.jpg',
        name: 'mini4 Al1',
        disp: 'aspectFill',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy4w6rx3j30jg1q8gq8.jpg',
        name: 'mini4 ShowCase\n场周',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy4wib86j30sg328aky.jpg',
        name: 'mini6 ShowCase\n场周1',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy4x1yx1j30rs2dijz3.jpg',
        name: 'mini6 ShowCase\n场周2',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy4xhzeej30sg1e0dp4.jpg',
        name: '正规3 ShowCase\n场周',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy621q2fj30sg1vq14r.jpg',
        name: 'CONCEPT ZONE\n官周',
        disp: 'widthFix',
        fsize: '23'
      },
    ],
    santu2: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy58g8cij30rs52ah9g.jpg',
        name: '2017年日历',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5959bsj30rs6jvqrx.jpg',
        name: '2018年日历',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5a2a9yj329h29h1kx.jpg',
        name: '2018年海报',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5blsvbj30rs6c6atd.jpg',
        name: '2019年日历',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5d2obsj30sg4amna9.jpg',
        name: '2020年日历',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5hlg2yj31x6cn3hdx.jpg',
        name: '2021年日历',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5dps15j32bc37kk8o.jpg',
        name: '2021年日历\n中国版红包',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5ehyt5j315o1hrn7s.jpg',
        name: '2021年日历\n中国版贴纸',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5eppeyj30ku0afgn9.jpg',
        name: '2021年日历\n中国版小卡',
        disp: 'aspectFill',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy5eu2cbj30k10qpabe.jpg',
        name: '2021年日历\n中国版小卡签名',
        disp: 'aspectFill',
        fsize: '23'
      },


    ],
    zazhi: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqss2z1859j30rs4047wh.jpg',
        name: 'GOING',
        disp: 'widthFix',
        fsize: '30'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqss32h89hj315o50kb2c.jpg',
        name: 'TTT\nHOSHI Ver.',
        disp: 'widthFix',
        fsize: '28'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsnu9rm7c4j30jg4yrkcd.jpg',
        name: 'DICON',
        disp: 'widthFix',
        fsize: '30'
      },
    ],
    santu3: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk2mr2kj30m80tcqa6.jpg',
        name: 'An Ode\n一直娱签售卡',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk2upgzj30m81emtci.jpg',
        name: 'Heng:gare\n一直娱预售卡',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk3d975j312w1lehb6.jpg',
        name: 'Semicolon\n一直娱预售卡',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk3pwj8j30u01hyq9g.jpg',
        name: 'Semicolon\n一直娱签售卡1',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk3zj28j30u01hytbj.jpg',
        name: 'Semicolon\n一直娱签售卡2',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk47lzfj30k10qp75m.jpg',
        name: '2021日历\n一直娱预售卡1',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk4osrtj30ku0afdgx.jpg',
        name: '2021日历\n一直娱预售卡2',
        disp: 'aspectFill',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk54mwfj30nc1epwmo.jpg',
        name: 'Your Choice\n一直娱预售卡',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjk5gnqfj30ne1p1jyr.jpg',
        name: 'Your Choice\n一直娱签售卡A',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsy3hewsqaj30ne1p17j1.jpg',
        name: 'Your Choice\n一直娱签售卡B',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsnu4jw52gj30rs3o87nl.jpg',
        name: 'Lucky Draw\n第一场',
        disp: 'widthFix',
        fsize: '23'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsnu4kvd1yj30rs3o81dt.jpg',
        name: 'Lucky Draw\n第二场',
        disp: 'widthFix',
        fsize: '23'
      },
    ]
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

  previewImage_santu: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.santu.length; i++){
      dataArray[i] = this.data.santu[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_santu2: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.santu2.length; i++){
      dataArray[i] = this.data.santu2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_zazhi: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.zazhi.length; i++){
      dataArray[i] = this.data.zazhi[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_santu3: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.santu3.length; i++){
      dataArray[i] = this.data.santu3[i].url;
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
