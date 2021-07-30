// pages/card2/card2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // bcheight: windowHeight
  },

  goto_cardof00:function() {
    wx.navigateTo({
      url: '../cardof00test/cardof00test',
    })
  },
  goto_cardof01:function() {
    wx.navigateTo({
      url: '../cardof01/cardof01',
    })
  },
  goto_cardof02:function() {
    wx.navigateTo({
      url: '../cardof02/cardof02',
    })
  },
  goto_cardof03:function() {
    wx.navigateTo({
      url: '../cardof03/cardof03',
    })
  },
  goto_cardof04:function() {
    wx.navigateTo({
      url: '../cardof04/cardof04',
    })
  },
  goto_cardof05:function() {
    wx.navigateTo({
      url: '../cardof05/cardof05',
    })
  },
  goto_cardof06:function() {
    wx.navigateTo({
      url: '../cardof06/cardof06',
    })
  },
  goto_cardof07:function() {
    wx.navigateTo({
      url: '../cardof07/cardof07',
    })
  },
  goto_cardof08:function() {
    wx.navigateTo({
      url: '../cardof08/cardof08',
    })
  },
  goto_cardof09:function() {
    wx.navigateTo({
      url: '../cardof09/cardof09',
    })
  },
  goto_cardof10:function() {
    wx.navigateTo({
      url: '../cardof10/cardof10',
    })
  },
  goto_cardof11:function() {
    wx.navigateTo({
      url: '../cardof11/cardof11',
    })
  },
  goto_cardof12:function() {
    wx.navigateTo({
      url: '../cardof12/cardof12',
    })
  },
  goto_cardof13:function() {
    wx.navigateTo({
      url: '../cardof13/cardof13',
    })
  },
  onLoad: function () {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
   
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