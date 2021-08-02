//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,

    zjxg: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnwwfe5hej30u01hc19i.jpg',
        name: '韩专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uffmdvj30u01hc7q6.jpg',
        name: 'Kihno小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokaxvvarj30u01hc7hk.jpg', 
        name: '韩专其他配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpratzmyimj30u01hcb29.jpg',
        name: '日专小卡'
      },
      {
        url: 'https://wx2.sinaimg.cn/large/008hT4DMly1gpm1uimr44j30u01hc4qp.jpg',
        name: 'Heng:garae\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uizwxtj30u01hc4qp.jpg',
        name: 'Semicolon\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rhixjb6j30u01hcwpx.jpg',
        name: 'Your Choice\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uhapnvj31fc2iob1h.jpg',
        name: 'An Ode\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uhpjnvj30u01hc7v5.jpg',
        name: 'Heng:garae\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ui089qj30u01hc4i3.jpg',
        name: '24H\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uiaxl8j30u01hc4j3.jpg',
        name: 'Semicolon\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb3a1as1j30u01hce62.jpg',
        name: 'Not Alone\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnhed6tduj30u01hcti5.jpg',
        name: 'Your Choice\n专辑配置'
      },
    ],

    sjk: [
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uqqjxwj30u01hc14s.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ur0kxxj30ty1hcama.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ur7nhoj30ty1hc7cx.jpg', 
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1urke3wj30u01hc1ke.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1urwl07j30u01hcguh.jpg',
        name: 'IDEAL CUT 安可场'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1usbw6aj30u01hctkd.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1usjcmqj30u01hcds8.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ustcsnj30u01hcnbw.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ut3zofj30u01hctl0.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1utkh8vj30u01hc4qp.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uu0c0wj30u01hcnme.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uuel90j30u01hcawi.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1uusv06j30u01hc4ic.jpg',
        name: '冬周卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4aocpx1j30u01hcgwg.jpg',
        name: 'HARE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rc71yewj30u01hcdps.jpg',
        name: '克拉岛 2021'
      },
    ],

    qtk: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4kzyk1zj30u01hcnbp.jpg',
        name: '非专卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1vdm40xj30u01hcx3h.jpg',
        name: 'DVD卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gswwh4d7hgj30u01hcdyd.jpg',
        name: 'HMV卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1vc95z2j30u01hch0z.jpg',
        name: '电话卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1vby0voj30u01hc1kx.jpg',
        name: '代言卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4h72e80j30u01hcnbm.jpg',
        name: '多人卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2r8h1483j30u01hcgtx.jpg',
        name: '场周扇子'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1vb2ksfj30u01hc1he.jpg',
        name: '打歌卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1vf3tjtj30u01hcdut.jpg',
        name: '演唱会拍立得'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1vetbnpj30u01hc4qp.jpg',
        name: '生写'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqltim1a64j30u01hcdop.jpg',
        name: '日历&会员礼小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqnr5bsfo1j30u01hcn4z.jpg',
        name: 'CARAT ZONE卡'
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
  } ,   
  previewImage_zjxg: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.zjxg.length; i++){
      dataArray[i] = this.data.zjxg[i].url;
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

  previewImage_qtk: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.qtk.length; i++){
      dataArray[i] = this.data.qtk[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
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
  onShow: function () {
    let that = this
    if(that.data.isPreview) {
      that.setData({
        isPreview: false
      })
      return
    }
  },
})
