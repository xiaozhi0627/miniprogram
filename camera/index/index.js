Page({
  onLoad() {
    this.ctx = wx.createCameraContext();
    this.setData({
      toScean: "点击屏幕进行识别",
    });
    
  },
  takePhoto() {
    //mask
    wx.showLoading({
      title: "识别中...",
      mask: true
    });

    //获取摄像头照片
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        var filePath = res.tempImagePath;
        if (filePath) {
          this.setData({
            imageSrc: filePath,
            toScean: "识别成功"
          });
        }
        /*
        //调用wx.uploadFile函数上传图片
        var uploadUrl = "";
        wx.uploadFile({
          url: uploadUrl,
          filePath: filePath,
          name: 'file',
          success: function (res) {
              alert(res);
          }
        })
        */
      },
      fail: function (error) {
        console.error("拍照失败")
        console.warn(error)
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  error(e) {
    alert(e.detail)
    console.log(e.detail)
  }
})