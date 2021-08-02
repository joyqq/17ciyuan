//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    currentIndex: 0,

    zjxg: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnwwcd6v9j30u01hc4fs.jpg',
        name: '韩专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzrwtlnoj30u01hcax3.jpg',
        name: 'Kihno小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grokatuy8wj30u01hcdsu.jpg', 
        name: '韩专其他配置'
      },
      {
        url:  'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gprau1xbqaj30u01hc7wh.jpg',
        name: '日专小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzsh9vgwj30u01hc1kx.jpg',
        name: 'Heng:garae\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzskvllyj30u01hc4qp.jpg',
        name: 'Semicolon\n预售&签售卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rhgikk4j30u01hc7gc.jpg',
        name: 'Your Choice\n预售&签售卡'
      },
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gplzs6hxx9j31fc2ioe73.jpg',
        name: 'An Ode\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzs9bhwdj30u01hc1if.jpg',
        name: 'Heng:garae\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzsbw9u9j30u01hc7ns.jpg',
        name: '24H\n专辑配置'
      },
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gplzse1v3uj30u01hc7n7.jpg',
        name: 'Semicolon\n专辑配置'
      },
      {
        url: 'https://wx3.sinaimg.cn/mw2000/008hT4DMly1gprb3bzusgj30u01hc1kx.jpg',
        name: 'Not Alone\n专辑配置'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grnheeihb9j30u01hcqcc.jpg',
        name: 'Your Choice\n专辑配置'
      },
    ],

    sjk: [
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzt8h1yvj30u01hc4as.jpg',
        name: 'Diamond Edge JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztahj95j30ty1hcwq3.jpg',
        name: 'Arena Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztb88g6j30ty1hcn5r.jpg', 
        name: 'IDEAL CUT KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztdr5v1j30u01hce5b.jpg',
        name: 'IDEAL CUT JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzteosp7j30u01hc7cx.jpg',
        name: 'IDEAL CUT 安可场'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztfq4t4j30u01hcgx3.jpg',
        name: '克拉岛 2019'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztgsvltj30u01hcds7.jpg',
        name: 'HARU'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzti3gvaj30u01hch09.jpg',
        name: 'Ode to You KOR'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztjbmmej30u01hc4b4.jpg',
        name: 'Ode to You JPN'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztm1xulj30u01hc4qp.jpg',
        name: 'Dome Tour'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztply0yj30u01hc7s9.jpg',
        name: '克拉岛 2020'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztsn2e8j30u01hcqp4.jpg',
        name: 'IN-COMPLETE'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplztvc1yej30u01hcdzs.jpg',
        name: '冬周卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4agpdiej30u01hcqds.jpg',
        name: 'HARE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2rc4vxh0j30u01hc7e4.jpg',
        name: '克拉岛 2021'
      },
    ],

    qtk: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4ktluvij30u01hc7iu.jpg',
        name: '非专卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzun20dej30u01hckfc.jpg',
        name: 'DVD卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gswwcqegc2j30u01hc7md.jpg',
        name: 'HMV卡'
      },
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gplzulio0cj30u01hch1f.jpg',
        name: '电话卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzud4k9jj30u01hc1kx.jpg',
        name: '代言卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsq4gxactcj30u01hck4x.jpg',
        name: '多人卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gt2r8f1pm5j30u01hcqb7.jpg',
        name: '场周扇子'
      },
      {
        url:  'https://wx1.sinaimg.cn/large/008hT4DMly1gplzuii563j30u01hchc7.jpg',
        name: '打歌卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzvflp2pj30u01hc173.jpg',
        name: '演唱会拍立得'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gplzuuy5m8j30u01hc4qp.jpg',
        name: '生写'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqltiqozzgj30u01hcjzi.jpg',
        name: '日历&会员礼小卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqnr5dm2u5j30u01hcqbh.jpg',
        name: 'CARAT ZONE卡'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqg0olswaej31ck1wwkhn.jpg',
        name: '潮音卡'
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
