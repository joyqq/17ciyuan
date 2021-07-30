// pages/card2/card2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  goto_c3_zjpz:function() {
    wx.navigateTo({
      url: '../c3_zjpz/c3_zjpz',
    })
  },

  goto_c3_con:function() {
    wx.navigateTo({
      url: '../c3_con/c3_con',
    })
  },

  goto_c3_hgxg:function() {
    wx.navigateTo({
      url: '../c3_hgxg/c3_hgxg',
    })
  },

  goto_c3_hykld:function() {
    wx.navigateTo({
      url: '../c3_hykld/c3_hykld',
    })
  },

  goto_c3_else:function() {
    wx.navigateTo({
      url: '../c3_else2/c3_else2',
    })
  },

  goto_c3_rbcz:function() {
    wx.navigateTo({
      url: '../c3_rbcz/c3_rbcz',
    })
  },
  goto_c3_rbzb:function() {
    wx.navigateTo({
      url: '../c3_rbzb/c3_rbzb',
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
  
})