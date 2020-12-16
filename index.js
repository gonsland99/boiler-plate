const express = require('express')  //설치한 express를 불러옴
const app = express()   //express생성
const port = 3000   //localhost:3000  접속주소
const mongoose = require('mongoose') //mongoDB 불러옴

mongoose.connect('mongodb+srv://gon:12345@cluster0.mmyxt.mongodb.net/<dbname>?retryWrites=true&w=majority',{  //mogoDB 클러스터 주소 및 아이디,비번
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false //동작에러 방지용 코드??
}).then(() => console.log('MongoDB Connected...'))  //연결 로그
  .catch(err => console.log(err)) //에러로그--


app.get('/', (req, res) => {
  res.send('Hello World! 처음 시작한다!')
})

app.listen(port, () => {    //서버 정상실행시 콘솔창 출력
  console.log(`Example app listening at http://localhost:${port}`)
})