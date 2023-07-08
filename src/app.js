const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const router = express.Router()

// Conecta ao banco
mongoose.connect("mongodb://mali:mali1284@localhost:27017/admin")

// Carregar modelos
const Product = require("./models/product")
const Costumer = require("./models/costumer")
const Order = require("./models/order")

// Carregar as rotas
const indexRoute = require("./routes/index-route")
const productRoute = require("./routes/product-route")
const costumerRoute = require("./routes/costumer-route")

/* tratativa de response da requisição */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", indexRoute)
app.use("/products", productRoute)
app.use("/costumers", costumerRoute)

module.exports = app
