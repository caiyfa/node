const openDefaultBrowser = function (url) {
  //使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
    var exec = require('child_process').exec;
    console.log(process.platform)
    switch (process.platform) {
      case "darwin":
        exec('open ' + url);
        break;
      case "win32":
        exec('start ' + url);
        break;
      default:
        exec('xdg-open', [url]);
    }
  }
exports.openDefaultBrowser=openDefaultBrowser;