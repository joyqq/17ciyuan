// pages/c3_rbcz/c3_rbcz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img0: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7cp9fq1j315o0a90ur.jpg',
    img1: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8fob9ywj30ku02sjrh.jpg',
    img2: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8fs2krjj30ku02st8u.jpg',
    img3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8fs7209j30ku02swek.jpg',
    img4: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8fsc1tbj30ku02sq34.jpg',
    img5: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8fshnpxj30ku02s0sv.jpg',
    cafe_1: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9dtqm64j30go0cigmi.jpg',
        name: '2017 合照',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8j47v8cj30p00a3abf.jpg',
        name: '2018 合照',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8j8q64dj30yg0dwq8y.jpg',
        name: '2019 合照',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqsrzxmy4fj33zj1lxb2b.jpg',
        name: '2020 合照',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8ji1vsaj30zk0ecq65.jpg',
        name: '2020 合照\nSALAD FACTORY',
        size: '22rpx',
        disp: 'aspectFill',
        height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8jphl7gj33zk1lwnpf.jpg',
        name: '2020 合照\nWINTER MEAT',
        size: '22rpx',
        disp: 'aspectFill',
        height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8k9docwj33zk1lwx6r.jpg',
        name: '2021 合照',
        size: '24rpx',
        disp: 'aspectFill'
      },
    ],
    cafe_2: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8ixzr7hj30dw07wjvb.jpg',
        name: '2017 CAFE',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8j3c9ocj32pg4mo4qs.jpg',
        name: '2018 CAFE',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8j81h0ej32pg3tt7wk.jpg',
        name: '2019 CAFE',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8jc2v8ij32pg3ttqv7.jpg',
        name: '2020 CAFE',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8jh3dhxj32pg4mob2c.jpg',
        name: '2020 CAFE\nSALAD FACTORY',
        size: '22rpx',
        disp: 'widthFix',
        height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8jlh7ykj32pg4moqv7.jpg',
        name: '2020 CAFE\nWINTER MEAT',
        size: '22rpx',
        disp: 'widthFix',
        height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8k3x32oj32pg3tt1kz.jpg',
        name: '2021 CAFE',
        size: '24rpx',
        disp: 'widthFix'
      },
    ],
    goods: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8y3uzkpj32qf2qf4qq.jpg',
        name: '2019\nSUMMER GOODS',
        size: '22rpx',
        disp: 'aspectFill',
        height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs8y722nkj32qf4k27wj.jpg',
        name: '2020\nWINTER GOODS',
        size: '22rpx',
        disp: 'widthFix',
        height: '34rpx'
      },
    ],
    kuji: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs91fx9a6j32qf2qfnpf.jpg',
        name: '2017 KUJI',
        size: '24rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs91jbqzjj32qf4k24qt.jpg',
        name: '2021 KUJI',
        size: '24rpx',
        disp: 'widthFix',
        // height: '34rpx'
      },
    ],
    museum: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs93k6x7qj32qf4k2hdv.jpg',
        name: '2017 MUSEUM',
        size: '22rpx',
        disp: 'widthFix',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs93l8va6j30m80ri479.jpg',
        name: '2018 MUSEUM 1',
        size: '22rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs93ohyecj32qf2qfqv6.jpg',
        name: '2018 MUSEUM 2',
        size: '22rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs93uz0dfj32pg4monpg.jpg',
        name: '2019 MUSEUM 1',
        size: '22rpx',
        disp: 'widthFix',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs940x4h0j32qf4k2x6s.jpg',
        name: '2019 MUSEUM 2',
        size: '22rpx',
        disp: 'widthFix',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs94288baj315o1fynka.jpg',
        name: '2020 MUSEUM 1',
        size: '22rpx',
        disp: 'widthFix',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs944rxp9j32qf2qfnpe.jpg',
        name: '2020 MUSEUM 2',
        size: '22rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs945rs4sj30q010sh39.jpg',
        name: '2021 MUSEUM 1',
        size: '22rpx',
        disp: 'widthFix',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs948sebrj32qf2qf1kz.jpg',
        name: '2021 MUSEUM 2',
        size: '22rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
    ],
    popup: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs99czf6zj32qf2qfe82.jpg',
        name: '2018',
        size: '24rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs99ydnt3j32pg35w1kz.jpg',
        name: '2019',
        size: '24rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9b0vte2j32qf2qf7wi.jpg',
        name: '2020',
        size: '24rpx',
        disp: 'aspectFill',
        // height: '34rpx'
      },
    ]
  },

  previewImage_cafe_1: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.cafe_1.length; i++){
      dataArray[i] = this.data.cafe_1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },
  previewImage_cafe_2: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.cafe_2.length; i++){
      dataArray[i] = this.data.cafe_2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },
  previewImage_popup: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.popup.length; i++){
      dataArray[i] = this.data.popup[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },
  previewImage_museum: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.museum.length; i++){
      dataArray[i] = this.data.museum[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },
  previewImage_goods: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.goods.length; i++){
      dataArray[i] = this.data.goods[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },
  previewImage_kuji: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.kuji.length; i++){
      dataArray[i] = this.data.kuji[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_cz18: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.cz18.length; i++){
      dataArray[i] = this.data.cz18[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_cz19: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.cz19.length; i++){
      dataArray[i] = this.data.cz19[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_cz2021: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.cz2021.length; i++){
      dataArray[i] = this.data.cz2021[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})