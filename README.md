# 🥂My Restaurants CRUD

An [AlphaCamp](https://tw.alphacamp.co/) simple login system practiced based on Node.js, Express and MongoDB.

此為 [AlphaCamp](https://tw.alphacamp.co/) 學生練習專案，運用Node.js、Express與MongoDB實作資料操作應用程式。

# Usage 功能
* 新增餐廳資料
* 分類顯示餐廳
* 修改餐廳資料
* 刪除餐廳資料

# Preview 預覽
![](https://i.imgur.com/rKJQIvF.jpg)
![](https://i.imgur.com/HkZaNMH.jpg)
![](https://i.imgur.com/BK7GlND.jpg)


# Note 筆記
### Project require
#### 建立餐廳清單的CRUD
- [x] 使用者新增一家餐廳
- [x] 使用者瀏覽餐廳詳細資訊
- [x] 使用者瀏覽全部餐廳
- [x] 使用者修改餐廳資訊
- [x] 使用者刪除餐廳資訊
- [x] 點擊餐廳照片直接進入詳細頁面
- [x] 執行刪除前跳出確認視窗
#### 重構餐廳清單
- [x] RESTful的餐廳路由
- [x] 使用express.Router將路由獨立出app.js
- [x] drop-down list設定餐廳排序
- [ ] 一些前端動態效果(額...)

### CRUD RESTful router setting


| 資料操作 | 功能描述       | Verb | URL       |
| -------- | -------------- | ---- | --------- |
| Create   | 新增餐廳的頁面   | GET  | /view/new      |
|          | 新增餐廳資料(確認) | POST |  /view  |
| Read     | 瀏覽所有餐廳   | GET  | /view     |
|          | 瀏覽特定餐廳   | GET  | /view/:id |
|          | 搜尋篩選餐廳   | GET  | /search |
|          | 排序顯示餐廳   | GET  | /order?sort= |
| Update   | 修改餐廳的頁面 | GET   |/view/:id/edit  |
|          | 修改餐廳資料(確認) | PUT |/view/:id  |
| Delete   | 刪除餐廳     |  DELETE  |/view/:id/delete   |

#### Mongoose validation
在新增資料部分有 Mongoose Validation 的一些方法可以預先確認資料的正確性，還沒有詳細研究。
#### Node.js import JSON
使用 Node.js [File System (FS) module](https://nodejs.org/api/fs.html#fs_file_system)

```javascript=
const fs = require("fs")

const restaurantJSON = fs.readFileSync("../seeds/restaurant.json")

const restaurants = JSON.parse(restaurantJSON)

console.log('JSON READY!!')

```
#### Handlebars與Boostrap modal的連結
Handlebars`{{#each}}`產生的資料讀不進Boostrap的Modal中，原來是Modal的id要帶入`{{this.id}}`
#### moongoose搜尋功能
蠻神秘的RegExp()，以下關鍵搭配使用
```javascript=
  const regex = new RegExp(keyword,'i')
  Model.find(
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
      return res.render('index',{restAll:restSchema,keyword:keyword})
    })

```
#### Handlebars排序按鈕類別回傳
`{{#if}}` `{{/if}}`中包裹回傳值，其中可以用`{{else}`設定預設顯示


# Require 配置
### Enviroment 環境
-   Node.js 10.15.0
    -   express 4.17.1
    -   express-handlebars 3.1.0
    -   body-parser 1.19.0
    -   method-override 3.0.0
    -   mongoose 5.7.13
-   Mongodb 4.0.13

# Installation 安裝
此專案目前僅能在本機端運行。

### Download 下載
1. 下載專案 ZIP file
1. Git clone 專案

`$ git clone https://github.com/zangwang-tw/Restaurants_List_CRUD.git`

### Initial 設定環境

**⚠確認已事先安裝好Node.js、Nodemon以及MongoDB⚠**

1.使用終端機到專案存放位置，輸入以下指令自動安裝專案套件

`npm install`

2.移到專案中seeds資料夾內

`cd ~\Restaurants_List_CRUD\models\seeds`

3.初始種子資料

`node restaurantSeeder`

4.回到專案資料夾

`cd ~\Restaurants_List_CRUD`

5.於終端機輸入啟動專案

`nodemon app.js`

### Play 使用
開啟瀏覽器輸入`http://localhost:3000/`於本機端瀏覽專案

# Thanks 感謝🎉
![](https://i.imgur.com/1dVrjpi.png)


