'use strict'

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')

require('dotenv').config()
require('app-module-path').addPath(__dirname)
require('providers')['DatabaseProvider']

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'static')))
app.use(passport.initialize())
app.use(require('providers')['RouteProvider'])

module.exports = app
