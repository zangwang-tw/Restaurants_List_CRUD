const express = require('express')
const router = express.Router()
const restSchema = require('../models/restaurant')

// ====== C =====
// 新增餐廳的頁面
router.get('/new', (req, res) => {
  res.render('new')
})
// 新增餐廳資料的動作
router.post('/', (req, res) => {
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
router.get('/', (req, res) => {
  return res.redirect('/')
})
// 瀏覽特定餐廳
router.get('/:id', (req, res) => {
  // 請model去mongoDB撈資料
  restSchema.findById(req.params.id, (err, resSchema) => {
    if (err) return console.error(err)
    return res.render('show', { restaurant: resSchema })
  })
})

//  ===== U =====
// 修改餐廳的頁面
router.get('/:id/edit', (req, res) => {
  restSchema.findById(req.params.id, (err, restSchema) => {
    if (err) return console.error(err)
    return res.render('edit', { restaurantInfo: restSchema })
  })
})
// 修改餐廳資料的動作
router.put('/:id', (req, res) => {
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
      return res.redirect(`${req.params.id}`)
    })
  })
})

// ===== D =====
// 刪除餐廳
router.delete('/:id/delete', (req, res) => {
  restSchema.findById(req.params.id, (err, restSchema) => {
    if (err) return console.error(err)
    restSchema.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})


module.exports = router