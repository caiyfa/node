//引入fs模块
var fs =  require("fs")

//封装请求文件数据的函数
function getFileData(fileName){
 return new Promise(resolve=>{
    var readStream = fs.createReadStream(fileName)  
    readStream.setEncoding('UTF8')
    readStream.on("data",chunk=>resolve(chunk))
  }) 
}

//并发请求
Promise.all([getFileData("input.txt"),getFileData("output.txt")]).then(result=>{
   var writeStream = fs.createWriteStream("output.txt");
   //讲两个文件的内容重新再写入到output.txt中
   writeStream.write(result[0]+","+result[1],"UTF8");
   writeStream.end();
   //再获取output.txt文件的内容
   fs.readFile("output.txt",(err,content)=>console.log(content.toString()))
})