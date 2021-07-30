//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    img0: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcfsqXz3PdMClUHuWfdRaNP6qgmEMAcsNnLE1a8IUrkqk6EjLwFsIHBUIXwbZbmLeW8NCYqh*zhZL6uSkDzcvaJ4!/b&bo=3AVxAQAAAAABF5k!&rf=viewer_4',
    zjpz_item: [
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyaq2jf8j30nh2p5n8b.jpg',
        name: '迷你3辑\nGoing Seventeen'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyaqz5ccj30jg209103.jpg',
        name: '迷你4辑\nAl1'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyarm2pdj30sg3v1x44.jpg',
        name: '正规2辑\nTEEN,AGE'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyaty16oj30sg3thkdr.jpg',
        name: '特别专辑\nDIRECTOR\'S CUT'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyatctr3j30sg2pfn8a.jpg',
        name: '[KIHNO] 特别专辑\nDIRECTOR\'S CUT'
      },
      {
        url: 'https://wx1.sinaimg.cn/large/008hT4DMly1gpvyauznlyj30sg5uh7wh.jpg',
        name: '迷你5辑\nYOU MAKE MY DAY'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyaueahoj30jg1rw0y1.jpg',
        name: '[KIHNO] 迷你5辑\nYOU MAKE MY DAY'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyawb7g4j30sg7mh7wh.jpg',
        name: '迷你6辑\nYOU MADE MY DAWN'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyavmipzj30sg37b7kl.jpg',
        name: '[KIHNO] 迷你6辑\nYOU MADE MY DAWN'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyax5absj30sg7401kx.jpg',
        name: '正规3辑\nAn Ode'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyaxv38pj30sg2uedqu.jpg',
        name: '[KIHNO] 正规3辑\nAn Ode'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyb0xyncj30yfcn3e85.jpg',
        name: '迷你7辑\n헹가래 [Heng:garae]'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyaynvsnj31ls6bf1ky.jpg',
        name: '[KIHNO] 迷你7辑\n헹가래 [Heng:garae]'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyb46jy1j31ekcn31l8.jpg',
        name: '特别专辑\n; [Semicolon]'
      },
      {
        url: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grfd4uv89kj312yahrkjr.jpg',
        name: '迷你8辑\nYour Choice'
      },
    ]

  },
 
  previewImage_items: function (e) {
    var dataArray = [];
    for (var i = 0; i < this.data.zjpz_item.length; i++){
      dataArray[i] = this.data.zjpz_item[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  } , 
    
  
})
