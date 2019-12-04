// 建立初始化資料
// 載入mongoose
const mongoose = require('mongoose')
// 載入mongoose Schema 模型
const restSchema = require('../restaurant')

// 透過mongoose與mongoDB相連
mongoose.connect('mongodb://localhost/restaurants', {useNewUrlParser:true})

const db = mongoose.connection

db.on('error',()=>{
  console.log('db error')
})

db.once('open',()=>{
  console.log('db connected!')

  // 載入初始化資料
  // 讀取JSON檔案
  const fs = require("fs")
  const restaurantJSON = fs.readFileSync("../seeds/restaurant.json")
  const restaurants = JSON.parse(restaurantJSON)
  console.log('JSON READY!!')
  // JSON檔案進入MongoDB
  // Json檔一次載入不用for loop耶
  // mongoose create()不熟，查一下
  // 這叫 model.create()
  restSchema.create(restaurants.results)


  console.log('init data done!')
})