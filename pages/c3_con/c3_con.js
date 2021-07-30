//index.js
//获取应用实例
const app = getApp()
var isPreview

Page({
  data: {
    img0: 'http://m.qpic.cn/psc?/V51tCZuZ4eGYuw1gi1sg0AAI7B2aPXtq/45NBuzDIW489QBoVep5mcd.s0V2uvAm2lsqPUjgkI*mQ51t60rrcOW2phpDd8BEdUtln2GhnbfknqePO8J5U34GA7*kCBXHzbWuNQefsj7w!/b&bo=3AVxAQAAAAABF5k!&rf=viewer_4',
    list2016_1: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyacof9tj315o1kg18a.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyac9g23j30p50zkago.jpg',
    ],
    list2016_3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyadkiiij30mi12jjys.jpg',
    list2016_4: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyae8yc2j30jg24410p.jpg',
    list2016_2_1: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyadvdtej30sg16o79i.jpg',
    list2016_2_2: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvyad2099j30sg0fxwv3.jpg',
    list2016_2_3: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq80simv5uj30m828l1kx.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq80sizwvxj30jg1xgb29.jpg',
      'https://wx3.sinaimg.cn/mw2000/008hT4DMly1gq80sjbdrwj30jp122gxx.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq80sjjuj6j30m82o0dur.jpg'
    ],
    list2017_1: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9y1u4qj31461l34e2.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9ygc6zj31461l3gza.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9yv8byj31461l3ncg.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9zb2lfj31461l3du2.jpg',
    ],
    list2017_2: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9wstraj30rs0xcacs.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9zmmcnj30g40msadb.jpg'
    ],
    list2017_3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9xhqhsj30sg3t57v4.jpg',
    list2017_4: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvya06fiaj30sg3j6wz0.jpg',
    list2018_1: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9m7qivj30sg13t166.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9kg3bhj31b91u516e.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9kxj49j31b91u5wt9.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9ll6xgj31b91u51ag.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9k24wwj30sg13u14j.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs6uf2nnwj30rs0hl40x.jpg'
    ],
    list2018_cc: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gq7ztaeustj310k19tdjk.jpg',
    list2018_2: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9jonl4j30sg2dbqfw.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9jayh6j30sg218alj.jpg',
    ],
    list2018_3: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9o28wij30sg63ckjq.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9mnjhuj30rs4h9wqp.jpg',
    ],
    list2019_1: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8tgc9wj31jk14r4hq.jpg',
    list2019_2: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8z6oi1j30sg12saf9.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8ym0b4j30oj0xcwhu.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8vhnd3j30xc199n0h.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8zmzj0j30xc1ctjyd.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8xpq83j324u34hx6r.jpg',
    ],
    list2019_3: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8uh943j30sg3451kx.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8v4ts3j30ts1kwdmg.jpg',
    ],
    list2019_4: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy931ckuj30sg6224kz.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy91tv1nj30sg4tl4gl.jpg',
    ],
    list2019_5: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy9986enj32j0cn27wo.jpg',
    list2020_1: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gpvy8gyxn6j39a56fhqvc.jpg',
    list2020_2: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqtydjcaprj30u02jonpd.jpg',
    list2020_4: [
        'https://wx4.sinaimg.cn/mw2000/008hT4DMly1grzjkzdes1j31dbcn11l8.jpg',
        'https://wx1.sinaimg.cn/mw2000/008hT4DMly1grzjkuvqoqj31iocmxqvk.jpg'
    ],
    list2016_dr: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7141ts9j31481kwn3s.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs7155bxwj31481kw49v.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs715quo9j31481kwtdq.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs717b7cgj31jk26ldwq.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs718x324j31481kwq7t.jpg',
      'https://wx2.sinaimg.cn/mw2000/008hT4DMly1gqs71a2mllj31jk26le0i.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71b5d74j31481kwahp.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71bryhmj31481kwgs4.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71cj6fzj31jk26ltmw.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71dluuxj31jk26lng4.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71e88rvj31481kwwly.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71esllpj31481kw7bv.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs71fnm1nj31481kw7d1.jpg',
    ],
    list2020_dr: [
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9id93jej31jk287nc1.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9ijrsexj32871jk4qr.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9ipe3tjj31jk287npe.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9is8v3gj32871jkqv5.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9ix98avj31jk287b2b.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9j0o8qrj32871jkqv6.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9j2l874j32871jkkjl.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9j5my82j32871jkqv5.jpg',
      'https://wx3.sinaimg.cn/mw2000/008hT4DMly1gqs9jacxekj32871jkkjm.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9jdkplkj32871jkkjl.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9jg93m4j31jk287kjl.jpg',
      'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9jnred4j31jk287b2b.jpg',
      'https://wx1.sinaimg.cn/orj360/008hT4DMly1gqs9jr76c9j32871jknpd.jpg',
    ],
    list2020_3: 'https://wx1.sinaimg.cn/mw2000/008hT4DMly1gqs9jt8i01j31hc0u0qpl.jpg',
    
    
    


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

  previewImage2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    var dataArray = [];
    for (var i = 0; i < this.data.list2016.length; i++){
      dataArray[i] = this.data.list2016[i].url;
    }
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: dataArray // 需要预览的图片http链接列表
    })
  } ,

  onShow: function () {
    let that = this
    if(that.data.isPreview) {
      that.setData({
        isPreview: false
      })
      return
    }
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

  previewImage_list2016_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2016_1
    })
  },

  previewImage_list2016_2_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2016_2_3
    })
  },

  previewImage_list2016_dr: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2016_dr
    })
  },

  previewImage_list2020_dr: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2020_dr
    })
  },

  previewImage_list2017_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2017_1
    })
  },

  previewImage_list2017_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2017_2
    })
  },

  previewImage_list2018_1: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2018_1
    })
  },

  previewImage_list2018_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2018_2
    })
  },

  previewImage_list2018_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2018_3
    })
  },

  previewImage_list2019_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2019_2
    })
  },

  previewImage_list2019_3: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2019_3
    })
  },

  previewImage_list2019_4: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2019_4
    })
  },

  previewImage_list2020_4: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2020_4
    })
  },

  previewImage_list2020_2: function (e) {
    let that = this;
    that.setData({
      isPreview: true
    })
    const current = e.target.dataset.src  //获取当前点击的 图片 url
    wx.previewImage({
      current,
      urls: this.data.list2020_2
    })
  },

})
