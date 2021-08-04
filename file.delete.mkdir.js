var fs = require("fs");
// 执行前创建一个空的 /tmp 目录
console.log("准备删除目录 ./tmp");
fs.rmdir("./tmp", { recursive: true }, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("删除目录成功")
});
