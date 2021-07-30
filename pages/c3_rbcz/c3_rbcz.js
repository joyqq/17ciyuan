// pages/c3_rbcz/c3_rbcz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img0: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7cp0xztj315o0a975w.jpg',
    img1: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7kzs5waj30ku02sq35.jpg',
    img2: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7l0fbnjj30ku02sq30.jpg',
    img3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7l0lewej30ku02sq30.jpg',
    img4: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7l0qhj8j30ku02sglu.jpg',
    cz1617: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lc3gxsj32pg3ttnpe.jpg',
        name: 'Shining Diamond',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7ldloboj32pg35w1ky.jpg',
        name: 'Shining Diamond',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lfqfvuj32pg3ttb2b.jpg',
        name: 'Say the name',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7li7bt2j32pg4mohdv.jpg',
        name: 'DIAMOND EDGE',
        size: '24rpx',
        disp: 'widthFix'
      },
      
    ],
    cz18:[
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lkviuij32qf4k2e82.jpg',
        name: 'CARAT CAMP',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lpffm8j32pg58wnpf.jpg',
        name: 'RENA TOUR',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lrwxyhj32pg35w7wi.jpg',
        name: 'WE MAKE YOU SC',
        size: '21rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lv2euij32pg58wnpf.jpg',
        name: 'IDEAL CUT',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7lxkvcwj32qf2qfu0x.jpg',
        name: 'CARAT SUMMER CAMP',
        size: '17rpx',
        disp: 'aspectFill'
      },
    ],
    cz19:[
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7m1671bj32pg35w7wi.jpg',
        name: 'HARU',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7m3clmfj32qf2qfqv6.jpg',
        name: 'HANA',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7m71l7wj32pg58w1l1.jpg',
        name: 'HARU',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7m9p2a0j32pg35wqv6.jpg',
        name: 'HAPPY ENDING SC',
        size: '20rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7mcoasij32qf4k24qs.jpg',
        name: 'ODE TO YOU',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7mgzpsbj32pg5xwnph.jpg',
        name: 'ODE TO YOU',
        size: '24rpx',
        disp: 'widthFix'
      },
    ],
    cz2021:[
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7mlpcdwj32pg58w7wl.jpg',
        name: 'DOME TOUR',
        size: '24rpx',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqtwcn1jajj32pg35w1kz.jpg',
        name: '24H',
        size: '24rpx',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7mrxs1lj32pg3tt7wj.jpg',
        name: 'HARE',
        size: '24rpx',
        disp: 'widthFix'
      },
    ],
  },

  previewImage_cz1617: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.cz1617.length; i++){
      dataArray[i] = this.data.cz1617[i].url;
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