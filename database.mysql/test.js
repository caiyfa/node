const ms = require('./ms');
var  sql = 'SELECT * FROM websites where name =? and alexa=?';
  ms.query(sql,['Facebook',3],(res)=>{
    console.log(res)
});
