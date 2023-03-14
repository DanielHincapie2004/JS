const express = require('express')
const routes = require('./router/routes')
const cors = require('cors')
const App = express()


App.use(cors())
App.use(express.json())
App.use(routes)

module.exports = App;