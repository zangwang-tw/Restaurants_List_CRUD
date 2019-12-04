// 定義資料型別
// 對於模型初始與拿到的JSON檔之間的關係蠻困惑，或許只要能在種子.js中正確輸進欄位就好？
// 發現需要使用到正規表達式(regular expression literal)
// 為了加速練習，先跳過練習 Schema Validation 的操作

// 載入
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 初始資料型態
const restSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  name_en:{
    type:String,
    require:true
  },
  category:{
    type:String,
    require:true,
    // 限定選項 中東 日式 義式 美式 酒吧 咖啡廳  
    // enum:['中東','日式','義式','美式','酒吧','咖啡廳']
  },
  image:{
    type:String,
    require:true
    // 如沒有以預設圖片代替?
  },
  location:{
    type:String,
    require:true
    // 簡化練習，就不細分地址了
  },
  phone:{
    type:String,
    require:true
    // 分2-4-4
  },
  google_map:{
    type:String,
    require:true
    // 頁面設定一鍵查找?
  },
  rating:{
    type:String,
    require:true
    // 設置評分區間
  },
  description:{
    type:String,
    require:true
  }
})

// 輸出模型，注意s
module.exports = mongoose.model('restSchema', restSchema)