const express = require('express')
const router = express.Router()
const restSchema = require('../models/restaurant')

// 首頁
router.get('/', (req, res) => {
  // 請model去mongoDB撈資料
  restSchema.find((err, restSchema) => {
    if (err) return console.error(err)
    return res.render('index', { restAll: restSchema })
  })
})


module.exports = router