var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 ./tmp/");
fs.mkdir("./tmp/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});