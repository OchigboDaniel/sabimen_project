const express = require('express')
const mongoose = require('mongoose')
const DStvGOtvSubscription = require('../models/dstv_gotv_subModel')

const app = express()

app.use(express.json())

app.get('/api/', (req, res) => {
    res.send("Hello World")
})

app.post(
    '/api/package', async(req, res) => {
       res.send("post request")
    }
)

mongoose.connect('mongodb://localhost:27017/DSTVGOTVSubscription')
.then(
    console.log('connected to mongodb'),
    app.listen(3000, (() => {
        console.log('Server is runing on port 3000')
    }))
).catch((error) => {
    console.log('error')
})