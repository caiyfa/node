var fs = require("fs");
var util=require("util")
var buf = new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
    
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead,buffer){
      if (err){
         console.log(err);
      }
      console.log(bytesRead + "  字节被读取" +"");
      
      // 仅输出读取的字节
      if(bytesRead > 0){
         console.log(buf.slice(0, bytesRead).toString());
      }
   });
// 关闭文件
fs.close(fd, function(err){
    if (err){
       console.log(err);
    } 
    console.log("文件关闭成功");
 });
    
});