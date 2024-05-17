const express = require('express')
const mongoose = require('mongoose')
const DStvGOtvSubscription = require('../models/dstv_gotv_subModel')

const app = express()

app.use(express.json())

//app.use(body_parser.json())

app.get('/api/', (req, res) => {
    res.send("Hello World")
})

app.post(
    '/api/package', async(req, res) => {
       try {
        const dstvgotvSubscription = await DStvGOtvSubscription.create(req.body)
        res.status(200).json(dstvgotvSubscription)
    }catch(error){
        res.status(500).json({ message: message.error})
    }
    }
)

const dbUrl = 'mongodb+srv://ochigbodaniel240:<Capricorn1@>@learning.bh4e9nt.mongodb.net/?retryWrites=true&w=majority&appName=Learning'

mongoose.connect( dbUrl)
.then(
    console.log('connected to mongodb'),
    app.listen(3000, (() => {
        console.log('Server is runing on port 3000')
    }))
).catch((error) => {
    console.log('error')
})