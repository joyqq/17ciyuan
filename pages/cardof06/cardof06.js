//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,

    zjxg: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnwwd331pj30u01hcar1.jpg',
        name: '韩专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm00z3ytjj30u01hcqpn.jpg',
        name: 'Kihno小卡'
      },
      {
        url:  'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokausnetj30u01hcane.jpg',
        name: '韩专其他配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprau57jrej30u01hcb29.jpg',
        name: '日专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm012b215j30u01hc4qp.jpg',
        name: 'Heng:garae\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm012r1z6j30u01hc4qp.jpg',
        name: 'Semicolon\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rhhc765j30u01hc14q.jpg',
        name: 'Your Choice\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm010mlb1j31fc2iotz0.jpg',
        name: 'An Ode\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm0112g3jj30u01hc7uo.jpg',
        name: 'Heng:garae\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm011hxc8j30u01hcdzc.jpg',
        name: '24H\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm011qzbij30u01hc4io.jpg',
        name: 'Semicolon\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb3e2mrlj30u01hcki7.jpg',
        name: 'Not Alone\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnhefyzgvj30u01hcqck.jpg',
        name: 'Your Choice\n专辑配置'
      },
    ],

    sjk: [
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01amq4uj30u01hc4au.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01b04udj30ty1hc4a3.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01b7k8ej30u01hcn69.jpg', 
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01blrvcj30u01hcb12.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01bza28j30u01hctgo.jpg',
        name: 'IDEAL CUT 安可场'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01c6qilj30u01hc13s.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01cefjcj30u01hcan4.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01cpt0xj30u01hcnc0.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01cy3hlj30u01hcqfp.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01d9izej30u01hc4qp.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01dlb30j30u01hc1h9.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01dy49wj30u01hctvh.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01ec49cj30u01hckb9.jpg',
        name: '冬周卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4ai51zyj30u01hcwpa.jpg',
        name: 'HARE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsy3hffrntj30u01hcjzy.jpg',
        name: 'BitterSweet'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rc5ekzwj30u01hcajk.jpg',
        name: '克拉岛 2021'
      },
    ],

    qtk: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4kvcjlmj30u01hc4cv.jpg',
        name: '非专卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01rvh48j30u01hcqsy.jpg',
        name: 'DVD卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gswwcqys3mj30u01hck9y.jpg',
        name: 'HMV卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01qscioj30u01hcapy.jpg',
        name: '电话卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01ps6k2j30u01hc1kx.jpg',
        name: '代言卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4h0bay4j30u01hcaol.jpg',
        name: '多人卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2r8fkzifj30u01hcdo9.jpg',
        name: '场周扇子'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01qd0y1j30u01hch9x.jpg',
        name: '打歌卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01tklgoj30u01hch0o.jpg',
        name: '演唱会拍立得'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm01t7awyj30u01hc4qp.jpg',
        name: '生写'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqltiucjdyj30u01hc47j.jpg',
        name: '日历&会员礼小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqnr5ff8r6j30u01hc10r.jpg',
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
