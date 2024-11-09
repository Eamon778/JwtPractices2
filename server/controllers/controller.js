const Users = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { createAccessToken, createRefreshToken } = require('../config/tokenGenerator')

const getAllData = async (req, res)=>{
    res.status(200).send({msg: "hello World"})
}

const registerUsers = async (req, res)=> {
    const { username, email, password, name } = req.body

    try {
        const existingEmail = await Users.findOne({ email })
        const existingUsername = await Users.findOne({ username })
        if (existingEmail){
            res.status(400).json({message: "User with this email already exists"})
        }

        if (existingUsername){
            res.status(400).json({message: "User with this username already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({username, email, password: hashedPassword, name})

        const accessToken = createAccessToken(newUser)
        const refreshToken = createRefreshToken(newUser)
        newUser.refreshToken =  refreshToken;

        await newUser.save()

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        })

        const { password: _, refreshToken: __, ...userData} = newUser.toObject()
        res.status(201).json({message: 'User registerd successfully', user: userData})

    } catch (error){
        console.log(error.message);
        res.status(500).json({message: 'Internal Server Error'})
    }
}


module.exports = { getAllData, registerUsers }