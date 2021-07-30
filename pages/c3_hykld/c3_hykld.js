// pages/c3_hykld/c3_hykld.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img0: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqe7tes9j315o0a9jtp.jpg',
    img1: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqm2qe3yj30ku02sweo.jpg',
    img2: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqniz864j30ku02sjrl.jpg',
    img3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqnj1ywqj30ku02sjrl.jpg',
    img4: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqnjpz6lj30ku02smxd.jpg',
    img5: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqdqnkalj8j30ku02sjrl.jpg',
    hy1: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq95bvdlwcj30sg0l3ab2.jpg',
        name: '会员礼',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq95bw6de0j31kw11mk1b.jpg',
        name: '克拉岛海报',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq95bvrkduj30sg24yasb.jpg',
        name: '克拉岛场周',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq95bwphp5j30jg1r0q6h.jpg',
        name: '克拉岛纪念册',
        disp: 'widthFix'
      },
    ],
    hy2: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy7o1yk3j30hs0p0tcl.jpg',
        name: '海报',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy7o9bvxj30jg2xlgtc.jpg',
        name: '会员礼',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy7p9fdkj30sg0ihdlv.jpg',
        name: '克拉岛海报',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy7oqxhcj30rs30hn66.jpg',
        name: '克拉岛场周',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy7qa10fj30jk0jk418.jpg',
        name: '克拉岛门票',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy7ptnloj30sg23u49t.jpg',
        name: '克拉岛纪念册',
        disp: 'widthFix'
      },
    ],
    hy3: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy6yyvnsj329835saht.jpg',
        name: '海报',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy6zxf1hj30sg4e3tn1.jpg',
        name: '会员礼',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy725et5j32bc1n6khz.jpg',
        name: '克拉岛海报',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy70k8haj30sg2dbdwp.jpg',
        name: '克拉岛场周',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy72v0f8j30sg0iydif.jpg',
        name: '克拉岛特别周边',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy73d0hnj30jg15on8q.jpg',
        name: '克拉岛纪念册',
        disp: 'widthFix'
      },
    ],
    hy4: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy73vd2xj30xc18gagj.jpg',
        name: '海报',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy74791hj30sg3f1k11.jpg',
        name: '会员礼',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy75r1wlj31jk13aalm.jpg',
        name: '克拉岛海报',
        disp: 'aspectFill'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy76hefsj30sg2k1kbh.jpg',
        name: '克拉岛场周',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy755v5mj314i3p4wo3.jpg',
        name: '克拉岛纪念册',
        disp: 'widthFix'
      },
    ],
    hy5: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy78opnxj30k01u77iz.jpg',
        name: '入会指南',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy79dvl7j315pbhnkjl.jpg',
        name: '会员礼',
        disp: 'widthFix'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gsnu4hg235j32bc1naqv6.jpg',
        name: '克拉岛海报',
        disp: 'aspectFill'
      }
    ],
  },

  previewImage_hy1: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.hy1.length; i++){
      dataArray[i] = this.data.hy1[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_hy2: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.hy2.length; i++){
      dataArray[i] = this.data.hy2[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_hy3: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.hy3.length; i++){
      dataArray[i] = this.data.hy3[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_hy4: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.hy4.length; i++){
      dataArray[i] = this.data.hy4[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  },

  previewImage_hy5: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.hy5.length; i++){
      dataArray[i] = this.data.hy5[i].url;
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