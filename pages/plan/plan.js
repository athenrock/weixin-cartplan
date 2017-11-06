const requestUrl = require('../../config').requestUrl;
const duration = 2000;


// plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       text:"没有找到目标，是否创建一个",
       boys:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      url: requestUrl + "?title=" + options.title,
      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
        })
        var data = result.data;
        console.log(result.data);
        self.setData({
          loading: false,
          text: "找到这几个2B青年" ,
          boys: data.boys
        });
        console.log('request success', self.data.boys)
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
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