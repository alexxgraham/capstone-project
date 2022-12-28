const router = require('express').Router()
const { check,validationResult } = require('express-validator')
const { users } = require('../userbase/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/',(_req, res) => {
    res.send('Server .auth  Running')
})

router.get('/all',(req, res) => {
    res.json(users)
})

router.post('/signup',[
    check('email', 'Please provide a valid email address').isEmail(),
    check('username', 'Please provide a longer username').isLength({min: 3}),
    check('name', 'Please provide a longer name').isLength({min: 3}),
    check('password', 'Your password must contain a minimum of 5 characters').isLength({min: 6}),
], async (req, res) => {
    const { email,username,name,password } = req.body
    //  Validated Input
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    //  Validate if user doesn't already exist
    const user = users.find((user) => {
        return user.email === email
    })

    const userkey = users.find((user) => {
        return user.username === username
    })

    if(user) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "That user already exists"
                }
            ]
        })
    }

    if(userkey) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "That user already exists"
                }
            ]
        })
    }

    //  Hash user's password
    const hashedPassword = await bcrypt.hash(password, 10)
    users.push({
        email: email,
        username: username,
        name: name,
        password: hashedPassword
    })

    const token = await jwt.sign({
        username
    }, process.env.TOKEN, {
        expiresIn: 86400
    })

    res.json({
        token
    })
})

router.post('/login', async (req, res) => {
    const { username,password } = req.body

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    //  Validate if user exists

    const user = users.find((user) => {
        return user.username === username
    })

    if(!user) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Invalid Credentials"
                }
            ]
        })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Invalid Credentials"
                }
            ]
        })
    }

    const token = await jwt.sign({
        username
    }, process.env.TOKEN, {
        expiresIn: 86400
    })

    res.json({
        token
    })
})

module.exports = router