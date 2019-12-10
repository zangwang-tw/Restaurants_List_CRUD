const express = require('express')
const router = express.Router()
const restSchema = require('../models/restaurant')

// 搜尋篩選餐廳
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const regex = new RegExp(keyword,'i')
  restSchema.find(
    {
      $or:[
        {name:regex},
        {name_en:regex},
        {category:regex},
      ]
    }
  )

    .exec((err, restSchema) => {
      if (err) return console.error(err)
      return res.render('index', {restAll:restSchema,keyword:keyword})
    })
})
// 排序顯示餐廳
router.get('/order', (req, res) => {
  const sort = req.query.sort
  console.log(sort)
  let filter
  let sortName
  switch(sort){
    case 'name-asc':
      filter = {name_en:'asc'}
      sortName = 'A>Z'
      break
    case 'name-desc':
      filter = {name_en:'desc'}
      sortName = 'Z>A'
      break
    case 'category-asc':
      filter = {category:'asc'}
      sortName = '類別'
      break
    case 'location-asc':
      filter = {location:'asc'}
      sortName = '地區'
      break
    case 'rating-desc':
      filter = {rating:'desc'}
      sortName = '高分'
      break
    case 'rating-asc':
      filter = {rating:'asc'}
      sortName = '低分'
      break
    default:
      filter = {_id:'asc'}
      sortName = '排序'
      break;
  }

  restSchema.find({})
  .sort(filter)
  .exec((err,restSchema)=>{
    if(err) return console.error(err)
    return res.render('index',{restAll:restSchema,sortName})
  })

})


module.exports = router