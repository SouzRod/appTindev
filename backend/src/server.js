const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const routes = require('./routes');
require('dotenv').config()

const server = express()

mongoose.connect(`mongodb+srv://omnistack:${process.env.MONGODB_PASSWORD}@cluster0-rp16a.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)