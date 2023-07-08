const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const router = express.Router()

// Conecta ao banco
mongoose.connect("mongodb://mali:mali1284@localhost:27017/admin")

// Carregar modelos
const Product = require("./models/product")
const Costumer = require("./models/customer")

// Carregar as rotas
const indexRoute = require("./routes/index-route")
const productRoute = require("./routes/product-route")

/* tratativa de response da requisição */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", indexRoute)
app.use("/products", productRoute)

module.exports = app
