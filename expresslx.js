
//引包
const express=require('express');
const app=express();
const bp=require('body-parser');
const fs=require('rs');

/*
中间件：
功能增强
*/
//解析urlencoded
app.use(bp.urlencoded({ extended: false })); 

let u=express.static('www');
app.use(u);


app.get('/login',(req,res)=>{
    if(req.query.user==='xxx'){
    res.send({
        code:1,
        msg:'哈哈'
    })
    }
})

app.post('/register',(req,res)=>{
    console.log(req.body)
})
app.listen(80);