var src = "xxx.jpg";
function set(key) {
  var img = document.createElement('img');
  //当图片加载完成的时候出发回调函数
  img.addEventListener('load', function() {
    var imgCanvas = docuemnt.createElement('canvas'),
        imgContext = imageCanvas.getContext('2d');
    //确保 canvas 元素的大小和图片尺寸一致
    imgCanvas.width = this.width;
    imgCanvas.height = this.height;
    //渲染图片到 canvas 中
    imgContext.drawImage(this, 0, 0, this.width, this.height);

    //用data url 的形式取出
    var imgAsDataURL = imgCanvas.toDataURL('image/png');

    //保存到本地存储中
    try {
      localStorage.setItem(key, imgAsDataURL);
    } catch (e) {
      console.log('Storage failed: ' + e);
    }
  }, false);
  img.src = src;
}

function get(key) {
  var srcStr = localStorage.getItem(key);
  var imgObj = docuemnt.createElement('image');
  imgObj.src = srcStr;
  document.body.appendChild(imgObj);
}