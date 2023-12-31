const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const config = require("./config")
const app = express()
const router = express.Router()

// Conecta ao banco
mongoose.connect(config.connectionString)

// Carregar modelos
const Product = require("./models/product")
const Costumer = require("./models/costumer")
const Order = require("./models/order")

// Carregar as rotas
const indexRoute = require("./routes/index-route")
const productRoute = require("./routes/product-route")
const costumerRoute = require("./routes/costumer-route")
const orderRoute = require("./routes/order-route")

/* tratativa de response da requisição */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", indexRoute)
app.use("/products", productRoute)
app.use("/costumers", costumerRoute)
app.use("/orders", orderRoute)

module.exports = app
