function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
 var t= setTimeout(printHello, 2000);
 console.log(t)
// 清除定时器  clearTimeout(t);