const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //go n@gmail.com 와 같이 띄워진 공백을 무시하고 붙여서 인식해줌
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{      //관리자, 유저 번호 부여  ex)관리자 1, 유저 0
        type: Number,
        default: 0  //기본값 0
    },
    image: String,      //유저이미지
    token:{     //유효성
        type: String
    },
    tokenExp:{      //유효기간
        type: Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}