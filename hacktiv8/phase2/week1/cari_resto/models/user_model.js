const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  username : {
    type: String,
    required: true,
    unique: true
  },
  password : {
    type: String
    // required: true
  },
  location : {
    type: String,
    required: true
  },
  role : {
    type: String,
    required: true
  },
  token : String,
  tokenSecret : String,
  profile : Object
})

let User = mongoose.model('Users', userSchema)

module.exports = User
