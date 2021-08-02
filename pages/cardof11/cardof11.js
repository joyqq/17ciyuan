//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,

    zjxg: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnwweq4suj30u01hc4f9.jpg',
        name: '韩专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1itw6kdj30u01hc4l4.jpg',
        name: 'Kihno小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokaws1u6j30u01hcgyz.jpg', 
        name: '韩专其他配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprau3lewmj30u01hcb29.jpg',
        name: '日专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1iw289hj30u01hc4qp.jpg',
        name: 'Heng:garae\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1iwkoulj30u01hc4qp.jpg',
        name: 'Semicolon\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rhidqhmj30u01hcwqh.jpg',
        name: 'Your Choice\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1iuz7mej31fc2ioe6i.jpg',
        name: 'An Ode\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ivbimcj30u01hcquh.jpg',
        name: 'Heng:garae\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ivjwsmj30u01hcttd.jpg',
        name: '24H\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ivr5yzj30u01hcdym.jpg',
        name: 'Semicolon\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb3czq5yj30u01hc4ol.jpg',
        name: 'Not Alone\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnhef9qvej30u01hck1h.jpg',
        name: 'Your Choice\n专辑配置'
      },
    ],

    sjk: [
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j5neaxj30u01hck3x.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j5ynuej30ty1hc4ag.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j69lsfj30u01hcwmy.jpg',
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j772yhj30u01hckiz.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j7inowj30u01hc47h.jpg',
        name: 'IDEAL CUT 安可场'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j7t7mej30u01hc14p.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j83ms0j30u01hck3n.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j8fpc1j30u01hcto2.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j8orbrj30u01hctly.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j93y9qj30u01hc4qp.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j9jpxdj30u01hcqqc.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1j9vehnj30u01hcke2.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ja8u3oj30u01hcwwu.jpg',
        name: '冬周卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4am5sy4j30u01hcqdj.jpg',
        name: 'HARE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rc6hp7zj30u01hctic.jpg',
        name: '克拉岛 2021'
      },
    ],

    qtk: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4kyone6j30u01hc7j5.jpg',
        name: '非专卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1js59u8j30u01hch9r.jpg',
        name: 'DVD卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gswwh3og5lj30u01hcwxt.jpg',
        name: 'HMV卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1jrgg0gj30u01hcwu4.jpg',
        name: '电话卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1jr4fg2j30u01hc4qp.jpg',
        name: '代言卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4h535grj30u01hcdtg.jpg',
        name: '多人卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2r8gj1hxj30u01hc114.jpg',
        name: '场周扇子'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1jqqre9j30u01hc1kh.jpg',
        name: '打歌卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ju5pi0j30u01hcapl.jpg',
        name: '演唱会拍立得'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1jtrk4tj30u01hc7wh.jpg',
        name: '生写'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqltit947bj30u01hc7db.jpg',
        name: '日历&会员礼小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqnr5eq269j30u01hcgtz.jpg',
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
