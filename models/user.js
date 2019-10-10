const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum:['f', 'm'],
        required: true
    },
    level:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', UserSchema);