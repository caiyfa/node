// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
      console.log("该代码不会执行");
    }, 0);
    
    console.log('退出码为:', code);
  });
//   console.trace("aaa");
  console.log("程序执行结束");