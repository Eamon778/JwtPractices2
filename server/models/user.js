const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true
    }, 
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        default: 'user'
    },
    refreshToken: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Users', UserSchema)