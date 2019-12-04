# 🥂My Restaurants CRUD

An [AlphaCamp](https://tw.alphacamp.co/) simple login system practiced based on Node.js, Express and MongoDB.

此為 [AlphaCamp](https://tw.alphacamp.co/) 學生練習專案，運用Node.js、Express與MongoDB實作資料操作應用程式。

#### Practice goals 練習目標
- [x] 練習目標1
- [ ] 練習目標2

# Usage 功能
* 功能1
* 功能2


# Preview 預覽

# Note 筆記
### Project require
#### 建立餐廳清單的CRUD
- [ ] 使用者新增一家餐廳
- [ ] 使用者瀏覽餐廳詳細資訊
- [ ] 使用者瀏覽全部餐廳
- [ ] 使用者修改餐廳資訊
- [ ] 使用者刪除餐廳資訊
- [ ] 點擊餐廳照片直接進入詳細頁面
- [ ] 執行刪除前跳出確認視窗
#### 重構餐廳清單
- [ ] RESTful的餐廳路由
- [ ] 使用express.Router將路由獨立出app.js
- [ ] drop-down list設定餐廳排序
- [ ] 一些前端動態效果

### CRUD router setting


| 資料操作 | 功能描述       | Verb | URL       |
| -------- | -------------- | ---- | --------- |
| Create   | 新增餐廳的頁面   | GET  | /new      |
|          | 新增餐廳資料(確認) | POST |  /view/:id  |
| Read     | 瀏覽所有餐廳   | GET  | /view     |
|          | 瀏覽特定餐廳   | GET  | /view/:id |
| Update   | 修改餐廳的頁面 | GET   |/view/:id/edit  |
|          | 修改餐廳資料(確認) | PUT |/view/:id  |
| Delete   | 刪除餐廳     |  DELETE  |/view/:id   |

### Mongoose validation
### Node.js import JSON


# Require 配置
### Enviroment 環境

### Packages 套件

### Others 其他


# Installation 安裝
此專案目前僅能在本機端運行。

### Download
1. 下載專案 ZIP file
1. Git clone 專案

`$ git clone https://github.com/zangwang-tw/Restaurants_List_CRUD.git`

### Initial

> ⚠ **確認已事先安裝好Node.js以及Nodemon**

使用終端機到專案存放位置，輸入以下指令自動安裝專案套件

`npm install`

再於終端機輸入

`nodemon app.js`

### Play
開啟瀏覽器輸入`http://localhost:3000/`於本機端瀏覽專案

# Thanks 感謝🎉

