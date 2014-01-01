function ajax(url, fnSucc, fnFaild) {

  //1.创建 Ajax 对象
  if(window.XMLHttpRequest) { //之所以用 window，是把它写成属性，不至于在 ie6 下报错
    var oAjax = new XMLHttpRequest;
  } else {
    var oAjax = new ActiveXObject("Microsoft.XMLHTTP")
  }

  //2.连接服务器
  oAjax.open('get', url, true); //open(方法, 文件名, 异步传输)

  //3.发送请求
  oAjax.send();

  //4.接受返回信息
  oAjax.onreadystatechange = function() {

    //浏览器与服务器进行到哪里了
    //0:未初始化，还没调用open()方法；1:载入，以调用send()方法，正在发送请求；2:载入完成，send()方法完成，已经收到全部响应内容；3:解析，正在解析响应内容；4:完成，响应内容解析完成，可以在客户端调用了
    if(oAjax.readyState == 4) {

      if(oAjax.status == 200) {
        fnSucc(oAjax.responseText);
      } else {
        //可选参数
        if(fnFaild){
          fnFaild(oAjax.status);
        }
      }

    }

  };

}