// 載入
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// express實例
const app = express()

// 告訴 express 使用 handlebars 當作 template engine 並預設 layout 是 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// express載入靜態檔案
app.use(express.static('public'))

// 設定bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

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

// 路由設定
// 首頁
app.get('/', (req, res) => {
  // 請model去mongoDB撈資料
  restSchema.find((err, restSchema) => {
    if (err) return console.error(err)
    return res.render('index', { restAll: restSchema })
  })
})

// ====== C =====
// 新增餐廳的頁面
app.get('/new', (req, res) => {
  res.render('new')
})
// 新增餐廳資料的動作
app.post('/view', (req, res) => {
  // 建立新的實例
  const resNew = new restSchema({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description,
  })
  // 存入資料庫
  resNew.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// ===== R =====
// 瀏覽所有餐廳
app.get('/view', (req, res) => {
  return res.redirect('/')
})
// 瀏覽特定餐廳
app.get('/view/:id', (req, res) => {
  // 請model去mongoDB撈資料
  restSchema.findById(req.params.id, (err, resSchema) => {
    if (err) return console.error(err)
    return res.render('show', { restaurant: resSchema })
  })
})
// 搜尋篩選餐廳
app.get('/search', (req, res) => {
  res.render('搜尋特定餐廳')
})
// 排序顯示餐廳
app.get('/view/order', (req, res) => {
  res.render('排序顯示餐廳')
})

//  ===== U =====
// 修改餐廳的頁面
app.get('/view/:id/edit', (req, res) => {
  restSchema.findById(req.params.id, (err, restSchema) => {
    if (err) return console.error(err)
    return res.render('edit', { restaurantInfo: restSchema })
  })
})
// 修改餐廳資料的動作
app.post('/view/:id', (req, res) => {
  restSchema.findById(req.params.id, (err, restSchema) => {
    if (err) return console.error(err)
    restSchema.name = req.body.name
    restSchema.name_en = req.body.name_en
    restSchema.category = req.body.category
    restSchema.image = req.body.image
    restSchema.location = req.body.location
    restSchema.phone = req.body.phone
    restSchema.google_map = req.body.google_map
    restSchema.rating = req.body.rating
    restSchema.description = req.body.description
    restSchema.save(err => {
    if (err) return console.error(err)
    return res.redirect(`/view/${req.params.id}`)
    })
  })
})

// ===== D =====
// 刪除餐廳
app.post('/view/:id/delete', (req, res) => {
  restSchema.findById(req.params.id,(err,restSchema)=>{
    if(err) return console.error(err)
    restSchema.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// 不太懂 put/delete 要另外設定的意思

// 通訊埠
app.listen(3000, () => {
  console.log('work hard, be better!')
})