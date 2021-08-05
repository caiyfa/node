var a = 100;
if(1){   
    let a = 1;
    a = 10;    
    //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a， 
       // 而这时，还未到声明时候，所以控制台Error:a is not defined    
      }