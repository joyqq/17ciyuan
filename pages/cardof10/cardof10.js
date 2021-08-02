//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,

    zjxg: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnwwec6qmj30u01hck88.jpg',
        name: '韩专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ddawrbj30u01hce23.jpg',
        name: 'Kihno小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokawedpvj30u01hcdsh.jpg', 
        name: '韩专其他配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprau05e7rj30u01hcb29.jpg',
        name: '日专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1dfwhr5j30u01hc4qp.jpg',
        name: 'Heng:garae\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1dh5t7hj30u01hc4qp.jpg',
        name: 'Semicolon\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rhi6pb1j30u01hck3j.jpg',
        name: 'Your Choice\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1deo4qxj31fc2ioqsf.jpg',
        name: 'An Ode\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1dex11cj30u01hctxi.jpg',
        name: 'Heng:garae\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1dfaohmj30u01hckax.jpg',
        name: '24H\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1dfm23oj30u01hc4hh.jpg',
        name: 'Semicolon\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb3aee8ej30u01hcb1v.jpg',
        name: 'Not Alone\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnhedjfzmj30u01hc7dk.jpg',
        name: 'Your Choice\n专辑配置'
      },
    ],

    sjk: [
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e0wpubj30u01hcdr8.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e15uunj30ty1hcal4.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e1jhx9j30ty1hcaiw.jpg', 
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e1w44sj30u01hc1kx.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e26da8j30u01hcaia.jpg',
        name: 'IDEAL CUT 安可场'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e2eqmcj30u01hc7g4.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e316ecj30u01hcwqb.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e3agk1j30u01hcaov.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e3jma6j30u01hcwre.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e4z6j0j30u01hc4qp.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e5tx2rj30u01hc4m7.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e666lgj30u01hcqpm.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1e6f8opj30u01hcnfn.jpg',
        name: '冬周卡'
      },
      {
        url: 'https://wx4.sinaimg.cn/mw2000/008hT4DMly1gsq4akzsgej30u01hcwp8.jpg',
        name: 'HARE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rc69nuzj30u01hc7dq.jpg',
        name: '克拉岛 2021'
      },
    ],

    qtk: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4kxrnv0j30u01hch07.jpg',
        name: '非专卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1egelzmj30u01hctxe.jpg',
        name: 'DVD卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gswwh3fyzgj30u01hc1bu.jpg',
        name: 'HMV卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1efqa1ej30u01hc7jc.jpg',
        name: '电话卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1efgd06j30u01hc1kx.jpg',
        name: '代言卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4h403j9j30u01hctn3.jpg',
        name: '多人卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2r8ga83kj30u01hc46v.jpg',
        name: '场周扇子'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1eejrp6j30u01hce4m.jpg',
        name: '打歌卡'
      },
      {
        url: 'https://wx4.sinaimg.cn/large/008hT4DMly1gpm1ei9wnej30u01hc16r.jpg',
        name: '演唱会拍立得'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm1ehz1n7j30u01hc4qp.jpg',
        name: '生写'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqltin1lmkj30u01hc47n.jpg',
        name: '日历&会员礼小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqnr5c2f1hj30u01hc46o.jpg',
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
