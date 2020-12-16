const express = require('express')  //설치한 express를 불러옴
const app = express()   //express생성
const port = 3000   //localhost:3000  접속주소
const mongoose = require('mongoose') //mongoDB 불러옴
const bodyParser = require("body-parser");  //클라이언트 정보를 서버로 받아옴
const {User} = require("./models/User");  //user moduel schema
const config = require('./config/key');

//application/x-www-form-urlencoded post data 형태로 받아옴
app.use(bodyParser.urlencoded({ extended: true }));
//json type post data 제이슨 형태로 받아옴
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{  //mogoDB 클러스터 주소 및 아이디,비번
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false //동작에러 방지용 코드??
}).then(() => console.log('MongoDB Connected...'))  //연결 로그
  .catch(err => console.log(err)) //에러로그--


app.get('/', (req, res) => {
  res.send('Hello World! 오예 시작한다!')
})

app.post('/register',(req,res) => {
	//회원 가입 할때 필요한 정보들을 client에서 가져오면
	//그것을 데이터베이스에 넣어준다.
	
	const user = new User(req.body)
	user.save((err,userInfo) =>{    //save는 mongoDB 생성자
    if(err) return res.json({success: false,err})
    return res.status(200).json({   //200 정상동작
      success: true
    })
  })
})

app.listen(port, () => {    //서버 정상실행시 콘솔창 출력
  console.log(`Example app listening at http://localhost:${port}`)
})