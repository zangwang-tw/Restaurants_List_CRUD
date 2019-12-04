// 載入
const express = require('express')
const mongoose = require('mongoose')

// express實例
const app = express()

// mongoose 連線
mongoose.connect('mongodb://localhost/restaurants',{ useNewUrParser: true})

// 請mongoose用 `mongoose.connection`拿到資料庫物件
const db = mongoose.connection

// 如果資料庫連線異常
db.on('error',()=>{
  console.log('mongodb error!')
})

// 如果資料庫連線成功
db.once('open',()=>{
  console.log('mongodb connected')
})

// 資料庫連線成功，載入資料模型
const restSchema = require('./models/restaurant')

// 路由設定
app.get('/',(req, res)=>{
  res.send('Hello')
})

// 通訊埠
app.listen(3000,()=>{
  console.log('work hard, be better!')
})