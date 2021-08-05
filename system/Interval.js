function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
 var t= setInterval(printHello, 200);

 setTimeout(function(){
    clearInterval(t);
 },1000);