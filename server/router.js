function route(pathname) {
    console.log("About to route a request for " + pathname);
    // 输出全局变量 __filename 的值
    console.log( '当前文件名：'+__dirname+'  '+__filename );
  }
   
  exports.route = route;