var fs = require("fs");
var util=require("util")
var getAllFile=require("./allPath")
var buf = new Buffer.alloc(1024);
// let files=getAllFile.getAllFile('C:\\Users\\82509\\Desktop\\')
// console.log(files)
// console.log("准备打开已存在的文件！");
fs.open('C:\\Users\\82509\\Desktop\\company.txt', 'r+', function(err, fd) {
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
        var con_Arr=[];
        var content=buf.slice(0, bytesRead).toString();
        //  console.log(content);
        console.log(con_Arr=content.split('\r\n').sort())
  
         content=con_Arr.toString().replaceAll(",","\r\n");
         fs.writeFile(__dirname+'/output.txt', content,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("数据写入成功！");
         });
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