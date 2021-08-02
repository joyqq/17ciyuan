//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,

    zjxg: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnwwcn9v7j30u01hctpv.jpg',
        name: '韩专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzyrep04j30u01hcqqb.jpg',
        name: 'Kihno小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokau6d78j30u01hctm1.jpg', 
        name: '韩专其他配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprau0le3dj30u01hc7wh.jpg',
        name: '日专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzyuvyqej30u01hc1kx.jpg',
        name: 'Heng:garae\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzyvc1xrj30u01hc1kx.jpg',
        name: 'Semicolon\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rhh0npmj30u01hc4at.jpg',
        name: 'Your Choice\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzyt4feoj31fc2iotyx.jpg',
        name: 'An Ode\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzytq5i3j30u01hc7u6.jpg',
        name: 'Heng:garae\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzyu39u3j30u01hc1bt.jpg',
        name: '24H\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzyuljuvj30u01hckas.jpg',
        name: 'Semicolon\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprb3avxtdj30u01hc7vi.jpg',
        name: 'Not Alone\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnhedqysuj30u01hck1e.jpg',
        name: 'Your Choice\n专辑配置'
      },
    ],

    sjk: [
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzitjqxj30u01hc7h2.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzj7yjjj30ty1hc14g.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzjh8uaj30u01hcaj1.jpg', 
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzjttdxj30u01hc7w9.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzk4q67j30u01hck01.jpg',
        name: 'IDEAL CUT 安可场'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzkocekj30u01hcn90.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzlfc6hj30u01hcqg3.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzmp258j30u01hcto7.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzn4q9sj30u01hcwr4.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzznocihj30u01hc4qp.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzo2941j30u01hckfg.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzodxhhj30u01hc1em.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzop4j8j30u01hckah.jpg',
        name: '冬周卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq675rh67bj30u01hcahz.jpg',
        name: 'Spider'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4ahg92yj30u01hctjs.jpg',
        name: 'HARE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rc55f74j30u01hck1p.jpg',
        name: '克拉岛 2021'
      },
    ],

    qtk: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4kuj37zj30u01hc17m.jpg',
        name: '非专卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm000xoofj30u01hcqr9.jpg',
        name: 'DVD卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gswwcqpy9mj30u01hc1ax.jpg',
        name: 'HMV卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm000mhkxj30u01hcaol.jpg',
        name: '电话卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzzz2ekfj30u01hc1kx.jpg',
        name: '代言卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4gyajk0j30u01hcano.jpg',
        name: '多人卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2r8falgwj30u01hcgu5.jpg',
        name: '场周扇子'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm000bmm3j30u01hc1kx.jpg',
        name: '打歌卡'
      },
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gpm003pyqgj30u01hctn2.jpg',
        name: '演唱会拍立得'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpm001tbloj30u01hc4qp.jpg',
        name: '生写'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqltip44wij30u01hcqc6.jpg',
        name: '日历&会员礼小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqnr5comaqj30u01hcdon.jpg',
        name: 'CARAT ZONE卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqlc9ecywpj30u01hcwi5.jpg',
        name: 'TTT杂志卡'
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
