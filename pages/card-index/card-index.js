// pages/card-index/card-index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mem1: 
    {
      url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcY7GGeu*rFeJDCyEoM*7ovrTXnXALSrt*jxZvGnEuV18W.7AMuttXYKBEAixZU8KGV4*QrzCfdmMURUAdnGsV3s!/b&bo=rgGvAQAAAAABFzE!&rf=viewer_4',
      name: '崔胜澈1'
    },
    mem2:
    {
      url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcY7GGeu*rFeJDCyEoM*7ovqEFGtoS3Yywqdrd.r55eAxw1.Wl.3jr9cZ3y*8m5HPj5JayJ4cJdA4rhM2Z1kIvHI!/b&bo=ywPLAwAAAAABFzA!&rf=viewer_4',
      name:'崔胜澈2'
    },
    shiqi:
    [
      {
        url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcTgI2unz0J*8t7P2TirTQpnjPubqDm3veqa0qrmkOJ7a8WO.UAIfoi8XmmAk15XKdbqk8kj6nCyYAykY3B93i40!/b&bo=LAEsAQAAAAADJwI!&rf=viewer_4',
        name:'Boys be',
        comment:'迷你2辑',
        time: '2016-01-01'
      },
      {
        url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcTgI2unz0J*8t7P2TirTQpkYnZp1ofVjIFxyreMDXDWotIlMmmiTAnwgBdJXUutTLfmCOosN.cYVKrB3lWYeznA!/b&bo=DAEMAQAAAAABFzA!&rf=viewer_4',
        name:'Going Seventeen',
        comment:'迷你3辑',
        time: '2017-01-01'
      },
      {
        url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcTgI2unz0J*8t7P2TirTQpnjPubqDm3veqa0qrmkOJ7a8WO.UAIfoi8XmmAk15XKdbqk8kj6nCyYAykY3B93i40!/b&bo=LAEsAQAAAAADJwI!&rf=viewer_4',
        name:'Boys be'
      },
      {
        url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcTgI2unz0J*8t7P2TirTQpkYnZp1ofVjIFxyreMDXDWotIlMmmiTAnwgBdJXUutTLfmCOosN.cYVKrB3lWYeznA!/b&bo=DAEMAQAAAAABFzA!&rf=viewer_4',
        name:'Going Seventeen'
      },
      {
        url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcTgI2unz0J*8t7P2TirTQpnjPubqDm3veqa0qrmkOJ7a8WO.UAIfoi8XmmAk15XKdbqk8kj6nCyYAykY3B93i40!/b&bo=LAEsAQAAAAADJwI!&rf=viewer_4',
        name:'Boys be',
        comment:'迷你3辑',
        time: '2017-01-01'
      },
      {
        url: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcTgI2unz0J*8t7P2TirTQpkYnZp1ofVjIFxyreMDXDWotIlMmmiTAnwgBdJXUutTLfmCOosN.cYVKrB3lWYeznA!/b&bo=DAEMAQAAAAABFzA!&rf=viewer_4',
        name:'Going Seventeen',
        comment:'迷你3辑',
        time: '2017-01-01'
      },
    ]
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

  },

  goto_tmp() {
    wx.navigateTo({
      url: '../tmp/tmp',
    })
  }

})