// 載入
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// express實例
const app = express()

// 告訴 express 使用 handlebars 當作 template engine 並預設 layout 是 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// express載入靜態檔案
app.use(express.static('public'))

// 設定bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// 設定method-override
app.use(methodOverride('_method'))

// mongoose 連線
mongoose.connect('mongodb://localhost/restaurants', { useNewUrParser: true })

// 請mongoose用 `mongoose.connection`拿到資料庫物件
const db = mongoose.connection

// 如果資料庫連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 如果資料庫連線成功
db.once('open', () => {
  console.log('mongodb connected')
})

// 資料庫連線成功，載入資料模型
const restSchema = require('./models/restaurant')

// 載入路由
// 首頁
app.use('/',require('./routes/home'))
// 功能
app.use('/view', require('./routes/restaurant'))

// 通訊埠
app.listen(3000, () => {
  console.log('work hard, be better!')
})