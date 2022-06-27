require('dotenv-safe').config();
const express = require("express")
const cors = require("cors")
const mongoose = require('./database/mongooseConnect')
const blogRoutes = require("./routes/blogRoutes")
const colaboradorasRoutes = require("./routes/colaboradorasRoutes")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(blogRoutes)
app.use(colaboradorasRoutes)

module.exports = app