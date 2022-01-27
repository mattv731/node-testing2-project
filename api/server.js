const express = require("express")

const superRouter = require('./superheros/superheros-router')

const server = express()

server.use(express.json())

server.use('/api/superheros', superRouter)

module.exports = server