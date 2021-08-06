const mysql = require('mysql')
var path=__dirname+"/mysql";
//获取mysql配置
var mysqlConfig=require(path)
//创建链接
const connection = mysql.createConnection({
  host     : mysqlConfig['host'],
        user     : mysqlConfig['user'],
        password : mysqlConfig['password'],
        database : mysqlConfig['database']
})

// 接收一个sql语句 以及所需的values
// 这里接收第二参数values的原因是可以使用mysql的占位符 '?'
// 比如 query(`select * from my_database where id = ?`, [1])

const query =  ( sql, values,callback )=> {
  connection.query(sql, values, ( err, rows) => {

    if ( err ) {
      callback(error(err))
    } else {
      callback( rows )
    }
  
  })
  function error(err) {
    return {err: 1, msg: err.msg};
  }
}


exports.query=query;