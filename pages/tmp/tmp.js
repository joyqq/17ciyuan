

// pages/tmp/tmp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: [
     "https://wx3.sinaimg.cn/large/007YersYgy1gkupnfalkhj30u01hc4qp.jpg",
    ]
  },

  previewImage: function (e) {  
		var current=e.target.dataset.src;
		wx.previewImage({
		  	current: current, // 当前显示图片的http链接
		  	urls: this.data.imgalist // 需要预览的图片http链接列表
		})
	}  
})